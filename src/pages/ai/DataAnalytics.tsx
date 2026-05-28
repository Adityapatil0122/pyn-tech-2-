
import React from "react";

// Import our updated hero component
import { Hero } from "@/components/ai/data-analytics/hero";

// Import other components
import { StatsSection } from "@/components/ai/data-analytics/StatsSection";
import { CapabilitiesSection } from "@/components/ai/data-analytics/CapabilitiesSection";
import { ProcessSection } from "@/components/ai/data-analytics/ProcessSection";
import { IndustrySolutions } from "@/components/ai/data-analytics/IndustrySolutions";
import { BenefitsSection } from "@/components/ai/data-analytics/BenefitsSection";
import { CTASection } from "@/components/ai/data-analytics/CTASection";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Updated Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsSection />
        <CapabilitiesSection />
        <ProcessSection />
        <IndustrySolutions />
        <BenefitsSection />
      </div>
      <CTASection />
    </div>
  );
};

export default DataAnalytics;
