import express from "express";
import { adminRegisterValidation } from "../middlewares/validationMiddleware.js";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { createNewAdmin } from "../modules/AdminUser.model.js";
import { v4 as uuidv4 } from "uuid";

const route = express.Router();

// route.all("/", (req, res, next)=>{

//     console.log("All the request of the spi will go throug")
// })

route.post("/", adminRegisterValidation, async (req, res, next) => {
  console.log(req.body);

  try {
    // 1. encrypt password
    req.body.password = hashPassword(req.body.password);

    const verificationCode = uuidv4();
    req.body.verificationCode = verificationCode;
    //2. call model to run save query

    const result = await createNewAdmin(req.body);

    //3. unique url endpoint and sent that to customer
    if (result?._id) {
      console.log(result);
      return res.json({
        status: "success",
        message: "We have sent you verification",
      });
    }
    res.json({
      status: "success",
      message: "Unable to create User",
    });
  } catch (error) {
    if (error.message.includes("E11000")) {
      error.status = 200;
      error.message = "Email already exists";
    }
    next(error);
  }
});

export default route;
