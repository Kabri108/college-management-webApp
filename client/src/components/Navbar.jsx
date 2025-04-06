import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">MERN College</Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
