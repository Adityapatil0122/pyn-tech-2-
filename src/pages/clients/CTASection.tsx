
import React from "react";
import PynCTA from "@/components/shared/PynCTA";

const CTASection = () => {
  return (
    <PynCTA
      eyebrow="Your story can be next"
      title="Ready to Join Our Success Stories?"
      description="Let's discuss how we can help you achieve your business goals with our tailored digital solutions."
      primaryText="Let's Talk"
      secondaryText="See Our Services"
      secondaryLink="/services/website-development"
      compact
    />
  );
};

export default CTASection;
