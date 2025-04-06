// controllers/noticeController.js
import Notice from "../models/Notice.js";

// Create a notice
export const createNotice = async (req, res) => {
  const { title, message, forRole } = req.body;

  try {
    const notice = await Notice.create({
      title,
      message,
      forRole,
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "Notice created", notice });
  } catch (error) {
    res.status(500).json({ message: "Error creating notice", error: error.message });
  }
};

// Get all notices (filtered by role if provided)
export const getNotices = async (req, res) => {
  const userRole = req.user.role;

  try {
    const notices = await Notice.find({
      $or: [{ forRole: userRole }, { forRole: "all" }],
    })
      .populate("createdBy", "name role")
      .sort({ createdAt: -1 });

    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notices", error: error.message });
  }
};
