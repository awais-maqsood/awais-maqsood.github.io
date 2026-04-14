import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import HeroButton from "./HeroButton";

export default function PricingSection() {
  const { ref, inView } = useInViewAnimation();
  const a = (delay: string) => (inView ? "animate-fade-in-up" : "opacity-0");

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:ml-auto">
        {/* Dark card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-dark text-primary-foreground shadow-[inset_0_2px_20px_rgba(0,0,0,0.3)] ${a("0.1s")}`}
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="text-[22px] font-medium mt-8 mb-2 text-light">Monthly Retainer</h3>
          <p className="text-light-muted text-sm leading-relaxed mb-6">
            A dedicated senior backend engineer.<br />You work directly with Awais.
          </p>
          <p className="text-2xl font-semibold text-light">$5,000</p>
          <p className="text-light-muted text-sm mb-6">Monthly</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <HeroButton href="mailto:awaismaqsood91@gmail.com">Start a chat</HeroButton>
            <HeroButton variant="secondary" href="mailto:awaismaqsood91@gmail.com">How it works</HeroButton>
          </div>
        </div>

        {/* Light card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-background shadow-[0_4px_16px_rgba(0,0,0,0.08)] ${a("0.2s")}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-[22px] font-medium text-dark mt-8 mb-2">Custom Project</h3>
          <p className="text-muted-text text-sm leading-relaxed mb-6">
            Fixed scope, fixed timeline.<br />Same expertise, same standards.
          </p>
          <p className="text-2xl font-semibold text-body">$5,000</p>
          <p className="text-muted-text text-sm mb-6">Minimum</p>
          <HeroButton variant="tertiary" href="mailto:awaismaqsood91@gmail.com">Start a chat</HeroButton>
        </div>
      </div>
    </section>
  );
}
