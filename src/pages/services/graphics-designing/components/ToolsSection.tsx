
import React from "react";
import { motion } from "framer-motion";

interface Tool {
  name: string;
  logo: string;
  category: string;
  description: string;
}

const tools: Tool[] = [
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    category: "Image Editing",
    description: "Advanced photo editing and manipulation"
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
    category: "Vector Graphics",
    description: "Vector-based design and illustration"
  },
  {
    name: "Adobe InDesign",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
    category: "Publishing",
    description: "Print and digital publication layouts"
  },
  {
    name: "Adobe After Effects",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    category: "Motion",
    description: "Motion graphics and visual effects"
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    category: "UI Design",
    description: "Collaborative interface design"
  },
  {
    name: "Sketch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
    category: "UI Design",
    description: "Interface design for Mac"
  },
  {
    name: "Cinema 4D",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/C4D_Logo.png",
    category: "3D Design",
    description: "3D modeling and animation"
  },
  {
    name: "Procreate",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/16/Procreate_logo.png",
    category: "Digital Illustration",
    description: "Digital painting for iPad"
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    category: "Video",
    description: "Video editing and production"
  },
  {
    name: "Canva",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    category: "Easy Design",
    description: "Simplified graphic design platform"
  },
  {
    name: "Blender",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
    category: "3D Design",
    description: "Free and open-source 3D creation"
  },
  {
    name: "CorelDRAW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/CorelDraw_logo.svg",
    category: "Vector Graphics",
    description: "Vector illustration and design"
  }
];

// Group tools by category with proper typing
const categories: Record<string, Tool[]> = tools.reduce((acc: Record<string, Tool[]>, tool: Tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {});

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const ToolsSection = () => {
  return (
    <div>
      {Object.entries(categories).map(([category, categoryTools]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-semibold mb-6 pb-2 border-b">
            {category} Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryTools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center group"
              >
                <div className="mb-3 w-16 h-16 flex items-center justify-center">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-medium text-lg mb-1">{tool.name}</h4>
                <p className="text-sm text-gray-500">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsSection;
