import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const FEATURE_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const featureCards = [
  {
    type: "video" as const,
    title: "Building scalable systems.",
  },
  {
    type: "card" as const,
    number: "01",
    title: "OZGPT — Zong",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "AI chatbot platform",
      "Multi-channel integrations",
      "Translation pipelines",
      "Enterprise-scale deployment",
    ],
  },
  {
    type: "card" as const,
    number: "02",
    title: "PortAll — Jazz",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "Cloud storage backend",
      "Zero-downtime S3 migration",
      "Secure multi-device access",
    ],
  },
  {
    type: "card" as const,
    number: "03",
    title: "Retail AI Analytics",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "YOLO-based real-time tracking",
      "Behavioral analysis system",
      "60% manual audit reduction",
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
      className="rounded-2xl md:rounded-3xl overflow-hidden h-full"
    >
      {card.type === "video" ? (
        <div className="relative h-full min-h-[300px] lg:min-h-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={FEATURE_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5 sm:p-6">
            <p className="text-sm sm:text-base font-medium" style={{ color: "#E1E0CC" }}>
              {card.title}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#212121] p-5 sm:p-6 flex flex-col h-full">
          <img
            src={card.icon}
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-4"
          />
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-gray-500 text-xs">{card.number}</span>
            <h3 className="text-primary text-sm sm:text-base font-medium">{card.title}</h3>
          </div>
          <ul className="space-y-2.5 flex-1">
            {card.items!.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-primary text-xs sm:text-sm mt-4 hover:opacity-70 transition-opacity"
          >
            Learn more
            <ArrowRight className="w-3 h-3 -rotate-45" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function PrismaFeatures() {
  return (
    <section className="min-h-screen bg-black relative py-20 md:py-32 px-4 sm:px-6">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-3xl mx-auto">
            <WordsPullUpMultiStyle
              containerClassName="justify-center"
              segments={[
                { text: "Production-grade backend systems & AI pipelines.", className: "text-primary" },
                { text: "Serving millions. Engineered for scale.", className: "text-gray-500" },
              ]}
            />
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {featureCards.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
