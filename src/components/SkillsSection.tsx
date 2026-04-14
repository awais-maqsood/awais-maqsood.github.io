import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Server, Database, Brain, Wrench, Cloud } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const categories = [
  {
    icon: Code,
    title: "Languages",
    number: "01",
    skills: ["Python (Advanced)", "JavaScript", "PHP", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend",
    number: "02",
    skills: ["FastAPI", "Django", "Flask", "Node.js", "Laravel", "REST APIs", "Microservices"],
  },
  {
    icon: Database,
    title: "Databases",
    number: "03",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "Oracle"],
  },
  {
    icon: Brain,
    title: "AI & ML",
    number: "04",
    skills: ["YOLO (v5/v8)", "OpenCV", "Deep Learning", "Real-Time Video Processing"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    number: "05",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD", "Nginx"],
  },
  {
    icon: Wrench,
    title: "Tools & Frontend",
    number: "06",
    skills: ["Git", "Docker Compose", "Postman", "React.js", "TailwindCSS", "Jira"],
  },
];

function SkillCard({ cat, index }: { cat: typeof categories[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = cat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-5 sm:p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#212121] flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-primary text-base sm:text-lg font-semibold">{cat.title}</h3>
        </div>
        <span className="text-gray-600 text-xs">{cat.number}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-300 bg-[#212121] border border-[#2a2a2a]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Skills &", className: "font-normal text-primary" },
                { text: "Technologies.", className: "italic font-serif text-primary" },
              ]}
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
