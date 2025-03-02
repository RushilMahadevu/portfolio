import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kalimu Website",
    description: "A responsive AI education website built with Javascript, CSS, and HTML.",
    technologies: ["React", "Vite", "Framer Motion", "Gemini-2.0-flash-exp"],
    imageUrl: "/images/kalimu.png",
    githubUrl: "https://github.com/RushilMahadevu/kalimu"
  },

  // more here
];

export default function ProjectsShowcase() {
  return (
    <section className="py-24 px-4" style={{ background: 'var(--background)' }}>
      <h2 className="text-3xl font-bold mb-16 text-center" style={{ color: 'var(--foreground)' }}>
        My Projects
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-lg overflow-hidden border shadow-sm"
      style={{ background: 'var(--primary)', borderColor: 'var(--secondary)' }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="h-52 relative overflow-hidden">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          {project.title}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--accent)', opacity: 0.9 }}>
          {project.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs rounded-full"
              style={{ background: 'var(--secondary)', color: 'var(--accent)' }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}