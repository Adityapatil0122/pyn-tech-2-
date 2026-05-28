
import React from "react";

// Import our refactored components
import { StatsCards } from "@/components/ai/integration/StatsCards";
import { IntegrationFeatures } from "@/components/ai/integration/IntegrationFeatures";
import { TechnologiesGrid } from "@/components/ai/integration/TechnologiesGrid";
import { ProcessTimeline } from "@/components/ai/integration/ProcessTimeline";
import { CTASection } from "@/components/ai/integration/CTASection";
import { Hero } from "@/components/ai/integration/hero";

const AIIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Updated to use the new Hero component */}
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCards />
        <IntegrationFeatures />
        <TechnologiesGrid />
        <ProcessTimeline />
      </div>
      <CTASection />
    </div>
  );
};

export default AIIntegration;
