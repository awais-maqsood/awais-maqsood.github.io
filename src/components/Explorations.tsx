import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&q=80",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        ScrollTrigger.create({
          trigger: contentRef.current,
          start: "top center",
          end: "bottom center",
          pin: false,
        });
      }

      const col1Items = col1Ref.current?.querySelectorAll(".parallax-item");
      const col2Items = col2Ref.current?.querySelectorAll(".parallax-item");

      col1Items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 100 * (i + 1) },
          {
            y: -100 * (i + 1),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      col2Items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: -80 * (i + 1) },
          {
            y: 80 * (i + 1),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] bg-bg py-16 md:py-24 overflow-hidden">
      <div ref={contentRef} className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-lg">
            Experiments in data visualization, system design, and creative engineering.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 md:gap-40">
          <div ref={col1Ref} className="flex flex-col gap-12">
            {images.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="parallax-item aspect-square max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface"
                style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
              >
                <img src={img} alt={`Exploration ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-12 mt-32">
            {images.slice(3, 6).map((img, i) => (
              <div
                key={i}
                className="parallax-item aspect-square max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface"
                style={{ transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)` }}
              >
                <img src={img} alt={`Exploration ${i + 4}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
