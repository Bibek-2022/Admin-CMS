import CategorySchema from "./CategorySchema.js";

export const createCategory = (obj) => {
  return CategorySchema(obj).save();
};

export const getCategories = () => {
  return CategorySchema.find();
};

export const getCategoriesByID = (_id) => {
  return CategorySchema.findById(_id);
};

export const updateCategoriesByID = ({ _id, ...obj }) => {
  return CategorySchema.findByIdAndUpdate(_id, obj, { new: true });
};

export const deleteCategoriesByID = (ids) => {
  return CategorySchema.deleteMany({ _id: { $in: ids } });
};
