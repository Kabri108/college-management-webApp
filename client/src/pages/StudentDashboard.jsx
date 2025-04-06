import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentDashboard = async () => {
      try {
        const res = await axios.get('/api/students/dashboard');
        setStudentData(res.data);
      } catch (err) {
        console.error('Error fetching student data:', err);
      }
    };

    fetchStudentDashboard();
  }, []);

  if (!studentData) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Student Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl mb-4">Courses</h3>
        <ul>
          {studentData.courses.map(course => (
            <li key={course.courseId} className="mb-2">
              <p>{course.name} - Credits: {course.credits}</p>
            </li>
          ))}
        </ul>
        <h3 className="text-2xl mt-6 mb-4">Grades</h3>
        <ul>
          {studentData.grades.map(grade => (
            <li key={grade.courseId} className="mb-2">
              <p>{grade.courseName}: {grade.grade}</p>
            </li>
          ))}
        </ul>
        <h3 className="text-2xl mt-6 mb-4">Attendance</h3>
        <ul>
          {studentData.attendance.map((attendance, index) => (
            <li key={index} className="mb-2">
              <p>{attendance.date}: {attendance.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
