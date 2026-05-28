
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowDown, 
  Palette, 
  Type, 
  Layout, 
  SquareEqual, 
  Minimize2 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const principles = [
  {
    icon: ArrowDown,
    title: "Visual Hierarchy",
    description: "We organize elements by importance, guiding viewers through content in a deliberate order.",
    features: ["Size variations", "Color emphasis", "Strategic positioning", "Clear focal points"],
    color: "from-pyn-blue to-pyn-darkBlue"
  },
  {
    icon: Palette,
    title: "Color Theory",
    description: "We use color purposefully to evoke emotions, strengthen branding, and enhance usability.",
    features: ["Brand-aligned palettes", "Emotional resonance", "Visual harmony", "Accessibility considerations"],
    color: "from-pyn-amber to-pyn-blue"
  },
  {
    icon: Type,
    title: "Typography",
    description: "We select and pair typefaces that enhance readability while reinforcing brand personality.",
    features: ["Font hierarchy", "Legibility focus", "Character spacing", "Responsive sizing"],
    color: "from-pyn-blue to-pyn-blue"
  },
  {
    icon: Layout,
    title: "Balance & Composition",
    description: "We arrange visual elements to create stability, flow, and visual interest within designs.",
    features: ["Symmetrical layouts", "Golden ratio application", "White space utilization", "Visual weight distribution"],
    color: "from-pyn-amber to-pyn-blue"
  },
  {
    icon: SquareEqual,
    title: "Consistency",
    description: "We maintain uniform design elements across all touchpoints to strengthen brand recognition.",
    features: ["Design systems", "Component libraries", "Visual coherence", "Pattern recognition"],
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Minimize2,
    title: "Simplicity",
    description: "We embrace minimalism to create designs that communicate clearly without unnecessary complexity.",
    features: ["Focused messaging", "Clutter elimination", "Purposeful elements", "Clear communication"],
    color: "from-pyn-amber to-pyn-blue"
  }
];

const DesignPrinciples = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {principles.map((principle, index) => (
        <motion.div key={index} variants={item}>
          <Card className="h-full border-none hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden">
            <CardHeader>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r ${principle.color}`}>
                <principle.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">{principle.title}</CardTitle>
              <CardDescription className="text-base">{principle.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {principle.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${principle.color}`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesignPrinciples;
