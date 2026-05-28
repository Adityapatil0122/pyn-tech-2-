
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Code, FileCode, Rocket, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Capabilities = () => {
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
  const capabilities = [{
    title: "Custom AI Development",
    description: "Bespoke AI solutions tailored to your unique business challenges, from concept to deployment.",
    icon: Sparkles,
    color: "bg-pyn-gray text-pyn-blue"
  }, {
    title: "AI Model Integration",
    description: "Seamlessly integrate AI models into your existing systems and workflows for enhanced automation.",
    icon: Code,
    color: "bg-pyn-amber/10 text-pyn-darkBlue"
  }, {
    title: "API Integrations",
    description: "Connect your AI solutions with other applications and data sources through robust API integrations.",
    icon: FileCode,
    color: "bg-emerald-50 text-emerald-600"
  }, {
    title: "Scalable Infrastructure",
    description: "Build AI solutions on a scalable infrastructure that grows with your business needs and evolving demands.",
    icon: Rocket,
    color: "bg-rose-50 text-rose-600"
  }, {
    title: "Security & Compliance",
    description: "Ensure the security and compliance of your AI solutions with industry-leading security measures and compliance standards.",
    icon: ShieldCheck,
    color: "bg-pyn-amber/10 text-pyn-blue"
  }, {
    title: "Dashboarding & Visualization",
    description: "Monitor and visualize the performance of your AI solutions with intuitive dashboards and interactive visualizations.",
    icon: LayoutDashboard,
    color: "bg-pyn-blue/10 text-pyn-blue"
  }];
  return <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Capabilities</Badge>
          <h2 className="font-bold text-4xl">Our AI Capabilities</h2>
          <p className="max-w-3xl mx-auto text-base text-gray-700 mt-2">
            Comprehensive AI capabilities tailored to meet your business needs
          </p>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => <motion.div key={index} variants={fadeIn}>
              <Card className="border-slate-200 h-full hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${capability.color} flex items-center justify-center mb-5`}>
                    <capability.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{capability.title}</h3>
                  <p className="text-slate-600">{capability.description}</p>
                </CardContent>
              </Card>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
