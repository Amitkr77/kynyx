import React, { useState } from "react";
import axios from "axios";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "", 
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact/send-message",
        formData
      );

      if (response.status === 200) {
        setSuccessMsg("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0f172a] text-white w-full min-h-screen py-10 px-6 md:px-20 font-sans flex items-center justify-center">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-start">
        {/* Map & Address */}
        <div className="relative w-full flex justify-center">
          <img
            src="../USAMAPS.png"
            alt="US Map"
            className="w-full max-w-md object-contain"
          />
          <div className="absolute top-[60px] left-[80px] bg-[#0f172a] text-sm text-white border border-orange-500 px-4 py-2 rounded-md">
            <p>Kynyx Solutions LLC 8,</p>
            <p>The Green, Suite A Dover,</p>
            <p>DE 19091 US</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <h2 className="text-3xl font-bold">Get in Touch</h2>

          {successMsg && <p className="text-green-500">{successMsg}</p>}
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Business Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none w-full"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
              className="bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none w-full"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="text-xl font-semibold mb-2 block">
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
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#ffe3d9] text-black px-4 py-3 rounded resize-y min-h-[100px] outline-none"
            required
          />

          {/* Feedback Messages */}
          {successMsg && <p className="text-green-400">{successMsg}</p>}
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-blue-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "SEND"} <Mail size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
