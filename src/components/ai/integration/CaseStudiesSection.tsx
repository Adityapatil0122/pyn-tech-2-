
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ShoppingCart, Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const CaseStudiesSection = () => {
  const caseStudies = [{
    company: "Global Financial Services Provider",
    challenge: "Needed to securely connect legacy systems with modern AI services for fraud detection",
    solution: "Custom API gateway with end-to-end encryption and automated model retraining pipeline",
    results: "Reduced fraud by 47% while processing 30,000+ transactions per second"
  }, {
    company: "Healthcare Technology Platform",
    challenge: "Required HIPAA-compliant AI integration for medical image processing across distributed systems",
    solution: "Secure microservices architecture with federated AI model deployment",
    results: "99.2% diagnostic accuracy while maintaining full regulatory compliance"
  }, {
    company: "E-commerce Marketplace",
    challenge: "Needed to integrate real-time AI personalization across multiple customer touchpoints",
    solution: "Unified customer data platform with API-driven AI recommendation engine",
    results: "26% increase in average order value and 34% higher customer retention"
  }];
  
  const icons = [<Briefcase key="briefcase" />, <Stethoscope key="stethoscope" />, <ShoppingCart key="shopping-cart" />];
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Success Stories</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-3xl">Client Success Stories</h2>
        <p className="max-w-3xl mx-auto text-base text-gray-700">
          See how our integration solutions have transformed businesses across different industries
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pyn-blue/10 flex items-center justify-center mr-4">
                    {icons[index]}
                  </div>
                  <h3 className="font-semibold text-lg">{study.company}</h3>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-500">Challenge:</p>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-500">Solution:</p>
                  <p className="text-gray-700">{study.solution}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Results:</p>
                  <p className="text-gray-700 font-medium">{study.results}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
