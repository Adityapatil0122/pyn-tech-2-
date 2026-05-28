import React from "react";
import { motion } from "framer-motion";
import { Search, Instagram, Mail, MessageSquare, BarChart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MarketingServices = () => {
  const services = [{
    title: "Search Engine Optimization",
    description: "Improve your website's visibility in search results to drive more organic traffic and qualified leads.",
    icon: Search,
    color: "from-pyn-blue to-pyn-darkBlue",
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy", "Link Building"]
  }, {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your target audience across all relevant social platforms.",
    icon: Instagram,
    color: "from-pyn-amber to-pyn-blue",
    features: ["Platform Strategy", "Content Creation", "Community Management", "Paid Campaigns", "Analytics"]
  }, {
    title: "Pay-Per-Click (PPC)",
    description: "Drive immediate traffic and conversions with targeted advertising campaigns that maximize ROI.",
    icon: TrendingUp,
    color: "from-pyn-amber to-pyn-darkBlue",
    features: ["Campaign Strategy", "Keyword Targeting", "Ad Creation", "A/B Testing", "Conversion Tracking"]
  }, {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns that deliver value.",
    icon: Mail,
    color: "from-emerald-500 to-green-600",
    features: ["List Building", "Sequence Design", "Personalization", "Automation", "Performance Analysis"]
  }, {
    title: "Content Marketing",
    description: "Establish authority in your industry with high-quality content that educates and converts.",
    icon: MessageSquare,
    color: "from-pyn-lightBlue to-pyn-blue",
    features: ["Content Strategy", "Blog Management", "Lead Magnets", "Content Distribution", "SEO Integration"]
  }, {
    title: "Analytics & Reporting",
    description: "Gain actionable insights with comprehensive analytics that measure and improve performance.",
    icon: BarChart,
    color: "from-pyn-amber to-pyn-blue",
    features: ["KPI Tracking", "Custom Dashboards", "Conversion Analysis", "A/B Testing", "Monthly Reports"]
  }];
  
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };

  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-4">
            Our Marketing Arsenal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            We combine creativity, strategy, and technology to deliver marketing solutions 
            that drive measurable growth for your business.
          </p>
        </motion.div>

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
                <div className=""></div>
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
                        <div className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>;
};

export default MarketingServices;
