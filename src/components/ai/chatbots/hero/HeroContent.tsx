import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pyn-blue/10 px-4 py-1 text-sm font-medium text-pyn-blue">
        <span>AI-Powered Conversational Agents</span>
      </div>

      <h1 className="mb-6 text-4xl font-bold text-pyn-dark md:text-5xl lg:text-6xl">
        Transform Customer Experience with <span className="text-pyn-blue">AI Chatbots</span>
      </h1>

      <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-700 md:text-lg">
        Deploy intelligent conversational agents that understand context, learn from interactions, and deliver personalized experiences 24/7.
      </p>

      <div className="mb-12 flex flex-wrap gap-4">
        <Button
          size="lg"
          onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
          className="border-none bg-pyn-dark text-white hover:bg-pyn-darkBlue"
        >
          Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};
