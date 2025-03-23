import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Student", "Faculty", "Admin"], required: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  address: { type: String },
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }, // Faculty & Student
});

export default mongoose.model("User", UserSchema);
