
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
  title = "Make AI Useful Inside Your Actual Workflow",
  description = "Bring us the messy process, repeated task, or customer bottleneck. We will help shape it into a practical AI system.",
  buttonText = "Map the AI Plan",
  buttonIcon = <ArrowRight className="ml-2 h-5 w-5" />
}) => {
  return (
    <PynCTA
      eyebrow="AI launch path"
      title={title}
      description={description}
      primaryText={buttonText}
      secondaryText="Talk Through the Use Case"
      compact
    />
  );
};
