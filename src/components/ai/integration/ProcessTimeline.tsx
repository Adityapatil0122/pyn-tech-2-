
import React from "react";
import { motion } from "framer-motion";
import { Database, Settings, Code, Upload, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProcessTimeline = () => {
  const processSteps = [{
    step: 1,
    title: "Discovery & Requirements",
    description: "We analyze your existing infrastructure and document integration requirements in detail.",
    icon: Database
  }, {
    step: 2,
    title: "Architecture Design",
    description: "Our team designs a solution architecture that aligns with your technical ecosystem.",
    icon: Settings
  }, {
    step: 3,
    title: "Development & Testing",
    description: "We implement the integration using best practices and conduct thorough testing.",
    icon: Code
  }, {
    step: 4,
    title: "Deployment",
    description: "The solution is deployed to your environment with minimal disruption to operations.",
    icon: Upload
  }, {
    step: 5,
    title: "Monitoring & Optimization",
    description: "We continuously monitor performance and optimize the integration over time.",
    icon: BarChart
  }];
  
  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{
        once: true,
        margin: "-100px"
      }} 
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6
          }
        }
      }} 
      className="mb-16"
    >
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Our Process</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-4xl">Our Integration Approach</h2>
        <p className="max-w-3xl mx-auto text-base text-gray-700">
          We follow a structured methodology to ensure successful integration of AI capabilities into your systems.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20
              }} 
              whileInView={{
                opacity: 1,
                x: 0
              }} 
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }} 
              viewport={{
                once: true
              }}
            >
              <Card className="hover:shadow-md transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-pyn-blue/20 text-pyn-blue w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="h-9 w-9 flex items-center justify-center bg-pyn-blue/10 rounded-lg mr-2">
                          <step.icon className="h-5 w-5 text-pyn-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
