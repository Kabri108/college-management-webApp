import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [student, setStudent] = useState({});

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const res = await axios.get('/api/students/myprofile');
        setStudent(res.data);
      } catch (err) {
        console.error('Error fetching student profile:', err);
      }
    };

    fetchStudentProfile();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Student Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">Name: {student.name}</p>
        <p className="text-lg">Email: {student.email}</p>
        <p className="text-lg">Student ID: {student.studentId}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
