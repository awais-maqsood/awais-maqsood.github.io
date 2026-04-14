import PrismaHero from "@/components/PrismaHero";
import PrismaAbout from "@/components/PrismaAbout";
import PrismaFeatures from "@/components/PrismaFeatures";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
