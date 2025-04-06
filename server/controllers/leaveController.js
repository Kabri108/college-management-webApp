// controllers/leaveController.js
import Leave from "../models/Leave.js";

export const applyLeave = async (req, res) => {
  const { reason, fromDate, toDate } = req.body;
  try {
    const leave = await Leave.create({
      applicant: req.user._id,
      reason,
      fromDate,
      toDate,
    });
    res.status(201).json({ message: "Leave applied", leave });
  } catch (error) {
    res.status(500).json({ message: "Failed to apply leave", error: error.message });
  }
};

export const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("applicant", "name role");
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaves", error: error.message });
  }
};

export const updateLeaveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const leave = await Leave.findById(id);
    if (!leave) return res.status(404).json({ message: "Leave not found" });

    leave.status = status;
    await leave.save();

    res.json({ message: "Leave status updated", leave });
  } catch (error) {
    res.status(500).json({ message: "Error updating leave", error: error.message });
  }
};
