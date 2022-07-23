import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import { profileUpdateNotification } from "../helpers/emailHelper.js";
import { updatePasswordValidation } from "../middlewares/validationMiddleware.js";
import { getOneAdmin, updateAdmin } from "../models/adminUser/AdminModel.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// update info
router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// update admin password as logged in
router.patch("/", updatePasswordValidation, async (req, res, next) => {
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
});

export default router;
