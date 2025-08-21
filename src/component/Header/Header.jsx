import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">

        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Super Prime
        </h1>

        {/* Navigation Menu */}
        <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-500">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;