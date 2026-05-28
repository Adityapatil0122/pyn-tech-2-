import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
const platforms = [{
  name: "Flutter",
  logo: "🔷",
  description: "Google's UI toolkit for building natively compiled applications",
  details: "Flutter allows you to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Using Dart language, Flutter offers hot reload for rapid development cycles, expressive UI, and native performance across platforms.",
  technologies: ["Dart", "Flutter Widgets", "Firebase", "Provider/Bloc", "SQLite"]
}, {
  name: "iOS",
  logo: "🍎",
  description: "Native development for Apple's iOS ecosystem",
  details: "Our iOS development leverages Swift and occasionally Objective-C to build high-performance applications for iPhones and iPads. We implement Apple's Human Interface Guidelines for intuitive UX, and utilize SwiftUI and UIKit for modern, responsive interfaces.",
  technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "TestFlight"]
}, {
  name: "Android",
  logo: "🤖",
  description: "Native development for Google's Android platform",
  details: "We build Android applications using Kotlin and Java, following Material Design guidelines for a cohesive user experience. Our Android development implements Jetpack components for robust, maintainable code and optimizes for the wide variety of Android devices.",
  technologies: ["Kotlin", "Java", "Jetpack", "Room", "Material Design"]
}, {
  name: "React Native",
  logo: "⚛️",
  description: "Facebook's framework for building native apps using React",
  details: "React Native enables us to create mobile applications using JavaScript and React. It offers near-native performance with the development efficiency of web applications. We use React Native for projects requiring rapid deployment across platforms with a single codebase.",
  technologies: ["JavaScript", "React", "Redux", "Native Modules", "Expo"]
}, {
  name: "Backend Services",
  logo: "☁️",
  description: "Cloud services and APIs that power mobile applications",
  details: "Our mobile applications are supported by robust backend services, including RESTful APIs, real-time databases, authentication systems, and cloud functions. We implement secure, scalable backends that ensure your app performs reliably at any scale.",
  technologies: ["Firebase", "AWS", "Node.js", "MongoDB", "GraphQL"]
}, {
  name: "App Extensions",
  logo: "🧩",
  description: "Additional functionality that extends core app capabilities",
  details: "We develop app extensions like widgets, notifications, in-app purchases, and third-party integrations that enhance your application's functionality and user engagement. These extensions provide additional value and keep users coming back to your app.",
  technologies: ["Push Notifications", "Widgets", "App Clips", "In-App Purchases", "Deep Linking"]
}];
const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">Technology Stack</span>
          <h2 className="font-bold mb-4 text-4xl">Development Platforms & Technologies</h2>
          <p className="text-gray-600 text-base">
            We leverage the most powerful, modern mobile development technologies to build robust, 
            cross-platform solutions that deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <Card className={`h-full transform transition-all duration-300 cursor-pointer ${activeIndex === index ? "scale-105 shadow-xl" : "hover:scale-105 hover:shadow-md"}`} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{platform.logo}</span>
                    <h3 className="text-xl font-semibold text-pyn-darkBlue">{platform.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96" : "max-h-0"}`}>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{platform.details}</p>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {platform.technologies.map((tech, i) => <span key={i} className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-blue rounded-full text-xs">
                              {tech}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-pyn-blue text-sm font-medium">
                    {activeIndex === index ? "Click to collapse" : "Click for details"}
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default TechStack;