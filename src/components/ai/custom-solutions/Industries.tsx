
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Building, ShoppingCart, Stethoscope, TrendingUp, Truck, Briefcase, Landmark, Factory, Plane, Lightbulb } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export const Industries = () => {
  const industries = [{
    icon: Building,
    name: 'Enterprise',
    description: 'Process automation, document analysis, and knowledge management solutions.'
  }, {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Patient outcome prediction, medical image analysis, and clinical decision support.'
  }, {
    icon: ShoppingCart,
    name: 'Retail',
    description: 'Personalized recommendations, demand forecasting, and inventory optimization.'
  }, {
    icon: TrendingUp,
    name: 'Finance',
    description: 'Risk assessment, fraud detection, algorithmic trading, and customer insights.'
  }, {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.'
  }, {
    icon: Truck,
    name: 'Logistics',
    description: 'Route optimization, demand forecasting, and delivery time prediction.'
  }, {
    icon: Briefcase,
    name: 'Insurance',
    description: 'Risk prediction, claims processing, and fraud detection systems.'
  }, {
    icon: Landmark,
    name: 'Real Estate',
    description: 'Market analysis, valuation models, and customer matching algorithms.'
  }, {
    icon: Plane,
    name: 'Travel',
    description: 'Dynamic pricing, personalized recommendations, and demand forecasting.'
  }, {
    icon: Lightbulb,
    name: 'Energy',
    description: 'Consumption forecasting, grid optimization, and predictive maintenance.'
  }];
  return <section className="py-16 bg-white" id="industries">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{
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
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Industries</Badge>
          <h2 className="font-bold mb-3 text-4xl">Industry Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver custom AI solutions tailored to the unique challenges and opportunities in your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => <motion.div key={industry.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.05
        }} viewport={{
          once: true
        }}>
              <Card className="h-full hover:shadow-lg transition-all border-0 shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-pyn-blue/10 flex items-center justify-center mb-4">
                    <industry.icon className="text-pyn-blue" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
