import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const FEATURE_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const featureCards = [
  {
    type: "video" as const,
    title: "Serving millions of telecom users.",
  },
  {
    type: "card" as const,
    number: "01",
    title: "CI/CD Automation",
    metric: "40% faster deploys",
    href: "#projects",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Reduced deployment time by 40%",
      "Weekly releases via Docker CI/CD",
      "Modular systems reducing regression risk",
    ],
  },
  {
    type: "card" as const,
    number: "02",
    title: "Performance Optimization",
    metric: "15x query speed",
    href: "#projects",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "Optimized large-scale queries achieving 15x performance improvement",
      "Reduced report time from 45s to under 3s",
      "High availability design for critical flows",
    ],
  },
  {
    type: "card" as const,
    number: "03",
    title: "AI Productivity Gains",
    metric: "60% less manual work",
    href: "#projects",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Delivered AI-powered analytics reducing manual work by 60%",
      "GPU-optimized inference for real-time video processing",
      "Computer vision pipelines for audit automation",
    ],
  },
];

function FeatureCard({ card, index }: { card: typeof featureCards[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group rounded-2xl overflow-hidden h-full"
    >
      {card.type === "video" ? (
        <div className="relative h-full min-h-[320px] lg:min-h-0 overflow-hidden rounded-2xl border border-[#2a2a2a]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          >
            <source src={FEATURE_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <span className="text-[10px] tracking-[0.16em] uppercase text-primary/80">Impact Highlight</span>
          </div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-7">
            <p className="text-base sm:text-lg font-medium" style={{ color: "#E1E0CC" }}>
              {card.title}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#151515] border border-[#2a2a2a] p-6 sm:p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_45px_-30px_rgba(255,255,255,0.25)]">
          <img
            src={card.icon}
            alt=""
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover mb-5"
          />
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-primary/55 text-xs font-medium tracking-wider">{card.number}</span>
              <h3 className="text-primary text-base sm:text-lg font-semibold">{card.title}</h3>
            </div>
            {"metric" in card && card.metric ? (
              <span className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary/90">
                {card.metric}
              </span>
            ) : null}
          </div>
          <ul className="space-y-3 flex-1 min-h-[152px]">
            {card.items!.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-primary/80 mt-0.5 shrink-0" />
                <span className="text-gray-200/85 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          {"href" in card && card.href ? (
            <a
              href={card.href}
              className="inline-flex items-center gap-1.5 text-primary text-sm mt-5 opacity-85 hover:opacity-100 transition-opacity"
            >
              View related projects
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : null}
        </div>
      )}
    </motion.div>
  );
}

export default function PrismaFeatures() {
  return (
    <section className="bg-black relative py-20 md:py-32 px-4 sm:px-6">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4">
            Measurable Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle
              containerClassName="justify-center"
              segments={[
                { text: "Key", className: "font-normal text-primary" },
                { text: "Achievements.", className: "italic font-serif font-normal text-primary" },
              ]}
            />
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary/60 max-w-2xl mx-auto leading-relaxed">
            Measurable impact across delivery velocity, system performance, and AI-led automation.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:h-[500px]">
          {featureCards.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
