import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Aura Finance',
      description: 'A secure mobile banking app that increased user engagement by 150%.',
      image: 'https://placehold.co/600x400/1A1B1E/00F2DE?text=FinTech+App',
      alt: 'FinTech App',
      color: 'from-cyan-500 to-teal-400',
    },
    {
      title: 'Nexus Commerce',
      description: 'A custom B2B e-commerce platform that boosted online sales by 80%.',
      image: 'https://placehold.co/600x400/1A1B1E/7A69E1?text=E-commerce+Site',
      alt: 'E-commerce Site',
      color: 'from-purple-600 to-indigo-500',
    },
    {
      title: 'ConnectSphere',
      description: 'A SaaS platform for team collaboration that acquired 10,000 users in its first six months.',
      image: 'https://placehold.co/600x400/1A1B1E/FBBF24?text=SaaS+Platform',
      alt: 'SaaS Platform',
      color: 'from-amber-400 to-yellow-500',
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-5xl text-white tracking-tight">
            Our Work
          </h2>
          <p className="font-inter text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            We're proud of the results we've delivered. Here’s a look at some of our favorite projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 relative z-10">
                <h3 className="font-poppins font-semibold text-2xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="mt-4 px-4 py-2 bg-white text-gray-900 font-poppins font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
