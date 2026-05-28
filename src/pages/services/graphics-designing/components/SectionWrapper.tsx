
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  background?: "white" | "gray";
  badge?: string;
}

const SectionWrapper = ({ 
  children, 
  title, 
  description, 
  background = "white",
  badge
}: SectionWrapperProps) => {
  return (
    <section className={`py-20 ${background === "gray" ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {badge && (
            <div className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-3">
              {badge}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
