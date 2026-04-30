import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

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
                <span className="text-sm font-medium text-accent tracking-widest uppercase">
                About me
              </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Connecting
                <br />
                <span className="text-secondary">technology and people</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Outside of school, I’m into photography and videography. I’ve done event photoshoots and
                  worked on short films, which gave me a chance to learn how to combine hardware (cameras)
                  with software (Adobe tools). Most importantly, it taught me how to work with real clients
                  who simply want to look their best in the picture.

                </p>

                <p>
                  I also play the clarinet, love playing volleyball and was part of a theater group before moving to Belgium. I like
                  travelling, and I’m a big phone-freak, I enjoy following new phones, comparing features,
                  and seeing how mobile technology keeps changing.
                </p>
                </div>

              {/* Moved here from under the picture */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: "#266843" }} />
                  <span
                      className="text-sm font-medium tracking-widest uppercase"
                      style={{ color: "#266843" }}
                  >
                  Why Applied Computer Science
                </span>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My interest in Applied Computer Science started during high school, where I studied to become a
                    Mechatronics Technician. That field combined both hardware and software, but I found myself
                    especially drawn to the software side — the logic, problem-solving, and creativity behind making
                    systems work.
                  </p>

                  <p>
                    That experience motivated me to continue in this direction. Thomas More University didn't offer just
                    Applied Computer Science, but Applied Computer Science - AI, which felt like an emerging and lasting
                    topic that I want to pursue.
                  </p>
                </div>


              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                {[
                  { value: "2nd", label: "Year Student" },
                  { value: "4+", label: "Academic Projects" },
                  { value: "3", label: "Programming languages" },
                ].map((stat) => (
                    <div key={stat.label}>
                      <div
                          className="font-heading text-2xl md:text-3xl font-bold"
                          style={{ color: "#266843" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Photo and future plans */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
            >
              {/* Replace /about-photo.jpg with your own image path */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card min-h-[560px] md:min-h-[620px] shadow-sm">
                <div className="absolute inset-0 opacity-[0.05]">
                  <svg viewBox="0 0 500 620" fill="none" className="w-full h-full">
                    <rect x="36" y="36" width="428" height="548" stroke="#266843" strokeWidth="2" />
                    <rect x="72" y="72" width="356" height="476" stroke="#abbc83" strokeWidth="2" />
                    <circle cx="250" cy="310" r="120" stroke="#dca563" strokeWidth="2" />
                  </svg>
                </div>

                <img
                    src="/images/i8 denim job.jpg"
                    alt="Portrait or visual representing my Applied Computer Science journey"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                    className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                />

                <div
                    className="absolute top-5 right-5 w-10 h-10 rounded-sm rotate-45 opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundColor: "#dca563" }}
                />

                {!imageLoaded && (
                    <div className="relative z-10 h-full min-h-[560px] md:min-h-[620px] flex flex-col items-center justify-center text-center p-8">
                      <div
                          className="w-16 h-16 rounded-xl border border-border flex items-center justify-center mb-4"
                          style={{ backgroundColor: "#26684318" }}
                      >
                        <div
                            className="w-7 h-7 rotate-45 rounded-sm"
                            style={{ backgroundColor: "#266843" }}
                        />
                      </div>

                      <p className="font-heading font-semibold text-lg">Image space</p>

                    </div>
                )}
              </div>

              {/* Future plans paragraph under the picture */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: "#dca563" }} />
                  <span
                      className="text-sm font-medium tracking-widest uppercase"
                      style={{ color: "#dca563" }}
                  >
                  Future Plans
                </span>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    After getting more hands-on experience with programming, I realized
                    that I do not want to work only behind a screen. I also need human connection, teamwork, and
                    communication in my work.
                  </p>
                  <p>In the future, I would like to grow into a role where I can connect
                    clients with the team working on the technical solution. I feel like it would be a shame not to use the soft skills I have developed, such as presenting,
                    leading, motivating, and bringing people together.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}