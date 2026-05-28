
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const BenefitsSection = () => {
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
  
  const benefits = [
    "Make data-driven decisions with confidence", 
    "Identify new revenue opportunities", 
    "Optimize operations and reduce costs", 
    "Understand customer behavior and preferences", 
    "Predict trends and anticipate market changes", 
    "Automate routine analysis tasks", 
    "Detect anomalies and prevent issues", 
    "Measure the effectiveness of business initiatives"
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-pyn-gray to-white">
      <div className="container mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Benefits</Badge>
          <h2 className="text-3xl font-bold mb-4">Benefits of Data Analytics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock the power of your data to transform your business
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeIn,
                visible: {
                  ...fadeIn.visible,
                  transition: { delay: index * 0.1, duration: 0.5 }
                }
              }}
            >
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-pyn-blue/10 rounded-full p-2 mt-0.5">
                    <Check className="h-5 w-5 text-pyn-blue" />
                  </div>
                  <p className="font-medium text-gray-700">{benefit}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
