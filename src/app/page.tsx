"use client";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import { useState, useRef } from "react";
import AchievementsTimeline from "./AchievementsTimeline";
import TechStackShowcase from "./TechStackShowcase";
import ProjectsShowcase from "./ProjectsShowcase";
import EducationSection from "./EducationSection";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [waveHovered, setWaveHovered] = useState(false);
  const techStackRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center relative">
        {/* Social links in top right */}
        <motion.div
          className="fixed top-0 right-0 flex gap-5 z-50 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/RushilMahadevu"
            target="_blank"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FeatherIcon icon="github" size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rushil-mahadevu-b2a86333a/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FeatherIcon icon="linkedin" size={24} />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1"
            aria-label="Resume"
          >
            <FeatherIcon icon="file-text" size={24} />
          </motion.a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold"
        >
          Welcome{" "}
          <motion.span
            onMouseEnter={() => setWaveHovered(true)}
            onMouseLeave={() => setWaveHovered(false)}
            animate={waveHovered ? { rotateZ: [0, 15, -10, 10, -5, 0] } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ display: "inline-block", transformOrigin: "bottom right" }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-lg text-gray-300 max-w-md text-center"
        >
          I&apos;m{" "}
          <span className="text-white font-medium">Rushil Mahadevu</span>, a
          developer focused on creating solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.7,
          }}
          className="absolute bottom-12"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            animate={{ y: hovered ? [0, 5, 0] : 0 }}
            transition={{ repeat: hovered ? Infinity : 0, duration: 1.2 }}
            className="cursor-pointer p-2"
          >
            <FeatherIcon icon="chevron-down" size={32} />
          </motion.div>
        </motion.div>
      </main>

      <div ref={techStackRef} className="space-y-32 mb-32">
        <AchievementsTimeline />
        <EducationSection />
        <TechStackShowcase />
        <ProjectsShowcase />
      </div>
    </>
  );
}
