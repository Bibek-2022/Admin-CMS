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
export const updatePaymentMethodByID = ({ _id, ...update }) => {
  return PaymentMethodSchema.findByIdAndUpdate(_id, update, { new: true });
};

// delete
export const deletePaymentMethodById = (_id) => {
  return PaymentMethodSchema.findByIdAndDelete(_id);
};
