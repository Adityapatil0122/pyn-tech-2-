import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Puzzle, BrainCircuit, Globe, Lock, Zap, Database, LineChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [{
  icon: MessageSquare,
  title: "Natural Language Understanding",
  description: "Our chatbots understand context, slang, and even misspellings to maintain natural conversations.",
  color: "primary",
  category: "core"
}, {
  icon: BrainCircuit,
  title: "Continuous Learning",
  description: "AI chatbots that improve over time by learning from every interaction.",
  color: "teal",
  category: "core"
}, {
  icon: Bot,
  title: "24/7 Automated Support",
  description: "Handle customer inquiries around the clock, providing instant responses without delay.",
  color: "cyan",
  category: "core"
}, {
  icon: LineChart,
  title: "Advanced Analytics",
  description: "Gain insights into customer queries, sentiment trends, and chatbot performance.",
  color: "amber",
  category: "analytics"
}, {
  icon: Database,
  title: "Knowledge Base Integration",
  description: "Connect to your existing knowledge repositories to provide accurate, consistent information.",
  color: "graphite",
  category: "integration"
}, {
  icon: Puzzle,
  title: "Easy Integration",
  description: "Seamlessly integrate with your existing websites, apps, and customer service platforms.",
  color: "teal",
  category: "integration"
}, {
  icon: Zap,
  title: "Instant Deployment",
  description: "Get your chatbot up and running in days, not months, with our streamlined implementation.",
  color: "amber",
  category: "integration"
}, {
  icon: Globe,
  title: "Multi-Language Support",
  description: "Break language barriers with chatbots that communicate fluently in over 50 languages.",
  color: "emerald",
  category: "core"
}, {
  icon: Lock,
  title: "Enterprise Security",
  description: "Bank-level encryption and compliance with global security and privacy standards.",
  color: "primary",
  category: "security"
}];

const featureCategories = [{
  id: "all",
  name: "All Features"
}, {
  id: "core",
  name: "Core Capabilities"
}, {
  id: "integration",
  name: "Integration"
}, {
  id: "analytics",
  name: "Analytics"
}, {
  id: "security",
  name: "Security"
}];

// Helper function to get the correct color classes
const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string, text: string, border: string }> = {
    primary: { bg: "bg-pyn-blue/10", text: "text-pyn-blue", border: "bg-pyn-blue" },
    teal: { bg: "bg-pyn-gray", text: "text-pyn-darkBlue", border: "bg-pyn-darkBlue" },
    cyan: { bg: "bg-pyn-lightBlue/10", text: "text-pyn-lightBlue", border: "bg-pyn-lightBlue" },
    amber: { bg: "bg-pyn-amber/10", text: "text-pyn-darkBlue", border: "bg-pyn-amber" },
    graphite: { bg: "bg-slate-100", text: "text-slate-700", border: "bg-slate-500" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "bg-emerald-500" }
  };
  
  return colorMap[color] || colorMap.primary;
};

export const Features = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pyn-blue/10 text-pyn-blue font-medium text-sm mb-4">
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Intelligent Features</h2>
          <p className="max-w-3xl mx-auto text-base text-gray-700">
            Our AI chatbots are equipped with state-of-the-art capabilities designed to deliver 
            exceptional customer experiences and drive measurable business results.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2">
            <TabsList className={cn(
              "bg-slate-100/80 p-1 h-auto",
              isMobile ? "w-full grid grid-cols-2 gap-1" : "flex"
            )}>
              {featureCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className={cn(
                    "data-[state=active]:bg-white rounded-md data-[state=active]:text-pyn-blue data-[state=active]:shadow-sm text-xs sm:text-sm px-2 py-2 sm:px-3",
                    isMobile ? "flex-1 min-w-0" : "whitespace-nowrap"
                  )}
                >
                  <span className="truncate">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {featureCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.filter(feature => category.id === "all" || feature.category === category.id).map((feature, index) => {
                  const colorClasses = getColorClasses(feature.color);
                  
                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="h-full"
                    >
                      <Card className="border border-slate-200 h-full bg-white hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                        <CardContent className="p-6">
                          <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300", colorClasses.bg)}>
                            <feature.icon className={colorClasses.text} size={28} />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                          <p className="text-slate-600">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
