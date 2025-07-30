import React from "react";

import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";
import Approach from "./components/Approach";
import PortfolioSection from "./components/PortfolioSection";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <div className=" bg-[#0d0d1a] text-white">
      <Hero />
      <ServiceSection />
      <Approach />
      <PortfolioSection />
      <Testimonials />
      <TechStack />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
