import HeroButton from "./HeroButton";

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-background rounded-full px-8 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.12),0_0_0_0.5px_rgba(0,0,0,0.05)] flex items-center gap-4">
      <span className="font-serif-accent text-2xl font-semibold text-dark">A</span>
      <HeroButton href="mailto:awaismaqsood91@gmail.com" className="text-xs px-5 py-2">Start a chat</HeroButton>
    </div>
  );
}
