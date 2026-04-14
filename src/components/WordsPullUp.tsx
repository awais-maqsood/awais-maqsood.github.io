import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export default function WordsPullUp({ text, className = "", showAsterisk = false, delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: delay + i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {showAsterisk && i === words.length - 1 ? (
              <span className="relative">
                {word}
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              </span>
            ) : (
              word
            )}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
