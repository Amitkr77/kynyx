import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo12.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <header className="bg-black/30 backdrop-blur text-white px-6 lg:px-10 py-1 fixed w-full z-50">
  <div className="flex justify-between items-center relative">
    <Link to="/" className="flex items-center gap-3 z-10">
      <img
        src={logo}
        alt="Kynyx Logo"
        className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300 ease-in-out"
      />
    </Link>
    



        {/* Centered Nav */}
        <nav className="hidden lg:flex flex-1 justify-center gap-8 items-center">
          <nav className="hidden lg:flex flex-1 justify-center gap-8 items-center font-sans">
            <Link
              to="/"
              className="relative text-gray-300 font-medium text-xl transition transform duration-200 hover:scale-110 active:scale-95 hover:text-cyan-300 active:text-pink-400"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="relative text-gray-300 font-medium text-xl transition transform duration-200 hover:scale-110 active:scale-95 hover:text-cyan-300 active:text-pink-400"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="relative text-gray-300 font-medium text-xl transition transform duration-200 hover:scale-110 active:scale-95 hover:text-cyan-300 active:text-pink-400"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="relative text-gray-300 font-medium text-xl transition transform duration-200 hover:scale-110 active:scale-95 hover:text-cyan-300 active:text-pink-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="relative text-gray-300 font-medium text-xl transition transform duration-200 hover:scale-110 active:scale-95 hover:text-cyan-300 active:text-pink-400"
            >
              Contact
            </Link>
          </nav>
        </nav>

        {/* Right-side Button */}
        <div className="hidden lg:block z-10">
          <Link to="/get-quote">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold font-sans transition transform duration-200 hover:scale-110 active:scale-95 hover:text-white-300 active:text-pink-400">
              Get a Quote
            </button>
          </Link>                                                
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className="lg:hidden text-gray-300 focus:outline-none z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
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
            to="/services2"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
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
            Why Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link to="/get-quote" onClick={() => setIsOpen(false)}>
            <button className="w-full text-center py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
