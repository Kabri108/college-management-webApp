import Department from "../models/Department.js";

// Create Department
export const createDepartment = async (req, res) => {
  try {
    const { name, code, description, faculty } = req.body;
    const department = await Department.create({ name, code, description, faculty });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate("faculty");
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id).populate("faculty");
    if (!department) return res.status(404).json({ message: "Department not found" });

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Department
export const updateDepartment = async (req, res) => {
  try {
    const { name, code, description, faculty } = req.body;
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      { name, code, description, faculty },
      { new: true }
    );

    if (!department) return res.status(404).json({ message: "Department not found" });

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Department
export const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) return res.status(404).json({ message: "Department not found" });

    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
