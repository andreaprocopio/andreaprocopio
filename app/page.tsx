export const dynamic = "auto";

import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { RecentProjects } from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <RecentProjects />
      <Contacts />
      <Footer />
    </div>
  );
}
