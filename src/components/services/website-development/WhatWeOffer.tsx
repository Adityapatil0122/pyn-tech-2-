
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Browser, DeviceMobile, FileCode, GearSix, MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";

const WhatWeOffer = () => {
  const services = [
    {
      icon: Browser,
      title: "Custom Website Development",
      description: "Tailor-made websites designed specifically for your business needs. We create unique, high-performance websites that align with your brand and business objectives.",
      features: ["Custom UI/UX Design", "Scalable Architecture", "Performance Optimization", "Brand Integration", "Custom Functionality"],
      tone: "bg-[#EAF4FA] text-[#2872A1] ring-[#CBDDE9]",
      dot: "bg-[#2872A1]"
    }, 
    {
      icon: ShoppingCartSimple,
      title: "eCommerce Solutions",
      description: "Comprehensive online store development with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales potential.",
      features: ["Secure Payment Integration", "Inventory Management", "Order Processing", "Customer Accounts", "Analytics Integration"],
      tone: "bg-[#FDF2F8] text-[#DB2777] ring-[#FBCFE8]",
      dot: "bg-[#DB2777]"
    }, 
    {
      icon: FileCode,
      title: "WordPress Development",
      description: "Expert WordPress website creation with custom themes, plugins, and optimizations. We build flexible, scalable WordPress solutions that are easy to manage.",
      features: ["Custom Theme Development", "Plugin Integration", "Performance Tuning", "Security Hardening", "Content Management"],
      tone: "bg-[#EEF2FF] text-[#4F46E5] ring-[#C7D2FE]",
      dot: "bg-[#4F46E5]"
    }, 
    {
      icon: DeviceMobile,
      title: "Responsive Design",
      description: "Mobile-first websites that provide seamless experiences across all devices. Our responsive designs ensure your site looks and functions perfectly on any screen size.",
      features: ["Mobile-First Design", "Cross-Device Testing", "Performance Optimization", "Touch-Friendly Interface", "Flexible Layouts"],
      tone: "bg-[#ECFEFF] text-[#0E7490] ring-[#A5F3FC]",
      dot: "bg-[#0E7490]"
    }, 
    {
      icon: MagnifyingGlass,
      title: "SEO-Friendly Websites",
      description: "Websites built with search engine optimization in mind, including proper structure, fast loading speeds, and clean code to help improve your search rankings.",
      features: ["SEO Best Practices", "Fast Loading Speed", "Schema Markup", "Clean Code Structure", "Performance Metrics"],
      tone: "bg-[#F0FDF4] text-[#16A34A] ring-[#BBF7D0]",
      dot: "bg-[#16A34A]"
    }, 
    {
      icon: GearSix,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance services to keep your website secure, updated, and performing at its best through regular monitoring and updates.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Backup Management", "Technical Support"],
      tone: "bg-[#FFF7ED] text-[#EA580C] ring-[#FED7AA]",
      dot: "bg-[#EA580C]"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Our Services
          </span>
          <h2 className="font-bold mb-4 text-4xl">What We Offer</h2>
          <p className="text-gray-600 text-base">
            Our website development services create custom solutions that drive results. From responsive designs to complex web applications, we build websites that stand out.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden">
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ring-1 ${service.tone}`}>
                    <service.icon className="h-7 w-7" weight="duotone" />
                  </div>
                  
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`mr-2 h-1.5 w-1.5 rounded-full ${service.dot}`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
