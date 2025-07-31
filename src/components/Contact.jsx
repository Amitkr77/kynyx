import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: {
      seo: false,
      content: false,
      paid: false,
      all: false,
    },
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in formData.services) {
      const updatedServices = {
        ...formData.services,
        [name]: checked,
        ...(name === 'all' && {
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
            <p>533 Airport Blvd #510,</p>
            <p>Burlingame, CA 94010,</p>
            <p>United States</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full"
        >
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
          <div>
            <p className="text-xl font-semibold mb-2">Select Services</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="seo" checked={formData.services.seo} onChange={handleChange} />
                SEO
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="content" checked={formData.services.content} onChange={handleChange} />
                Content Marketing
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="paid" checked={formData.services.paid} onChange={handleChange} />
                Paid Media Marketing
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="all" checked={formData.services.all} onChange={handleChange} />
                Select All
              </label>
            </div>
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
