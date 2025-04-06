const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add a new student
router.post('/students', async (req, res) => {
  const { name, studentId, email, password } = req.body;
  try {
    const newStudent = new Student({ name, studentId, email, password });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ message: 'Error adding student', error: err });
  }
});

module.exports = router;
