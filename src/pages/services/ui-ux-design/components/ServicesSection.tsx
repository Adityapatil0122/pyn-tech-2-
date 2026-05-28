
import React, { forwardRef } from 'react';
import { motion } from "framer-motion";
import { Users, Layout, PenTool, Layers, EyeIcon, Code } from "lucide-react";
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Users,
    title: "User Research & Strategy",
    description: "Understand your users' needs, behaviors, and motivations to inform design decisions.",
    features: ["User Interviews & Surveys", "Competitive Analysis", "Persona Development", "User Journey Mapping"],
    color: "from-pyn-amber to-pyn-darkBlue"
  },
  {
    icon: Layout,
    title: "Information Architecture",
    description: "Structure and organize your content for optimal user navigation and findability.",
    features: ["Site Mapping", "Content Hierarchy", "Navigation Systems", "User Flow Design"],
    color: "from-pyn-blue to-pyn-darkBlue"
  },
  {
    icon: PenTool,
    title: "UI Design & Branding",
    description: "Create visually stunning interfaces that align with your brand identity.",
    features: ["Visual Design Systems", "Color & Typography", "Icon & Illustration Design", "Brand Identity Integration"],
    color: "from-pyn-amber to-pyn-blue"
  },
  {
    icon: Layers,
    title: "Wireframing & Prototyping",
    description: "Visualize layouts and interactions before full development to save time and resources.",
    features: ["Low & High Fidelity Wireframes", "Interactive Prototypes", "Responsive Layouts", "Component Libraries"],
    color: "from-pyn-amber to-pyn-blue"
  },
  {
    icon: EyeIcon,
    title: "Usability Testing",
    description: "Validate designs with real users to identify issues and optimize the experience.",
    features: ["User Testing Sessions", "A/B Testing", "Heatmap Analysis", "Accessibility Evaluation"],
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Code,
    title: "Implementation Support",
    description: "Bridge the gap between design and development for seamless execution.",
    features: ["Design Specifications", "Developer Handoff", "Implementation Guidance", "Quality Assurance"],
    color: "from-pyn-lightBlue to-pyn-blue"
  }
];

interface ServicesSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

const ServicesSection = forwardRef<HTMLElement, ServicesSectionProps>(({ sectionRef }, ref) => {
  return (
    <section ref={sectionRef} className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-3">
            Comprehensive Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive UI/UX Design Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our strategic approach to design solves real business problems while creating exceptional user experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
