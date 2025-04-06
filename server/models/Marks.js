// models/Marks.js
import mongoose from "mongoose";

const marksSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    maxMarks: {
      type: Number,
      required: true,
    },
    examDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

marksSchema.index({ student: 1, subject: 1, examDate: 1 }, { unique: true });

export default mongoose.model("Marks", marksSchema);
