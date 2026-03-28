import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categoryAccent = {
  "Web Development": "#266843",
  "IoT": "#abbc83",
  "Communication": "#dca563",
  "Mobile Apps": "#abbc83",
  "Data Science": "#266843",
  "UI/UX Design": "#dca563",
};

export default function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setImgIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const accentColor = categoryAccent[project.category] || "#266843";

  // Build gallery: main image + extra images
  const gallery = [
    ...(project.image_url ? [project.image_url] : []),
    ...(project.images || []),
  ];

  const hasPrev = imgIndex > 0;
  const hasNext = imgIndex < gallery.length - 1;

  const prev = () => setImgIndex((i) => Math.max(0, i - 1));
  const next = () => setImgIndex((i) => Math.min(gallery.length - 1, i + 1));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-card border border-border rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl z-10 flex flex-col max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: accentColor }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-20"
          >
            <X size={16} />
          </button>

          {/* Image gallery */}
          <div className="relative h-72 md:h-96 flex-shrink-0 bg-muted overflow-hidden">
            {gallery.length > 0 ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={gallery[imgIndex]}
                    alt={`${project.title} ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                {/* Arrow buttons */}
                {hasPrev && (
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                {hasNext && (
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}

                {/* Dot indicators */}
                {gallery.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{
                          backgroundColor: i === imgIndex ? "#fff" : "rgba(255,255,255,0.4)",
                          transform: i === imgIndex ? "scale(1.3)" : "scale(1)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: accentColor + "12" }}>
                <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                  <rect x="10" y="10" width="40" height="40" rx="4" fill={accentColor} opacity="0.15" />
                  <circle cx="85" cy="30" r="20" fill={accentColor} opacity="0.1" />
                  <polygon points="30,110 60,70 90,110" fill={accentColor} opacity="0.12" />
                  <rect x="70" y="65" width="35" height="35" rx="4" fill={accentColor} opacity="0.08" transform="rotate(15 87.5 82.5)" />
                </svg>
              </div>
            )}
          </div>

          {/* Content — scrollable */}
          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <Badge
                  variant="outline"
                  className="mb-2 text-xs font-medium"
                  style={{ borderColor: accentColor + "40", color: accentColor }}
                >
                  {project.category}
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{project.title}</h2>
              </div>
            </div>

            {project.description && (
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            )}

            {project.technologies?.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{ borderColor: accentColor + "40", color: accentColor, backgroundColor: accentColor + "10" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-heading font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: accentColor }}
              >
                <ExternalLink size={15} />
                View Project
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}