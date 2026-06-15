import HeroSection from "@/components/home/HeroSection";
import StrugglesSection from "@/components/home/StrugglesSection";
import AboutSection from "@/components/home/AboutSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />
      <StrugglesSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      <BlogSection />
    </div>
  );
}
