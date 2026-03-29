import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Radio,
  ClipboardList,
  Users,
  Briefcase,
} from "lucide-react";

const skills = [
  { icon: Code2, label: "Web Development", color: "#266843" },
  { icon: Cpu, label: "IT Systems", color: "#abbc83" },
  { icon: Radio, label: "Communication", color: "#dca563" },
  { icon: ClipboardList, label: "Project Coordination", color: "#266843" },
  { icon: Users, label: "Teamwork", color: "#abbc83" },
  { icon: Briefcase, label: "Business & IT", color: "#dca563" },
];

export default function AboutSection() {
  return (
      <section id="about" className="relative py-24 md:py-32 overflow-hidden">
        {/* Decorative geometric corner */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <rect x="20" y="20" width="160" height="160" stroke="#266843" strokeWidth="2" />
            <rect x="40" y="40" width="120" height="120" stroke="#abbc83" strokeWidth="2" />
            <rect x="60" y="60" width="80" height="80" stroke="#dca563" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: About text */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "#dca563" }} />
                <span className="text-sm font-medium text-accent tracking-widest uppercase">About</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Driven to connect
                <br />
                <span className="text-secondary">technology and people</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m a second-year Applied Computer Science student with a background in programming
                  and a growing passion for the business side of IT. Through my studies, I’ve developed
                  technical skills that allow me to understand how digital solutions are built and improved.
                </p>
                <p>
                  At the same time, I’m becoming increasingly interested in communication, coordination,
                  and project management. I want to use my technical foundation as a bridge into roles
                  where I can connect people, ideas, and technology to deliver meaningful results.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                {[
                  { value: "2nd", label: "Year Student" },
                  { value: "5+", label: "Academic Projects" },
                  { value: "3", label: "Focus Areas" },
                ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-heading text-2xl md:text-3xl font-bold" style={{ color: "#266843" }}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Skills grid */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                      <motion.div
                          key={skill.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * i }}
                          className="group relative p-5 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-default"
                      >
                        {/* Geometric accent */}
                        <div
                            className="absolute top-3 right-3 w-6 h-6 rounded-sm rotate-45 opacity-10 group-hover:opacity-25 transition-opacity"
                            style={{ backgroundColor: skill.color }}
                        />
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                            style={{ backgroundColor: skill.color + "18" }}
                        >
                          <Icon size={20} style={{ color: skill.color }} />
                        </div>
                        <span className="font-heading font-semibold text-sm">{skill.label}</span>
                      </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}