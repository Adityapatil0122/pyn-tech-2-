
import React from 'react';
import { motion } from "framer-motion";
import { Users, Eye, MousePointer, TrendingUp } from "lucide-react";
import PrincipleCard from './PrincipleCard';

const principles = [
  {
    icon: Users,
    title: "User-Centered",
    subtitle: "Research-driven solutions",
    description: "Every design decision is backed by user research and testing to ensure we create experiences that truly serve your audience's needs and expectations.",
    color: "from-pyn-blue to-pyn-darkBlue"
  },
  {
    icon: Eye,
    title: "Visual Design",
    subtitle: "Beautiful & functional UI",
    description: "We balance aesthetics with usability, creating interfaces that are not only visually stunning but also intuitive and accessible to all users.",
    color: "from-pyn-amber to-pyn-darkBlue"
  },
  {
    icon: MousePointer,
    title: "Interactive",
    subtitle: "Engaging experiences",
    description: "Through thoughtful micro-interactions and seamless transitions, we create engaging experiences that guide users naturally through their journey.",
    color: "from-pyn-amber to-pyn-blue"
  },
  {
    icon: TrendingUp,
    title: "Conversion",
    subtitle: "Results-oriented design",
    description: "Our designs are strategically crafted to drive business goals, whether that's increasing conversions, engagement, or user satisfaction.",
    color: "from-pyn-amber to-pyn-blue"
  }
];

const DesignPrinciples = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {principles.map((principle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <PrincipleCard {...principle} />
        </motion.div>
      ))}
    </div>
  );
};

export default DesignPrinciples;
