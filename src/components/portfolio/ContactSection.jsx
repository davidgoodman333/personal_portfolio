import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          {/* Decorative shapes behind */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 opacity-[0.06]">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <circle cx="100" cy="100" r="90" stroke="#abbc83" strokeWidth="2" />
              <polygon points="100,20 180,100 100,180 20,100" stroke="#266843" strokeWidth="2" />
              <circle cx="100" cy="100" r="50" stroke="#dca563" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-sm font-medium text-secondary tracking-widest uppercase">Contact</span>
            <div className="h-px w-8 bg-secondary" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out — I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</span>
          <span>Designed with geometric precision.</span>
        </div>
      </div>
    </section>
  );
}