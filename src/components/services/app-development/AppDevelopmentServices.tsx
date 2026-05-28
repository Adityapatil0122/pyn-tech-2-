
import React from 'react';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Smartphone, Code, Globe, Zap, Shield, Check } from "lucide-react";

const AppDevelopmentServices = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "Powerful, high-performance iOS applications built with Swift and Objective-C that leverage the full capabilities of Apple devices.",
      features: ["Swift & Objective-C", "Apple Design Guidelines", "Core iOS APIs", "TestFlight Integration", "App Store Optimization"],
      color: "from-pyn-blue to-pyn-darkBlue"
    },
    {
      icon: Smartphone,
      title: "Native Android Development",
      description: "Feature-rich Android applications built with Kotlin and Java, designed for the diverse Android ecosystem and Google Play Store.",
      features: ["Kotlin & Java", "Material Design", "Android Jetpack", "Google Play Services", "Cross-device Compatibility"],
      color: "from-green-500 to-pyn-blue"
    },
    {
      icon: Code,
      title: "Flutter Development",
      description: "Cross-platform applications with near-native performance using Flutter's reactive framework and Dart programming language.",
      features: ["Single Codebase", "Hot Reload", "Custom Widgets", "Native Performance", "Consistent UI"],
      color: "from-pyn-lightBlue to-pyn-blue"
    },
    {
      icon: Globe,
      title: "Cross-Platform Solutions",
      description: "Cost-effective applications that run on multiple platforms from a single codebase, reducing development time and maintenance costs.",
      features: ["Code Sharing", "Unified Logic", "Consistent Experience", "Faster Development", "Easier Maintenance"],
      color: "from-pyn-amber to-pyn-blue"
    },
    {
      icon: Zap,
      title: "App Optimization",
      description: "Performance tuning and optimization services to ensure your app runs smoothly, loads quickly, and provides an exceptional user experience.",
      features: ["Speed Enhancement", "Memory Management", "Battery Optimization", "Size Reduction", "Smooth Animations"],
      color: "from-pyn-amber to-pyn-darkBlue"
    },
    {
      icon: Shield,
      title: "App Maintenance",
      description: "Ongoing support and maintenance services to keep your application secure, up-to-date, and performing at its best.",
      features: ["Regular Updates", "Security Patches", "Feature Enhancements", "Bug Fixes", "Platform Compatibility"],
      color: "from-emerald-500 to-green-600"
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
            Our App Development Services
          </span>
          <h2 className="font-bold mb-4 text-4xl">What We Offer</h2>
          <p className="text-gray-600 text-base">
            Our comprehensive mobile application development services create custom solutions 
            that drive engagement and deliver exceptional user experiences across all platforms.
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
    </section>
  );
};

export default AppDevelopmentServices;
