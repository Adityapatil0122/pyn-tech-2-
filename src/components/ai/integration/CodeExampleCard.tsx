
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Network, Server } from "lucide-react";

export const CodeExampleCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }} 
      className="relative"
    >
      <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <Code className="h-10 w-10 text-pyn-blue" />
          </div>
          <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <Database className="h-10 w-10 text-pyn-lightBlue" />
          </div>
          <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <Network className="h-10 w-10 text-pyn-darkBlue" />
          </div>
          <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <Server className="h-10 w-10 text-slate-600" />
          </div>
        </div>
        
        <div className="mt-6 bg-slate-900 rounded-lg p-4 text-sm font-mono text-green-400 overflow-hidden">
          <div>$ curl -X POST https://api.pyntechnologies.com/v2/ai/analyze \</div>
          <div>&nbsp;&nbsp;-H "Authorization: Bearer $API_KEY" \</div>
          <div>&nbsp;&nbsp;-H "Content-Type: application/json" \</div>
          <div>&nbsp;&nbsp;-d '&#123;"data": "Your text to analyze"&#125;'</div>
        </div>
      </div>
    </motion.div>
  );
};
