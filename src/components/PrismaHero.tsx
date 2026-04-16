import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { value: "10+", label: "Years building production systems" },
  { value: "Millions", label: "Microservices for Jazz/Zong/Telenor" },
  { value: "15x", label: "Query performance improvements" },
];

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

export default function PrismaHero() {
  return (
    <section className="min-h-screen p-4 md:p-6">
      <div className="relative w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-black">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,224,204,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(225,224,204,0.1),transparent_24%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/75" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20 px-3 pt-3 md:px-0 md:pt-0">
          <nav className="bg-black/85 backdrop-blur-xl rounded-full md:rounded-b-3xl md:rounded-t-none px-4 py-2 md:px-8 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <ul className="flex items-center gap-3 sm:gap-5 md:gap-10 lg:gap-12">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200 hover:text-primary"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <motion.div
          className="absolute left-4 right-4 top-20 z-10 md:left-10 md:right-auto md:top-24"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 backdrop-blur-md">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-black">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
              Backend Engineering • Distributed Systems • AI Pipelines
            </span>
          </div>
        </motion.div>

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 md:px-10 pb-6 md:pb-10 z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 items-end">
            <div className="md:col-span-8 space-y-5">
              <h1
                className="max-w-4xl text-[20vw] sm:text-[18vw] md:text-[18vw] lg:text-[17vw] xl:text-[16vw] 2xl:text-[15vw] font-medium leading-[0.84] tracking-[-0.06em] drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Awais" showAsterisk />
              </h1>

              <motion.div
                className="flex flex-wrap gap-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs sm:text-sm text-primary/90 backdrop-blur-md">
                  Python
                </span>
                <span className="rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs sm:text-sm text-primary/90 backdrop-blur-md">
                  FastAPI
                </span>
                <span className="rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs sm:text-sm text-primary/90 backdrop-blur-md">
                  Microservices
                </span>
                <span className="rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs sm:text-sm text-primary/90 backdrop-blur-md">
                  Distributed Systems
                </span>
                <span className="rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs sm:text-sm text-primary/90 backdrop-blur-md">
                  AWS
                </span>
                <span className="rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs sm:text-sm text-primary/90 backdrop-blur-md">
                  AI Pipelines
                </span>
              </motion.div>
            </div>

            <motion.div
              className="md:col-span-4 pb-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-[1.75rem] border border-white/12 bg-black/35 p-5 sm:p-6 md:p-7 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-primary/55">
                      Available for
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-primary">
                      Islamabad, Pakistan • Open to Relocation: UAE / Remote
                    </p>
                  </div>
                  <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
                </div>

              <motion.p
                className="max-w-md text-primary/72 text-xs sm:text-sm md:text-[15px] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Results-driven Senior Backend Engineer with 10+ years of experience building production-grade systems across telecom, finance, and AI analytics. Microservices for millions (Jazz, Zong, Telenor), optimized data pipelines, and AI inference in enterprise products.
              </motion.p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <motion.a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-primary pl-5 sm:pl-6 pr-1 py-1 text-black font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-[0_10px_30px_rgba(225,224,204,0.18)]"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get in touch
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </span>
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-primary/90 backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View projects
                    <ArrowDownRight className="h-4 w-4" />
                  </motion.a>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {heroStats.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-lg font-medium text-primary">{item.value}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-primary/55">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-4 right-4 z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary/70 backdrop-blur-md md:inline-flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          whileHover={{ y: -2 }}
        >
          Scroll
          <ArrowDownRight className="h-3.5 w-3.5" />
        </motion.a>
      </div>
    </section>
  );
}
