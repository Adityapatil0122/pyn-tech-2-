
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PynCTA from "@/components/shared/PynCTA";

interface StandardCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
}

export const StandardCTA: React.FC<StandardCTAProps> = ({
  title = "Ready to Transform Your Business with AI?",
  description = "Let our experts help you implement the right AI solutions for your specific business needs.",
  buttonText = "Start Your AI Journey",
  buttonIcon = <ArrowRight className="ml-2 h-5 w-5" />
}) => {
  return (
    <PynCTA
      eyebrow="AI launch path"
      title={title}
      description={description}
      primaryText={buttonText}
      secondaryText="Discuss the Use Case"
      compact
    />
  );
};
