import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Journal from "@/components/Journal";
import Explorations from "@/components/Explorations";
import Stats from "@/components/Stats";
import ContactFooter from "@/components/ContactFooter";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection] = useState("hero");

  return (
    <div className="min-h-screen bg-bg">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar activeSection={activeSection} />
          <Hero />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <ContactFooter />
        </>
      )}
    </div>
  );
}
