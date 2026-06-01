
import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import AISolutionsSection from "@/components/home/AISolutionsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import StatsSection from "@/components/home/StatsSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const pageEase = [0.22, 1, 0.36, 1] as const;
const revealViewport = { once: true, amount: 0.18, margin: "-80px" };

const heroReveal = {
  hidden: { opacity: 0, scale: 0.992, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: pageEase }
  }
};

const sectionReveal = {
  hidden: { opacity: 0, y: 42, scale: 0.985, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: pageEase }
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
        variants={heroReveal}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={sectionReveal}
      >
        <AISolutionsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={sectionReveal}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={sectionReveal}
      >
        <TechStackSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={sectionReveal}
      >
        <StatsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={sectionReveal}
      >
        <ClientsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={sectionReveal}
      >
        <CTASection />
      </motion.div>
    </div>
  );
};

export default HomePage;
