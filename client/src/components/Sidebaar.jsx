import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <div className="space-y-4">
        <Link to="/student/dashboard" className="block py-2 px-4 hover:bg-blue-600 rounded">Student Dashboard</Link>
        <Link to="/admin/dashboard" className="block py-2 px-4 hover:bg-blue-600 rounded">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default Sidebar;
