import Result from "../models/Result.js";

// ✅ Create Result
export const createResult = async (req, res) => {
  try {
    const { student, exam, marksObtained, grade } = req.body;
    const result = await Result.create({ student, exam, marksObtained, grade });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get all Results
export const getResults = async (req, res) => {
  try {
    const results = await Result.find().populate("student exam");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Result by ID
export const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id).populate("student exam");
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Result
export const updateResult = async (req, res) => {
  try {
    const { marksObtained, grade } = req.body;
    const result = await Result.findByIdAndUpdate(
      req.params.id,
      { marksObtained, grade },
      { new: true }
    );
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Result
export const deleteResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
