import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Code, Server, Database, Brain, Wrench, Cloud } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const categories = [
  {
    icon: Code,
    title: "Languages",
    number: "01",
    domain: "Core Engineering",
    skills: ["Python (Advanced)", "JavaScript", "PHP"],
  },
  {
    icon: Server,
    title: "Backend",
    number: "02",
    domain: "Core Engineering",
    skills: [
      "FastAPI",
      "Django",
      "Flask",
      "Node.js",
      "Laravel",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "High Availability Design",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    number: "03",
    domain: "Data & AI",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "Oracle"],
  },
  {
    icon: Brain,
    title: "AI & ML",
    number: "04",
    domain: "Data & AI",
    skills: ["YOLO (v5/v8)", "OpenCV", "Deep Learning", "Real-Time Video Processing"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    number: "05",
    domain: "Platform",
    skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Kubernetes", "CI/CD", "Nginx"],
  },
  {
    icon: Wrench,
    title: "Tools & Frontend",
    number: "06",
    domain: "Tooling",
    skills: ["Git", "Docker Compose", "Postman", "Apache JMeter", "Jira", "React.js", "TailwindCSS"],
  },
];

const skillFilters = ["All", "Core Engineering", "Data & AI", "Platform", "Tooling"] as const;
type SkillFilter = (typeof skillFilters)[number];

function SkillCard({ cat, index }: { cat: typeof categories[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = cat.icon;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      exit={{ opacity: 0, y: 14, scale: 0.985 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-[#151515] border border-[#2a2a2a] rounded-2xl p-6 sm:p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_45px_-30px_rgba(255,255,255,0.25)]"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center transition-colors duration-300 group-hover:border-primary/30">
            <Icon className="w-5 h-5 text-primary/90" />
          </div>
          <h3 className="text-primary text-lg font-semibold">{cat.title}</h3>
        </div>
        <span className="text-primary/55 text-xs font-medium tracking-wider">{cat.number}</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-200/90 bg-[#1f1f1f] border border-[#2a2a2a] leading-relaxed"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("All");
  const filterCounts = useMemo(
    () =>
      skillFilters.reduce<Record<SkillFilter, number>>((acc, filter) => {
        acc[filter] = filter === "All" ? categories.length : categories.filter((cat) => cat.domain === filter).length;
        return acc;
      }, {} as Record<SkillFilter, number>),
    [],
  );
  const filteredCategories = useMemo(
    () => categories.filter((cat) => activeFilter === "All" || cat.domain === activeFilter),
    [activeFilter],
  );

  return (
    <section id="skills" className="bg-black py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4">
            Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Technical", className: "font-normal text-primary" },
                { text: "Skills.", className: "italic font-serif text-primary" },
              ]}
            />
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary/60 max-w-2xl leading-relaxed">
            Core technologies I use to design, build, optimize, and scale production systems.
          </p>
        </div>

        <div className="mb-7 flex flex-wrap items-center gap-2.5 rounded-2xl border border-[#232323] bg-[#101010]/85 p-2.5">
          {skillFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs sm:text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  isActive
                    ? "border-primary/45 bg-primary/15 text-primary shadow-[0_10px_20px_-15px_rgba(255,255,255,0.6)]"
                    : "border-[#2a2a2a] bg-[#141414] text-primary/70 hover:border-primary/25 hover:text-primary/90"
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? "bg-primary/20 text-primary" : "bg-[#212121] text-primary/60"
                  }`}
                >
                  {filterCounts[filter]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs sm:text-sm text-primary/65">
            {activeFilter === "All" ? "Showing all categories" : `Showing ${activeFilter}`}
          </p>
          <p className="text-xs sm:text-sm text-primary/55">{filteredCategories.length} categories</p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, i) => (
              <SkillCard key={cat.title} cat={cat} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
