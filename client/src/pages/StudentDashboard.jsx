import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve userId from localStorage inside the useEffect
    const userId = localStorage.getItem('userId');
    if (!userId) {
      // Handle the case when the user is not logged in
      console.error('User ID not found in localStorage');
      setError('User ID not found. Please login again.');
      setLoading(false);
      return;
    }

    const fetchStudentData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/students/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token in header for authentication
          }
        });
        setStudentData(res.data); // Set the fetched data in state
        console.log(res.data);  // Check the returned data
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err.message); // Set error message if request fails
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);  // The effect should run only once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!studentData) return <div>No student data found</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Student Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl mb-4">Student Information</h3>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Department:</strong> {studentData.department}</p>
        <p><strong>Roll Number:</strong> {studentData.rollNumber}</p>

        <h3 className="text-2xl mt-6 mb-4">Courses</h3>
        <ul>
          {studentData.courses && studentData.courses.length > 0 ? (
            studentData.courses.map(course => (
              <li key={course.courseId} className="mb-2">
                <p>{course.name} - Credits: {course.credits}</p>
              </li>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </ul>

        <h3 className="text-2xl mt-6 mb-4">Grades</h3>
        <ul>
          {studentData.grades && studentData.grades.length > 0 ? (
            studentData.grades.map(grade => (
              <li key={grade.courseId} className="mb-2">
                <p>{grade.courseName}: {grade.grade}</p>
              </li>
            ))
          ) : (
            <p>No grades available.</p>
          )}
        </ul>

        <h3 className="text-2xl mt-6 mb-4">Attendance</h3>
        <ul>
          {studentData.attendance && studentData.attendance.length > 0 ? (
            studentData.attendance.map((attendance, index) => (
              <li key={index} className="mb-2">
                <p>{attendance.date}: {attendance.status}</p>
              </li>
            ))
          ) : (
            <p>No attendance records available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
