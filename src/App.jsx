import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Services from"./components/Services";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsOfService from "./components/TermsofService";
import ReturnrefundPolicy from "./components/ReturnrefundPolicy";


const NotFound = () => (
  <div
    style={{
      padding: "2rem",
      textAlign: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
    <div className="font-['Inter'] bg-[#0d0d1a] text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        <Route path="/Services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        <Route path="/return-refund-policy" element={<ReturnrefundPolicy/>} />
        
        <Route path="/Learn-More" element={<LearnMore />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
};

export default App;