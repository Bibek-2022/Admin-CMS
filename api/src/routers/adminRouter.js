import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import { profileUpdateNotification } from "../helpers/emailHelper.js";
import { signAccessJWT, verifyRefreshJWT } from "../helpers/jwtHelper.js";
import { adminAuth } from "../middlewares/authMiddleware.js";
import {
  updateAdminProfileValidation,
  updatePasswordValidation,
} from "../middlewares/validationMiddleware.js";
import { getOneAdmin, updateAdmin } from "../models/adminUser/AdminModel.js";

const router = express.Router();

// get admin info TODO
router.get("/", adminAuth, (req, res, next) => {
  try {
    const user = req.adminInfo;
    user.password = undefined;
    user.accessJWT = undefined;
    res.json({
      status: "success",
      message: "todo get method",
      user,
    });
  } catch (error) {
    next(error);
  }
});

// update info
router.put(
  "/",
  adminAuth,
  updateAdminProfileValidation,
  async (req, res, next) => {
    try {
      const { currentPassword, password, email, ...rest } = req.body;
      // check if user exist
      const user = await getOneAdmin({ email });
      // if so check the password sorted in the db matches the password sent
      if (user?._id) {
        const isMatched = comparePassword(currentPassword, user.password);

        // encrypt the new passwod
        if (isMatched) {
          // update the password in the db
          const filter = { _id: user._id };

          const updatedAdmin = await updateAdmin(filter, rest);

          if (updatedAdmin?._id) {
            res.json({
              status: "success",
              message: "User Information has been updated",
              user,
            });
            // email notification
            profileUpdateNotification(user);
            return;
          }
        }
      }
      res.json({
        status: "error",
        message: "Couldn't update the user profile",
      });
    } catch (error) {
      next(error);
    }
  }
);

// update admin password as logged in
router.patch(
  "/",
  adminAuth,
  updatePasswordValidation,
  async (req, res, next) => {
    try {
      const { currentPassword, password, email } = req.body;
      // check if user exist
      const user = await getOneAdmin({ email });
      // if so check the password sorted in the db matches the password sent
      if (user?._id) {
        const isMatched = comparePassword(currentPassword, user.password);

        // encrypt the new passwod
        if (isMatched) {
          const hashPass = hashPassword(password);

          // update the password in the db
          const filter = { _id: user._id };
          const obj = {
            password: hashPass,
          };
          const updatedAdmin = await updateAdmin(filter, obj);

          if (updatedAdmin?._id) {
            res.json({
              status: "success",
              message: "Password has been updated",
              user,
            });
            // email notification
            profileUpdateNotification(user);
            return;
          }
        }
      }

      res.json({
        status: "error",
        message: "Password has not been updated",
      });
    } catch (error) {
      next(error);
    }
  }
);

//return new accessJWT based on the accessJWT given
router.get("/accessjwt", async (req, res, next) => {
  try {
    //receive authorization token, refreshJWT
    const { authorization } = req.headers;
    if (authorization) {
      const decoded = await verifyRefreshJWT(authorization);

      if (decoded?.email) {
        const user = await getOneAdmin({
          email: decoded.email,
          refreshJWT: authorization,
        });

        if (user?._id) {
          const accessJWT = await signAccessJWT({ email: decoded.email });
          return res.json({
            status: "success",
            accessJWT,
          });
        }
      }
    }

    res.status(401).json({
      status: "error",
      message: "unauthorized",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
