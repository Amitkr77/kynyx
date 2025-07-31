import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Jane Doe',
      title: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop',
      alt: 'Headshot of Jane Doe, CEO of Kynyx Solutions'
    },
    {
      name: 'John Smith',
      title: 'CTO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop',
      alt: 'Headshot of John Smith, CTO of Kynyx Solutions'
    },
    {
      name: 'Alice Johnson',
      title: 'COO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop',
      alt: 'Headshot of Alice Johnson, COO of Kynyx Solutions'
    },
    {
      name: 'Bob Brown',
      title: 'CFO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop',
      alt: 'Headshot of Bob Brown, CFO of Kynyx Solutions'
    }
  ];

  const values = [
    {
      title: 'Partnership',
      description: 'We act as an extension of your team, fostering long-term success through collaboration.',
      icon: (
        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Quality',
      description: 'We deliver exceptional craftsmanship, ensuring every project exceeds expectations.',
      icon: (
        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Transparency',
      description: 'We communicate openly, keeping you informed at every step of the process.',
      icon: (
        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-gray-900 font-inter text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Your Partners in Digital Innovation
          </h1>
          <p className="font-inter text-sm sm:text-base text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Kynyx Solutions is a US-based digital agency focused on building meaningful partnerships to create impactful digital solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-white mb-4">
                Our Story
              </h2>
              <p className="font-inter text-sm sm:text-base text-gray-400 leading-relaxed">
                Founded in Delaware, Kynyx Solutions was born from a vision to redefine digital partnerships. Frustrated by agencies that prioritized profit over people, we set out to create a company that values collaboration, transparency, and quality. Today, we empower businesses nationwide with innovative solutions tailored to their goals.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop"
                alt="Team collaborating on a project, representing Kynyx Solutions' journey"
                className="rounded-lg shadow-lg w-full h-48 sm:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-white">
              Our Leadership
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
              Meet the team driving our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="text-center group transform transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 border-2 border-gray-700 group-hover:border-gray-500 transition-colors duration-300 object-cover"
                />
                <h3 className="font-poppins font-medium text-base sm:text-lg text-white">
                  {member.name}
                </h3>
                <p className="font-inter text-sm text-gray-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-white">
              Our Values
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
              The principles that define how we work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-gray-900 p-6 rounded-lg shadow-md group transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-poppins font-medium text-base sm:text-lg text-white text-center mb-2">
                  {value.title}
                </h3>
                <p className="font-inter text-sm text-gray-400 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-white">
            Join Us
          </h2>
          <p className="font-inter text-sm sm:text-base text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
            We’re seeking passionate individuals to join our mission of building innovative digital solutions. Be part of our growing team.
          </p>
          <div className="mt-6">
            <a
              href="#careers"
              className="inline-block bg-gray-200 text-gray-900 font-poppins font-medium py-2 px-6 rounded-full hover:bg-gray-300 transition-colors duration-200 text-sm sm:text-base"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;