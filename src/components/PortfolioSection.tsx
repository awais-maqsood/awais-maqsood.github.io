import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const projects = [
  {
    name: "OZGPT (Zong) — AI Chatbot Platform",
    tech: "Python, FastAPI, NLP, Multi-Channel",
    bullets: [
      "AI chatbot platform with multi-channel integrations and translation pipelines for Zong.",
      "Enterprise-scale deployment serving millions of telecom users.",
    ],
  },
  {
    name: "PortAll (Jazz) — Cloud Storage Backend",
    tech: "Python, AWS (S3), PostgreSQL, Docker",
    bullets: [
      "Cloud storage backend with secure multi-device access for Jazz.",
      "Zero-downtime S3 migration serving millions of users.",
    ],
  },
  {
    name: "Retail AI Analytics — YOLO Analytics Platform",
    tech: "Python, YOLO, OpenCV, Deep Learning",
    bullets: [
      "YOLO-based real-time tracking and behavioral analysis system.",
      "Reduced manual audit effort by 60% using automated computer vision pipelines.",
    ],
  },
  {
    name: "ASL Recognition System — Real-time Gesture Recognition",
    tech: "Python, Deep Learning, OpenCV",
    bullets: [
      "Real-time gesture recognition using deep learning achieving 92%+ accuracy.",
      "Optimized model inference for real-time performance.",
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 flex flex-col"
    >
      <h3 className="text-primary text-base sm:text-lg font-semibold mb-1">{project.name}</h3>
      <p className="text-primary/40 text-xs mb-5">{project.tech}</p>
      <ul className="space-y-2.5">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-primary/50 mt-0.5 shrink-0" />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="projects" className="bg-black py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4">
            Selected Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Selected", className: "font-normal text-primary" },
                { text: "Projects.", className: "italic font-serif text-primary" },
              ]}
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
