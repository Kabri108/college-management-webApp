// controllers/feedbackController.js
import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  const { message } = req.body;
  try {
    const feedback = await Feedback.create({
      user: req.user._id,
      message,
    });
    res.status(201).json({ message: "Feedback submitted", feedback });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error: error.message });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("user", "name role");
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error: error.message });
  }
};
