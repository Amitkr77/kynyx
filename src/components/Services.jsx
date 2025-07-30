import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Web Development',
      description:
        'We build high-performance, secure, and scalable web solutions that serve as the digital backbone of your business. From marketing websites to complex enterprise platforms, our code is clean, our architecture is robust, and our final product is built to grow with you.',
      deliverables: [
        'Responsive Websites',
        'E-commerce Platforms',
        'SaaS Applications',
        'API Development'
      ],
      technologies: ['React / Next.js', 'Node.js / Python', 'Shopify / WooCommerce', 'AWS / Google Cloud'],
      image: 'https://images.unsplash.com/photo-1516321310762-4794371e6a6f?q=80&w=1170&auto=format&fit=crop',
      alt: 'A team of developers collaborating on a web project'
    },
    {
      title: 'Mobile App Development',
      description:
        'Engage your users on their favorite devices with intuitive and powerful mobile applications. We handle the entire lifecycle from idea and UX design to App Store submission and ongoing support, delivering native apps with top performance and user experience.',
      deliverables: ['iOS Applications', 'Android Applications', 'UX/UI Prototyping', 'App Store Optimization'],
      technologies: ['Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1170&auto=format&fit=crop',
      alt: 'A designer showing a mobile app interface on a smartphone'
    },
    {
      title: 'Digital Marketing Strategy',
      description:
        'Drive targeted traffic, generate qualified leads, and grow your revenue with our data-driven marketing strategies. We create a powerful brand presence and deliver measurable ROI through a holistic approach to digital marketing.',
      deliverables: ['SEO Audits & Strategy', 'Content Marketing Plans', 'PPC Campaign Management', 'Social Media Strategy'],
      technologies: ['Google Analytics / Ads', 'Meta Business Suite', 'Ahrefs / SEMrush', 'HubSpot'],
      image: 'https://images.unsplash.com/photo-1551288049-b1f3a0c3f3b0?q=80&w=1170&auto=format&fit=crop',
      alt: 'A chart showing positive growth from a digital marketing campaign'
    },
    {
      title: 'UI/UX Design & Branding',
      description:
        'Great design is about creating intuitive and memorable experiences that build brand loyalty. We conduct deep user research to craft interfaces that are beautiful, effective, and optimized for conversions.',
      deliverables: ['User Research & Personas', 'Wireframing & Prototyping', 'Brand Identity Design', 'Comprehensive Style Guides'],
      technologies: ['Figma', 'Adobe Creative Suite', 'Miro', 'Maze'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
      alt: 'A designer working on a user interface wireframe on a large screen'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop")'
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight shadow-lg">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            A complete suite of digital solutions designed to build, launch, and grow your business. We combine strategy, design, and technology to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12 transform transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg group overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      index === 0
                        ? 'from-cyan-500 to-teal-400'
                        : index === 1
                        ? 'from-purple-600 to-indigo-500'
                        : index === 2
                        ? 'from-amber-400 to-yellow-500'
                        : 'from-pink-500 to-rose-400'
                    } opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="font-inter text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-poppins font-semibold text-cyan-400 mb-2">
                          Key Deliverables
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {service.deliverables.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-cyan-400 mb-2">
                          Technologies We Use
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {service.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="rounded-xl shadow-2xl w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            Ready to Start Your Project?
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Let's have a conversation about your goals. We'll provide a clear, transparent proposal with no obligation.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-cyan-500 text-white font-poppins font-semibold py-3 px-8 rounded-full hover:bg-cyan-600 transition-colors duration-200 text-base sm:text-lg"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;