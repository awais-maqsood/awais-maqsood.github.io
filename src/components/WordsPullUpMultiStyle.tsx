import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

interface Props {
  segments: Segment[];
  containerClassName?: string;
  delay?: number;
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = "", delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const allWords: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((word) => {
      allWords.push({ word, className: seg.className || "" });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${containerClassName}`}>
      {allWords.map((item, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: delay + i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
