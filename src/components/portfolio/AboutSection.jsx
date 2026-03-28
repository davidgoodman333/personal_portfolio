import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Radio, Palette, Smartphone, BarChart3 } from "lucide-react";

const skills = [
  { icon: Code2, label: "Web Development", color: "#266843" },
  { icon: Cpu, label: "IoT Systems", color: "#abbc83" },
  { icon: Radio, label: "Communication", color: "#dca563" },
  { icon: Palette, label: "UI/UX Design", color: "#266843" },
  { icon: Smartphone, label: "Mobile Apps", color: "#abbc83" },
  { icon: BarChart3, label: "Data Science", color: "#dca563" },
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
              Passionate about building
              <br />
              <span className="text-secondary">what matters</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a multidisciplinary developer with a deep passion for creating seamless 
                digital products. From architecting robust web platforms to engineering IoT 
                solutions that bridge the physical and digital worlds.
              </p>
              <p>
                With expertise spanning communication protocols, responsive interfaces, and 
                data-driven applications, I bring ideas to life with clean code and 
                thoughtful design. Every project is an opportunity to push boundaries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { value: "5+", label: "Years Exp." },
                { value: "30+", label: "Projects" },
                { value: "15+", label: "Happy Clients" },
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