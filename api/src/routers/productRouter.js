import express from "express";
import slugify from "slugify";
import {
  getMultipleProducts,
  insertProduct,
} from "../models/product/ProductModel.js";
const route = express.Router();

// create new product

route.post("/", async (req, res, next) => {
  try {
    req.body.slug = slugify(req.body.name, {
      lower: true,
      trim: true,
    });
    const product = await insertProduct(req.body);
    // create slug
    product?._id
      ? res.json({
          status: "success",
          message: "good your product is done and dusted",
        })
      : res.json({
          status: "error",
          message: "Unable To Create New Product",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      (error.status = 200),
        (error.message =
          "Product with the same name exist, change the product name and try again");
    }
    next(error);
  }
});

route.get("/", async (req, res, next) => {
  try {
    const products = await getMultipleProducts();

    res.json({
      status: "success",
      message: "Product List",
      products,
    });
  } catch (error) {
    next(error);
  }
});
export default route;
