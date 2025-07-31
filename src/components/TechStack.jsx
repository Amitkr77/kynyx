import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Next.js', color: 'bg-gray-700' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Python', color: 'bg-blue-600' },
    { name: 'Shopify', color: 'bg-lime-500' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Java', color: 'bg-pink-500' },
    { name: 'iOS (Swift)', color: 'bg-purple-500' },
    { name: 'Android (Kotlin)', color: 'bg-red-500' }
  ];

  return (
    <section id="tech" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-5xl text-white tracking-tight">
            Our Technology Stack
          </h2>
          <p className="font-inter text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            We leverage modern, industry-leading technologies to build robust and reliable digital products.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative px-6 py-3 rounded-full ${tech.color} text-white font-poppins font-semibold text-lg shadow-md transform hover:scale-110 hover:shadow-xl transition-all duration-300`}
            >
              <span className="relative z-10">{tech.name}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;