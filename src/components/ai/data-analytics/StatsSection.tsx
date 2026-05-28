
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = () => {
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

  const statsData = [
    {
      value: "67%",
      label: "Better Decision Making",
      description: "Empowered by data-driven insights"
    }, 
    {
      value: "3.5x",
      label: "Return on Analytics Investment",
      description: "Average client ROI"
    }, 
    {
      value: "42%",
      label: "Cost Reduction",
      description: "Through process optimization"
    }, 
    {
      value: "85+",
      label: "AI Analysis Models",
      description: "For diverse business needs"
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="mb-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <Card key={index} className="border-slate-200 bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pyn-blue mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">{stat.label}</h3>
              <p className="text-slate-500 text-sm">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};
