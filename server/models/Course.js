import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, unique: true, required: true },
  description: { type: String },
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Assigned faculty
  credits: { type: Number, required: true },
});

export default mongoose.model("Course", CourseSchema);
