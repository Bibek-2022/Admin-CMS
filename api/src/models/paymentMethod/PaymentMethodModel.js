import PaymentMethodSchema from "./PaymentMethodSchema.js";

export const createPaymentMethod = (obj) => {
  return PaymentMethodSchema(obj).save();
};

export const getPaymentMethod = () => {
  return PaymentMethodSchema.find();
};

// find One
export const getSinglePaymentMethod = (filter) => {
  return PaymentMethodSchema.findOne(filter);
};

// find One and Update
export const updatePaymentMethod = (filter, update) => {
  return PaymentMethodSchema.findOneAndUpdate(filter, update, { new: true });
};

// delete
export const deletePaymentMethod = (filter) => {
  return PaymentMethodSchema.findOneAndDelete(filter);
};
