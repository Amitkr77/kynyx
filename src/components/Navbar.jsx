import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo8.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#030303] text-white px-6 lg:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kynyx Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Desktop Nav (only visible on lg and above) */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link
            to="/"
            className="relative text-gray-300 font-medium after:content-[''] after:absolute after:h-0.5 after:bg-cyan-300 after:w-full after:left-0 after:-bottom-1 text-xl"
          >
            Home
          </Link>
          <Link to="/solutions" className="text-gray-300 font-medium text-xl">
            Solutions
          </Link>
          <Link to="/about" className="text-gray-300 font-medium text-xl">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-300 font-medium text-xl">
            Contact
          </Link>
          <Link to="/services2" className="text-gray-300 font-medium text-xl">
            Services
          </Link>
          <Link to="/learn-more">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
              Learn More
            </button>
          </Link>
        </nav>

        {/* Hamburger menu button for mobile */}
        <button
          className="lg:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (visible below lg) */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          <Link
            to="/"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Portfolio"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/services2"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link to="/learn-more" onClick={() => setIsOpen(false)}>
            <button className="w-full text-center py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
              Learn More
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
