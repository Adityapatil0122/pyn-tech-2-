
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Shield, Key, FileCheck } from "lucide-react";

export const SecuritySection = () => {
  const securityFeatures = [{
    icon: Lock,
    title: "End-to-end Encryption",
    description: "All data is encrypted both in transit and at rest using industry-standard protocols"
  }, {
    icon: Shield,
    title: "Advanced Authentication",
    description: "Multi-factor authentication, OAuth 2.0, and JWT token-based security"
  }, {
    icon: Key,
    title: "API Key Management",
    description: "Secure API key rotation, revocation, and management with granular permissions"
  }, {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Built to help meet GDPR, HIPAA, SOC 2, and other regulatory requirements"
  }];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI integration solutions are built with security at their core, ensuring your data and systems remain protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-pyn-blue">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
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
