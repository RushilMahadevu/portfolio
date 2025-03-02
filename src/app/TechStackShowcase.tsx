"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";

interface TechItem {
  name: string;
  icon: string;
}

export default function TechStackShowcase() {
  const techStack: TechItem[] = [
    { name: "Python", icon: "terminal" },
    { name: "JavaScript", icon: "hash" },
    { name: "React", icon: "layers" },
    { name: "Node.js", icon: "server" },
    { name: "HTML", icon: "layout" },
    { name: "CSS", icon: "edit-3" },
    { name: "Git", icon: "git-branch" },
    { name: "Firebase", icon: "database" },
    { name: "Supabase", icon: "grid" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 px-4" id="tech-stack" style={{ background: 'var(--background)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-20 text-center"
          style={{ color: 'var(--foreground)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 border-b-2 border-transparent"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                borderBottomColor: 'var(--accent)'
              }}
              transition={{ duration: 0.2 }}
            >
              <FeatherIcon 
                icon={tech.icon} 
                size={28} 
                className="mb-3"
                style={{ color: 'var(--accent)' }}
              />
              <span 
                className="text-base font-medium text-center"
                style={{ color: 'var(--foreground)' }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}