import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import HeroButton from "@/components/HeroButton";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import CopyrightBar from "@/components/CopyrightBar";
import BottomNav from "@/components/BottomNav";

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
];

const allMarquee = [...marqueeImages, ...marqueeImages];

export default function Index() {
  const { ref: heroRef, inView: heroInView } = useInViewAnimation();
  const a = (delay: string) => (heroInView ? "animate-fade-in-up" : "opacity-0");

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section ref={heroRef} className="flex flex-col items-center text-center max-w-[440px] mx-auto px-6 pt-12 md:pt-16">
        <h1
          className={`font-serif-accent text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-dark tracking-tight mb-4 ${a("0.1s")}`}
          style={{ animationDelay: "0.1s" }}
        >
          Awais Maqsood
        </h1>
        <p
          className={`font-mono text-xs md:text-sm text-dark mb-2 ${a("0.2s")}`}
          style={{ animationDelay: "0.2s" }}
        >
          Senior Backend Engineer & AI Systems Architect
        </p>
        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-body tracking-tight whitespace-nowrap ${a("0.3s")}`}
          style={{ animationDelay: "0.3s" }}
        >
          Build the <span className="font-serif-accent">next wave,</span>
          <br />
          the <span className="font-serif-accent">bold way.</span>
        </h2>

        <div
          className={`flex flex-col gap-6 text-sm md:text-base text-dark leading-relaxed mt-5 md:mt-6 ${a("0.4s")}`}
          style={{ animationDelay: "0.4s" }}
        >
          <p>
            I spent 10+ years crafting production-grade backend systems across telecom, finance, and AI domains — building platforms that serve millions of users at Jazz, Zong, and Telenor.
          </p>
          <p>
            Now I bring that same level of engineering rigor to innovators shaping what comes next. From microservices architecture to AI-powered analytics pipelines, I move fast without cutting corners.
          </p>
          <p>Projects start at $5,000 per month.</p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${a("0.5s")}`}
          style={{ animationDelay: "0.5s" }}
        >
          <HeroButton href="mailto:awaismaqsood91@gmail.com">Start a chat</HeroButton>
          <HeroButton variant="secondary" href="#projects">View projects</HeroButton>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
        <div className="flex animate-marquee w-max">
          {allMarquee.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg"
            />
          ))}
        </div>
      </div>

      <div id="about">
        <TestimonialSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <TestimonialCarousel />
      <div id="projects">
        <ProjectsSection />
      </div>
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
