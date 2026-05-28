
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Mobile App",
    category: "Mobile Design",
    imageUrl: "https://images.unsplash.com/photo-1629585171506-11816044a6e9?auto=format&fit=crop&q=80&w=1938",
    description: "A complete redesign of a fashion e-commerce app with improved product discovery and checkout experience.",
    metrics: [
      { label: "Conversion Rate", value: "+38%" },
      { label: "Cart Abandonment", value: "-45%" }
    ],
    tags: ["Mobile UI", "E-commerce", "iOS", "Android"]
  },
  {
    id: 2,
    title: "Banking Dashboard",
    category: "Web Application",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    description: "An intuitive financial management dashboard for a leading online banking platform.",
    metrics: [
      { label: "User Engagement", value: "+56%" },
      { label: "Support Tickets", value: "-62%" }
    ],
    tags: ["Dashboard", "Data Visualization", "FinTech"]
  },
  {
    id: 3,
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    description: "A patient-centered healthcare portal focused on appointment scheduling and medical records access.",
    metrics: [
      { label: "Patient Engagement", value: "+74%" },
      { label: "Admin Workload", value: "-35%" }
    ],
    tags: ["Healthcare", "Accessibility", "Patient Experience"]
  }
];

const PortfolioShowcase = () => {
  return (
    <div className="grid grid-cols-1 gap-16">
      {projects.map((project, index) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
        >
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                {project.category}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{metric.label}</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{metric.value}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="bg-pyn-amber/20 dark:bg-pyn-amber/20 text-pyn-dark dark:text-pyn-amber text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <Button variant="outline" className="group">
              <span>View Case Study</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      ))}
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="group">
          <span>View All Projects</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
