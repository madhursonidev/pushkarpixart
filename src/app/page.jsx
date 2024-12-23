"use client";
import react from "react";
import HeroSection from "@/componets/HeroSection";
import Footer from "@/componets/Footer";
import Gallery from "@/componets/Gallery";
import Header from "@/componets/Header";
import OurTeam from "@/componets/our-team/OurTeam";
import TestimonialSection from "@/componets/TestimonialSection";

export default function Home() {
  return (
    <div className="overflow-hidden_">
      <HeroSection />
      <Gallery />
      <OurTeam />
      <TestimonialSection />
    </div>
  );
}
