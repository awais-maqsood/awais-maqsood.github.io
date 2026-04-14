import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

const aboutText =
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

export default function PrismaAbout() {
  const paragraphRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = aboutText.split("");

  return (
    <section className="bg-black py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-3xl md:rounded-[2.5rem] px-6 sm:px-10 md:px-16 py-16 md:py-24 text-center">
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 md:mb-12">
            Visual arts
          </p>

          {/* Multi-style heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 md:mb-16">
            <WordsPullUpMultiStyle
              containerClassName="justify-center"
              segments={[
                { text: "I am Marcus Chen,", className: "font-normal" },
                { text: "a self-taught director.", className: "italic font-serif" },
                { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal" },
              ]}
            />
          </h2>

          {/* Scroll-linked paragraph */}
          <div
            ref={paragraphRef}
            className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed"
            style={{ color: "#DEDBC8" }}
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                index={i}
                totalChars={chars.length}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
