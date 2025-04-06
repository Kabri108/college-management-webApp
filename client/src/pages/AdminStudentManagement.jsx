import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminStudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('/api/admin/students');
        setStudents(res.data);
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
    } catch (err) {
      console.error('Error deleting student:', err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Student Management</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-6 text-left">Student ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id} className="border-b">
              <td className="py-3 px-6">{student.studentId}</td>
              <td className="py-3 px-6">{student.name}</td>
              <td className="py-3 px-6">{student.email}</td>
              <td className="py-3 px-6">
                <button 
                  onClick={() => handleDelete(student._id)} 
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

export default AdminStudentManagement;
