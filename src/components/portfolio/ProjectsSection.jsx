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
    title: "The Andersons Household Management App",
    description: (
        <>
          A custom Figma design for an Au Pair household management app, created around the customer’s
          specific needs. The concept focused on helping the household manage schedules, bills, dinners,
          trips, availability, and shared responsibilities in one place.
          <br />
          <br />
          I worked in a team of 6 and my work was spread across all pages but mainly on the managing of the bills. We continuously applied the SCRUM methodology and documented the
          process in Jira.
        </>
    ),
    category: "UI/UX Design",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping", "SCRUM", "Jira"],
    image_url: "/images/anderson_login.png",
    images: ["/images/anderson_schedule.png","/images/anderson_invoice.png","/images/anderson_bill.png"],
    link: "https://www.figma.com/design/fVzv50LziYKatELZCo6i7R/2025_LST1?node-id=0-1&t=ljBpo6KlEZIsekp0-1",
  },
  {
    id: 2,
    title: "Grow Kasterlee Gym Application",
    description:(
        <>
          A web application for Grow Kasterlee Gym, built in a team after receiving
          a data model and a prototype that the client was satisfied with.
          We continued by developing the app in the TALL stack and kept track of the project through GitHub.
          The project had 4 roles, a Guest-Member-Trainer-Admin, and every role got a different view of the application.
          <br/>
       <br/>
          My work was mainly focused on the guest pages, login/registration, dashboard and customer support, although I also contributed across other parts of the project. I also took on the role of SCRUM Master, which I enjoyed, because it allowed me to keep track of the burndown charts, follow up on tasks, and help the team stay organized.
        </>
),
    category: "Web Development",
    technologies: ["TALL Stack", "Laravel", "Livewire", "Tailwind CSS", "Alpine.js", "GitHub", "SCRUM"],
    image_url: "/images/growgym_guest.png",
    images: [
      "/images/growgym_register.png",
      "/images/growgym_dashb.png",
      "/images/growgym_support.png",
    ],
    link: "https://growgym.be/",
  },
    {
        id: 3,
        title: "Pula Wind Orchestra web Application",
        description: (
            <>
                A web development project I worked on individually for my home orchestra. The goal was to
                digitalize the sheet music and improve the orchestra’s online visibility. The website includes
                CRUD functionality in the frontend, allowing the admin to update the page information manually without the help of a developer.

                <br />
                <br />
                The project had 3 roles, a Guest-Member-Admin and every role got a different access. In the screenshot above is what the Admin would see. The project was developed as a full-stack application,
                GitHub.
            </>
        ),
        category: "Web Development",
        technologies: ["TALL Stack", "CRUD", "GitHub"],
        image_url: "/images/puhacki_home.png",
        images: ["/images/puhacki_event.png","/images/puhacki_collab.png","/images/puhacki_galler.png","/images/puhacki_sheet.png"],
        link: "",
    },
    {
        id: 4,
        title: "Tinkera VR Physics Game",
        description: (
            <>
                Tinkera was a VR game project made to help younger children feel more motivated to study.
                Our team chose physics as the main topic and created a game where the player has to solve a
                physics problem so that a train can arrive on time.
                <br />
                <br />
                The project was built in Unity using C# and Meta glasses. I worked in a team of 4, and my main
                responsibility was designing the playground/environment that the player sees while playing.
                We used Unity Version Control, formerly Plastic SCM, to keep track of the project.
            </>
        ),
        category: "Game Development",
        technologies: ["Unity", "C#", "Meta Quest", "VR", "Unity Version Control"],
        image_url: "/images/tinkera.JPG",
        images: ["/images/tinkera_game.48.38.png","/images/tinkera_pres.15.08.png"],
        link: "https://www.youtube.com/watch?v=j7l145ulY2c",
    }

]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const isLoading = false;
  const categories = ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))];

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
                A curated selection of individual and team projects.
              </p>
            </motion.div>

            <div className="mb-12">
              <BubbleFilter active={activeFilter} onSelect={setActiveFilter} categories={categories} />
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
