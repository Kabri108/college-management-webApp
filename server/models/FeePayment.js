import mongoose from "mongoose";

const FeePaymentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
  transactionId: { type: String, unique: true },
  paymentDate: { type: Date, default: Date.now },
});

export default mongoose.model("FeePayment", FeePaymentSchema);
