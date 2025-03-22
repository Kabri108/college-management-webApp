import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  examDate: { type: Date, required: true },
  duration: { type: Number, required: true }, 
  maxMarks: { type: Number, required: true },
});

export default mongoose.model("Exam", ExamSchema);
