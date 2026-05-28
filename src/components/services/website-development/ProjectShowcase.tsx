
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Retail",
    description: "A comprehensive online shopping platform with inventory management, payment processing, and customer accounts.",
    image: "/lovable-uploads/b9cfedb7-014c-4b8f-90aa-b02d0e459835.png",
    features: ["Responsive design", "Product filtering", "User accounts", "Payment integration"]
  },
  {
    title: "Corporate Website",
    category: "Finance",
    description: "Modern website for a financial services company featuring service information, team profiles, and blog functionality.",
    image: "/lovable-uploads/6cc6b647-86b5-4992-b566-c7295d3c2329.png",
    features: ["Interactive elements", "Content management", "Contact forms", "Analytics integration"]
  },
  {
    title: "Educational Platform",
    category: "EdTech",
    description: "Learning management system with course creation, student progress tracking, and interactive assessments.",
    image: "/lovable-uploads/db6a96ff-c965-4229-bf66-60a1b90a099f.png",
    features: ["User authentication", "Content delivery", "Progress tracking", "Interactive quizzes"]
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-pyn-gray/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Case Studies
          </span>
          <h2 className="text-3xl font-bold mb-4">Recent Projects We've Delivered</h2>
          <p className="text-gray-600">
            Explore some of our recent work and see how we've helped businesses across industries achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-pyn-blue">{project.category}</span>
                  <div className="w-8 h-0.5 bg-pyn-blue/30 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  className="text-pyn-blue hover:text-pyn-darkBlue hover:bg-pyn-blue/10 p-0 h-auto"
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-pyn-blue text-pyn-blue hover:bg-pyn-blue/10"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
