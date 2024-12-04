import React from "react";
import HeaderSection from "../assets/components/Header";
import '../assets/css/HeaderSection.css'
import HeroSection from "../assets/components/EquipHeroSection";
import '../assets/css/EquipHeroSection.css'
import OurPartners from "../assets/components/OurPartners";
import '../assets/css/OurPartners.css'
import KeyFeatures from "../assets/components/KeyFeatures";
import '../assets/css/KeyFeatures.css';
import ValuePreposition from "../assets/components/ValuePreposition";
import '../assets/css/ValuePreposition.css';
import TestimoniaSection from "../assets/components/TestimoniaSection";
import '../assets/css/TestimoniaSection.css';
import FrequentQuestions from "../assets/components/FrequentQuestions";
import '../assets/css/FrequentQuestions.css';
import Footer from "../assets/components/Footer";
import '../assets/css/Footer.css';
import { Helmet } from 'react-helmet';
import ButtomNav from "../assets/components/ButtomNav";
import '../assets/css/ButtomNav.css';


function Home() {
    return (
      <>
      <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      </div>
      <div className="App">
        <HeaderSection />
        <HeroSection />
        <OurPartners />
        <KeyFeatures />
        <ValuePreposition />
        <TestimoniaSection />
        <FrequentQuestions />
        <Footer />
        <ButtomNav />
      </div>
      </>
    );
  }

  export default Home