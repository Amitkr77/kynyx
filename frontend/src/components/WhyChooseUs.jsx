import React from 'react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: 'US-Based Team',
      description: 'Work with a team in your timezone. We ensure clear communication, cultural alignment, and a deep understanding of the US market.',
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-cyan-500 to-teal-400'
    },
    {
      title: 'Agile & Transparent',
      description: 'Our agile process means you see progress early and often. We provide complete transparency with no surprises or hidden fees.',
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-purple-600 to-indigo-500'
    },
    {
      title: 'Focus on Quality & ROI',
      description: 'We’re obsessed with quality. Our goal is to deliver a final product that not only looks great but also provides a tangible return on your investment.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-amber-400 to-yellow-500'
    },
    {
      title: 'Long-Term Partnership',
      description: 'Our relationship doesn’t end at launch. We offer dedicated support and maintenance plans to ensure your digital assets continue to thrive.',
      icon: (
        <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9 12h6M9 12a9 9 0 11-9-9 9 9 0 019 9zm9 0a9 9 0 11-9 9 9 9 0 019-9z" />
        </svg>
      ),
      color: 'from-pink-500 to-rose-400'
    }
  ];

  return (
    <section id="why-us" className="bg-gradient-to-b from-gray-800 to-gray-700 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-5xl text-white tracking-tight">
            The Kynyx Advantage
          </h2>
          <p className="font-inter text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            We’re more than just a vendor. We’re your partner in growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
              <div className="flex items-start space-x-4 relative z-10">
                <div className="bg-gray-800 p-3 rounded-md">{advantage.icon}</div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="font-inter text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;