
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, Users, Save, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const stats = [{
  icon: MessageSquare,
  value: "95%",
  label: "Customer Satisfaction",
  description: "Average satisfaction score"
}, {
  icon: Clock,
  value: "70%",
  label: "Response Time Reduction",
  description: "Compared to human agents"
}, {
  icon: Zap,
  value: "24/7",
  label: "Availability",
  description: "Always-on customer support"
}, {
  icon: Save,
  value: "40%",
  label: "Cost Reduction",
  description: "Average operational savings"
}, {
  icon: Users,
  value: "500+",
  label: "Concurrent Users",
  description: "Per chatbot instance"
}, {
  icon: Shield,
  value: "99.9%",
  label: "Uptime Guarantee",
  description: "Enterprise reliability"
}];

export const Stats = () => {
  return <section className="py-20 bg-gradient-to-b from-white to-pyn-gray w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pyn-blue/10 text-pyn-blue font-medium text-sm mb-4">
            <span>Performance Metrics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Measurable Business Impact</h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-base">
            Our AI chatbots deliver quantifiable results across customer satisfaction, operational efficiency, and cost savings metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-none h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer">
                <div className="h-1 bg-pyn-blue"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-pyn-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-7 w-7 text-pyn-blue" />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-3xl font-bold text-slate-800 flex items-center">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{stat.label}</h3>
                  <p className="text-slate-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
};
