"use client";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import { useState, useRef } from "react";
import AchievementsTimeline from "./AchievementsTimeline";
import TechStackShowcase from "./TechStackShowcase";
import ProjectsShowcase from "./ProjectsShowcase";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const techStackRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center relative">
        {/* Social links in top right */}
        <motion.div 
          className="absolute top-8 right-8 flex gap-5"
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
            href="mailto:rushil.mahadevu@gmail.com?subject=Hello%20from%20Portfolio"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <FeatherIcon icon="mail" size={24} />
          </motion.a>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold"
        >
          Welcome 👋
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-lg text-gray-300 max-w-md text-center"
        >
          I&apos;m <span className="text-white font-medium">Rushil Mahadevu</span>, a developer focused on creating solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 1.8,
            duration: 0.7
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
      
      <div ref={techStackRef}>
        <AchievementsTimeline />
        <TechStackShowcase />
        <ProjectsShowcase />
      </ div>
    </>
  );
}