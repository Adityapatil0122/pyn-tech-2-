
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, ShoppingCart, FileCode, Smartphone, Search, Settings } from "lucide-react";

const WhatWeOffer = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Tailor-made websites designed specifically for your business needs. We create unique, high-performance websites that align with your brand and business objectives.",
      features: ["Custom UI/UX Design", "Scalable Architecture", "Performance Optimization", "Brand Integration", "Custom Functionality"],
      color: "from-pyn-blue to-pyn-darkBlue"
    }, 
    {
      icon: ShoppingCart,
      title: "eCommerce Solutions",
      description: "Comprehensive online store development with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales potential.",
      features: ["Secure Payment Integration", "Inventory Management", "Order Processing", "Customer Accounts", "Analytics Integration"],
      color: "from-pyn-amber to-pyn-blue"
    }, 
    {
      icon: FileCode,
      title: "WordPress Development",
      description: "Expert WordPress website creation with custom themes, plugins, and optimizations. We build flexible, scalable WordPress solutions that are easy to manage.",
      features: ["Custom Theme Development", "Plugin Integration", "Performance Tuning", "Security Hardening", "Content Management"],
      color: "from-pyn-lightBlue to-pyn-blue"
    }, 
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first websites that provide seamless experiences across all devices. Our responsive designs ensure your site looks and functions perfectly on any screen size.",
      features: ["Mobile-First Design", "Cross-Device Testing", "Performance Optimization", "Touch-Friendly Interface", "Flexible Layouts"],
      color: "from-pyn-amber to-pyn-darkBlue"
    }, 
    {
      icon: Search,
      title: "SEO-Friendly Websites",
      description: "Websites built with search engine optimization in mind, including proper structure, fast loading speeds, and clean code to help improve your search rankings.",
      features: ["SEO Best Practices", "Fast Loading Speed", "Schema Markup", "Clean Code Structure", "Performance Metrics"],
      color: "from-emerald-500 to-green-600"
    }, 
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance services to keep your website secure, updated, and performing at its best through regular monitoring and updates.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Backup Management", "Technical Support"],
      color: "from-pyn-dark to-pyn-blue"
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
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r ${service.color}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${service.color}"></div>
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
