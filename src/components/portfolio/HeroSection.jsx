import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  FloatingTriangle,
  FloatingCircle,
  FloatingDiamond,
  FloatingHexagon,
  GridPattern,
} from "./GeometricShapes";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <GridPattern />

      {/* Floating geometric shapes */}
      <FloatingTriangle className="top-20 right-[15%] hidden md:block" delay={0} size={100} />
      <FloatingCircle className="top-32 left-[8%]" delay={1} size={80} color="#abbc83" />
      <FloatingDiamond className="bottom-32 right-[10%]" delay={0.5} size={60} />
      <FloatingHexagon className="bottom-40 left-[12%] hidden md:block" delay={2} size={90} color="#266843" />
      <FloatingCircle className="top-[60%] right-[25%] hidden lg:block" delay={1.5} size={50} color="#dca563" />
      <FloatingTriangle className="top-[45%] left-[5%] hidden lg:block" delay={3} size={60} />

      {/* Large decorative shape behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 800 800" fill="none" className="w-full h-full">
            <polygon points="400,50 750,400 400,750 50,400" stroke="#abbc83" strokeWidth="1" opacity="0.08" fill="none" />
            <circle cx="400" cy="400" r="320" stroke="#dca563" strokeWidth="1" opacity="0.06" fill="none" />
            <polygon points="400,100 700,400 400,700 100,400" stroke="#266843" strokeWidth="1" opacity="0.05" fill="none" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-medium text-accent tracking-widest uppercase">Creative Developer</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            Building
            <br />
            <span className="relative inline-block">
              Digital
              <motion.span
                className="absolute -bottom-2 left-0 h-3 bg-secondary/30 -z-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #266843, #abbc83, #dca563)" }}>
              Experiences
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
            I craft innovative solutions at the intersection of technology and design — 
            from connected devices to beautiful web experiences.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-border text-foreground font-heading font-semibold text-sm rounded-lg hover:bg-muted transition-colors"
            >
              About Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
}