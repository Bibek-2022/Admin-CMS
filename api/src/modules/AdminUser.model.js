import AdminUserSchema from "./AdminUser.schema.js";

export const createNewAdmin = (obj) => {
  return AdminUserSchema(obj).save();
};
