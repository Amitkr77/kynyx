import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Web Development",
    description: "We build fast, secure, and scalable websites and web applications that are tailored to your specific business goals.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Capture your audience with beautiful and intuitive native iOS and Android applications that provide a seamless user experience.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Digital Marketing Strategy",
    description: "Amplify your brand's voice with data-driven strategies. We specialize in SEO, content marketing, and paid advertising campaigns.",
  },
];

const ServiceSection = () => {
  return (
    <section id="next-section" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Services
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A complete suite of digital solutions designed to build, launch, and grow your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-700 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="bg-cyan-500/10 p-3 rounded-md w-12 h-12 mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-white mb-2">
                {service.title}
              </h3>
              <p className="font-inter text-sm sm:text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;