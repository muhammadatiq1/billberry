import HeroSection from "@/components/home/HeroSection";
import StrugglesSection from "@/components/home/StrugglesSection";
import AboutSection from "@/components/home/AboutSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import TrustBadges from "@/components/home/TrustBadges";
import LeadMagnet from "@/components/home/LeadMagnet";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <HeroSection />
      <TrustBadges />
      <StrugglesSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      <LeadMagnet />
    </div>
  );
}
