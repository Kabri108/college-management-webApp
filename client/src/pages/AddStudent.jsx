import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    studentId: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/students', studentData);
      alert('Student added successfully!');
    } catch (err) {
      console.error('Error adding student:', err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block">Name</label>
          <input 
            type="text" 
            name="name" 
            value={studentData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Student ID</label>
          <input 
            type="text" 
            name="studentId" 
            value={studentData.studentId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input 
            type="email" 
            name="email" 
            value={studentData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Password</label>
          <input 
            type="password" 
            name="password" 
            value={studentData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
