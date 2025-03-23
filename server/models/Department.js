import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  head: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Faculty as head
});

export default mongoose.model("Department", DepartmentSchema);
