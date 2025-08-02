import React from 'react';

const approachSteps = [
  {
    step: "1",
    title: "Discovery",
    description: "We start by listening, diving deep into your goals to create a comprehensive project roadmap.",
  },
  {
    step: "2",
    title: "Design",
    description: "Our UI/UX experts craft intuitive wireframes and beautiful designs focused on the user journey.",
  },
  {
    step: "3",
    title: "Develop",
    description: "Our engineers bring the designs to life with clean, efficient code and rigorous testing for quality.",
  },
  {
    step: "4",
    title: "Deploy & Grow",
    description: "We manage the launch process and provide ongoing support to ensure long-term success.",
  },
];

const Approach = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight relative">
            Our Approach
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            A clear and collaborative process that ensures your project is a success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="bg-purple-500/10 text-purple-400 font-bold text-xl w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 relative z-10">
                {step.step}
              </div>
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-white mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="font-inter text-sm sm:text-base text-gray-400 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;