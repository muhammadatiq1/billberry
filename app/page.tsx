import HeroSection from "@/components/home/HeroSection";
import StrugglesSection from "@/components/home/StrugglesSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />
      <StrugglesSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
      <BlogSection />
    </div>
  );
}
