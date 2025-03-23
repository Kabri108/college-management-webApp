import Course from "../models/Course.js";

// Create Course
export const createCourse = async (req, res) => {
  try {
    const { title, code, description, department, faculty, credits } = req.body;
    const course = await Course.create({ title, code, description, department, faculty, credits });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("department faculty");
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
