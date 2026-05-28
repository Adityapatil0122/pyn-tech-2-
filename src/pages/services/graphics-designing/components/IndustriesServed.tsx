
import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "E-commerce & Retail",
    description: "Compelling product imagery, packaging designs, and brand identities that drive sales and customer loyalty.",
    examples: ["Product catalogs", "Packaging design", "Social media templates", "Promotional graphics"],
    color: "bg-gradient-to-br from-pyn-blue to-pyn-blue"
  },
  {
    name: "Technology & SaaS",
    description: "Modern, clean designs that communicate complex offerings with clarity and establish industry authority.",
    examples: ["UI graphics", "Data visualizations", "Marketing materials", "Brand identities"],
    color: "bg-gradient-to-br from-pyn-lightBlue to-pyn-blue"
  },
  {
    name: "Healthcare & Wellness",
    description: "Trustworthy, approachable designs that balance professionalism with compassion and clarity.",
    examples: ["Educational materials", "Brand identity", "Campaign visuals", "Informational graphics"],
    color: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    name: "Food & Beverage",
    description: "Appetizing, distinctive designs that capture product quality and create memorable brand experiences.",
    examples: ["Packaging", "Menu design", "Social media content", "Promotional materials"],
    color: "bg-gradient-to-br from-pyn-amber to-pyn-blue"
  },
  {
    name: "Education",
    description: "Engaging, accessible designs that facilitate learning and communicate institutional values.",
    examples: ["Educational resources", "Campaign materials", "Digital graphics", "Event promotions"],
    color: "bg-gradient-to-br from-pyn-darkBlue to-pyn-amber"
  },
  {
    name: "Entertainment & Events",
    description: "Eye-catching, energetic designs that build excitement and create immersive brand experiences.",
    examples: ["Event promotions", "Brand identity", "Merchandise design", "Social media content"],
    color: "bg-gradient-to-br from-pyn-lightBlue to-pyn-blue"
  }
];

const IndustriesServed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((industry, index) => (
        <motion.div 
          key={industry.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className={`h-24 ${industry.color} flex items-center justify-center`}>
            <h3 className="text-white text-xl font-semibold px-4 text-center">{industry.name}</h3>
          </div>
          <div className="bg-white p-5">
            <p className="text-gray-700 mb-4">{industry.description}</p>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Our solutions include:</h4>
            <div className="flex flex-wrap gap-2">
              {industry.examples.map((example) => (
                <span 
                  key={example} 
                  className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IndustriesServed;
