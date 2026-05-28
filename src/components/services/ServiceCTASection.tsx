
import React from "react";
import PynCTA from "@/components/shared/PynCTA";

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const ServiceCTASection: React.FC<ServiceCTAProps> = ({
  title = "Ready to Transform Your Ideas Into Reality?",
  description = "Partner with our expert team to create solutions that drive results for your business. Let's start your digital transformation journey today.",
  buttonText = "Start Your Project"
}) => {
  return (
    <PynCTA
      eyebrow="Build with Pyn"
      title={title}
      description={description}
      primaryText={buttonText}
      secondaryText="Talk Through the Scope"
    />
  );
};

export default ServiceCTASection;
