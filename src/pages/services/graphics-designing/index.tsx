
import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import ProcessTimeline from "./components/ProcessTimeline";
import DesignPrinciples from "./components/DesignPrinciples";
import FAQSection from "./components/FAQSection";
import SectionWrapper from "./components/SectionWrapper";
import ServiceCTASection from "@/components/services/ServiceCTASection";

const GraphicsDesigning = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <SectionWrapper
        background="gray"
        title="Our Graphics Design Services"
        description="Transform your brand with our professional graphics design services, tailored to capture attention and communicate your message effectively."
        badge="Design Services"
      >
        <ServicesGrid />
      </SectionWrapper>
      
      <SectionWrapper
        title="Our Design Process"
        description="We follow a structured, collaborative approach to bring your vision to life."
        badge="Design Process"
      >
        <ProcessTimeline />
      </SectionWrapper>
      
      <SectionWrapper
        background="gray"
        title="Design Principles We Follow"
        description="Our design approach is guided by fundamental principles that ensure effective visual communication."
        badge="Design Philosophy"
      >
        <DesignPrinciples />
      </SectionWrapper>
      
      <SectionWrapper
        title="Frequently Asked Questions"
        description="Find answers to common questions about our graphics design services."
        badge="Common Questions"
      >
        <FAQSection />
      </SectionWrapper>
      
      <ServiceCTASection
        title="Ready to Transform Your Visual Identity?"
        description="Let's discuss how our graphic design expertise can elevate your brand and help you connect with your audience more effectively."
        buttonText="Start Your Graphics Project"
      />
    </div>
  );
};

export default GraphicsDesigning;
