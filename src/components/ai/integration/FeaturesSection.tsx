
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Link, Layers, ServerCog, Shield, Zap } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "Seamless API Connectivity",
      description: "Connect your systems with our robust APIs designed for reliability and performance with clear documentation."
    },
    {
      icon: ServerCog,
      title: "Custom Integration Solutions",
      description: "Tailor-made integration services that adapt to your existing infrastructure and business processes."
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Build solutions that grow with your business, handling increased loads without compromising performance."
    },
    {
      icon: Link,
      title: "Third-party Service Integration",
      description: "Connect with popular AI services like OpenAI, Google AI, and Microsoft Azure AI with pre-built connectors."
    },
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      description: "Secure your data and connections with advanced encryption, authentication, and authorization protocols."
    },
    {
      icon: Zap,
      title: "Real-time Data Processing",
      description: "Process and analyze data in real-time, enabling instant insights and faster decision-making."
    }
  ];

  return (
    <section className="py-16 mb-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pyn-darkBlue">Core Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our API and integration services provide the technical foundation to connect your systems with AI capabilities,
            enabling seamless data flow and intelligent automation across your entire tech stack.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-pyn-blue/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-pyn-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
