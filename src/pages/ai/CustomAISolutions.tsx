
import React from "react";
import { Hero } from "@/components/ai/custom-solutions/hero";
import { SolutionsGrid } from "@/components/ai/custom-solutions/SolutionsGrid";
import { Capabilities } from "@/components/ai/custom-solutions/Capabilities";
import { ProcessTimeline } from "@/components/ai/custom-solutions/ProcessTimeline";
import { Industries } from "@/components/ai/custom-solutions/Industries";
import { TechnicalSpecs } from "@/components/ai/custom-solutions/TechnicalSpecs";
import { StandardCTA } from "@/components/ai/shared/StandardCTA";

const CustomAISolutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4">
        <SolutionsGrid />
        <Capabilities />
        <ProcessTimeline />
        <Industries />
        <TechnicalSpecs />
      </div>
      <StandardCTA
        title="Transform Your Business with AI"
        description="Let's discuss how custom AI solutions can solve your most challenging business problems and create sustainable competitive advantages."
        buttonText="Start Your AI Journey"
      />
    </div>
  );
};

export default CustomAISolutions;
