
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const TechnologiesGrid = () => {
  const technologies = [{
    name: "RESTful APIs",
    description: "Standard HTTP-based APIs for easy integration"
  }, {
    name: "GraphQL",
    description: "Flexible queries with precise data selection"
  }, {
    name: "WebSockets",
    description: "Real-time bidirectional communication"
  }, {
    name: "OpenAPI",
    description: "Standardized API documentation"
  }, {
    name: "OAuth 2.0",
    description: "Secure authentication and authorization"
  }, {
    name: "Webhooks",
    description: "Event-driven integrations"
  }, {
    name: "gRPC",
    description: "High-performance RPC framework"
  }, {
    name: "Apache Kafka",
    description: "Distributed event streaming platform"
  }];
  
  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{
        once: true,
        margin: "-100px"
      }} 
      variants={{
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
      }} 
      className="mb-24"
    >
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Technologies</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-4xl">Supported Technologies</h2>
        <p className="max-w-3xl mx-auto text-base text-gray-700">
          We support a wide range of integration protocols and technologies to ensure seamless connectivity.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div 
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }} 
            viewport={{
              once: true
            }} 
            className="bg-white border border-slate-200 rounded-xl p-5 hover:border-pyn-lightBlue hover:shadow-sm transition-all"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{tech.name}</h3>
            <p className="text-slate-600 text-sm">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
