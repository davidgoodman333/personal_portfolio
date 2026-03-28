import React from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ContactSection from "../components/portfolio/ContactSection";
import CVSection from "../components/portfolio/CVSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CVSection />
      <ContactSection />
    </div>
  );
}