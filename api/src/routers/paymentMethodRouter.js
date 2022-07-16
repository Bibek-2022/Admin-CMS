import express from "express";
import {
  paymentMethodValidation,
  updatePaymentMethodValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createPaymentMethod,
  deletePaymentMethodById,
  getPaymentMethod,
  updatePaymentMethodByID,
} from "../models/paymentMethod/PaymentMethodModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await getPaymentMethod();

    res.json({
      status: "success",
      message: "List of Payment Method",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", paymentMethodValidation, async (req, res, next) => {
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

router.put("/", updatePaymentMethodValidation, async (req, res, next) => {
  try {
    const result = await updatePaymentMethodByID(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Payment method updated",
        })
      : res.json({
          status: "error",
          message: "Unable to update the payment method",
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = await deletePaymentMethodById(_id);
    result?._id
      ? res.json({
          status: "success",
          message: "Payment method has been deleted",
        })
      : res.json({
          status: "error",
          message: "Payment Method can not be deleted",
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
