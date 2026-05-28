
import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessTimeline from "./components/ProcessTimeline";
import FAQSection from "./components/FAQSection";
import ToolsSection from "./components/ToolsSection";
import DesignPrinciples from "./components/DesignPrinciples";
import ServiceCTASection from "@/components/services/ServiceCTASection";
import SectionWrapper from "../graphics-designing/components/SectionWrapper";

const UiUxDesign = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline />
      
      {/* Design Principles Section with SectionWrapper */}
      <SectionWrapper
        background="gray"
        title="How We Approach UX/UI Design"
        description="Our approach to UI/UX design is guided by time-tested principles that ensure intuitive, effective, and beautiful digital experiences."
        badge="Design Principles"
      >
        <DesignPrinciples />
      </SectionWrapper>
      
      <ToolsSection />
      <FAQSection />
      
      {/* Using standardized CTA Section */}
      <ServiceCTASection 
        title="Ready to Create an Exceptional User Experience?"
        description="Let's collaborate to design interfaces that delight your users and drive business results."
        buttonText="Start Your Project"
      />
    </div>
  );
};

export default UiUxDesign;
