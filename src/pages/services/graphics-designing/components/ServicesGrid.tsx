
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Fingerprint, 
  Monitor, 
  Compass,
  Camera,
  FileImage,
  Megaphone,
  ShoppingBag,
  Award,
  Layers
} from "lucide-react";

const services = [
  {
    icon: FileImage,
    title: "Custom Illustrations",
    description: "Unique artwork tailored to your brand identity and messaging needs",
    features: ["Hand-drawn artwork", "Digital illustrations", "Character design", "Icon creation"]
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description: "Cohesive visual language that represents your brand across all touchpoints",
    features: ["Logo design", "Brand guidelines", "Color palettes", "Typography systems"]
  },
  {
    icon: Monitor,
    title: "Print & Digital",
    description: "Cross-media visual solutions optimized for both digital and print applications",
    features: ["Business cards", "Brochures", "Social media graphics", "Web banners"]
  },
  {
    icon: Compass,
    title: "Art Direction",
    description: "Strategic visual guidance to ensure consistent and impactful brand communication",
    features: ["Creative strategy", "Visual concepts", "Brand consistency", "Creative oversight"]
  },
  {
    icon: Camera,
    title: "Photography Direction",
    description: "Professional guidance for photo shoots and visual content creation",
    features: ["Photo styling", "Composition guidance", "Brand alignment", "Visual storytelling"]
  },
  {
    icon: Palette,
    title: "Color Consulting",
    description: "Expert color selection and palette development for maximum visual impact",
    features: ["Color psychology", "Brand colors", "Accessibility compliance", "Trend analysis"]
  },
  {
    icon: Megaphone,
    title: "Marketing Materials",
    description: "Eye-catching designs for all your marketing and promotional needs",
    features: ["Flyers & posters", "Email templates", "Advertisement design", "Presentation design"]
  },
  {
    icon: ShoppingBag,
    title: "Packaging Design",
    description: "Compelling packaging solutions that stand out on shelves and online",
    features: ["Product packaging", "Label design", "Box design", "Sustainable solutions"]
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Premium design services recognized for excellence and innovation",
    features: ["Industry recognition", "Creative excellence", "Innovative solutions", "Professional standards"]
  },
  {
    icon: Layers,
    title: "Multi-Format Delivery",
    description: "Designs delivered in all necessary formats for various applications",
    features: ["Vector files", "High-res images", "Web-optimized", "Print-ready files"]
  }
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pyn-blue/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-pyn-blue" />
              </div>
              
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-pyn-darkBlue mb-2 sm:mb-3 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-500">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pyn-blue rounded-full mr-2 flex-shrink-0"></div>
                    <span className="leading-relaxed text-xs sm:text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;
