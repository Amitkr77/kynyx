import React, { useState } from "react";

const Career = () => {
  const [position, setPosition] = useState("");

  const isDeveloperRole = position.toLowerCase().includes("developer");
  const isMarketingRole = position.toLowerCase().includes("marketing");
  const isDesignerRole = position.toLowerCase().includes("designer");

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex items-center justify-center px-4 py-10">
      <div className="bg-[#1a1a2e] rounded-2xl shadow-lg w-full max-w-4xl mx-auto p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Join Our Team</h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 625 123 4567"
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Position Applied For <span className="text-red-500">*</span>
            </label>
            <select
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            >
              <option value="">-- Select Position --</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>Digital Marketing Executive</option>
              <option>Project Manager</option>
              <option>Other</option>
            </select>
          </div>

          {/* GitHub Profile */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              GitHub Profile {isDeveloperRole && <span className="text-red-500">*</span>}
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/your-profile"
              required={isDeveloperRole}
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            />
          </div>

          {/* LinkedIn */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
             LinkedIn Profile {isMarketingRole && <span className="text-red-500">*</span>}
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/your-profile"
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            />
          </div>

          {/* Portfolio */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
                Portfolio Website {isDesignerRole && <span className="text-red-500">*</span>}
            </label>
            <input
              type="url"
              name="portfolio"
              placeholder="https://yourportfolio.com"
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            />
          </div>

          {/* How did you hear about us? */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            <select
              name="referral"
              required
              className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 rounded-lg text-sm sm:text-base"
            >
              <option value="">-- Select an Option --</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>Friend/Colleague</option>
              <option>Job Portal</option>
              <option>Company Website</option>
              <option>Other</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white bg-[#2a2a3d] border border-gray-600 rounded-lg text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all text-white py-2 rounded-lg font-semibold text-sm sm:text-base"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
