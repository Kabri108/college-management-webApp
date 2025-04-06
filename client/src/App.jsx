// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebaar';

const App = () => {
  return (
    <Router>np
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-800 text-white p-4">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
