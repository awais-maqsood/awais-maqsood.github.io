import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Systems Built" },
  { value: "100M+", label: "Users Served" },
];

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center py-8 border-t border-stroke"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
