import express, { Router } from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  adminRegistrationValidation,
  loginValidation,
} from "../middlewares/validationMiddleware.js";
import {
  addVerificationCodeByUserId,
  createNewAdmin,
  getOneAdmin,
  updateAdmin,
} from "../models/adminUser/AdminModel.js";
import { v4 as uuidv4 } from "uuid";
import { sendAdminUserVerificationMail } from "../helpers/emailHelper.js";
import router from "./adminRouter.js";
import { randomNumberGenerator } from "../utils/randomGenerator.js";
const route = express.Router();

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const verification = uuidv4();
    req.body.verificationCode = verification;

    const result = await createNewAdmin(req.body);
    console.log(result);

    if (result?._id) {
      console.log(result);
      sendAdminUserVerificationMail(result);
      return res.json({
        status: "success",
        message: "We have sent you verification",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create user",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exist";
    }
    next(error);
  }

  //   encrypt password
  // call model to run save query
  // unique url endpoint and sent that to customer
});

route.patch("/", async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;
    if (email && verificationCode) {
      const filter = { email, verificationCode };
      const obj = {
        status: "active",
        verificationCode: "",
      };

      const result = await updateAdmin(filter, obj);

      if (result?._id) {
        return res.json({
          status: "success",
          message: "You account has been activate, you can sign in.",
        });
      }
    }

    res.json({
      status: "error",
      message: "Invalid or expired link",
    });

    console.log(req.body);
  } catch (error) {
    next(error);
  }
});

//admin user login
route.post("/login", loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await getOneAdmin({ email });
    console.log(result);
    if (result?._id) {
      // check pw
      const isMatch = comparePassword(password, result.password);
      result.password = undefined;
      if (isMatch) {
        return result.status === "active"
          ? res.json({
              status: "success",
              message: "You are logged in",
              result,
            })
          : res.json({
              status: "error",
              message: "Your account is not active",
            });
      }
    }
    res.json({
      status: "error",
      message: "Invalid email or password",
    });
  } catch (error) {
    next(error);
  }
});

// request OTP for password reset
router.post("/otp-request", async (req, res, next) => {
  try {
    const { email } = req.body;
    if (email.length > 3 && email.length < 50) {
      //  find if user exist

      // generate random 6 digit OTP

      // send OTP to user email

      //  respond to client

      res.json({
        status: "error",
        message:
          "if this email exist in our system, we will send you OTP, Please check your email and follow the instruction",
      });
    }
  } catch (error) {
    next(error);
  }
});

// reset new password

export default route;
