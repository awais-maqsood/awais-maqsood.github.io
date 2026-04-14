import { motion, useTransform, type MotionValue } from "framer-motion";

interface Props {
  char: string;
  index: number;
  totalChars: number;
  scrollProgress: MotionValue<number>;
}

export default function AnimatedLetter({ char, index, totalChars, scrollProgress }: Props) {
  const charProgress = index / totalChars;
  const opacity = useTransform(
    scrollProgress,
    [Math.max(0, charProgress - 0.1), charProgress + 0.05],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}
