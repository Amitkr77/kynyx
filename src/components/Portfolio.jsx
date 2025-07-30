import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Aura Finance',
      description: 'A secure mobile banking app that increased user engagement by 150%.',
      tags: ['app-development', 'ui-ux-design'],
      imageUrl: 'src/assets/AuraFinance.jpg',
      altText: 'Screenshot of the Aura Finance mobile app',
      color: 'from-cyan-500 to-teal-400'
    },
    {
      id: 2,
      title: 'Nexus Commerce',
      description: 'A custom B2B e-commerce platform that boosted online sales by 80%.',
      tags: ['web-development'],
      imageUrl: 'src/assets/Nexuscommerce.jpg',
      altText: 'Homepage of the Nexus Commerce website',
      color: 'from-purple-600 to-indigo-500'
    },
    {
      id: 3,
      title: 'ConnectSphere',
      description: 'A SaaS platform for team collaboration that acquired 10,000 users in its first six months.',
      tags: ['web-development', 'ui-ux-design'],
      imageUrl: 'src/assets/Gemini_Generated_Image_srnogqsrnogqsrno (1).jpg',
      altText: 'Dashboard of the ConnectSphere SaaS platform',
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 4,
      title: 'HealthTrack',
      description: 'A wearable companion app for tracking fitness and health metrics.',
      tags: ['app-development'],
      imageUrl: 'src/assets/Healthtrack.jpg',
      altText: 'HealthTrack app displayed on a smartphone',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 5,
      title: 'Market Insights',
      description: 'A data-driven marketing campaign that increased lead generation by 200%.',
      tags: ['digital-marketing'],
      imageUrl: 'src/assets/Marketinsights.jpg',
      altText: 'Analytics dashboard showing marketing campaign results',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 6,
      title: 'Artisan Collective',
      description: 'A beautiful branding and website project for a collective of local artists.',
      tags: ['web-development', 'ui-ux-design'],
      imageUrl: 'src/assets/Artisian.jpg',
      altText: 'The Artisan Collective website homepage',
      color: 'from-violet-500 to-fuchsia-400'
    }
  ];

  const categories = ['all', ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <main className="bg-gray-900 font-inter text-white">
      {/* Portfolio Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop")'
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Our Portfolio
          </h1>
          <p className="font-inter text-base sm:text-lg text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of projects showcasing innovation, creativity, and measurable results across web, mobile, and digital marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-white shrink-0">
              Filter Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-poppins font-semibold text-sm sm:text-base transition-all duration-200 ${
                    filter === category
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 relative z-10">
                  <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-gray-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block px-4 py-2 bg-white text-gray-900 font-poppins font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            Have a Project in Mind?
          </h2>
          <p className="font-inter text-base sm:text-lg text-white mt-4 max-w-2xl mx-auto leading-relaxed">
            Let's turn your vision into reality. Contact us for a clear, transparent proposal with no obligation.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-cyan-500 font-poppins font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;