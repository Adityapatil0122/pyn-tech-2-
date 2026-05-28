
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Settings, ChartLine, BarChart, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProcessSection = () => {
  const fadeIn = {
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
  };
  
  const analyticsProcess = [{
    step: 1,
    title: "Data Collection",
    description: "We gather data from all relevant sources, including CRMs, ERPs, websites, social media, and IoT devices.",
    icon: Database
  }, {
    step: 2,
    title: "Data Preparation",
    description: "Our team cleans, transforms, and standardizes your data to ensure accuracy and consistency.",
    icon: Settings
  }, {
    step: 3,
    title: "Data Analysis",
    description: "We apply advanced statistical models and machine learning algorithms to extract insights from your data.",
    icon: ChartLine
  }, {
    step: 4,
    title: "Visualization",
    description: "Complex findings are transformed into intuitive dashboards and interactive visualizations.",
    icon: BarChart
  }, {
    step: 5,
    title: "Implementation",
    description: "We help you integrate insights into your decision-making processes and operational workflows.",
    icon: Layers
  }];
  
  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{
        once: true,
        margin: "-100px"
      }} 
      variants={fadeIn} 
      className="mb-24"
    >
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Our Process</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-4xl">Our Analytics Approach</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base">
          We follow a structured methodology to ensure your data analytics projects deliver maximum business value.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {analyticsProcess.map((process, index) => (
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
                      <div className="bg-pyn-blue/20 text-pyn-blue w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                        {process.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="h-9 w-9 flex items-center justify-center bg-pyn-blue/10 rounded-lg mr-2">
                          <process.icon className="h-5 w-5 text-pyn-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{process.title}</h3>
                      </div>
                      <p className="text-slate-600">{process.description}</p>
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
