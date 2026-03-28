import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Loader2 } from "lucide-react";
import BubbleFilter from "./BubbleFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { FloatingDiamond, FloatingCircle } from "./GeometricShapes";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => base44.entities.Project.list("-created_date"),
  });

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background shapes */}
      <FloatingDiamond className="top-20 left-[5%] hidden lg:block" delay={0} size={50} />
      <FloatingCircle className="bottom-32 right-[8%] hidden lg:block" delay={1.5} size={60} color="#abbc83" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent tracking-widest uppercase">Work</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A curated selection of projects spanning different domains and technologies.
          </p>
        </motion.div>

        {/* Bubble Filters */}
        <div className="mb-12">
          <BubbleFilter active={activeFilter} onSelect={setActiveFilter} />
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="4" width="10" height="10" rx="2" fill="#abbc83" opacity="0.3" />
                <rect x="18" y="4" width="10" height="10" rx="2" fill="#dca563" opacity="0.3" />
                <rect x="4" y="18" width="10" height="10" rx="2" fill="#dca563" opacity="0.3" />
                <rect x="18" y="18" width="10" height="10" rx="2" fill="#266843" opacity="0.3" />
              </svg>
            </div>
            <p className="text-muted-foreground">No projects in this category yet.</p>
          </motion.div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>

    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}