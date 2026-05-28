
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Figma, Code, Smartphone, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discovery & Planning",
    description: "We begin by understanding your business goals, target audience, and app requirements. This phase includes detailed discussions, market research, and planning to establish project scope and timelines.",
    substeps: ["Requirements gathering", "Market research", "User persona development", "Feature prioritization", "Project roadmap creation"],
    icon: FileText
  },
  {
    title: "UX/UI Design",
    description: "Our designers create intuitive, engaging interfaces tailored for mobile experiences. We develop wireframes, mockups, and interactive prototypes that align with platform guidelines and your brand identity.",
    substeps: ["Wireframing", "Interface design", "Prototype development", "User flow mapping", "Design system creation"],
    icon: Figma
  },
  {
    title: "Development",
    description: "Our engineers build your app using the appropriate technologies for your requirements. We focus on clean architecture, performance optimization, and adherence to platform guidelines.",
    substeps: ["Frontend development", "Backend integration", "API development", "Authentication implementation", "Third-party integrations"],
    icon: Code
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing ensures your app functions flawlessly across devices. We conduct functional, performance, security, and usability testing to identify and resolve any issues before launch.",
    substeps: ["Functional testing", "Device compatibility testing", "Performance optimization", "Security testing", "Usability testing"],
    icon: CheckCircle
  },
  {
    title: "Deployment",
    description: "We handle the entire app store submission process, ensuring compliance with platform guidelines and optimizing your store presence for maximum visibility and downloads.",
    substeps: ["App store optimization", "Store listing creation", "Screenshot generation", "Metadata preparation", "Submission management"],
    icon: Smartphone
  },
  {
    title: "Maintenance & Updates",
    description: "Our partnership continues after launch with comprehensive support and update services. We monitor performance, implement enhancements, and ensure compatibility with the latest OS versions.",
    substeps: ["Bug fixes and updates", "Performance monitoring", "Feature enhancements", "Platform compatibility updates", "Analytics review"],
    icon: Settings
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
          <h2 className="font-bold mb-4 text-4xl">App Development Methodology</h2>
          <p className="text-gray-600">
            We follow a structured, collaborative approach to ensure your mobile application is delivered 
            on time, within budget, and exceeds expectations.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-pyn-blue/30 z-0"></div>
          
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
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
                    ${index % 2 === 0 ? "text-right" : ""}`}
                >
                  <h3 className="text-xl font-bold mb-3 text-pyn-darkBlue">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className={`flex flex-wrap gap-2 text-sm ${index % 2 === 0 ? "justify-end" : ""}`}>
                    {step.substeps.map((substep, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-blue rounded-full">
                        {substep}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                {/* Empty space for alignment */}
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
