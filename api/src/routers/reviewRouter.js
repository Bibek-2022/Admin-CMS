import express from "express";
import slugify from "slugify";
import { getReview } from "../models/review/ReviewModal.js";
const route = express.Router();

// route.get("/", async (req, res, next) => {
//   try {
//     const review = await getReview();

//     res.json({
//       status: "success",
//       message: "Review List",
//       review,
//     });
//   } catch (error) {
//     next(error);
//   }
// });
// export default route;
// import express from "express";
// const router = express.Router();

const fakeReview = [
  {
    _id: "jsuwuw",
    reviews: "That is awesome",
    productId: "8739",
    productName: "Laptop",
    rating: 5,
    reviewedBy: "Usha",
    reviewedById: "8237929",
  },
  {
    _id: "84893",
    reviews: "That is awesome",
    productId: "8739",
    productName: "Laptop",
    rating: 5,
    reviewedBy: "Usha",
    reviewedById: "8237929",
  },
  {
    _id: "jsuwuw",
    reviews: "That is awesome",
    productId: "8739",
    productName: "Laptop",
    rating: 5,
    reviewedBy: "Usha",
    reviewedById: "8237929",
  },
];
route.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;
    const review = _id
      ? fakeReview.filter((item) => item?._id == _id)
      : fakeReview;

    res.json({
      status: "success",
      message: "the order lists",
      review,
    });
  } catch (error) {
    next(error);
  }
});
export default route;
