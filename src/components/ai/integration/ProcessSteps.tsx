
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileCode, ServerCog, Code, Terminal, Database } from "lucide-react";

export const ProcessSteps = () => {
  const steps = [
    {
      step: 1,
      title: "Assessment",
      description: "We analyze your existing systems and define integration requirements",
      icon: FileCode,
      color: "bg-pyn-blue/10 text-pyn-blue"
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Our team designs a robust integration architecture tailored to your needs",
      icon: ServerCog,
      color: "bg-pyn-gray text-pyn-blue"
    },
    {
      step: 3,
      title: "API Development",
      description: "We develop secure, scalable APIs that connect your systems seamlessly",
      icon: Code,
      color: "bg-pyn-amber/10 text-pyn-amber"
    },
    {
      step: 4,
      title: "Testing & Validation",
      description: "Rigorous testing ensures reliable performance and data integrity",
      icon: Terminal,
      color: "bg-green-50 text-green-500"
    },
    {
      step: 5,
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing maintenance and support",
      icon: Database,
      color: "bg-pyn-amber/10 text-pyn-amber"
    }
  ];

  return (
    <section className="py-16 mb-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pyn-darkBlue">Integration Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our structured approach ensures smooth implementation and successful integration of AI capabilities into your existing systems.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 last:mb-0"
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start md:items-center flex-col md:flex-row">
                    <div className="flex-shrink-0 mr-6 mb-4 md:mb-0 flex items-center">
                      <div className="bg-pyn-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      <div className={`w-14 h-14 ${step.color} rounded-lg flex items-center justify-center`}>
                        <step.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
