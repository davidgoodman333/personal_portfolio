import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import BubbleFilter from "./BubbleFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { FloatingDiamond, FloatingCircle } from "./GeometricShapes";

const projects = [
  {
    id: 1,
    title: "Geo Craft Studio",
    description:
        "Personal portfolio website built with React, Vite, and Tailwind CSS. Designed as a clean one-page showcase for projects, CV, and contact details.",
    category: "Web Development",
    technologies: ["React", "Vite", "Tailwind CSS"],
    image_url: "/images/geocraft.jpg",
    images: ["/images/geocraft.jpg"],
    link: "https://personal-portfolio-teal-two-10.vercel.app/",
  },
  {
    id: 2,
    title: "IoT Dashboard",
    description:
        "A concept interface for connected devices with a focus on clean data visualization and modern UI presentation.",
    category: "IoT",
    technologies: ["React", "JavaScript"],
    image_url: "/images/iot-dashboard.jpg",
    images: ["/images/iot-dashboard.jpg"],
    link: "",
  },
  {
    id: 3,
    title: "Messaging Platform UI",
    description:
        "A communication-focused interface concept exploring structured conversations, contact panels, and responsive layouts.",
    category: "Communication",
    technologies: ["React", "Tailwind CSS", "Figma"],
    image_url: "/images/communication-ui.jpg",
    images: ["/images/communication-ui.jpg"],
    link: "",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description:
        "A mobile-first app concept for workout tracking and progress monitoring with a simple and motivating UX.",
    category: "Mobile Apps",
    technologies: ["React", "Mobile UI", "Tailwind CSS"],
    image_url: "/images/mobile-fitness.jpg",
    images: ["/images/mobile-fitness.jpg"],
    link: "",
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description:
        "A dashboard concept presenting analytics and insights through charts, KPIs, and interactive summaries.",
    category: "Data Science",
    technologies: ["React", "Charts", "JavaScript"],
    image_url: "/images/data-dashboard.jpg",
    images: ["/images/data-dashboard.jpg"],
    link: "",
  },
  {
    id: 6,
    title: "Portfolio UX Redesign",
    description:
        "A UI/UX design exercise focused on typography, spacing, and interaction polish for a professional portfolio site.",
    category: "UI/UX Design",
    technologies: ["Figma", "UX Design", "Design Systems"],
    image_url: "/images/portfolio-redesign.jpg",
    images: ["/images/portfolio-redesign.jpg"],
    link: "",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const isLoading = false;

  const filtered =
      activeFilter === "All"
          ? projects
          : projects.filter((p) => p.category === activeFilter);

  return (
      <>
        <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
          <FloatingDiamond className="top-20 left-[5%] hidden lg:block" delay={0} size={50} />
          <FloatingCircle
              className="bottom-32 right-[8%] hidden lg:block"
              delay={1.5}
              size={60}
              color="#abbc83"
          />

          <div className="max-w-6xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-sm font-medium text-accent tracking-widest uppercase">
                Work
              </span>
                <div className="h-px w-8 bg-accent" />
              </div>

              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Selected Projects
              </h2>

              <p className="text-muted-foreground max-w-md mx-auto">
                A curated selection of projects spanning different domains and technologies.
              </p>
            </motion.div>

            <div className="mb-12">
              <BubbleFilter active={activeFilter} onSelect={setActiveFilter} />
            </div>

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
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                  </AnimatePresence>
                </motion.div>
            )}
          </div>
        </section>

        <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
        />
      </>
  );
}