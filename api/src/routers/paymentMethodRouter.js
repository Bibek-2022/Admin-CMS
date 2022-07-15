import express from "express";
import { paymentMethodValidation } from "../middlewares/validationMiddleware.js";
import { createPaymentMethod } from "../models/paymentMethod/PaymentMethodModel.js";

const router = express.Router();

router.get("/", paymentMethodValidation, (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo post method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await createPaymentMethod(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New Payment method added",
        })
      : res.json({
          status: "error",
          message: "Unable to add the payment method",
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo patch method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/:_id", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo delete method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
