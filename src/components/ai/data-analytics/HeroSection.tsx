import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, PieChart, LineChart } from "lucide-react";
import { motion } from "framer-motion";
export const HeroSection = () => {
  return <div className="relative overflow-hidden bg-gradient-to-b from-pyn-gray to-white pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pyn-blue">
              Data Analytics & Insights
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl text-lg font-normal">
              Transform your business with powerful data analytics solutions. Uncover hidden patterns, make data-driven decisions, and gain competitive insights with our advanced analytics platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-pyn-blue hover:bg-pyn-darkBlue" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative">
              <div className="absolute -top-8 -right-8 h-24 w-24 bg-pyn-blue rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-pyn-blue rounded-full opacity-10"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pyn-blue/10 p-5 rounded-lg flex flex-col items-center">
                  <BarChart2 className="h-8 w-8 text-pyn-blue mb-2" />
                  <p className="text-sm font-medium text-gray-700">Performance Metrics</p>
                </div>
                <div className="bg-pyn-gray p-5 rounded-lg flex flex-col items-center">
                  <PieChart className="h-8 w-8 text-pyn-blue mb-2" />
                  <p className="text-sm font-medium text-gray-700">Market Segments</p>
                </div>
                <div className="bg-pyn-amber/10 p-5 rounded-lg flex flex-col items-center">
                  <LineChart className="h-8 w-8 text-pyn-blue mb-2" />
                  <p className="text-sm font-medium text-gray-700">Growth Trends</p>
                </div>
                <div className="bg-sky-50 p-5 rounded-lg flex flex-col items-center">
                  <div className="flex items-center justify-center h-8 w-8 text-sky-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Predictive Insights</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="bg-gradient-to-r from-pyn-blue to-pyn-darkBlue h-3 w-full rounded-full overflow-hidden">
                  <div className="bg-white h-full w-3/4 rounded-full opacity-30"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Data Processing</span>
                  <span>75% Complete</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 -z-10 opacity-40">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-pyn-lightBlue/40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 opacity-40">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="grid-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-pyn-lightBlue/40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#grid-pattern-2)" />
        </svg>
      </div>
    </div>;
};