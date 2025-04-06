import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('/api/admin/analytics');
        setAnalytics(response.data);
      } catch (err) {
        console.error('Error fetching analytics:', err);
      }
    };

    fetchAnalytics();
  }, []);

  const getChartData = () => {
    const labels = analytics.subjects || [];
    const data = analytics.averageMarks || [];

    return {
      labels,
      datasets: [
        {
          label: 'Average Marks per Subject',
          data,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Admin Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Class Performance Analytics</h3>
        <Bar data={getChartData()} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default AdminDashboard;
