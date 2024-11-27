import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userName, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="text-2xl font-bold text-blue-600">
          E-Shop
        </Link>

        {/* Menu Button for Mobile */}
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <Link
            to="/home"
            className="block mt-2 lg:mt-0 text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block mt-2 lg:mt-0 text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block mt-2 lg:mt-0 text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block mt-2 lg:mt-0 text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Cart and Login/Logout */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7m1.6 6h10M16 16a2 2 0 104 0 2 2 0 00-4 0zm-9 0a2 2 0 104 0 2 2 0 00-4 0z"
              />
            </svg>
            <span className="ml-1">Cart</span>
          </Link>
          {userName ? (
            <>
              <span className="text-gray-700 font-medium">
                Welcome, {userName}!
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Dropdown for Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100">
          <Link
            to="/cart"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
