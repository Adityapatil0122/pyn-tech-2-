
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, Link, ServerCog, Terminal, Shield, FileCode } from "lucide-react";

export const TechStack = () => {
  const technologies = [
    { name: "RESTful APIs", icon: Code },
    { name: "GraphQL", icon: Database },
    { name: "Microservices", icon: Layers },
    { name: "Webhooks", icon: Link },
    { name: "OAuth 2.0", icon: Shield },
    { name: "Kafka", icon: Terminal },
    { name: "Docker", icon: FileCode },
    { name: "Kubernetes", icon: ServerCog }
  ];

  return (
    <section className="py-16 mb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pyn-darkBlue">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We utilize modern, robust technologies to build secure, scalable, and high-performance integration solutions.
          </p>
        </motion.div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-pyn-blue/10 rounded-full flex items-center justify-center mb-4 hover:bg-pyn-blue/20 transition-colors duration-300">
                  <tech.icon className="h-10 w-10 text-pyn-blue" />
                </div>
                <p className="font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
