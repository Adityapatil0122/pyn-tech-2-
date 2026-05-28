
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, LineChart } from 'lucide-react';

export const AnalyticsDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10"
    >
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
  );
};
