import { motion } from "framer-motion";

const entries = [
  {
    title: "Building AI Chatbots at Scale for Telecom",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    readTime: "5 min",
    date: "Mar 2026",
  },
  {
    title: "Zero-Downtime Migration of Petabyte Storage",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    readTime: "8 min",
    date: "Feb 2026",
  },
  {
    title: "YOLO-Based Real-Time Analytics in Retail",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
    readTime: "6 min",
    date: "Jan 2026",
  },
  {
    title: "Microservices Patterns for High-Traffic Systems",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    readTime: "7 min",
    date: "Dec 2025",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            Recent <span className="font-display italic">thoughts</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-lg">
            Notes on engineering, architecture, and building systems that scale.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors duration-300 cursor-pointer group"
            >
              <img
                src={entry.img}
                alt={entry.title}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shrink-0"
              />
              <span className="flex-1 text-sm sm:text-base text-text-primary group-hover:text-text-primary/80 transition-colors truncate">
                {entry.title}
              </span>
              <span className="text-xs text-muted hidden sm:block">{entry.readTime}</span>
              <span className="text-xs text-muted hidden md:block">{entry.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
