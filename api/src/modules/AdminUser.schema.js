import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },

    role: {
      type: String,
      default: "Admin",
    },

    fName: {
      type: String,
      required: true,
      maxlength: 50,
    },

    lName: {
      type: String,
      required: true,
      maxlength: 50,
    },

    phone: {
      type: String,
      required: true,
      maxlength: 50,
    },

    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxlength: 50,
    },

    password: {
      type: String,
      required: true,
      maxlength: 100,
    },

    Dob: {
      type: Date,
      default: null,
    },
    address: {
      type: String,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admin_user", AdminSchema);
