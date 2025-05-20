export const dynamic = "force-dynamic";

import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { RecentProjects } from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <TechStack />
      <RecentProjects />
      <Contacts />
      <Footer />
    </div>
  );
}
