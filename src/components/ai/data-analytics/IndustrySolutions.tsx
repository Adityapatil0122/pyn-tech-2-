import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const IndustrySolutions = () => {
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
  const industries = [{
    name: "Healthcare",
    description: "Improve patient outcomes and operational efficiency through predictive analytics and resource optimization.",
    metrics: ["Reduced readmission rates by 32%", "Improved resource allocation by 45%", "Decreased average length of stay by 18%"],
    gradient: "bg-gradient-to-r from-pyn-blue/10 to-pyn-lightBlue/10"
  }, {
    name: "Retail & E-commerce",
    description: "Enhance customer experience and optimize inventory with customer segmentation and demand forecasting.",
    metrics: ["Increased sales conversion by 24%", "Reduced stockouts by 53%", "Improved customer retention by 31%"],
    gradient: "bg-gradient-to-r from-pyn-amber/10 to-pyn-blue/10"
  }, {
    name: "Financial Services",
    description: "Minimize risk and identify opportunities with fraud detection and portfolio optimization analytics.",
    metrics: ["Fraud detection improvement of 48%", "Portfolio optimization gain of 17%", "Customer churn reduction of 28%"],
    gradient: "bg-gradient-to-r from-emerald-500/10 to-green-500/10"
  }, {
    name: "Manufacturing",
    description: "Streamline production and improve quality control through predictive maintenance and process optimization.",
    metrics: ["Production efficiency increased by 29%", "Defect reduction of 35%", "Maintenance cost reduction of 42%"],
    gradient: "bg-gradient-to-r from-pyn-amber/10 to-pyn-blue/10"
  }];
  return <motion.section initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={fadeIn} className="mb-24">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Solutions</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-4xl">Industry Solutions</h2>
        <p className="max-w-3xl mx-auto text-base text-gray-700">
          We deliver specialized analytics solutions tailored to the unique challenges of your industry.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }} viewport={{
        once: true
      }}>
            <Card className={`border-none shadow-md hover:shadow-lg transition-shadow ${industry.gradient}`}>
              <CardContent className="p-6 bg-slate-50">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{industry.name}</h3>
                <p className="text-slate-600 mb-4">{industry.description}</p>
                
                <div className="bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-slate-700 mb-3">Key Performance Results</h4>
                  <ul className="space-y-2">
                    {industry.metrics.map((metric, idx) => <li key={idx} className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-pyn-blue mr-2"></span>
                        <span className="text-slate-700">{metric}</span>
                      </li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>)}
      </div>
    </motion.section>;
};