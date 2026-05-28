
import React from 'react';
import Hero from "../../../components/services/digital-marketing/Hero";
import MarketingServices from "../../../components/services/digital-marketing/MarketingServices";
import ProcessTimeline from "../../../components/services/digital-marketing/ProcessTimeline";
import MarketingFAQ from "../../../components/services/digital-marketing/MarketingFAQ";
import ServiceCTASection from "../../../components/services/ServiceCTASection";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketingServices />
      <ProcessTimeline />
      <MarketingFAQ />
      <ServiceCTASection 
        title="Ready to Boost Your Digital Marketing Results?"
        description="Partner with our expert team to create data-driven marketing strategies that deliver measurable ROI. Let's grow your business together."
        buttonText="Start Your Marketing"
      />
    </div>
  );
};

export default DigitalMarketing;
