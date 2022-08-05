import SessionSchema from "./SessionSchema.js";

// create
export const insertSession = (obj) => {
  return SessionSchema(obj).save();
};

// read @filter must be an object
export const getSession = (filter) => {
  return SessionSchema.findOne(filter);
};
// delete
export const deleteSession = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
