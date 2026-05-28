
import React from "react";
import Hero from "@/components/services/website-development/Hero";
import TechStack from "@/components/services/website-development/TechStack";
import ProcessTimeline from "@/components/services/website-development/ProcessTimeline";
import WhatWeOffer from "@/components/services/website-development/WhatWeOffer";
import FAQ from "@/components/services/website-development/FAQ";
import ServiceCTASection from "@/components/services/ServiceCTASection";

const WebsiteDevelopment = () => {
  return <div className="min-h-screen">
      <Hero />
      <WhatWeOffer />
      <TechStack />
      <ProcessTimeline />
      <FAQ />
      
      {/* Standardized CTA Section */}
      <ServiceCTASection 
        title="Ready to Build Your Dream Website?"
        description="Partner with our expert team to create a website that drives results for your business. Let's start your digital transformation journey today."
        buttonText="Start Your Project"
      />
    </div>;
};

export default WebsiteDevelopment;
