import express from "express";
const route = express.Router();

// create new product

route.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "good your product is done and dusted",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
