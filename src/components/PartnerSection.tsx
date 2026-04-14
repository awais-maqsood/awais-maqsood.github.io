import { useRef, useCallback } from "react";
import HeroButton from "./HeroButton";

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
];

export default function PartnerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const img = document.createElement("img");
    img.src = gifs[Math.floor(Math.random() * gifs.length)];
    img.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:80px;height:60px;object-fit:cover;border-radius:8px;pointer-events:none;transform:translate(-50%,-50%) rotate(${Math.random() * 20 - 10}deg);transition:opacity 1s,transform 1s;z-index:1;`;
    container.appendChild(img);

    setTimeout(() => {
      img.style.opacity = "0";
      img.style.transform += " scale(0.5)";
    }, 50);
    setTimeout(() => img.remove(), 1100);
  }, []);

  return (
    <section className="w-full py-12 px-6">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] bg-background overflow-hidden flex flex-col items-center justify-center"
      >
        <h2 className="font-serif-accent text-[48px] md:text-[64px] lg:text-[80px] text-body tracking-tight mb-12 relative z-10">
          Partner with me
        </h2>
        <HeroButton href="mailto:awaismaqsood91@gmail.com" className="relative z-10 flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&w=100"
            className="w-10 h-10 rounded-full object-cover"
            alt="Awais"
          />
          Start chat with Awais
        </HeroButton>
      </div>
    </section>
  );
}
