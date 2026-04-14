import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hls from "hls.js";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/awaismaqsood" },
  { label: "GitHub", href: "https://github.com/awaismaqsood" },
  { label: "Email", href: "mailto:awaismaqsood91@gmail.com" },
];

const marqueeText = "BUILDING THE FUTURE • ";

export default function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* BG Video (flipped) */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) scaleY(-1)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-12 md:mb-16">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-8xl font-display italic text-text-primary/10 mx-4"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-20 px-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display italic text-text-primary mb-6">
            Let's work together
          </h2>
          <p className="text-sm md:text-base text-muted mb-8 max-w-md mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to production.
          </p>
          <a
            href="mailto:awaismaqsood91@gmail.com"
            className="group relative inline-flex items-center gap-2 rounded-full text-sm px-8 py-4 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <span>awaismaqsood91@gmail.com</span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="border-t border-stroke pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted">Available for projects</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xs text-muted/50">© {new Date().getFullYear()} Awais Maqsood. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
