// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const userRole = localStorage.getItem('role'); // Get the logged-in user's role from localStorage or context
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our College Management System</h1>
          <p className="text-lg text-gray-600 mb-6">
            This platform provides an easy way for students and administrators to manage their profiles, courses, and more.
          </p>

          {/* If user is not logged in, show login and register options */}
          {!userRole ? (
            <div className="flex justify-center space-x-4">
              <Link
                to="/login"
                className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-xl"
              >
                Login to Get Started
              </Link>
              <Link
                to="/register"
                className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-xl"
              >
                Register Now
              </Link>
            </div>
          ) : (
            // If user is logged in, show dashboard links based on their role
            <div className="mt-8">
              {userRole === 'student' ? (
                <Link
                  to="/student/dashboard"
                  className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-xl"
                >
                  Go to Student Dashboard
                </Link>
              ) : userRole === 'admin' ? (
                <Link
                  to="/admin/dashboard"
                  className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-xl"
                >
                  Go to Admin Dashboard
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">For Students</h2>
            <p className="text-gray-600 mb-4">
              Manage your profile, view courses, and track academic progress.
            </p>
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">For Admins</h2>
            <p className="text-gray-600 mb-4">
              Manage students, courses, and oversee college operations.
            </p>
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              Learn more about our college, courses, and programs.
            </p>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
