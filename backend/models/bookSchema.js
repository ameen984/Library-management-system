import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    totalCopies: { type: Number, required: true, min: 0 },
    availableCopies: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },

    image: {
      type: String, // Cloudinary URL
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Books", bookSchema);
