import express from "express";
import slugify from "slugify";
import { newProductValidation } from "../middlewares/validationMiddleware.js";
import {
  getMultipleProducts,
  insertProduct,
} from "../models/product/ProductModel.js";
const route = express.Router();

import multer from "multer";

const fileStoragePath = "public/img/products";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    //validation test

    cb(error, fileStoragePath);
  },
  filename: (req, file, cb) => {
    const fullFileName = Date.now() + "-" + file.originalname;
    cb(null, fullFileName);
  },
});

const upload = multer({ storage });
// create new product

route.post(
  "/",
  upload.array("images", 5),
  newProductValidation,
  async (req, res, next) => {
    try {
      //let's handle the post image upload
      const files = req.files;

      console.log(files);
      const images = files.map((img) => img.path.substr(7));

      //create slug
      const slug = slugify(req.body.name, {
        lower: true,
        trim: true,
      });

      req.body.slug = slug;
      const product = await insertProduct({
        ...req.body,
        images,
        thumbnail: images[0],
      });
      product?._id
        ? res.json({
            status: "success",
            message: "New product has been created",
          })
        : res.json({
            status: "error",
            message: "Unable to create new product, try again later",
          });
    } catch (error) {
      if (error.message.includes("E11000 duplicate key error collection")) {
        error.status = 200;
        error.message =
          "Product with the same name already exist, change the product name and try again later";
      }
      next(error);
    }
  }
);

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
