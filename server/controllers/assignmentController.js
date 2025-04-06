// controllers/assignmentController.js
import Assignment from "../models/Assignment.js";

export const uploadAssignment = async (req, res) => {
  const { title, subject, dueDate } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "File is required" });
  }

  try {
    const assignment = await Assignment.create({
      title,
      subject,
      dueDate,
      uploader: req.user._id,
      fileUrl: `/uploads/${req.file.filename}`,
    });

    res.status(201).json({ message: "Assignment uploaded", assignment });
  } catch (error) {
    res.status(500).json({ message: "Error uploading", error: error.message });
  }
};

export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("subject", "name code")
      .populate("uploader", "name email");
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching", error: error.message });
  }
};
