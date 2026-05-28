
import React from 'react';
import PynCTA from "@/components/shared/PynCTA";

interface StandardCTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
}

const StandardCTA: React.FC<StandardCTAProps> = ({
  title,
  description,
  primaryButtonText = "Let's Talk",
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = "bg-pyn-dark"
}) => {
  return (
    <PynCTA
      eyebrow="Plan the next move"
      title={title}
      description={description}
      primaryText={primaryButtonText}
      secondaryText={secondaryButtonText}
      secondaryLink={secondaryButtonLink}
      compact={bgColor === "bg-pyn-gray"}
    />
  );
};

export default StandardCTA;
