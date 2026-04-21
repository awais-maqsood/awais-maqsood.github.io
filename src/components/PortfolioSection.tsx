import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Play } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const ASSISTME_VIDEO = "https://www.ideationtec.com/public/assets/videos/assist-me.mp4";
const ASSISTME_THUMBNAIL = "https://www.ideationtec.com/public/assets/images/AssistMeAI.webp";
const PORTALL_VIDEO = "https://www.ideationtec.com/public/assets/videos/Portall-mobile-animation-after-changes.mp4";
const PORTALL_THUMBNAIL = "https://www.ideationtec.com/public/assets/images/portall-product.webp";
const DEIKHO_VIDEO = "https://www.ideationtec.com/public/assets/videos/deikho_animation_new_third_option.mp4";
const DEIKHO_THUMBNAIL = "https://www.ideationtec.com/public/assets/images/deikho-product.webp";
const ZONGTV_VIDEO = "https://www.ideationtec.com/public/assets/videos/Zong-TV-1080-1267.mp4";
const ZONGTV_THUMBNAIL = "https://www.ideationtec.com/public/assets/images/zongtv-product(1).webp";
const WHATSIN_VIDEO = "https://ideationtec.com/public/assets/videos/whatsin2.mp4";
const WHATSIN_THUMBNAIL = "https://ideationtec.com/public/assets/images/whatsin-product.webp";
const ASL_THUMBNAIL = "https://imagedelivery.net/Rmmhp349ne_13yq62E1wTw/fbf0dc5f-d81b-40f5-19a6-2b76f04f5e00/public";
const RETAIL_ANALYTICS_THUMBNAIL = "https://www.unite.ai/wp-content/uploads/2024/12/AI-Video-Analytics-in-retail-.webp";

const featuredProject = {
  name: "AssistMe AI",
  category: "Featured Product",
  tech: "AI Assistant, Mobile Product, Conversational UX",
  description:
    "An AI assistant experience presented as a polished mobile product, combining chat, translation, prompts, and productivity tools in a consumer-friendly interface.",
  bullets: [
    "Media-led showcase using the official product video and thumbnail.",
    "Designed to present the project in a more premium, portfolio-first format.",
  ],
  video: ASSISTME_VIDEO,
  thumbnail: ASSISTME_THUMBNAIL,
};

const projects = [
  {
    name: "PortAll (Jazz) — Cloud Storage Backend",
    tech: "Python, AWS (S3), PostgreSQL, Docker",
    video: PORTALL_VIDEO,
    thumbnail: PORTALL_THUMBNAIL,
    bullets: [
      "Cloud storage backend with secure multi-device access for Jazz.",
      "Zero-downtime S3 migration serving millions of users.",
    ],
  },
  {
    name: "Retail AI Analytics — YOLO Analytics Platform",
    tech: "Python, YOLO, OpenCV, Deep Learning",
    thumbnail: RETAIL_ANALYTICS_THUMBNAIL,
    bullets: [
      "YOLO-based real-time tracking and behavioral analysis system.",
      "Reduced manual audit effort by 60% using automated computer vision pipelines.",
    ],
  },
  {
    name: "ASL Recognition System — Real-time Gesture Recognition",
    tech: "Python, Deep Learning, OpenCV",
    thumbnail: ASL_THUMBNAIL,
    bullets: [
      "Real-time gesture recognition using deep learning achieving 92%+ accuracy.",
      "Optimized model inference for real-time performance.",
    ],
  },
  {
    name: "Deikho — Digital Content Platform",
    tech: "Streaming Platform, Digital Content, OTT Experience",
    video: DEIKHO_VIDEO,
    thumbnail: DEIKHO_THUMBNAIL,
    bullets: [
      "Premier digital content platform featuring international films, local shows, and original series.",
      "Covers diverse genres including action, romance, comedy, and more in a unified viewing experience.",
    ],
  },
  {
    name: "WhatsIn — Lifestyle Entertainment Platform",
    tech: "Infotainment, Fashion, Travel, Food, Fitness",
    video: WHATSIN_VIDEO,
    thumbnail: WHATSIN_THUMBNAIL,
    bullets: [
      "Exclusive, original shows across infotainment, fashion, travel, food, and fitness.",
      "Built as a vibrant lifestyle platform tailored for diverse audience segments.",
    ],
  },
  {
    name: "Zong TV — Video Streaming Service",
    tech: "OTT Platform, Live Channels, On-Demand Streaming",
    video: ZONGTV_VIDEO,
    thumbnail: ZONGTV_THUMBNAIL,
    bullets: [
      "Video streaming service with 40+ live channels from local, regional, and international sources.",
      "Delivers seamless streaming with movies, series, and rich on-demand content.",
    ],
  },
];

function FeaturedProjectCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#2a2a2a] bg-[#121212]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-black">
          <img
            src={featuredProject.thumbnail}
            alt="AssistMe AI product thumbnail"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={featuredProject.thumbnail}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          >
            <source src={featuredProject.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/60" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-md">
            <Play className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary/80">Featured Case Study</span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-primary/45">{featuredProject.category}</p>
            <h3 className="mb-2 text-2xl font-semibold text-primary sm:text-3xl">{featuredProject.name}</h3>
            <p className="mb-5 text-xs text-primary/40">{featuredProject.tech}</p>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">{featuredProject.description}</p>

            <ul className="space-y-3">
              {featuredProject.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                  <span className="text-sm leading-relaxed text-gray-400">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-primary/80">
            <span>Product showcase</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
      {(project.video || project.thumbnail) && (
        <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-black">
          {project.video ? (
            <>
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={`${project.name} thumbnail`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={project.thumbnail}
                className="relative z-[1] h-40 w-full object-cover opacity-95"
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </>
          ) : (
            <img
              src={project.thumbnail}
              alt={`${project.name} thumbnail`}
              className="h-40 w-full object-cover"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}
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
      <div className="max-w-6xl mx-auto">
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

        <div className="space-y-5">
          <FeaturedProjectCard />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
