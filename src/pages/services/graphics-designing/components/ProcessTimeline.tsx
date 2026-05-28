
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Brief",
    description: "We learn about your business, target audience, and project goals to create a comprehensive design brief.",
    highlights: ["Brand questionnaire", "Competitive analysis", "Goal setting", "Timeline planning"],
    color: "from-pyn-amber to-pyn-blue",
    bgColor: "bg-pyn-amber/20",
    textColor: "text-pyn-blue",
    icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    number: "02",
    title: "Research & Concept Development",
    description: "We conduct research and develop initial concepts that align with your brand and project goals.",
    highlights: ["Market research", "Mood boarding", "Concept sketching", "Direction exploration"],
    color: "from-pyn-blue to-pyn-lightBlue",
    bgColor: "bg-pyn-blue/10",
    textColor: "text-pyn-blue",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    number: "03",
    title: "Initial Design Concepts",
    description: "We present initial design concepts for your review, explaining the rationale behind each design decision.",
    highlights: ["Multiple concepts", "Design presentations", "Concept rationale", "Visual directions"],
    color: "from-pyn-amber to-pyn-blue",
    bgColor: "bg-pyn-amber/20",
    textColor: "text-pyn-darkBlue",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    number: "04",
    title: "Revisions & Refinement",
    description: "Based on your feedback, we refine the selected concept to ensure it perfectly matches your vision.",
    highlights: ["Feedback integration", "Design iterations", "Detail refinement", "Color adjustments"],
    color: "from-pyn-amber to-pyn-blue",
    bgColor: "bg-pyn-amber/20",
    textColor: "text-pyn-darkBlue",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  },
  {
    number: "05",
    title: "Final Delivery",
    description: "We deliver finalized design files in all necessary formats for your immediate use.",
    highlights: ["Print-ready files", "Web-optimized assets", "Source files", "Usage guidelines"],
    color: "from-green-500 to-pyn-blue",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  },
  {
    number: "06",
    title: "Support & Future Growth",
    description: "We provide ongoing support and guidance for implementing your new designs and planning for future needs.",
    highlights: ["Implementation support", "Design adaptation", "Growth strategy", "Brand evolution"],
    color: "from-pyn-lightBlue to-pyn-blue",
    bgColor: "bg-pyn-lightBlue/20",
    textColor: "text-pyn-lightBlue",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  }
];

const ProcessTimeline = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Connecting line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pyn-amber to-pyn-lightBlue transform md:translate-x-[-1px] z-0"></div>
      
      <div className="space-y-12 md:space-y-24 relative z-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline node */}
            <div className="flex-none relative">
              <div className="flex items-center justify-center md:justify-center w-full mb-4 md:mb-0">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-white z-10`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className={`flex-grow px-4 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-t-gradient-${step.color.split('-')[2]}-500 relative overflow-visible`}>
                <span className={`text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20 absolute right-4 top-2`}>{step.number}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {step.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${step.color}`}></span>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
