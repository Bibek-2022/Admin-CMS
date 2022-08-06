import ProductSchema from "./ProductSchema.js";

export const insertProduct = (obj) => {
  return ProductSchema(obj).save();
};

// get Product
export const getProducts = (filter) => {
  return ProductSchema.findOne(filter);
};

// get all  Product
export const getMultipleProducts = (filter) => {
  return ProductSchema.find(filter);
};

// update by ID

export const updateProductById = (_id, updatedObj) => {
  return ProductSchema.findByIdAndUpdate(_id, updatedObj, { new: true });
};

export const updateProduct = (filter, updatedObj) => {
  return ProductSchema.findOneAndUpdate(filter, updatedObj, { new: true });
};

// delete
export const deleteProduct = (filter) => {
  return ProductSchema.findOneAndDelete(filter);
};

// delete
export const deleteMultipleProduct = (ids) => {
  return ProductSchema.deleteMany({
    _id: { $in: ids },
  });
};
