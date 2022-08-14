// ==================review

import ReviewSchema from "./ReviewSchema.js";

export const getReview = () => {
  return ReviewSchema.find();
};

export const postReview = (obj) => {
  return ReviewSchema.save(obj);
};
