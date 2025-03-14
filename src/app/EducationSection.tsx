import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FeatherIcon from "feather-icons-react";

// Define types for component props
interface AchievementProps {
  label: string;
  value: string;
}

interface CourseItemProps {
  course: string;
}

// Achievement component for academic stats
const Achievement: React.FC<AchievementProps> = ({ label, value }) => (
  <motion.p variants={item} className="text-md" style={{ color: 'var(--accent)', opacity: 0.9 }}>
    <span className="font-medium">{label}:</span> {value}
  </motion.p>
);

// Course component for individual course items
const CourseItem: React.FC<CourseItemProps> = ({ course }) => (
  <motion.li 
    variants={item}
    className="flex items-center gap-3 text-md p-2 rounded-md hover:translate-x-0.5 transition-all duration-300" 
    style={{ color: 'var(--accent)', opacity: 0.9 }}
  >
    <FeatherIcon icon="check" size={16} className="flex-shrink-0" />
    <span>{course}</span>
  </motion.li>
);

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Course list
  const courses = [
    "Computational Physics", 
    "Honors Algebra II", 
    "AP Computer Science Principles",
    "World History & Religion to 1400",
    "Ancient & Medieval Literature",
    "Spanish II",
  ];

  return (
    <section className="py-32 px-6" style={{ background: 'var(--background)' }}>
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center" 
          style={{ color: 'var(--foreground)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="p-10 rounded-lg border shadow-md"
          style={{ 
            background: 'var(--primary)', 
            borderColor: 'var(--secondary)',
          }}
        >
          {/* School header */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Sage Ridge School</h3>
            <span className="text-md mt-2 sm:mt-0" style={{ color: 'var(--accent)' }}>Reno, Nevada</span>
          </motion.div>
          
          <div className="mb-10 space-y-6">
            {/* Academic achievements */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid gap-4"
            >
              <Achievement label="GPA" value="4.0 unweighted" />
              <Achievement label="PSAT" value="1360/1400 with perfect math score (720/720)" />
              <Achievement label="Honors" value="Head of School's List, Pillar of Respect, Pillar of Scholarship" />
            </motion.div>
            
            {/* Coursework section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <h4 className="text-xl font-medium mb-4" style={{ color: 'var(--foreground)' }}>
                Notable Coursework
              </h4>
              <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {courses.map((course, i) => (
                  <CourseItem key={i} course={course} />
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}