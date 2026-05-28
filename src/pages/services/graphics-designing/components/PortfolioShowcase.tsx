
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    category: "Branding",
    title: "Tech Startup Rebrand",
    description: "Complete brand identity refresh for a growing tech company, including logo design, color palette, and brand guidelines.",
    imageSrc: "https://images.unsplash.com/photo-1600775508114-5c30cf941a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    clientName: "Dataflow Systems",
    testimonial: "The new branding perfectly captures our company's vision and has significantly improved our market recognition.",
  },
  {
    id: 2,
    category: "Packaging",
    title: "Organic Food Packaging",
    description: "Eco-friendly packaging design for an organic food brand that highlights product quality while maintaining sustainability.",
    imageSrc: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    clientName: "NatureHarvest",
    testimonial: "Sales increased by 45% after the packaging redesign. The new design really stands out on shelves.",
  },
  {
    id: 3,
    category: "Social Media",
    title: "Fashion Brand Campaign",
    description: "Cohesive social media campaign for seasonal collection launch, including post templates and story designs.",
    imageSrc: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    clientName: "Urban Threads",
    testimonial: "The campaign reached 3x more engagement than our previous launches. The designs were both beautiful and effective.",
  },
  {
    id: 4,
    category: "Print",
    title: "Annual Report Design",
    description: "Clean, data-focused annual report design for a financial services firm, balancing professionalism with visual interest.",
    imageSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    clientName: "Global Finance Partners",
    testimonial: "Our stakeholders were impressed by the clarity and professionalism of the report. Best design we've had in years.",
  },
  {
    id: 5,
    category: "Logo",
    title: "Healthcare Logo Redesign",
    description: "Modern rebrand for a healthcare provider, focusing on approachability while maintaining medical authority.",
    imageSrc: "https://images.unsplash.com/photo-1624021076830-f724378b205f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    clientName: "MediCare Plus",
    testimonial: "Our patients immediately connected with the new brand. It feels trustworthy yet contemporary.",
  },
  {
    id: 6,
    category: "Motion",
    title: "App Launch Animation",
    description: "Eye-catching motion graphics and animations for the launch of a new fitness application.",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    clientName: "FitLife App",
    testimonial: "The animations added a premium feel to our app that users immediately noticed. Launch surpassed all expectations.",
  }
];

const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-pyn-blue text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            layout
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
          >
            <div className="relative overflow-hidden group cursor-pointer">
              {item.imageSrc ? (
                <img 
                  src={item.imageSrc} 
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <Image className="w-10 h-10 text-gray-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
              <span className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            
            <motion.div 
              className="p-4"
              initial={{ height: activeItem === item.id ? "auto" : "100px" }}
              animate={{ height: activeItem === item.id ? "auto" : "100px" }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              {activeItem === item.id && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="italic text-gray-600 text-sm">&ldquo;{item.testimonial}&rdquo;</p>
                    <p className="text-sm font-medium mt-2">— {item.clientName}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
