
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    { value: "99.9%", label: "API Uptime" },
    { value: "65+", label: "Integration Options" },
    { value: "80%", label: "Development Time Saved" },
    { value: "50M+", label: "API Calls Monthly" }
  ];

  return (
    <section className="mb-20">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
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
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
