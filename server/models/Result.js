// models/Result.js
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    exam: {
      type: String,
      required: true, // e.g., "Mid Term", "Final"
    },
    marksObtained: {
      type: Number,
      required: true,
    },
    totalMarks: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

resultSchema.index({ student: 1, subject: 1, exam: 1 }, { unique: true });

export default mongoose.model("Result", resultSchema);
