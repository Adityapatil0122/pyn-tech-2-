
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
export const StatsCards = () => {
  const statsData = [{
    value: "99.9%",
    label: "API Uptime",
    description: "Enterprise-grade reliability"
  }, {
    value: "120+",
    label: "Integration Options",
    description: "Connect with virtually any system"
  }, {
    value: "85%",
    label: "Development Time Saved",
    description: "Accelerate your development cycle"
  }, {
    value: "75M+",
    label: "Monthly API Calls Processed",
    description: "Scalable infrastructure"
  }];
  return <motion.section initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={{
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
  }} className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="text-3xl md:text-4xl font-bold text-pyn-blue mb-2 flex items-center justify-center">
                  {stat.value}
                </div>
                <p className="text-lg font-medium text-gray-800">{stat.label}</p>
                <p className="text-gray-600 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>;
};
