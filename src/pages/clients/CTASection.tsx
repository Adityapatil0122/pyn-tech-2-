
import React from "react";
import PynCTA from "@/components/shared/PynCTA";

const CTASection = () => {
  return (
    <PynCTA
      eyebrow="Your brand deserves a better digital story"
      title="Let us build the next standout client story together"
      description="Bring your goal, challenge, or rough idea. Pyn will help shape it into a clear digital experience that customers can trust and act on."
      primaryText="Start a Project"
      secondaryText="See Our Services"
      secondaryLink="/services/website-development"
      compact
    />
  );
};

export default CTASection;
