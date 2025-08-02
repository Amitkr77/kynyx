import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Kynyx Solutions was a game-changer. Their team is not only technically proficient but also deeply committed to understanding our business goals. They delivered on time and exceeded our expectations at every turn.",
      author: "Jane Doe",
      role: "CEO of Aura Finance",
      color: "from-teal-500 to-cyan-400"
    },
    {
      quote: "Kynyx Solutions transformed our vision into reality with unmatched expertise. Their innovative approach and dedication to quality made our project a resounding success.",
      author: "John Smith",
      role: "Founder of Nexus Commerce",
      color: "from-purple-600 to-indigo-500"
    },
    {
      quote: "The team at Kynyx Solutions brought unparalleled creativity and precision to our platform. Their collaboration and support helped us achieve milestones we never thought possible.",
      author: "Emily Chen",
      role: "CTO of ConnectSphere",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-5xl text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="font-inter text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied clients about how we helped them achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="p-8 relative z-10">
                <div className="text-4xl text-gray-400 mb-4">“</div>
                <p className="font-inter text-gray-200 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-poppins font-semibold text-lg">
                    {testimonial.author[0]}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-poppins font-semibold text-white">
                      {testimonial.author}
                    </h3>
                    <p className="font-inter text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;