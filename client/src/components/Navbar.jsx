// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">College Management</Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>

        <div>
          <Link to="/login" className="text-lg ml-4 hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
