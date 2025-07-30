import React from "react";
import { Laptop, Smartphone, Rocket } from "lucide-react";

const servicing = [
  {
    title: "Website Development",
    description:
      "We build responsive, secure, and user-friendly websites tailored to your business needs. From landing pages to full-stack platforms.",
    icon: <Laptop size={32} />,
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    title: "Mobile App Development",
    description:
      "We craft seamless and high-performing mobile apps for Android & iOS. Native, hybrid, or cross-platform — we deliver performance.",
    icon: <Smartphone size={32} />,
    gradient: "from-blue-400 to-violet-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with our result-driven SEO, SEM, and content strategies tailored to maximize your online visibility.",
    icon: <Rocket size={32} />,
    gradient: "from-pink-500 to-red-500",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#0f0f1a] text-white font-sans">
      {/* Hero Section */}
      <section className="py-20 text-center bg-[#0a0a17] px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Full Suite of Digital Services
        </h1>
        <p className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto">
          From design to development, we help brands transform digitally with cutting-edge solutions.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-full">
          Explore Services
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-10">Our Core Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicing.map((service, index) => (
            <div key={index} className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition">
              <div
                className={`w-full h-28 flex items-center justify-center rounded-lg mb-4 bg-gradient-to-r ${service.gradient}`}
              >
                <span className="text-white">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Kynyx Solutions</h2>
          <p className="text-gray-400 leading-relaxed">
            At Kynyx Solutions, we are more than just a tech company. We are innovators, strategists, and developers committed to crafting exceptional digital experiences. With a team that blends creativity and technical skill, we partner with brands to build scalable, secure, and user-focused solutions.
          </p>
        </div>
        <div className="w-full h-56 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl" />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Client-Centric Approach",
            "Scalable & Secure Development",
            "On-Time Delivery with Quality",
          ].map((point, i) => (
            <div
              key={i}
              className="bg-[#2a2a3d] p-6 rounded-xl text-center hover:scale-105 transition transform duration-300"
            >
              <h4 className="text-xl font-semibold">{point}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Let's collaborate to build something great. Get in touch and let’s start your digital journey today.
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-full">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-black">
        © {new Date().getFullYear()} Kynyx Solutions. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
