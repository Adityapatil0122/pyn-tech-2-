
import React from 'react';
import { motion } from "framer-motion";
import { Users, Database, PenTool, Palette, Zap, Code } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Research",
    description: "Understanding user needs, market trends, and business goals through comprehensive research and analysis.",
    details: ["User interviews", "Competitive analysis", "Market research", "Requirements gathering"],
    icon: Users
  },
  {
    number: 2,
    title: "Information Architecture",
    description: "Organizing and structuring content to create intuitive navigation and user flows.",
    details: ["Site mapping", "User journey mapping", "Content strategy", "Navigation structure"],
    icon: Database
  },
  {
    number: 3,
    title: "Wireframing",
    description: "Creating low-fidelity blueprints that outline the basic structure and layout of each page.",
    details: ["Layout planning", "Content hierarchy", "Functionality mapping", "User flow design"],
    icon: PenTool
  },
  {
    number: 4,
    title: "Visual Design",
    description: "Developing the visual identity with colors, typography, and imagery that align with your brand.",
    details: ["Brand integration", "Color schemes", "Typography selection", "Visual elements"],
    icon: Palette
  },
  {
    number: 5,
    title: "Prototyping",
    description: "Building interactive prototypes to test user interactions and validate design decisions.",
    details: ["Interactive mockups", "User testing", "Design validation", "Feedback integration"],
    icon: Zap
  },
  {
    number: 6,
    title: "Developer Handoff",
    description: "Providing detailed specifications and assets to ensure accurate implementation of the design.",
    details: ["Design specifications", "Asset delivery", "Developer support", "Quality assurance"],
    icon: Code
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Our Process
          </span>
          <h2 className="font-bold mb-4 text-4xl">Design Process</h2>
          <p className="text-gray-600">
            Our systematic approach ensures every design decision is purposeful and user-centered, 
            delivering exceptional digital experiences.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-pyn-blue/30 z-0"></div>
          {/* Mobile vertical line */}
          <div className="block md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-pyn-blue/30 z-0"></div>
          
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12 last:mb-0`}
              >
                {/* Timeline node */}
                <div className="flex-none flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-pyn-blue flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="text-white w-6 h-6" />
                  </div>
                </div>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex-grow md:w-5/12 bg-white p-6 rounded-xl shadow-md ml-6 md:ml-0 md:mx-6 
                    ${index % 2 === 0 ? "md:text-right" : ""}`}
                >
                  {/* Step number - larger and more visible on mobile */}
                  <div className={`inline-flex items-center mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="text-3xl sm:text-4xl font-bold text-pyn-blue mr-3">
                      {step.number}.
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-pyn-darkBlue">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{step.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 text-xs sm:text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {step.details.map((detail, i) => (
                      <span key={i} className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-pyn-blue/10 text-pyn-blue rounded-full">
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                {/* Empty space for alignment on desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
