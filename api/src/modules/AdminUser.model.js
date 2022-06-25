import AdminUserSchema from "./AdminUser.schema.js";

export const createNewAdmin = (obj) => {
  return AdminUserSchema(obj).save();
};

// export const addVerificationCodeByUserId = (_id, verificationCode) => {
//   return AdminUserSchema.findByIdAndUpdate(_id, { verificationCode });
// };
