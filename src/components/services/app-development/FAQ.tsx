
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the app development process?",
    answer: "Our app development process includes discovery and planning, UI/UX design, development and coding, testing and quality assurance, deployment, and post-launch support and maintenance. We follow agile methodologies to ensure efficient delivery and consistent communication throughout."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "The timeline varies based on complexity and features. Simple apps can take 2-3 months, while complex applications might require 4-9 months. We provide detailed timelines during the initial consultation, and our agile approach ensures regular deliverables throughout the development cycle."
  },
  {
    question: "What platforms do you develop for?",
    answer: "We develop native apps for iOS (Swift/Objective-C) and Android (Kotlin/Java), as well as cross-platform solutions using Flutter or React Native. Our team can recommend the best approach based on your specific requirements, target audience, and budget."
  },
  {
    question: "How do you ensure app security?",
    answer: "Security is paramount in our development process. We implement industry-standard practices including secure authentication, data encryption, secure API communications, regular security testing, and compliance with platform-specific security guidelines. For apps handling sensitive data, we conduct additional security audits and implement advanced protection measures."
  },
  {
    question: "How much does app development cost?",
    answer: "App development costs vary widely depending on complexity, features, platforms, and integration requirements. Simple apps start around $25,000, while complex enterprise solutions can exceed $100,000. We provide transparent pricing and detailed quotes after understanding your specific needs."
  },
  {
    question: "Do you provide app maintenance after launch?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. These include bug fixes, performance optimization, compatibility updates for new OS versions, security patches, and feature enhancements. We recommend ongoing maintenance to ensure your app remains secure, stable, and competitive."
  },
  {
    question: "Can you help with publishing my app to app stores?",
    answer: "Absolutely. We handle the entire app store submission process for both Apple App Store and Google Play Store. This includes preparing all necessary assets, optimizing store listings for discoverability, ensuring compliance with store guidelines, and managing the review process."
  },
  {
    question: "What's the difference between native and cross-platform development?",
    answer: "Native development uses platform-specific languages and tools (Swift/Objective-C for iOS, Kotlin/Java for Android), offering optimal performance, full access to device features, and the best user experience. Cross-platform development uses frameworks like Flutter or React Native to build apps that run on multiple platforms from a single codebase, reducing development time and cost but potentially with some performance trade-offs for complex applications."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

const AppDevelopmentFAQ = () => {
  return (
    <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Common Questions
          </span>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our app development services and process
          </p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDevelopmentFAQ;
