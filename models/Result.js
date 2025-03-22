import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  marksObtained: { type: Number, required: true },
  grade: { type: String, enum: ["A", "B", "C", "D", "F"], required: true },
});

export default mongoose.model("Result", ResultSchema);
