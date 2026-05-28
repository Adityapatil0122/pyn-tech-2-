
import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import AISolutionsSection from "@/components/home/AISolutionsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import StatsSection from "@/components/home/StatsSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when page loads and improve performance
    window.scrollTo(0, 0);
    
    // Preload critical resources
    const preloadResources = () => {
      // Preload key images or resources if needed
      const imageUrls = [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
      ];
      
      imageUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    };
    
    preloadResources();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <AISolutionsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <TechStackSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <StatsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <ClientsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <CTASection />
      </motion.div>
    </div>
  );
};

export default HomePage;
