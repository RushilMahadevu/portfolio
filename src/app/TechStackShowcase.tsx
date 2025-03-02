"use client";
import { motion } from "framer-motion";
import { FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiSupabase, SiTypescript } from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export default function TechStackShowcase() {
  const techStack: TechItem[] = [
    { name: "Python", icon: <FaPython size={28} /> },
    { name: "JavaScript", icon: <FaJs size={28} /> },
    { name: "TypeScript", icon: <SiTypescript size={28} /> },
    { name: "React", icon: <FaReact size={28} /> },
    { name: "Node.js", icon: <FaNodeJs size={28} /> },
    { name: "HTML", icon: <FaHtml5 size={28} /> },
    { name: "CSS", icon: <FaCss3Alt size={28} /> },
    { name: "Git", icon: <FaGitAlt size={28} /> },
    { name: "Firebase", icon: <SiFirebase size={28} /> },
    { name: "Supabase", icon: <SiSupabase size={28} /> }
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
              <div 
                className="mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {tech.icon}
              </div>
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