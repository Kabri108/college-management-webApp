// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="space-y-6 h-screen">
      <Link to="/student/dashboard" className="block text-lg text-white hover:bg-gray-700 p-2 rounded-md">Student Dashboard</Link>
      <Link to="/admin/dashboard" className="block text-lg text-white hover:bg-gray-700 p-2 rounded-md">Admin Dashboard</Link>
      <Link to="/" className="block text-lg text-white hover:bg-gray-700 p-2 rounded-md">Home</Link>
    </div>
  );
};

export default Sidebar;
