import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex items-center justify-center px-4 py-10">
      <div className="bg-[#1a1a2e] rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center bg-[#121221]">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let’s Connect</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Get in touch sit doait deuprdrug cane sepecctnd arpuighan dus noe ined you connier.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-cyan-500/20 p-3 rounded-full">
              <Mail className="text-cyan-300 w-5 h-5" />
            </div>
            <span className="text-gray-300 text-sm sm:text-base">info@kynyx.com</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-full">
              <Phone className="text-cyan-300 w-5 h-5" />
            </div>
            <span className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 bg-[#1a1a2e]">
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#2a2a3d] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="info@kynyx.com"
                className="w-full px-4 py-2 bg-[#2a2a3d] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Service of Interest</label>
              <select
                className="w-full px-4 py-2 bg-[#2a2a3d] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
              >
                <option>Your Test Way</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>SEO & Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-[#2a2a3d] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition-all text-white py-2 rounded-lg font-semibold text-sm sm:text-base"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
