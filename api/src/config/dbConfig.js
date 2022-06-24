import mongoose from "mongoose";

export const createConnection = () => {
  const connectStr = process.env.MONGO_URL;
  try {
    const result = mongoose.connect(connectStr);
    console.log("Connected to Database");
    return result;
  } catch (error) {
    console.log(error);
  }
};
