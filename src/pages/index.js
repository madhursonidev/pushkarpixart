import React from "react";
import AboutUs from "src/components/AboutUs";
import OurWork from "src/components/OurWork";
import Testimonials from "src/components/Testimonials";
import BlogSection from "src/components/BlogSection";
import Footer from "src/components/Footer";
import HeroSection from "src/components/HeroSection";
import GallerySection from "src/components/GallerySection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <GallerySection />
      <AboutUs />
      <OurWork />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomePage;
