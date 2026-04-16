import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const experiences = [
  {
    company: "Ideation",
    role: "Senior Backend Engineer / Technical Lead",
    period: "Dec 2019 – Present",
    location: "Islamabad, Pakistan",
    bullets: [
      "Architected microservices-based backend systems for telecom platforms (Jazz, Zong, Telenor) serving millions of users.",
      "Designed APIs and data models powering 4+ production systems.",
      "Implemented JazzCash payment integration handling high-volume financial transactions with zero downtime.",
      "Reduced deployment time by 40% via Docker-based CI/CD pipelines enabling weekly releases.",
      "Optimized MySQL queries on 40M+ records reducing report time from 45s to under 3s.",
      "Built scalable cloud storage backend (PortAll) with zero-downtime S3 migration.",
    ],
  },
  {
    company: "Octaloop Technologies",
    role: "AI & Full Stack Engineer (Part-Time)",
    period: "2022 – Present",
    location: "Remote",
    bullets: [
      "Built AI-powered retail analytics platform using YOLO with real-time tracking and behavioral insights.",
      "Reduced manual audit effort by 60% using automated computer vision pipelines.",
      "Developed GPU-optimized inference pipelines for real-time video processing.",
      "Built ASL recognition system achieving 92%+ accuracy.",
    ],
  },
  {
    company: "Frontier Works Organization (FWO)",
    role: "Software Engineer / Project Lead",
    period: "2017 – 2019",
    location: "Islamabad, Pakistan",
    bullets: [
      "Led backend for motorway toll automation system processing thousands of daily transactions.",
      "Built enterprise HR system for 1000+ employees.",
      "Integrated biometric hardware with secure backend APIs.",
    ],
  },
  {
    company: "Integrated Dynamic Solutions",
    role: "Software Engineer",
    period: "2014 – 2017",
    location: "Islamabad, Pakistan",
    bullets: [
      "Developed ERP modules (finance, HR, reporting) improving operational efficiency.",
      "Designed modular backend architecture reducing regression risk.",
    ],
  },
  {
    company: "Research Analytics International",
    role: "Software Developer",
    period: "2013 – 2014",
    location: "Pakistan",
    bullets: ["Built data-driven web applications and improved system performance by 30%."],
  },
];

const education = {
  institution: "International Islamic University Islamabad",
  degree: "BS Software Engineering",
  period: "2010 – 2014",
  location: "Islamabad, Pakistan",
};

function ExperienceCard({ exp, index }: { exp: typeof experiences[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
        <div>
          <h3 className="text-primary text-lg sm:text-xl font-semibold">{exp.company}</h3>
          <p className="text-primary/70 text-sm font-medium">{exp.role}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-primary/60 text-sm">{exp.period}</p>
          <p className="text-gray-500 text-xs">{exp.location}</p>
        </div>
      </div>
      <ul className="space-y-2.5">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <ArrowUpRight className="w-3.5 h-3.5 text-primary/40 mt-1 shrink-0" />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const eduRef = useRef<HTMLDivElement>(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-80px" });
  const languagesRef = useRef<HTMLDivElement>(null);
  const languagesInView = useInView(languagesRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="bg-black py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Experience &", className: "font-normal text-primary" },
                { text: "Education.", className: "italic font-serif text-primary" },
              ]}
            />
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}

          {/* Education */}
          <motion.div
            ref={eduRef}
            initial={{ opacity: 0, y: 30 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8"
          >
            <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-3">Education</p>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-primary text-lg sm:text-xl font-semibold">{education.institution}</h3>
                <p className="text-primary/70 text-sm">{education.degree}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-primary/60 text-sm">{education.period}</p>
                <p className="text-gray-500 text-xs">{education.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            ref={languagesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={languagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8"
          >
            <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-3">Languages</p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-primary/60 mt-0.5">•</span>
                <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">English (Fluent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary/60 mt-0.5">•</span>
                <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">Urdu (Native)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary/60 mt-0.5">•</span>
                <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">Punjabi (Native)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
