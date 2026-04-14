import { Quote } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useEffect, useRef, useState } from "react";

export default function TestimonialSection() {
  const { ref, inView } = useInViewAnimation();
  const imgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      setOffset(Math.max(-200, Math.min(200, (progress - 0.5) * 400)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const a = (delay: string) =>
    inView ? "animate-fade-in-up" : "opacity-0";

  return (
    <section ref={ref} className="py-12 px-6 max-w-2xl mx-auto text-center">
      <div className={a("0.1s")} style={{ animationDelay: "0.1s" }}>
        <Quote className="w-6 h-6 text-dark mx-auto mb-4" />
      </div>
      <h2
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-body tracking-tight ${a("0.2s")}`}
        style={{ animationDelay: "0.2s" }}
      >
        I spent a decade building systems for{" "}
        <span className="font-serif-accent">millions of users</span> — now I help startups do the same
      </h2>
      <p
        className={`italic text-sm text-muted-text mt-4 ${a("0.3s")}`}
        style={{ animationDelay: "0.3s" }}
      >
        Awais Maqsood
      </p>
      <div
        className={`flex items-center justify-center gap-8 mt-8 ${a("0.4s")}`}
        style={{ animationDelay: "0.4s" }}
      >
        {["FastAPI", "AWS", "Python"].map((name) => (
          <span key={name} className="text-dark font-medium text-lg">
            {name}
          </span>
        ))}
      </div>
      <div
        ref={imgRef}
        className={`mt-10 ${a("0.5s")}`}
        style={{ animationDelay: "0.5s", transform: `translateY(${offset * 0.15}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
          alt="Awais Maqsood"
          className="w-full max-w-xs mx-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
