
import React from 'react';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AndroidLogo, Code, DeviceMobile, Gauge, GlobeHemisphereWest, ShieldCheck } from "@phosphor-icons/react";

const AppDevelopmentServices = () => {
  const services = [
    {
      icon: DeviceMobile,
      title: "Native iOS Development",
      description: "Powerful, high-performance iOS applications built with Swift and Objective-C that leverage the full capabilities of Apple devices.",
      features: ["Swift & Objective-C", "Apple Design Guidelines", "Core iOS APIs", "TestFlight Integration", "App Store Optimization"],
      tone: "bg-[#EAF4FA] text-[#2872A1] ring-[#CBDDE9]",
      dot: "bg-[#2872A1]"
    },
    {
      icon: AndroidLogo,
      title: "Native Android Development",
      description: "Feature-rich Android applications built with Kotlin and Java, designed for the diverse Android ecosystem and Google Play Store.",
      features: ["Kotlin & Java", "Material Design", "Android Jetpack", "Google Play Services", "Cross-device Compatibility"],
      tone: "bg-[#EAF7EF] text-[#2E8B57] ring-[#BDE7CB]",
      dot: "bg-[#2E8B57]"
    },
    {
      icon: Code,
      title: "Flutter Development",
      description: "Cross-platform applications with near-native performance using Flutter's reactive framework and Dart programming language.",
      features: ["Single Codebase", "Hot Reload", "Custom Widgets", "Native Performance", "Consistent UI"],
      tone: "bg-[#EEF2FF] text-[#4F46E5] ring-[#C7D2FE]",
      dot: "bg-[#4F46E5]"
    },
    {
      icon: GlobeHemisphereWest,
      title: "Cross-Platform Solutions",
      description: "Cost-effective applications that run on multiple platforms from a single codebase, reducing development time and maintenance costs.",
      features: ["Code Sharing", "Unified Logic", "Consistent Experience", "Faster Development", "Easier Maintenance"],
      tone: "bg-[#ECFEFF] text-[#0E7490] ring-[#A5F3FC]",
      dot: "bg-[#0E7490]"
    },
    {
      icon: Gauge,
      title: "App Optimization",
      description: "Performance tuning and optimization services to ensure your app runs smoothly, loads quickly, and provides an exceptional user experience.",
      features: ["Speed Enhancement", "Memory Management", "Battery Optimization", "Size Reduction", "Smooth Animations"],
      tone: "bg-[#FFF7ED] text-[#EA580C] ring-[#FED7AA]",
      dot: "bg-[#EA580C]"
    },
    {
      icon: ShieldCheck,
      title: "App Maintenance",
      description: "Ongoing support and maintenance services to keep your application secure, up-to-date, and performing at its best.",
      features: ["Regular Updates", "Security Patches", "Feature Enhancements", "Bug Fixes", "Platform Compatibility"],
      tone: "bg-[#F0FDF4] text-[#16A34A] ring-[#BBF7D0]",
      dot: "bg-[#16A34A]"
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
