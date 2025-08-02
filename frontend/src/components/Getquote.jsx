import React, { useState } from "react";

const Getquote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", formData);
    alert("Thank you! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white px-6 md:px-20 py-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Request a Quote
        </h1>
        <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
          Tell us about your project and we'll create a customized quote to fit
          your business goals.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#18181f] p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="SEO & Marketing">SEO & Marketing</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Budget</option>
              <option value="Below $1,000">Below $1,000</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="Above $10,000">Above $10,000</option>
            </select>
            <input
              type="text"
              name="timeline"
              placeholder="Timeline (e.g., 4 weeks)"
              value={formData.timeline}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Describe your project goals, requirements, or any specific features..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-500 py-3 text-lg font-semibold text-white rounded-lg hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Get My Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Getquote;
