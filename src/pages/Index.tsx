import PrismaHero from "@/components/PrismaHero";
import PrismaAbout from "@/components/PrismaAbout";
import PrismaFeatures from "@/components/PrismaFeatures";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactFooter from "@/components/ContactFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactFooter />
    </div>
  );
}
