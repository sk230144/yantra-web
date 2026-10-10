import { AboutSection } from "@/components/home/AboutSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { FeaturedWorksSection } from "@/components/home/FeaturedWorksSection";
import { GrowthStatsSection } from "@/components/home/GrowthStatsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HospitalsSection } from "@/components/home/HospitalsSection";
import { HowSeoWorksSection } from "@/components/home/HowSeoWorksSection";
import { RecentDeliveriesSection } from "@/components/home/RecentDeliveriesSection";
import { RecognitionSection } from "@/components/home/RecognitionSection";
import { SeoResultsSection } from "@/components/home/SeoResultsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { TeamSection } from "@/components/home/TeamSection";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { WideHome } from "@/components/wide/WideHome";

export default function Home() {
  return (
    <>
      <div className="overflow-x-clip md:hidden">
        <SiteHeader />
        <main>
          <HeroSection />
          <ClientsSection />
          <ServicesSection />
          <FeaturedWorksSection />
          <WorkflowSection />
          <SeoResultsSection />
          <HowSeoWorksSection />
          <GrowthStatsSection />
          <HospitalsSection />
          <DoctorsSection />
          <RecentDeliveriesSection />
          <CaseStudySection />
          <AboutSection />
          <RecognitionSection />
          <TeamSection />
        </main>
        <SiteFooter />
      </div>
      <div className="wide-site hidden md:block">
        <WideHome />
      </div>
    </>
  );
}
