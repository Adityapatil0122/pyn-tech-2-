
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const CaseStudiesSection = () => {
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
  
  const caseStudies = [{
    client: "National Healthcare Provider",
    challenge: "Needed to reduce hospital readmissions and optimize resource allocation across 120+ facilities",
    solution: "Implemented predictive analytics system to identify high-risk patients and optimize staffing levels",
    results: "32% reduction in readmissions and $4.5M annual savings in operational costs"
  }, {
    client: "Global E-commerce Platform",
    challenge: "Struggled with inventory forecasting and customer churn across multiple geographic regions",
    solution: "Developed machine learning models for demand prediction and customer behavior analysis",
    results: "53% reduction in stockouts and 31% improvement in customer retention rates"
  }, {
    client: "Financial Investment Firm",
    challenge: "Needed to enhance fraud detection capabilities and improve investment portfolio performance",
    solution: "Deployed anomaly detection system and portfolio optimization algorithms with real-time monitoring",
    results: "48% increase in fraud detection accuracy and 17% improvement in portfolio returns"
  }];
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our data analytics solutions have transformed businesses across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeIn,
                visible: {
                  ...fadeIn.visible,
                  transition: { delay: index * 0.2, duration: 0.6 }
                }
              }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-pyn-blue">{study.client}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Results:</h4>
                    <p className="text-gray-700">{study.results}</p>
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
