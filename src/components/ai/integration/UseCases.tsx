
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ShoppingCart, Stethoscope, Building2, Globe, FileText } from "lucide-react";

export const UseCases = () => {
  const useCases = [{
    icon: Building2,
    industry: "Enterprise",
    title: "Unified Data Platform",
    description: "Connecting siloed enterprise systems to create a unified data platform for AI-powered analytics and decision making.",
    result: "40% reduction in data processing time and improved cross-departmental collaboration"
  }, {
    icon: ShoppingCart,
    industry: "E-commerce",
    title: "Personalized Shopping Experience",
    description: "Integrating product catalog with recommendation engines to deliver personalized shopping experiences.",
    result: "28% increase in average order value and 35% higher customer engagement"
  }, {
    icon: Stethoscope,
    industry: "Healthcare",
    title: "Clinical Decision Support",
    description: "Connecting electronic health records with AI diagnostic tools to provide real-time clinical decision support.",
    result: "Reduced diagnostic time by 60% while maintaining 99.8% accuracy"
  }, {
    icon: Globe,
    industry: "Travel",
    title: "Dynamic Pricing Engine",
    description: "Linking booking systems with AI-powered dynamic pricing engines for optimal revenue management.",
    result: "22% revenue increase and 15% improvement in inventory utilization"
  }, {
    icon: FileText,
    industry: "Legal",
    title: "Document Processing Automation",
    description: "Connecting document management systems with AI-powered contract analysis for faster review processes.",
    result: "80% reduction in contract review time with 99.5% accuracy in flagging issues"
  }, {
    icon: Briefcase,
    industry: "Financial Services",
    title: "Fraud Detection System",
    description: "Integrating transaction processing with real-time AI fraud detection for enhanced security.",
    result: "62% improvement in fraud detection with 91% reduction in false positives"
  }];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how organizations across industries are leveraging our AI integration solutions to transform their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="p-2 rounded-full bg-pyn-blue/10 text-pyn-blue mr-3">
                      <useCase.icon size={24} />
                    </span>
                    <span className="text-sm font-semibold text-pyn-blue">
                      {useCase.industry}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-medium text-green-600">
                      Result: {useCase.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
