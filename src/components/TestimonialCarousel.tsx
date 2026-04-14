import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "Awais architected our entire microservices platform. His deep expertise in Python and distributed systems transformed how we handle millions of transactions daily.",
    name: "Marcus Anderson",
    role: "CTO → Telecom Platform",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&w=100",
  },
  {
    quote: "The AI analytics pipeline Awais built reduced our manual audit effort by 60%. His ability to integrate YOLO-based computer vision into production was remarkable.",
    name: "Sarah Chen",
    role: "Founder → Octaloop Technologies",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=100",
  },
  {
    quote: "Awais optimized our database queries on 40M+ records from 45 seconds to under 3 seconds. That kind of performance engineering is rare.",
    name: "James Mitchell",
    role: "VP Engineering → Jazz",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&w=100",
  },
  {
    quote: "Working with Awais on our cloud storage migration was seamless. Zero downtime S3 migration with a backend serving millions of users.",
    name: "Rachel Foster",
    role: "Product Lead → PortAll",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&w=100",
  },
  {
    quote: "From system design to deployment, Awais delivered our toll automation system processing thousands of daily transactions with bulletproof reliability.",
    name: "David Zhang",
    role: "Director → FWO",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=100",
  },
];

const tripled = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation();
  const [current, setCurrent] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((c) => c + 1);
  }, []);

  const prev = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((c) => c - 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, next]);

  const handleTransitionEnd = () => {
    if (current >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrent(testimonials.length);
    } else if (current < testimonials.length) {
      setIsTransitioning(false);
      setCurrent(testimonials.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <section ref={ref} className="w-full py-20 overflow-hidden">
      <div className="px-6 md:max-w-4xl md:ml-auto mb-8 flex items-center justify-between">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-body tracking-tight">
          What <span className="font-serif-accent">builders</span> say
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-dark text-dark" />
            ))}
          </div>
          <span className="text-sm text-dark font-medium">5/5</span>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-center gap-3 px-6 mb-4">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-body/20 flex items-center justify-center hover:bg-secondary transition cursor-pointer">
            <ChevronLeft className="w-5 h-5 text-body" />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-body/20 flex items-center justify-center hover:bg-secondary transition cursor-pointer">
            <ChevronRight className="w-5 h-5 text-body" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 px-6"
            style={{
              transform: `translateX(calc(-${current} * (min(427.5px, calc(100vw - 48px)) + 24px)))`,
              transition: isTransitioning ? "transform 0.8s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {tripled.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[427.5px] bg-background rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-dark mb-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2.017-2-2H5C3.76 3 3 3.76 3 5v4c0 1.25.76 2 2 2h2c0 4-2 6-4 6zm12 0c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-3c-1.24 0-2 .76-2 2v4c0 1.25.76 2 2 2h2c0 4-2 6-4 6z" fill="currentColor" />
                </svg>
                <p className="text-base text-body leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-dark">{t.name}</p>
                    <p className="text-sm text-muted-text">→ {t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
