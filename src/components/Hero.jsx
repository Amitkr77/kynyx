import React from 'react';
import Logovideo from '../assets/logo3.mp4';

const Hero = () => (
  <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a242e] to-[#0f0f1a] text-white">
    
    {/* Background Video */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video
        src={Logovideo}
        autoPlay
        muted
        loop
        
        className="w-full h-full object-cover"
      />
    </div>

    {/* Foreground Content */}
    <div className="relative z-10 text-center px-3 sm:px-6 md:px-10 max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight mb-4 break-words">
        Innovate.<br />Transform. Achieve.
      </h1>

      <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 font-light leading-relaxed">
        Driving Digital Success with<br />Cutting-Edge Solutions
      </p>

      <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg">
        Get Started
      </button>
    </div>
  </section>
);

export default Hero;
