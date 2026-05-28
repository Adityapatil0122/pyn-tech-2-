import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BrainCircuit, Bot, Database, Code, Network } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
interface SolutionCard {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  tone: string;
}

const solutionTones: Record<string, { iconBg: string; iconText: string }> = {
  primary: { iconBg: "bg-pyn-blue/10", iconText: "text-pyn-blue" },
  teal: { iconBg: "bg-pyn-gray", iconText: "text-pyn-darkBlue" },
  cyan: { iconBg: "bg-pyn-lightBlue/10", iconText: "text-pyn-lightBlue" },
  accent: { iconBg: "bg-pyn-amber/10", iconText: "text-pyn-darkBlue" },
  slate: { iconBg: "bg-slate-100", iconText: "text-slate-700" },
  emerald: { iconBg: "bg-emerald-50", iconText: "text-emerald-600" },
};

const solutionCards: SolutionCard[] = [{
  icon: LineChart,
  title: "Predictive Analytics",
  description: "Forecast trends, customer behavior, and business outcomes using machine learning models trained on your data.",
  features: ["Sales forecasting", "Customer churn prediction", "Inventory optimization", "Risk assessment"],
  tone: "primary"
}, {
  icon: BrainCircuit,
  title: "Recommendation Systems",
  description: "Increase engagement and sales with personalized recommendations for products, content, or services.",
  features: ["Product recommendations", "Content personalization", "Cross-selling opportunities", "User experience enhancement"],
  tone: "teal"
}, {
  icon: Bot,
  title: "Computer Vision",
  description: "Extract insights from images and video with custom models for object detection, classification, and more.",
  features: ["Object detection", "Image classification", "Facial recognition", "Visual inspection"],
  tone: "cyan"
}, {
  icon: Database,
  title: "Natural Language Processing",
  description: "Analyze text data, generate content, and build conversational interfaces with advanced language models.",
  features: ["Sentiment analysis", "Text classification", "Content generation", "Language understanding"],
  tone: "accent"
}, {
  icon: Code,
  title: "Process Automation",
  description: "Streamline operations by automating repetitive tasks with intelligent AI systems that learn and improve.",
  features: ["Workflow optimization", "Document processing", "Quality control", "Operational efficiency"],
  tone: "slate"
}, {
  icon: Network,
  title: "Custom Machine Learning",
  description: "Solve your unique business challenges with bespoke machine learning solutions tailored to your specific needs.",
  features: ["Custom algorithms", "Specialized models", "Domain-specific solutions", "Proprietary algorithms"],
  tone: "emerald"
}];
export const SolutionsGrid = () => {
  return <section className="mb-20 mx-0 py-0 my-0">
      <div className="text-center mb-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-darkBlue border-none">Our Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Powerful AI Solutions for Every Need</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base">
            Our custom AI solutions are designed to address specific business challenges and create 
            tangible value across your organization.
          </p>
        </motion.div>
      </div>
      
      {/* Modified grid to create exactly 3 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionCards.map((solution, index) => {
          const tone = solutionTones[solution.tone] || solutionTones.primary;

          return <motion.div key={index} initial={{
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
      }} className="h-full">
            <Card className="border border-slate-200 bg-white h-full hover:shadow-md transition duration-300 group overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${tone.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300`}>
                  <solution.icon className={`h-6 w-6 ${tone.iconText}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-slate-600 mb-4 text-base">{solution.description}</p>
                
                <div className="space-y-1">
                  {solution.features.slice(0, 3).map((feature, i) => <div key={i} className="flex items-start gap-1">
                      <Check className={`h-4 w-4 ${tone.iconText} mt-0.5 shrink-0`} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>)}
                </div>
                
                <div className="mt-4 pt-2 border-t border-slate-100">
                  
                </div>
              </CardContent>
            </Card>
          </motion.div>;
        })}
      </div>
    </section>;
};
