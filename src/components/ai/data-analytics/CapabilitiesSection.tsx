import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChartLine, ChartBar, MagnifyingGlass, Code, Brain, Lightning } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import ColorfulIcon from "@/components/icons/ColorfulIcon";
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
    palette: "ocean" as const
  }, {
    title: "Business Intelligence",
    description: "Transform complex data into actionable insights with interactive dashboards, visual reports, and intelligent alerts.",
    icon: ChartBar,
    palette: "sunset" as const
  }, {
    title: "Pattern Recognition",
    description: "Identify hidden patterns and correlations in your data that drive business performance, growth, and customer satisfaction.",
    icon: MagnifyingGlass,
    palette: "mint" as const
  }, {
    title: "Custom Reporting",
    description: "Create tailored reports that focus on your most important KPIs and business metrics with automated data pipelines.",
    icon: Code,
    palette: "sky" as const
  }, {
    title: "Natural Language Processing",
    description: "Extract insights from unstructured text data including customer feedback, social media, and support interactions.",
    icon: Brain,
    palette: "violet" as const
  }, {
    title: "Real-time Analytics",
    description: "Monitor business metrics in real-time with streaming analytics and instant notifications on critical changes.",
    icon: Lightning,
    palette: "lime" as const
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
                <ColorfulIcon icon={capability.icon} palette={capability.palette} className="mb-5 h-14 w-14 rounded-xl" iconClassName="h-7 w-7" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{capability.title}</h3>
                <p className="text-slate-600">{capability.description}</p>
              </CardContent>
            </Card>
          </motion.div>)}
      </motion.div>
    </motion.section>;
};
