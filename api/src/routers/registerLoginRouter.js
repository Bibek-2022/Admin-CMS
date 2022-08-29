import express, { Router } from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  adminRegistrationValidation,
  loginValidation,
  resetPasswordValidation,
} from "../middlewares/validationMiddleware.js";
import {
  addVerificationCodeByUserId,
  createNewAdmin,
  getOneAdmin,
  updateAdmin,
} from "../models/adminUser/AdminModel.js";
import { v4 as uuidv4 } from "uuid";
import {
  emailPasswordResetOTP,
  profileUpdateNotification,
  sendAdminUserVerificationMail,
} from "../helpers/emailHelper.js";
import router from "./adminRouter.js";
import { randomNumberGenerator } from "../utils/randomGenerator.js";
import {
  deleteSession,
  insertSession,
} from "../models/session/SessionModel.js";
import { createJWTs } from "../helpers/jwtHelper.js";
import { adminAuth } from "../middlewares/authMiddleware.js";
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

    if (result?._id) {
      // check if the passowd from databas end the password that client sent matches
      const isMatched = comparePassword(password, result.password);

      result.password = undefined;
      result.refreshJWT = undefined;

      if (isMatched) {
        if (result.status === "active") {
          const tokens = await createJWTs({ email });
          return res.json({
            status: "success",
            message: "Login success",
            result,
            ...tokens,
          });
        } else {
          return res.json({
            status: "error",
            message:
              "Your account is inactive, Please check your email and follow the instruction to very the accout.",
          });
        }
      }
    }

    res.json({
      status: "error",
      message: "Invalid login credientials",
    });
  } catch (error) {
    next(error);
  }
});

// request OTP for password reset
route.post("/otp-request", async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    if (email.length > 3 && email.length < 50) {
      //  find if user exist
      const user = await getOneAdmin({ email });
      if (user?._id) {
        // generate random 6 digit OTP

        const otpLength = 6;
        const otp = randomNumberGenerator(otpLength);

        const obj = {
          token: otp,
          associate: email,
          type: "updatePassword",
        };

        const result = await insertSession(obj);

        if (result?._id) {
          const mailInfo = {
            fName: user.fName,
            email: user.email,
            otp,
          };
          console.log(mailInfo);
          // send OTP to user email
          emailPasswordResetOTP(mailInfo);
        }
      }

      res.json({
        status: "success",
        message:
          "if this email exist in our system, we will send you OTP, Please check your email and follow the instruction",
      });
    }
  } catch (error) {
    next(error);
  }
});

// reset new password
route.patch("/password", resetPasswordValidation, async (req, res, next) => {
  try {
    const { email, otp, password } = req.body;
    const filter = {
      token: otp,
      associate: email,
      type: "updatePassword",
    };
    console.log(filter);
    // first check if the otp and email combination exist in the session table and delete it
    const isDeleted = await deleteSession(filter);
    console.log(isDeleted);
    if (isDeleted?._id) {
      // encrypt password
      // update the password
      const obj = {
        password: hashPassword(password),
      };

      const result = await updateAdmin({ email }, obj);
      console.log(result);
      if (result?._id) {
        // send email notification of the account update
        profileUpdateNotification(result);
        return res.json({
          status: "success",
          message: "your password has been updated. YOu may login now",
        });
      }
    }

    res.json({
      status: "error",
      message: "Unable to reset your password",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
