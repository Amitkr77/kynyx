import React from 'react';
import { Link } from 'react-scroll'; 
import Logovideo from '/logo3.mp4';

const Hero = () => (
  <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a242e] to-[#0f0f1a] text-white">
    
    {/* Background Video */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video
        src={Logovideo}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover brightness-50"
      />
    </div>

    {/* Foreground Content */}
    <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-[90%]">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-snug mb-4 sm:mb-6 text-shadow-lg tracking-tight">
        Innovate.<br />Transform. Achieve.
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 font-light leading-relaxed opacity-85 tracking-wide">
        Driving Digital Success with<br />Cutting-Edge Solutions
      </p>

      <Link
        to="next-section" 
        smooth={true}
        duration={800}
        offset={-70} 
      >
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-base sm:text-lg md:text-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none">
          Get Started
        </button>
      </Link>
    </div>
  </section>
);

export default Hero;
