
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Network, Server, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const IntegrationFeatures = () => {
  const features = [{
    title: "Seamless API Connectivity",
    description: "Connect your systems with our comprehensive API suite designed for maximum flexibility and minimal integration effort.",
    icon: Code,
    color: "bg-pyn-blue/10 text-pyn-blue"
  }, {
    title: "Real-time Data Processing",
    description: "Process massive datasets in real-time with our high-performance computing infrastructure and optimized algorithms.",
    icon: Zap,
    color: "bg-pyn-amber/10 text-pyn-darkBlue"
  }, {
    title: "Multi-environment Support",
    description: "Develop, test, and deploy across multiple environments with environment-specific configurations and variables.",
    icon: Database,
    color: "bg-pyn-amber/10 text-pyn-blue"
  }, {
    title: "Enterprise Security",
    description: "Bank-grade encryption, automated security scanning, and comprehensive audit logs protect your sensitive data.",
    icon: Shield,
    color: "bg-green-50 text-green-600"
  }, {
    title: "AI Model Integration",
    description: "Connect to leading AI models from OpenAI, Anthropic, Google AI, and more through a single unified interface.",
    icon: Network,
    color: "bg-rose-50 text-rose-600"
  }, {
    title: "Scalable Infrastructure",
    description: "Our cloud-native architecture automatically scales to handle your workloads, from startup to enterprise scale.",
    icon: Server,
    color: "bg-pyn-lightBlue/10 text-pyn-lightBlue"
  }];
  return <motion.section initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={{
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
  }} className="mb-24">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Integration Capabilities</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-4xl">Our Integration Capabilities</h2>
        <p className="max-w-3xl mx-auto text-base text-gray-700">
          Our platform provides all the tools and capabilities you need to build robust, secure, and scalable AI integrations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }} viewport={{
        once: true
      }}>
            <Card className="border-slate-200 h-full hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>)}
      </div>
    </motion.section>;
};
