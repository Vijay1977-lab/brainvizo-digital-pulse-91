
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <CoursesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
