
import React from 'react';
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import ColorfulIcon, { type ColorfulIconPalette } from "@/components/icons/ColorfulIcon";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color?: string;
  palette?: ColorfulIconPalette;
}

const ServiceCard = ({ icon, title, description, features, palette = "violet" }: ServiceCardProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
    >
      <div className="p-6">
        <ColorfulIcon icon={icon} palette={palette} className="mb-4" />
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="mb-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <Check className="h-4 w-4 text-pyn-blue mr-2" weight="bold" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
