import express from "express";
import slugify from "slugify";
import { getReview } from "../models/review/ReviewModal.js";
const route = express.Router();

route.get("/", async (req, res, next) => {
  try {
    const review = await getReview();

    res.json({
      status: "success",
      message: "Review List",
      review,
    });
  } catch (error) {
    next(error);
  }
});
export default route;
