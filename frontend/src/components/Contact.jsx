import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: {
      seo: false,
      content: false,
      paid: false,
      all: false,
    },
    message: "",
  });

  // useEffect(async(
  //   const res = await fetch("",)

  
  // ) => {}, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in formData.services) {
      const updatedServices = {
        ...formData.services,
        [name]: checked,
        ...(name === "all" && {
          seo: checked,
          content: checked,
          paid: checked,
        }),
      };
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add API integration here
  };

  return (
    <div className="bg-[#0f172a] text-white w-full min-h-screen py-10 px-6 md:px-20 font-sans flex items-center justify-center">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-start">
        {/* Address & Map */}
        <div className="relative w-full flex justify-center">
          <img
            src="../USAMAPS.png"
            alt="US Map"
            className="w-full max-w-md object-contain"
          />
          <div className="absolute top-[60px] left-[80px] bg-[#0f172a] text-sm text-white border border-orange-500 px-4 py-2 rounded-md">
            <p>Kynyx Solutions LLC 8,</p>
            <p>The Green, suite A Dover, </p>
            <p>DE 19091 US</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <h2 className="text-3xl font-bold">Get in Touch</h2>

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

          {/* Services */}
          {/* Services as Single Select Dropdown */}
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
              value={
                formData.services.all
                  ? "all"
                  : formData.services.seo
                  ? "seo"
                  : formData.services.content
                  ? "content"
                  : formData.services.paid
                  ? "paid"
                  : ""
              }
              onChange={(e) => {
                const selected = e.target.value;
                setFormData({
                  ...formData,
                  services: {
                    seo: selected === "seo",
                    content: selected === "content",
                    paid: selected === "paid",
                    all: selected === "all",
                  },
                });
              }}
              className="w-full bg-[#ffe3d9] text-black px-4 py-2 rounded outline-none"
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="seo">SEO</option>
              <option value="content">Content Marketing</option>
              <option value="marketing">Digital Marketing</option>
              <option value="web">Custom Web Development</option>
              <option value="app">Mobile app Development</option>

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

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-orange-700 transition"
          >
            SEND <Mail size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
