import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const [results, setResults] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [performance, setPerformance] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultRes = await axios.get('/api/marks/myresults');
        const attendanceRes = await axios.get('/api/attendance/myattendance');
        const performanceRes = await axios.get('/api/performance/myperformance');
        
        setResults(resultRes.data);
        setAttendance(attendanceRes.data);
        setPerformance(performanceRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    
    fetchData();
  }, []);

  const getChartData = () => {
    const labels = results.map(result => result.subject.name);
    const data = results.map(result => result.marks);

    return {
      labels,
      datasets: [
        {
          label: 'Marks Obtained',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Student Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Results</h3>
        <Bar data={getChartData()} options={{ responsive: true }} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Attendance</h3>
        <p className="text-lg">Total Classes: {attendance.total}</p>
        <p className="text-lg">Attendance Percentage: {attendance.percentage}%</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Performance</h3>
        <p className="text-lg">Grade: {performance.grade}</p>
        <p className="text-lg">Percentage: {performance.percentage}%</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
