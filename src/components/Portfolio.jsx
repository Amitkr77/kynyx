import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Aura Finance',
      description: 'A secure mobile banking app that increased user engagement by 150%.',
      tags: ['app-development', 'ui-ux-design'],
      imageUrl: 'https://placehold.co/600x400/1A1B1E/00F2DE?text=FinTech+App',
      altText: 'Screenshot of the Aura Finance mobile app',
    },
    {
      id: 2,
      title: 'Nexus Commerce',
      description: 'A custom B2B e-commerce platform that boosted online sales by 80%.',
      tags: ['web-development'],
      imageUrl: 'https://placehold.co/600x400/1A1B1E/7A69E1?text=E-commerce+Site',
      altText: 'Homepage of the Nexus Commerce website',
    },
    {
      id: 3,
      title: 'ConnectSphere',
      description: 'A SaaS platform for team collaboration that acquired 10,000 users in its first six months.',
      tags: ['web-development', 'ui-ux-design'],
      imageUrl: 'https://placehold.co/600x400/1A1B1E/FBBF24?text=SaaS+Platform',
      altText: 'Dashboard of the ConnectSphere SaaS platform',
    },
    {
      id: 4,
      title: 'HealthTrack',
      description: 'A wearable companion app for tracking fitness and health metrics.',
      tags: ['app-development'],
      imageUrl: 'https://placehold.co/600x400/1A1B1E/34D399?text=Health+App',
      altText: 'HealthTrack app displayed on a smartphone',
    },
    {
      id: 5,
      title: 'Market Insights',
      description: 'A data-driven marketing campaign that increased lead generation by 200%.',
      tags: ['digital-marketing'],
      imageUrl: 'https://placehold.co/600x400/1A1B1E/F472B6?text=Marketing+Campaign',
      altText: 'Analytics dashboard showing marketing campaign results',
    },
    {
      id: 6,
      title: 'Artisan Collective',
      description: 'A beautiful branding and website project for a collective of local artists.',
      tags: ['web-development', 'ui-ux-design'],
      imageUrl: 'https://placehold.co/600x400/1A1B1E/A78BFA?text=Branding+Project',
      altText: 'The Artisan Collective website homepage',
    },
  ];

  const categories = [
    'all',
    ...new Set(projects.flatMap((p) => p.tags)),
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <main className="bg-brand-charcoal font-inter text-white">
      {/* Portfolio Hero Section */}
      <section className="pt-32 pb-16 bg-brand-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight">Our Portfolio</h1>
          <div className="w-24 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="font-poppins text-2xl font-semibold text-white shrink-0">Project Filter</h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 font-semibold rounded-lg transition-colors text-sm ${
                    filter === category
                      ? 'bg-brand-cyan text-brand-charcoal'
                      : 'bg-brand-charcoal-light text-brand-light-gray hover:bg-gray-700'
                  }`}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-brand-charcoal-light rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-cyan/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="bg-white text-brand-charcoal font-bold font-poppins py-3 px-6 rounded-lg">
                      View Case Study
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-white">{project.title}</h3>
                  <p className="text-brand-light-gray mt-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-4xl text-white">Have a Project in Mind?</h2>
          <p className="font-inter text-lg text-brand-light-gray mt-4 max-w-2xl mx-auto">
            Let's turn your vision into a reality. We'll provide a clear, transparent proposal with no obligation.
          </p>
          <div className="mt-8">
            <a
              href="index.html#contact"
              className="bg-white text-brand-cyan font-bold font-poppins py-3 px-8 rounded-lg shadow-lg hover:bg-brand-cyan-light hover:shadow-xl transition-all duration-300 ease-in-out text-lg"
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
