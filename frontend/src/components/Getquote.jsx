import React, { useState } from "react";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    services: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;

    if (name === "services") {
      const selectedValues = Array.from(selectedOptions, (option) => option.value);
      setFormData((prev) => ({
        ...prev,
        services: selectedValues,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
      services: [],
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-[#1e293b] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book a Free Consultation
        </h2>

        {submitted && (
          <div className="mb-4 text-green-400 text-center font-medium">
            Thank you! We'll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
              required
            />
          </div>

          {/* Phone & Date */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
              required
            />
          </div>

          {/* Time */}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
            required
          />
         <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="Country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
              required
            />
          </div>

          {/* Services Section (Dropdown) */}
           <div>
            <label
              htmlFor="service"
              className="text-xl font-semibold mb-2 block"
            >
              Select Service
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none"
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="seo">SEO</option>
              <option value="content">Content Marketing</option>
              <option value="marketing">Digital Marketing</option>
              <option value="web">Custom Web Development</option>
              <option value="app">Mobile App Development</option>
              <option value="ui">UI/UX Design & Branding</option>
              <option value="all">All Services</option>
            </select>
          </div>


          {/* Message */}
          <textarea
            name="message"
            placeholder="Describe your requirement (optional)"
            value={formData.message}
            onChange={handleChange}
            className="bg-[#ffe3d9] text-black px-4 py-3 rounded w-full resize-y min-h-[100px] outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded w-full font-semibold transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookConsultation;
