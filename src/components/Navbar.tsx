import { useState, useEffect } from "react";

interface NavbarProps {
  activeSection: string;
}

const navItems = ["Home", "Work", "Resume"];

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSayHi, setHoveredSayHi] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <button
          className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
          style={{ transform: logoHovered ? "scale(1.1)" : "scale(1)" }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: logoHovered
                ? "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)"
                : "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              padding: "1.5px",
            }}
          >
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary">AM</span>
            </div>
          </div>
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav Links */}
        {navItems.map((item) => {
          const isActive =
            item === "Home"
              ? activeSection === "hero"
              : activeSection === item.toLowerCase();
          return (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                isActive
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {item}
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Say hi */}
        <button
          className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary transition-all duration-200"
          onMouseEnter={() => setHoveredSayHi(true)}
          onMouseLeave={() => setHoveredSayHi(false)}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          {hoveredSayHi && (
            <span
              className="absolute rounded-full"
              style={{
                inset: "-2px",
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                zIndex: -1,
              }}
            />
          )}
          <span className={`relative z-10 ${hoveredSayHi ? "bg-surface rounded-full px-3 sm:px-4 py-1.5 sm:py-2 -mx-3 sm:-mx-4 -my-1.5 sm:-my-2 backdrop-blur-md inline-flex" : ""}`}>
            Say hi ↗
          </span>
        </button>
      </div>
    </nav>
  );
}
