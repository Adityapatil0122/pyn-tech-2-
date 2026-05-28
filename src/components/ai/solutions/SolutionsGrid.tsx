
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, BrainCircuitIcon, MessageSquareIcon, Bot, ServerIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const SolutionsGrid = () => {
  const solutions = [{
    title: "Custom AI Solutions",
    description: "Tailor-made AI solutions designed to address your specific business challenges and automate complex processes.",
    icon: BrainCircuitIcon,
    color: "bg-pyn-blue/10 text-pyn-blue",
    link: "/ai/custom-solutions"
  }, {
    title: "AI Chatbots",
    description: "Intelligent conversation agents that engage with your customers, answer queries, and streamline support operations.",
    icon: MessageSquareIcon,
    color: "bg-emerald-100 text-emerald-600",
    link: "/ai/chatbots"
  }, {
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable business insights with advanced analytics, visualization and forecasting.",
    icon: ServerIcon,
    color: "bg-pyn-blue/10 text-pyn-blue",
    link: "/ai/data-analytics"
  }, {
    title: "AI Integration & APIs",
    description: "Seamlessly connect AI capabilities with your existing systems through robust API integrations and workflows.",
    icon: Bot,
    color: "bg-pyn-amber/20 text-pyn-darkBlue",
    link: "/ai/integration"
  }];
  return <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Our Solutions</Badge>
          <h2 className="text-3xl font-bold mb-4">Powerful AI Solutions for Every Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From custom AI development to ready-to-deploy intelligent systems, we offer comprehensive solutions to transform your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => <motion.div key={index} initial={{
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
              <Link to={solution.link} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-slate-200/70">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-4`}>
                      <solution.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                    
                    <div className="flex items-center text-pyn-blue font-medium">
                      <span>Learn more</span>
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
