import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const contactCards = [
  { icon: Mail, label: "EMAIL", value: "awaismaqsood91@gmail.com", href: "mailto:awaismaqsood91@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+92-334-5922584", href: "tel:+923345922584" },
  { icon: MapPin, label: "LOCATION", value: "Islamabad, Pakistan", href: undefined },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/awaismaqsood" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/awaismaqsood" },
];

export default function ContactFooter() {
  const { ref, inView } = useInViewAnimation(0.1);

  return (
    <section id="contact" ref={ref} className="bg-black py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 mb-24">
          {/* Left - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">Get in Touch</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Let's build<br />
                <span className="font-['Instrument_Serif'] italic">something great.</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-6 max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:awaismaqsood91@gmail.com"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Say hello
                <span className="w-8 h-8 rounded-full bg-primary-foreground text-foreground flex items-center justify-center">
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <div className="flex flex-col gap-4 md:w-[340px]">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1), ease: [0.22, 1, 0.36, 1] }}
              >
                {card.href ? (
                  <a href={card.href} className="block bg-card rounded-2xl p-6 hover:bg-card/80 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                        <card.icon size={18} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{card.label}</p>
                        <p className="text-sm text-foreground mt-0.5">{card.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-card rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                        <card.icon size={18} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{card.label}</p>
                        <p className="text-sm text-foreground mt-0.5">{card.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Branding */}
          <div>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-3">Awais Maqsood</p>
            <h3 className="text-xl font-bold text-foreground mb-3">Full-Stack Developer & AI Engineer</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm">
              Building thoughtful web products, AI tools, and production-ready systems with strong engineering fundamentals.
            </p>
            <a
              href="mailto:awaismaqsood91@gmail.com"
              className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm text-foreground hover:bg-card transition-colors"
            >
              awaismaqsood91@gmail.com
              <ArrowRight size={14} className="-rotate-45" />
            </a>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">Elsewhere</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-card rounded-xl px-5 py-3.5 text-sm text-foreground hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <link.icon size={18} className="text-muted-foreground" />
                    {link.label}
                  </div>
                  <ArrowRight size={14} className="-rotate-45" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
