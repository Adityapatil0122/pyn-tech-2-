
import React from "react";
import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const ImpactSection = () => {
  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Happy Clients",
      color: "text-pyn-amber",
      bgColor: "bg-pyn-blue/10"
    },
    {
      value: 150,
      suffix: "+",
      label: "Projects Completed",
      color: "text-pyn-blue",
      bgColor: "bg-pyn-blue/10"
    },
    {
      value: 96,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-pyn-blue",
      bgColor: "bg-pyn-amber/10"
    },
    {
      value: 5,
      suffix: "+",
      label: "Years of Experience",
      color: "text-pyn-amber",
      bgColor: "bg-pyn-amber/10"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="bg-pyn-blue/10 text-pyn-blue mb-3 px-3 py-1 text-sm font-medium inline-block">
            Our Journey
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Our Growth & Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We measure our success by the results we deliver for our clients
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.p 
                className={`flex justify-center mb-2 ${stat.color} font-bold text-4xl`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10,
                  delay: index * 0.1 + 0.2 
                }}
              >
                <Counter end={stat.value} suffix={stat.suffix} duration={2000} />
              </motion.p>
              <p className="text-base text-center text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
