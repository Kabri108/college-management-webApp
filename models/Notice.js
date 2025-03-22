import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Admin or Faculty
  postedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Notice", NoticeSchema);
