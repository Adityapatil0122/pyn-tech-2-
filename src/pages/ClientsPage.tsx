
import { useEffect } from "react";
import HeroSection from "./clients/HeroSection";
import ClientLogosSection from "./clients/ClientLogosSection";
import ImpactSection from "./clients/ImpactSection";
import CTASection from "./clients/CTASection";

const ClientsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ClientLogosSection />
      <ImpactSection />
      <CTASection />
    </div>
  );
};

export default ClientsPage;
