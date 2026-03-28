import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categoryAccent = {
  "Web Development": "#266843",
  "IoT": "#abbc83",
  "Communication": "#dca563",
  "Mobile Apps": "#abbc83",
  "Data Science": "#266843",
  "UI/UX Design": "#dca563",
};

export default function ProjectCard({ project, index, onClick }) {
  const accentColor = categoryAccent[project.category] || "#266843";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: accentColor + "12" }}
          >
            {/* Geometric placeholder pattern */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="10" y="10" width="40" height="40" rx="4" fill={accentColor} opacity="0.15" />
              <circle cx="85" cy="30" r="20" fill={accentColor} opacity="0.1" />
              <polygon points="30,110 60,70 90,110" fill={accentColor} opacity="0.12" />
              <rect x="70" y="65" width="35" height="35" rx="4" fill={accentColor} opacity="0.08" transform="rotate(15 87.5 82.5)" />
            </svg>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
          style={{ backgroundColor: accentColor }}
        />

        {/* External link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <ExternalLink size={14} className="text-foreground" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <Badge
          variant="outline"
          className="mb-3 text-xs font-medium"
          style={{ borderColor: accentColor + "40", color: accentColor }}
        >
          {project.category}
        </Badge>

        <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {project.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>
        )}

        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}