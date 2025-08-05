import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BookConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    company: "",
    website: "",
    services: [],
    otherService: "",
    projectDetails: "",
    launchDate: "",
    budget: "",
    file: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "SEO",
    "Content Marketing",
    "Digital Marketing",
    "Custom Web Development",
    "Mobile App Development",
    "UI/UX Design & Branding",
    "Other",
  ];

  const countryCodes = [
    { name: "India", code: "+91" },
    { name: "USA", code: "+1" },
    { name: "UK", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "Canada", code: "+1" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Singapore", code: "+65" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox" && name === "agree") {
      setFormData((prev) => ({ ...prev, agree: checked }));
    } else if (type === "checkbox" && name === "services") {
      const updatedServices = checked
        ? [...formData.services, value]
        : formData.services.filter((s) => s !== value);
      setFormData((prev) => ({ ...prev, services: updatedServices }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (!formData.phone.match(/^\d{7,15}$/))
      newErrors.phone = "Phone must be 7 to 15 digits";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.services.length) newErrors.services = "Select at least one service";
    if (formData.services.includes("Other") && !formData.otherService)
      newErrors.otherService = "Specify the other service";
    if (!formData.agree) newErrors.agree = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fullPhone = `${formData.countryCode}${formData.phone}`;
    const payload = { ...formData, phone: fullPhone };

    console.log("Submitted:", payload);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex justify-center items-center px-4 py-6">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#1e293b] text-white p-6 rounded-xl shadow-2xl border border-gray-700 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-pink-400"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center">
            Book Free Consultation
          </h2>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 text-green-400 text-center font-medium"
            >
              Thank you! We’ll get in touch soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-2 py-2 rounded"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                     ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
                />
              </div>
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Website */}
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
            />

            {/* Services */}
            <div>
              <label className="block mb-2 font-semibold">
                Services you're interested in: *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {servicesList.map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                    />
                    {service}
                  </label>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-400 text-sm">{errors.services}</p>
              )}
              {formData.services.includes("Other") && (
                <input
                  type="text"
                  name="otherService"
                  placeholder="Please specify other service *"
                  value={formData.otherService}
                  onChange={handleChange}
                  className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full mt-2"
                />
              )}
              {errors.otherService && (
                <p className="text-red-400 text-sm">{errors.otherService}</p>
              )}
            </div>

            {/* Project details */}
            <textarea
              name="projectDetails"
              placeholder="Project Details (optional)"
              value={formData.projectDetails}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-3 rounded w-full resize-y min-h-[100px]"
            />

            {/* Launch Date & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleChange}
                className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
              />

              <input
                type="text"
                name="budget"
                placeholder="Estimated Budget"
                value={formData.budget}
                onChange={handleChange}
                className="bg-[#ffe3d9] text-black px-4 py-2 rounded w-full"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-1 font-medium">
                Upload reference file (optional):
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="text-white"
              />
            </div>

            {/* Privacy checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label>
                I agree to the{" "}
                <a href="/privacy-policy" target="_blank" className="underline">
                  privacy policy
                </a>{" "}
                *
              </label>
            </div>
            {errors.agree && <p className="text-red-400 text-sm">{errors.agree}</p>}

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded w-full font-semibold transition"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BookConsultationForm;
