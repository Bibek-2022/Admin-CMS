import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
      unique: true,
    },

    productName: {
      type: String,
      maxlength: 5000,
    },
    rating: {
      type: Number,
      ref: "Category",
    },
    reviewedBy: {
      type: String,

      maxlength: 5000,
    },
    reviewedById: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", ReviewSchema);
