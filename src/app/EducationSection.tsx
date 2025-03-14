import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FeatherIcon from "feather-icons-react";

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4" style={{ background: 'var(--background)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>
          Education
        </h2>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-lg border shadow-sm"
          style={{ 
            background: 'var(--primary)', 
            borderColor: 'var(--secondary)',
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Sage Ridge School</h3>
            <span className="text-sm" style={{ color: 'var(--accent)' }}>Reno, Nevada</span>
          </div>
          
          <div className="mb-6">
            <p className="text-sm mb-2" style={{ color: 'var(--accent)', opacity: 0.9 }}>
              <span className="font-medium">GPA:</span> 4.0 unweighted
            </p>
            <p className="text-sm mb-2" style={{ color: 'var(--accent)', opacity: 0.9 }}>
              <span className="font-medium">PSAT:</span> 1360/1400 with perfect math score (720/720)
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--accent)', opacity: 0.9 }}>
              <span className="font-medium">Honors:</span> Head of School&apos;s List, Pillar of Respect, Pillar of Scholarship
            </p>
            
            <h4 className="font-medium mb-2" style={{ color: 'var(--foreground)' }}>
              Notable Coursework
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Computational Physics", 
                "Honors Algebra II", 
                "AP Computer Science Principles",
                "World History & Religion to 1400",
                "Ancient & Medieval Literature",
                "Spanish II",
              ].map((course, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--accent)', opacity: 0.9 }}>
                  <FeatherIcon icon="check" size={14} />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}