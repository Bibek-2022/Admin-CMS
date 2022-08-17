import express from "express";
import slugify from "slugify";
import { newProductValidation } from "../middlewares/validationMiddleware.js";
import {
  deleteProduct,
  getMultipleProducts,
  getProducts,
  insertProduct,
  updateProductById,
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

route.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const products = _id
      ? await getProducts({ _id })
      : await getMultipleProducts();

    res.json({
      status: "success",
      message: "Products list",
      products,
    });
  } catch (error) {
    next(error);
  }
});

route.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const product = await deleteProduct({ _id });

    product?._id
      ? res.json({
          status: "success",
          message: "Product has been deleted successfully.",
        })
      : res.json({
          status: "error",
          message: "Error, Unable to delete the Product please try again later",
        });
  } catch (error) {
    next(error);
  }
});

route.put(
  "/",
  upload.array("newImages", 5),

  async (req, res, next) => {
    try {
      const { _id, ...rest } = req.body;
      const newImages = req.files;

      const newImagePaths = newImages.map((img) => img.path.substr(7));
      const oldImgLinks = rest.images.split(",");
      rest.images = [...newImagePaths, ...oldImgLinks];

      const product = await updateProductById(_id, rest);

      product?._id
        ? res.json({
            status: "success",
            message: "The product has been updated",
          })
        : res.json({
            status: "error",
            message: "Unable to update the prodcut and try agian later",
          });
    } catch (error) {
      next(error);
    }
  }
);
export default route;
