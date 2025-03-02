"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export default function TechStackShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  const techStack: TechItem[] = [
    { name: "Python", icon: "terminal", color: "#3776AB" },
    { name: "JavaScript", icon: "code", color: "#F7DF1E" },
    { name: "React", icon: "code", color: "#61DAFB" },
    { name: "Node.js", icon: "server", color: "#339933" },
    { name: "HTML", icon: "layout", color: "#E34F26" },
    { name: "CSS", icon: "feather", color: "#1572B6" },
    { name: "Git", icon: "git-branch", color: "#F05032" },
    { name: "Firebase", icon: "database", color: "#FFCA28" },
    { name: "Supabase", icon: "database", color: "#3ECF8E" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 px-6 bg-primary">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          Tech Stack
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="bg-secondary rounded-lg p-6 flex flex-col items-center cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 25px -5px ${tech.color}33` 
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              transition={{
                y: { type: "spring", stiffness: 300 }
              }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ 
                  backgroundColor: `${tech.color}22`,
                  color: tech.color
                }}
              >
                <FeatherIcon icon={tech.icon} size={24} />
              </div>
              
              <h3 className="text-lg font-medium">
                {tech.name}
              </h3>
              
              <motion.div
                className="mt-2 h-0.5 bg-accent"
                initial={{ width: 0 }}
                animate={{ 
                  width: hoveredTech === tech.name ? "100%" : "0%" 
                }}
                style={{ 
                  backgroundColor: tech.color
                }}
                transition={{
                  duration: 0.3
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}