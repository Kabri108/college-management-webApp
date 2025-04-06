import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCourseManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/api/admin/courses');
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/courses/${id}`);
      setCourses(courses.filter(course => course._id !== id));
    } catch (err) {
      console.error('Error deleting course:', err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Course Management</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-6 text-left">Course Name</th>
            <th className="py-3 px-6 text-left">Credits</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id} className="border-b">
              <td className="py-3 px-6">{course.name}</td>
              <td className="py-3 px-6">{course.credits}</td>
              <td className="py-3 px-6">
                <button 
                  onClick={() => handleDelete(course._id)} 
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourseManagement;
