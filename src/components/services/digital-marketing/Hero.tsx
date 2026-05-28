import React from "react";
import { motion } from "framer-motion";
import { Search, BarChart, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pyn-blue/10 to-pyn-gray">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 z-10">
            <div className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-2">
              Digital Marketing
            </div>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pyn-blue to-pyn-darkBlue text-5xl font-bold py-[5px]">
              Elevate Your Digital Marketing Impact
            </h1>
            <p className="text-lg text-gray-700 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Transform your online presence with cutting-edge strategies that deliver measurable results. 
              We combine creativity with analytics to drive growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <Button size="lg" className="bg-pyn-blue hover:bg-pyn-darkBlue text-white" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>Start Your Marketing</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-800 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs ml-2">analytics-dashboard.js</div>
              </div>
              
              <div className="p-6">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Digital Marketing Analytics" className="w-full h-auto rounded-lg shadow-lg max-h-[280px] object-cover" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pyn-blue/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pyn-darkBlue/20 rounded-full blur-full blur-2xl"></div>
          </div>
        </div>

        {/* Feature cards in a single row based on the reference image */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 z-10 relative">
          {[{
          icon: Search,
          title: "Discover",
          description: "Find your target audience"
        }, {
          icon: Users,
          title: "Engage",
          description: "Connect with prospects"
        }, {
          icon: BarChart,
          title: "Convert",
          description: "Turn visitors into customers"
        }, {
          icon: TrendingUp,
          title: "Grow",
          description: "Scale your business ROI"
        }].map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${0.2 + index * 0.1}s`
        }}>
              <div className="w-12 h-12 bg-pyn-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-pyn-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Hero;