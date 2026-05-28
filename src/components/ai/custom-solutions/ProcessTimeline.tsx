import React from "react";
import { motion } from "framer-motion";
import { Database, Settings, ChartLine, BarChart, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const ProcessTimeline = () => {
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
  const timelineItems = [{
    step: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals and challenges to define a clear AI strategy.",
    icon: Database
  }, {
    step: 2,
    title: "Data Collection & Preparation",
    description: "We gather, clean, and prepare your data to ensure it's ready for AI model training.",
    icon: Settings
  }, {
    step: 3,
    title: "Model Development & Training",
    description: "Our AI experts build and train custom models tailored to your specific needs.",
    icon: ChartLine
  }, {
    step: 4,
    title: "Integration & Deployment",
    description: "We seamlessly integrate AI solutions into your existing systems and workflows.",
    icon: BarChart
  }, {
    step: 5,
    title: "Monitoring & Optimization",
    description: "We continuously monitor and optimize AI performance to ensure ongoing success.",
    icon: Layers
  }];
  return <section className="py-16">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn} className="text-center mb-12">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Our Process</Badge>
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach to building custom AI solutions that deliver results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {timelineItems.map((item, index) => <motion.div key={index} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={{
          ...fadeIn,
          visible: {
            ...fadeIn.visible,
            transition: {
              delay: index * 0.2,
              duration: 0.6
            }
          }
        }}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-pyn-blue/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-pyn-blue" />
                    </div>
                    <div className="text-2xl font-bold text-pyn-blue">0{item.step}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};