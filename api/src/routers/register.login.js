import express from "express";
import { adminRegisterValidation } from "../middlewares/validationMiddleware.js";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { createNewAdmin } from "../modules/AdminUser.model.js";

const route = express.Router();

// route.all("/", (req, res, next)=>{

//     console.log("All the request of the spi will go throug")
// })

route.post("/", adminRegisterValidation, async (req, res, next) => {
  console.log(req.body);

  try {
    // 1. encrypt password
    req.body.password = hashPassword(req.body.password);
    //2. call model to run save query

    const result = await createNewAdmin(req.body);

    //3. unique url endpoint and sent that to customer

    res.json({
      status: "success",
      message: "We have created a new admin",
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
