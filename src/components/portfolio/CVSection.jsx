import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "5+ Years Experience", sub: "Across multiple domains" },
  { icon: GraduationCap, label: "B.Sc. Computer Science", sub: "University of Technology" },
  { icon: FileText, label: "30+ Projects Delivered", sub: "From startups to enterprise" },
];

export default function CVSection() {
  const CV_URL = "/cv.pdf"; // Replace with your actual CV file URL

  return (
    <section id="cv" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full">
            <polygon points="0,0 300,0 0,300" fill="#266843" />
            <polygon points="1200,600 900,600 1200,300" fill="#abbc83" />
            <circle cx="600" cy="300" r="280" stroke="#dca563" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + download */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#abbc83" }} />
              <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#abbc83" }}>
                Resume
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Want to know
              <br />
              <span style={{ color: "#266843" }}>more about me?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Download my CV for a full overview of my experience, education, skills, and the projects I've worked on.
            </p>

            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-white font-heading font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              style={{ backgroundColor: "#266843" }}
            >
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Download size={18} />
              </motion.div>
              Download CV
              <span className="text-xs font-normal opacity-70">PDF · 2MB</span>
            </a>

            <p className="text-xs text-muted-foreground mt-3">
              Last updated March 2026
            </p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              const colors = ["#266843", "#abbc83", "#dca563"];
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="flex items-center gap-5 p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: color + "18" }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                  {/* Geometric accent */}
                  <div
                    className="ml-auto w-4 h-4 rotate-45 rounded-sm opacity-20"
                    style={{ backgroundColor: color }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}