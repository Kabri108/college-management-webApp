import FeePayment from "../models/FeePayment.js";

// Process Payment
export const processPayment = async (req, res) => {
  try {
    const { student, amount, transactionId } = req.body;
    const payment = await FeePayment.create({ student, amount, transactionId, status: "Completed" });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
