
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const showcaseProjects = [
  {
    id: 1,
    title: "Financial App Redesign",
    category: "Mobile App",
    beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069",
    description: "Transformed a complex financial app with poor user ratings into an intuitive experience that increased user engagement by 47%.",
    improvements: [
      "Simplified complex workflows",
      "Improved navigation structure",
      "Enhanced visual hierarchy",
      "Optimized for one-handed use"
    ]
  },
  {
    id: 2,
    title: "E-commerce Website Revamp",
    category: "Web Design",
    beforeImage: "https://images.unsplash.com/photo-1490971588422-52f6262a237a?auto=format&fit=crop&q=80&w=1974",
    afterImage: "https://images.unsplash.com/photo-1629585171506-11816044a6e9?auto=format&fit=crop&q=80&w=1938",
    description: "Redesigned an e-commerce website to improve the purchase journey, resulting in a 38% increase in conversion rate.",
    improvements: [
      "Streamlined checkout process",
      "Enhanced product presentation",
      "Improved search functionality",
      "Responsive design implementation"
    ]
  },
  {
    id: 3,
    title: "Healthcare Portal",
    category: "Web Application",
    beforeImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    afterImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=2070",
    description: "Created an accessible, user-friendly healthcare portal that improved patient engagement and reduced administrative workload.",
    improvements: [
      "Accessible design for all users",
      "Intuitive appointment scheduling",
      "Simplified medical records access",
      "Cross-device compatibility"
    ]
  },
];

const DesignShowcase = () => {
  const [view, setView] = useState('after'); // 'before' or 'after'
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 p-1 rounded-full">
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              view === 'before' ? 'bg-pyn-blue text-white' : 'text-gray-600'
            }`}
            onClick={() => setView('before')}
          >
            Before
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              view === 'after' ? 'bg-pyn-blue text-white' : 'text-gray-600'
            }`}
            onClick={() => setView('after')}
          >
            After
          </button>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {showcaseProjects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden h-[300px] md:h-[400px]">
                    <img 
                      src={view === 'before' ? project.beforeImage : project.afterImage} 
                      alt={`${project.title} - ${view} redesign`} 
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-pyn-blue/90 text-white text-xs uppercase px-3 py-1 rounded-full font-semibold">
                      {view}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-pyn-blue">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Key Improvements</h4>
                      <ul className="space-y-2">
                        {project.improvements.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-pyn-blue rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default DesignShowcase;
