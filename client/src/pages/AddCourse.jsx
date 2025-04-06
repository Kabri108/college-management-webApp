import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    courseId: '',
    credits: ''
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/courses', courseData);
      alert('Course added successfully!');
    } catch (err) {
      console.error('Error adding course:', err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block">Course Name</label>
          <input 
            type="text" 
            name="name" 
            value={courseData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Course ID</label>
          <input 
            type="text" 
            name="courseId" 
            value={courseData.courseId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Credits</label>
          <input 
            type="number" 
            name="credits" 
            value={courseData.credits}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
