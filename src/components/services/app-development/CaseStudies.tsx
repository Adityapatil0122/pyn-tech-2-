
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Health & Fitness Tracker",
    category: "Healthcare",
    description: "A comprehensive fitness tracking application with real-time health monitoring, workout plans, and nutrition guidance.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=2070",
    platforms: ["iOS", "Android"],
    technologies: ["Swift", "Kotlin", "HealthKit", "Google Fit API"],
    results: ["500K+ Downloads", "4.8 Star Rating", "35% User Retention"]
  },
  {
    title: "Enterprise Inventory System",
    category: "Business",
    description: "A cross-platform inventory management solution for enterprise clients with barcode scanning and real-time analytics.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2076",
    platforms: ["Flutter"],
    technologies: ["Dart", "Firebase", "Cloud Functions", "ML Kit"],
    results: ["40% Faster Inventory Processing", "98% Accuracy", "ROI in 6 Months"]
  },
  {
    title: "Social Media Content Creator",
    category: "Social",
    description: "A content creation platform for influencers and marketers with advanced editing tools and scheduling features.",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=2070",
    platforms: ["iOS", "Android", "Web"],
    technologies: ["React Native", "Redux", "Node.js", "AWS"],
    results: ["2M+ Active Users", "$3M Revenue in Year 1", "Featured by Apple"]
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Success Stories
          </span>
          <h2 className="font-bold mb-4 text-4xl">Our Featured App Projects</h2>
          <p className="text-gray-600 text-base">
            Explore some of our recent mobile application projects and the results we achieved for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-pyn-blue/10 text-pyn-blue rounded text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pyn-darkBlue">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.platforms.map((platform, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2 py-1 bg-pyn-blue/5 text-pyn-blue rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-pyn-blue mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center text-pyn-blue hover:text-pyn-darkBlue font-medium text-sm">
                      View Project Details <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
