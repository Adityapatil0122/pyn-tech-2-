
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Network, Webhook, Terminal } from "lucide-react";

export const IntegrationTypes = () => {
  const integrations = [
    {
      icon: Code,
      title: "REST APIs",
      description: "Standard RESTful APIs for straightforward integration with most applications and services.",
      details: "JSON/XML support, versioned endpoints, comprehensive documentation"
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Event-driven architecture that sends real-time updates when specific events occur.",
      details: "Customizable triggers, retry logic, payload validation"
    },
    {
      icon: Database,
      title: "Database Connectors",
      description: "Direct connections to your databases for seamless data synchronization.",
      details: "SQL, NoSQL, Data Lakes, ORM support"
    },
    {
      icon: Globe,
      title: "GraphQL APIs",
      description: "Query language for APIs that gives clients the power to ask for exactly what they need.",
      details: "Query optimization, schema validation, subscriptions"
    },
    {
      icon: Network,
      title: "Microservices",
      description: "Integrate with distributed microservice architectures for modular, scalable systems.",
      details: "Service discovery, load balancing, circuit breakers"
    },
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Command-line interfaces for developers to interact with APIs and automate workflows.",
      details: "Scripting support, automation capabilities, CI/CD integration"
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pyn-darkBlue">Integration Technologies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We support multiple integration approaches to ensure compatibility with your existing systems and 
            provide the flexibility needed for complex enterprise environments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-pyn-blue/10 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-pyn-blue" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                  <div className="p-4 bg-pyn-gray/50">
                    <p className="text-sm text-gray-500 font-medium">Features:</p>
                    <p className="text-sm text-gray-600">{item.details}</p>
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
