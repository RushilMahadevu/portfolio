'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { 
  ChevronDownIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  TrophyIcon,
  BriefcaseIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaStackOverflow } from 'react-icons/fa';
import Navigation from '../components/Navigation';

// Typing animation component with better UX timing
const TypingAnimation = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, started]);

  return (
    <span className={className}>
      {displayText}
      {started && currentIndex < text.length && <span className="animate-pulse text-blue-400">|</span>}
    </span>
  );
};

// Enhanced animated counter with smooth transitions
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Enhanced skills data with proficiency levels
const skills = {
  "Languages": [
    { name: "Python", level: "Advanced", years: "3+" },
    { name: "TypeScript", level: "Advanced", years: "2+" },
    { name: "JavaScript", level: "Advanced", years: "3+" },
    { name: "HTML/CSS", level: "Expert", years: "4+" }
  ],
  "Frameworks": [
    { name: "React", level: "Advanced", years: "2+" },
    { name: "Next.js", level: "Intermediate", years: "1+" },
    { name: "Node.js", level: "Intermediate", years: "2+" },
    { name: "FastAPI", level: "Intermediate", years: "1+" }
  ],
  "Tools": [
    { name: "Git", level: "Advanced", years: "3+" },
    { name: "Firebase", level: "Intermediate", years: "2+" },
    { name: "Machine Learning", level: "Intermediate", years: "1+" },
    { name: "Algorithms", level: "Advanced", years: "3+" }
  ]
};

// Projects data
const projects = [
  {
    title: "Strides Over Stigma",
    description: "Founded a Reno-based running organization to raise awareness and support mental health through community events. Developed the full-stack website with interactive features for event registration and social engagement.",
    tech: ["TypeScript", "React", "Full-Stack"],
    category: "Social Impact",
    github: "#"
  },
  {
    title: "NFTruth",
    description: "Created an AI-powered system to detect fraudulent NFT collections by analyzing metadata, social signals, and transaction patterns. Achieved 95%+ confidence ratings for top-tier collections.",
    tech: ["Python", "FastAPI", "Machine Learning"],
    category: "AI/ML",
    github: "#"
  },
  {
    title: "Kalimu",
    description: "Built an AI-assisted educational roadmap generator that recommends personalized learning paths based on user goals and skill levels.",
    tech: ["JavaScript", "HTML/CSS", "Firebase"],
    category: "Education",
    github: "#"
  },
  {
    title: "RB-BFS Maze Engine",
    description: "Designed a pathfinding visualizer that compares recursive backtracking with breadth-first search on grid mazes. Focused on algorithm visualization and UI clarity.",
    tech: ["Python", "Algorithms"],
    category: "Visualization",
    github: "#"
  }
];

// Timeline data with more comprehensive information
const timelineData = [
  {
    year: "2024-2025",
    title: "Mathematics & Reading Tutor",
    organization: "Kumon Learning Center",
    type: "work",
    description: "Delivered personalized instruction using the Kumon Method to students of varying ages and abilities. Developed strong communication and mentoring skills while fostering positive learning environments.",
    icon: BriefcaseIcon,
    skills: ["Teaching", "Communication", "Mentoring"]
  },
  {
    year: "2024",
    title: "Founder & Developer",
    organization: "Strides Over Stigma",
    type: "project",
    description: "Created a Reno-based running and wellness initiative aimed at reducing mental health stigma through community events and full-stack platform development.",
    icon: TrophyIcon,
    skills: ["Leadership", "Full-Stack Development", "Community Building"]
  },
  {
    year: "2022-2028",
    title: "High School Student",
    organization: "Sage Ridge School",
    type: "education",
    description: "Maintaining 4.0 GPA while pursuing rigorous AP coursework. PSAT: 1360/1400 (720 Math - 99th Percentile). Head of School's List every academic year.",
    icon: AcademicCapIcon,
    skills: ["Academic Excellence", "Time Management", "Leadership"]
  }
];

// Achievements data
const achievements = [
  {
    title: "President's Education Award",
    years: "2019, 2021",
    description: "National distinction by U.S. Department of Education for sustained academic excellence",
    category: "Academic"
  },
  {
    title: "Kumon Mathematics Platinum Award",
    years: "2018-2021",
    description: "6× recipient for performing years above grade level in mathematics",
    category: "Academic"
  },
  {
    title: "World Cube Association Competitor",
    years: "2022-Present",
    description: "Official speedcuber with 18.11s personal best in 3x3 solving",
    category: "Competition"
  },
  {
    title: "NSDA Senior Rank",
    years: "2024",
    description: "Achieved Senior Level status within two tournaments, tying school record",
    category: "Debate"
  }
];

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      
      {/* Hero Section - Clean and Minimal */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
              Rushil Mahadevu
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
              <TypingAnimation 
                text="High School Student • Software Developer • STEM Leader"
                className="text-gray-700"
                delay={500}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Passionate about building meaningful technology solutions at the intersection of 
              AI, education, and mental health. Currently maintaining a 4.0 GPA while developing 
              real-world applications and contributing to open-source projects.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <a 
              href="mailto:rushil.mahadevu@gmail.com" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-none hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Get in touch
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-900 rounded-none hover:border-gray-400 transition-colors duration-200 font-medium"
            >
              View Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Quick Stats - Clean Typography */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">
                <AnimatedCounter end={4} /><span className="text-2xl">.0</span>
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">GPA</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">
                <AnimatedCounter end={1360} />
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">PSAT Score</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">
                <AnimatedCounter end={99} suffix="th" />
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">Math Percentile</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Typography Focus */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
              About
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                  I&apos;m a driven high school student with a passion for technology and problem-solving. 
                  Currently maintaining a 4.0 GPA while pursuing advanced coursework in computer science 
                  and mathematics at Sage Ridge School in Reno, Nevada.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  I believe in using technology to create meaningful impact, particularly in areas like 
                  mental health awareness, education, and community building. My approach combines technical 
                  skills with a deep understanding of real-world problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Current Focus</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Full-stack web development with React and TypeScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Machine learning and AI applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Open-source contributions and competitive programming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Mental health awareness initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Detailed Typography */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div 
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-gray-900 border-b border-gray-200 pb-3">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900">{skill.name}</div>
                        <div className="text-sm text-gray-500">{skill.years} experience</div>
                      </div>
                      <div className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Card Layout */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article 
                key={project.title}
                className="bg-white p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l border-gray-200 last:border-l-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full -ml-px"></div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="text-gray-600 font-medium mb-3">{item.organization}</div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs text-gray-600 border border-gray-200 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recognition & Achievements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.title}
                className="bg-white p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{achievement.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                    {achievement.years}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-3 font-light">
                  {achievement.description}
                </p>
                
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {achievement.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed mb-12 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I&apos;m always interested in discussing new opportunities, collaborating on meaningful projects, 
            or simply connecting with like-minded individuals. Feel free to reach out.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:rushil.mahadevu@gmail.com"
              className="flex items-center justify-center gap-3 p-4 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Email</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 p-4 border border-gray-200">
              <PhoneIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">(775) 400-8961</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 border border-gray-200">
              <MapPinIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Reno, Nevada</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://github.com/RushilMahadevu" 
              target="_blank"
              className="p-3 border border-gray-200 hover:border-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5 text-gray-600" />
            </a>
            <a 
              href="https://stackoverflow.com/users/18443852/rushil-mahadevu" 
              target="_blank"
              className="p-3 border border-gray-200 hover:border-gray-300 transition-colors"
              aria-label="Stack Overflow Profile"
            >
              <FaStackOverflow className="w-5 h-5 text-gray-600" />
            </a>
            <a 
              href="https://leetcode.com/u/RushilMahadevu" 
              target="_blank"
              className="p-3 border border-gray-200 hover:border-gray-300 transition-colors"
              aria-label="LeetCode Profile"
            >
              <CodeBracketIcon className="w-5 h-5 text-gray-600" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-light">
            &copy; 2025 Rushil Mahadevu. Designed with care using Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}