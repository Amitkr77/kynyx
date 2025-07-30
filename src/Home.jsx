import React from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Approach from "./components/Approach";
import PortfolioSection from "./components/PortfolioSection";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <div className="font-['Inter'] bg-[#0d0d1a] text-white overflow-x-hidden">
      <Hero />
      <Services />
      <Approach />
      <PortfolioSection />
      <Testimonials />
      <TechStack />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
