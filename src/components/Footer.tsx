import { ArrowUpRight } from "lucide-react";
import HeroButton from "./HeroButton";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <HeroButton href="mailto:awaismaqsood91@gmail.com">Start a chat</HeroButton>
        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-5 h-5 text-dark mt-1" />
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <a href="#projects" className="text-base text-dark hover:opacity-70 transition">Projects</a>
              <a href="#pricing" className="text-base text-dark hover:opacity-70 transition">Services</a>
              <a href="#about" className="text-base text-dark hover:opacity-70 transition">About</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://linkedin.com/in/awaismaqsood" target="_blank" rel="noopener noreferrer" className="text-base text-dark hover:opacity-70 transition">LinkedIn</a>
              <a href="mailto:awaismaqsood91@gmail.com" className="text-base text-dark hover:opacity-70 transition">Email</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
