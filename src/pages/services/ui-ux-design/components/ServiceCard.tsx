
import React from 'react';
import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
    >
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pyn-blue/10 text-pyn-blue ring-1 ring-pyn-blue/15">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="mb-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <Check className="h-4 w-4 text-pyn-blue mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
