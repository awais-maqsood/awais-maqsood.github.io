import { motion } from "framer-motion";

const projects = [
  {
    title: "OZGPT Platform",
    category: "AI / Chatbot",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "PortAll Cloud Storage",
    category: "Cloud / Infrastructure",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    span: "md:col-span-5",
    aspect: "aspect-square",
  },
  {
    title: "Retail AI Analytics",
    category: "Computer Vision",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    span: "md:col-span-5",
    aspect: "aspect-square",
  },
  {
    title: "Telecom Microservices",
    category: "Backend Architecture",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            Featured <span className="font-display italic">projects</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-lg">
            A selection of systems I've architected and shipped, from concept to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`${project.span} group relative overflow-hidden rounded-3xl bg-surface border border-stroke ${project.aspect} cursor-pointer`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex items-center justify-center">
                <div className="relative rounded-full px-6 py-3 overflow-hidden">
                  <div className="absolute inset-0 accent-gradient animate-gradient-shift rounded-full" />
                  <div className="relative bg-surface rounded-full px-5 py-2">
                    <span className="text-sm text-text-primary">
                      View — <span className="font-display italic">{project.title}</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-white/60 uppercase tracking-wider">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
