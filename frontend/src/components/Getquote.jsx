import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🆕

const BookConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.service) newErrors.service = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
    onClose(); // Optional: close after submit
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex justify-center items-start md:items-center overflow-auto px-4 py-8">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // 🆕
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#1e293b] text-white p-6 rounded-xl shadow-2xl border border-gray-700 mt-20 md:mt-0"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-pink-400"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center">
            Get a Quote
          </h2>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }} // 🆕
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 text-green-400 text-center font-medium"
            >
              Thank you! We'll contact you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
                />
                {errors.country && (
                  <p className="text-red-400 text-sm">{errors.country}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full outline-none"
                />
                {errors.city && <p className="text-red-400 text-sm">{errors.city}</p>}
              </div>


              <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none"
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
              {errors.service && (
                <p className="text-red-400 text-sm">{errors.service}</p>
              )}
            </div>
            </div>

            

            <textarea
              name="message"
              placeholder="Describe your requirement (optional)"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-3 rounded w-full resize-y min-h-[100px] outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }} // 🆕
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded w-full font-semibold transition"
            >
              Book now
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BookConsultationForm;