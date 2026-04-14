import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const projects = [
  {
    name: "OZGPT",
    desc: "AI chatbot platform with multi-channel integrations for Zong",
    img: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  },
  {
    name: "PortAll",
    desc: "Cloud storage backend serving millions with zero-downtime S3 migration",
    img: "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  },
  {
    name: "Retail AI Analytics",
    desc: "YOLO-based real-time tracking and behavioral analysis system",
    img: "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  },
];

function ProjectItem({ project }: { project: typeof projects[0] }) {
  const { ref, inView } = useInViewAnimation();
  return (
    <div ref={ref} className={inView ? "animate-fade-in-up" : "opacity-0"}>
      <div className="ml-20 md:ml-28 mb-4">
        <h3 className="font-serif-accent text-2xl md:text-3xl font-semibold text-dark">{project.name}</h3>
        <p className="text-sm md:text-base text-dark/70">{project.desc}</p>
      </div>
      <img src={project.img} alt={project.name} className="w-full rounded-2xl shadow-lg object-cover" />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((p) => (
          <ProjectItem key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
