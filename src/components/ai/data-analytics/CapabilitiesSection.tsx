import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChartLine, BarChart, Search, Code, Brain, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export const CapabilitiesSection = () => {
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
  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const capabilities = [{
    title: "Predictive Analytics",
    description: "Leverage machine learning to forecast trends, anticipate customer behavior, and predict future outcomes with remarkable accuracy.",
    icon: ChartLine,
    color: "bg-pyn-gray text-pyn-blue"
  }, {
    title: "Business Intelligence",
    description: "Transform complex data into actionable insights with interactive dashboards, visual reports, and intelligent alerts.",
    icon: BarChart,
    color: "bg-pyn-amber/10 text-pyn-darkBlue"
  }, {
    title: "Pattern Recognition",
    description: "Identify hidden patterns and correlations in your data that drive business performance, growth, and customer satisfaction.",
    icon: Search,
    color: "bg-emerald-50 text-emerald-600"
  }, {
    title: "Custom Reporting",
    description: "Create tailored reports that focus on your most important KPIs and business metrics with automated data pipelines.",
    icon: Code,
    color: "bg-rose-50 text-rose-600"
  }, {
    title: "Natural Language Processing",
    description: "Extract insights from unstructured text data including customer feedback, social media, and support interactions.",
    icon: Brain,
    color: "bg-pyn-amber/10 text-pyn-blue"
  }, {
    title: "Real-time Analytics",
    description: "Monitor business metrics in real-time with streaming analytics and instant notifications on critical changes.",
    icon: Zap,
    color: "bg-pyn-blue/10 text-pyn-blue"
  }];
  return <motion.section initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={fadeIn} className="mb-24">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Capabilities</Badge>
        <h2 className="font-bold text-slate-900 mb-4 text-4xl">Analytics Capabilities</h2>
        <p className="max-w-3xl mx-auto text-base text-gray-700">
          Our comprehensive suite of data analytics solutions helps you extract maximum value from your data assets.
        </p>
      </div>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{
      once: true
    }}>
        {capabilities.map((capability, index) => <motion.div key={index} variants={item}>
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
    </motion.section>;
};