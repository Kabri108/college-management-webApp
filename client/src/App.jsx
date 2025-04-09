// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebaar';
import RegisterPage from './pages/RegisterPage';
 

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-1/4 bg-gray-800 text-white p-4 fixed lg:relative top-0 left-0 h-full z-10 transition-all`}
          >
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:ml-1/4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
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
