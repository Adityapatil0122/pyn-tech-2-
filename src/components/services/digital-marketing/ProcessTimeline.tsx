
import React from "react";
import { motion } from "framer-motion";
import { Search, Presentation, Terminal, BarChart, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    id: 1,
    title: "Research & Analysis",
    description: "We analyze your business, audience, competitors, and market trends to identify opportunities.",
    icon: <Search size={24} />,
    iconBg: "bg-pyn-blue",
    items: [
      { text: "Market Opportunity Analysis", isLeft: true },
      { text: "Audience Persona Development", isLeft: true },
      { text: "Competitor Benchmarking", isLeft: false },
      { text: "Channel Viability Assessment", isLeft: false }
    ]
  },
  {
    id: 2,
    title: "Strategy Development",
    description: "We create a data-driven marketing strategy tailored to your specific business goals.",
    icon: <Presentation size={24} />,
    iconBg: "bg-pyn-blue",
    items: [
      { text: "Channel Selection & Prioritization", isLeft: true },
      { text: "Budget Allocation Modeling", isLeft: true },
      { text: "Campaign Framework Development", isLeft: false },
      { text: "Conversion Path Mapping", isLeft: false }
    ]
  },
  {
    id: 3, 
    title: "Implementation",
    description: "Our team executes the strategy across selected channels with continuous optimization.",
    icon: <Terminal size={24} />,
    iconBg: "bg-green-500",
    items: [
      { text: "Channel Setup & Configuration", isLeft: true },
      { text: "Campaign Launch Sequence", isLeft: true },
      { text: "Content Creation & Publishing", isLeft: false },
      { text: "Integration With Analytics", isLeft: false }
    ]
  },
  {
    id: 4,
    title: "Monitoring & Optimization",
    description: "We track performance in real-time and make data-driven adjustments to maximize results.",
    icon: <BarChart size={24} />,
    iconBg: "bg-pyn-blue",
    items: [
      { text: "Real-time Performance Monitoring", isLeft: true },
      { text: "Budget Reallocation Based on Results", isLeft: true },
      { text: "A/B Testing & Optimization", isLeft: false },
      { text: "Conversion Rate Optimization", isLeft: false }
    ]
  },
  {
    id: 5,
    title: "Reporting & Strategy Refinement",
    description: "Comprehensive reporting with actionable insights to continuously improve strategy.",
    icon: <FileText size={24} />,
    iconBg: "bg-red-500",
    items: [
      { text: "Comprehensive Performance Reporting", isLeft: true },
      { text: "Growth Opportunity Identification", isLeft: true },
      { text: "Strategic Insight Generation", isLeft: false },
      { text: "Strategy Evolution Planning", isLeft: false }
    ]
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-3">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Strategic Approach to Digital Marketing
          </h2>
          <p className="text-lg text-gray-600">
            Our systematic process ensures that every campaign is strategic, measurable, and aligned with your business goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-[60px] md:left-[60px] top-2 bottom-2 w-0.5 bg-gray-200"></div>

          {/* Timeline steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 relative z-10">
                <div className={`flex items-center justify-center w-[55px] h-[55px] rounded-full ${step.iconBg} text-white shadow-lg`}>
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="ml-6 pt-1 flex-grow">
                <div className="flex items-center mb-1">
                  <div className="text-sm text-gray-500 font-medium">Step {step.id}:</div>
                  <h3 className="text-xl font-bold ml-2">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {/* Two column list items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {step.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className={`flex items-center text-sm ${item.isLeft ? 'md:justify-start' : 'md:justify-start'}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pyn-blue mr-2"></div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
