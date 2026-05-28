
import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import AISolutionsSection from "@/components/home/AISolutionsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import StatsSection from "@/components/home/StatsSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AISolutionsSection />
      <ServicesSection />
      <TechStackSection />
      <StatsSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
};

export default Index;
