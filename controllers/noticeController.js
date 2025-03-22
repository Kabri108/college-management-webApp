import Notice from "../models/Notice.js";

// Create Notice
export const createNotice = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const notice = await Notice.create({ title, description, date });
    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Notices
export const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
