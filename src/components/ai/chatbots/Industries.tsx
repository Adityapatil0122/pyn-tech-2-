
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Stethoscope, Landmark, GraduationCap, Plane, Hotel, Truck, HeartPulse, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Industry {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
  keyFeatures: string[];
  tone: string;
}

const industryTones: Record<string, { iconBg: string; iconText: string; dot: string }> = {
  primary: { iconBg: "bg-pyn-blue/10", iconText: "text-pyn-blue", dot: "bg-pyn-blue" },
  teal: { iconBg: "bg-pyn-gray", iconText: "text-pyn-darkBlue", dot: "bg-pyn-darkBlue" },
  cyan: { iconBg: "bg-pyn-lightBlue/10", iconText: "text-pyn-lightBlue", dot: "bg-pyn-lightBlue" },
  accent: { iconBg: "bg-pyn-amber/10", iconText: "text-pyn-darkBlue", dot: "bg-pyn-amber" },
  emerald: { iconBg: "bg-emerald-50", iconText: "text-emerald-600", dot: "bg-emerald-500" },
  rose: { iconBg: "bg-rose-50", iconText: "text-rose-600", dot: "bg-rose-500" },
  orange: { iconBg: "bg-pyn-amber/10", iconText: "text-pyn-darkBlue", dot: "bg-pyn-blue" },
  red: { iconBg: "bg-red-50", iconText: "text-red-600", dot: "bg-red-500" },
  slate: { iconBg: "bg-slate-100", iconText: "text-slate-700", dot: "bg-slate-500" },
};

export const Industries = () => {
  const industries: Industry[] = [{
    icon: Building2,
    name: "Enterprise",
    description: "Streamline operations and enhance internal communication with intelligent chatbot assistants.",
    keyFeatures: ["Employee onboarding", "IT helpdesk", "Knowledge management"],
    tone: "primary"
  }, {
    icon: ShoppingBag,
    name: "E-commerce",
    description: "Boost sales and improve customer satisfaction with personalized shopping assistants.",
    keyFeatures: ["Product recommendations", "Order tracking", "Inventory queries"],
    tone: "emerald"
  }, {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Provide 24/7 patient support, appointment scheduling, and health information access.",
    keyFeatures: ["Appointment booking", "Symptom assessment", "Medication reminders"],
    tone: "cyan"
  }, {
    icon: Landmark,
    name: "Financial Services",
    description: "Enhance customer service with secure account management and financial guidance.",
    keyFeatures: ["Account inquiries", "Fraud alerts", "Financial advisory"],
    tone: "teal"
  }, {
    icon: GraduationCap,
    name: "Education",
    description: "Support students and staff with instant information access and administrative assistance.",
    keyFeatures: ["Course information", "Assignment help", "Campus services"],
    tone: "accent"
  }, {
    icon: Plane,
    name: "Travel & Hospitality",
    description: "Simplify booking processes and provide real-time travel assistance and recommendations.",
    keyFeatures: ["Booking assistance", "Itinerary management", "Local recommendations"],
    tone: "accent"
  }, {
    icon: Hotel,
    name: "Real Estate",
    description: "Assist clients with property searches, viewings, and application processes.",
    keyFeatures: ["Property matching", "Virtual tours", "Paperwork assistance"],
    tone: "rose"
  }, {
    icon: Truck,
    name: "Logistics",
    description: "Optimize customer service for shipping, tracking, and delivery information.",
    keyFeatures: ["Delivery tracking", "Returns processing", "Shipping estimates"],
    tone: "orange"
  }, {
    icon: HeartPulse,
    name: "Insurance",
    description: "Streamline claims processing and policy management with intelligent assistance.",
    keyFeatures: ["Claims filing", "Policy information", "Coverage questions"],
    tone: "red"
  }, {
    icon: ShieldCheck,
    name: "Government",
    description: "Improve citizen services with 24/7 access to information and assistance.",
    keyFeatures: ["Service information", "Form assistance", "Permit applications"],
    tone: "slate"
  }];

  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
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
      }} className="text-center mb-16">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">
            <span>Versatile Solutions</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Industries We Serve</h2>
          <p className="max-w-3xl mx-auto text-base text-gray-700">
            Our AI chatbots are customized to meet the specific needs of various industries, 
            providing tailored solutions that address unique challenges and opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            const tone = industryTones[industry.tone] || industryTones.primary;

            return <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }} viewport={{
          once: true
        }} className="col-span-1" whileHover={{
          y: -5
        }}>
              <Card className={`border-none h-full shadow hover:shadow-lg transition-all duration-300 overflow-hidden group`}>
                <div className=""></div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-lg ${tone.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition duration-300`}>
                      <industry.icon className={`h-7 w-7 ${tone.iconText}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{industry.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{industry.description}</p>
                  <div className="border-t border-slate-100 pt-4 space-y-1">
                    {industry.keyFeatures.map((feature, i) => <div key={i} className="text-sm text-slate-700 flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${tone.dot}`}></div>
                        <span>{feature}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>;
          })}
        </div>
      </div>
    </section>;
};
