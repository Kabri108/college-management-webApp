import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  semester: { type: String, required: true },
  grade: { type: String, enum: ["A", "B", "C", "D", "F", "Pending"], default: "Pending" },
});

export default mongoose.model("Enrollment", EnrollmentSchema);
