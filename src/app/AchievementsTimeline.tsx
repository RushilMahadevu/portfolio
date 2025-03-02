import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const achievements: Achievement[] = [
  {
    id: 1,
    year: "2023",
    title: "Perfect PSAT Math Score",
    description: "Achieved a 1360/1400 PSAT score with a perfect math score of 720 (> 99%).",
    side: "right"
  },
  {
    id: 2,
    year: "2025",
    title: "National Speech & Debate Association",
    description: "Earned membership and reached Senior Level Debate within just two tournaments.",
    side: "left"
  },
  {
    id: 3,
    year: "2022",
    title: "WCA Speed Cubing Competition",
    description: "Competed in World Cube Association competitions with a record of 18.11 seconds for 3x3.",
    side: "right"
  },
  {
    id: 4,
    year: "2021",
    title: "President's Education Award",
    description: "Received the President's Education Awards Program recognition for academic excellence.",
    side: "left"
  },
  {
    id: 5,
    year: "2014-2021",
    title: "Kumon Mathematics Awards",
    description: "Accomplished 6 Kumon Mathematics Platinum Awards.",
    side: "right"
  },
  {
    id: 6,
    year: "2025",
    title: "Advanced Mathematics Placement",
    description: "Began pursuing advanced sophomore/junior year Algebra II course as a freshman.",
    side: "left"
  },
  {
    id: 7,
    year: "2019-2025",
    title: "Head of School's List",
    description: "Received Head of School's List award throughout all years at Sage Ridge School.",
    side: "right"
  }
];

export default function AchievementsTimeline() {
  return (
    <section className="py-24 px-4 min-h-screen flex flex-col items-center" style={{ background: 'var(--background)' }}>
      <h2 className="text-3xl font-bold mb-20 text-center" style={{ color: 'var(--foreground)' }}>My Journey</h2>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px" style={{ background: 'var(--accent)', opacity: 0.3 }}></div>
        
        {/* Achievements */}
        {achievements.map((achievement) => (
          <TimelineItem key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ achievement }: { achievement: Achievement }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
    rootMargin: "-50px 0px",
  });

  const isLeft = achievement.side === "left";
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      x: isLeft ? -20 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.1
      }
    }
  };
  
  return (
    <div
      className={`flex items-center mb-24 relative ${
        isLeft ? "flex-row-reverse" : ""
      }`}
    >
      {/* Branch line connecting to main timeline */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        className={`absolute top-1/2 h-px w-16 origin-${isLeft ? 'right' : 'left'} ${
          isLeft ? "right-1/2" : "left-1/2"
        } transform ${isLeft ? "translate-x-0.5" : "-translate-x-0.5"}`}
        style={{ background: 'var(--accent)', opacity: 0.6 }}
      ></motion.div>
      
      {/* Content box */}
      <div className={`w-5/12 ${isLeft ? "pr-16" : "pl-16"}`}>
        <motion.div 
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-6 rounded-lg border-l shadow-sm"
          style={{ 
            background: 'var(--primary)', 
            borderColor: 'var(--secondary)',
            borderLeftWidth: '2px'
          }}
          whileHover={{ 
            y: -3,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
            transition: { duration: 0.3 }
          }}
        >
          <span className="font-medium text-sm mb-2 block tracking-wide" style={{ color: 'var(--accent)' }}>{achievement.year}</span>
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>{achievement.title}</h3>
          <p className="leading-relaxed text-sm" style={{ color: 'var(--accent)', opacity: 0.9 }}>{achievement.description}</p>
        </motion.div>
      </div>
      
      {/* Timeline node */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full z-10"
        style={{ background: 'var(--accent)' }}
      ></motion.div>
    </div>
  );
}