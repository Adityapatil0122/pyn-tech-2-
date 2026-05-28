
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your graphic design process like?",
    answer: "Our design process typically involves six key stages: Discovery & Brief, Research & Concept Development, Initial Design Concepts, Revisions & Refinement, Final Delivery, and Support & Future Growth. Throughout this process, we maintain open communication and collaborate closely with you to ensure your vision is brought to life."
  },
  {
    question: "How long does a typical graphic design project take?",
    answer: "Project timelines vary based on complexity and scope. A logo design might take 2-3 weeks, while a complete brand identity package could take 4-8 weeks. Website graphics or marketing collateral typically range from 1-4 weeks. During our initial consultation, we'll provide a clear timeline based on your specific project needs."
  },
  {
    question: "What file formats will I receive for my designs?",
    answer: "We provide industry-standard file formats suitable for both digital and print applications. Typically, this includes vector files (AI, EPS, PDF), raster files (JPG, PNG, PSD), and any other specialized formats required for your specific use cases. All deliverables are organized and labeled clearly for easy use."
  },
  {
    question: "Do you offer brand guidelines with your design packages?",
    answer: "Yes, we offer comprehensive brand guidelines as part of our brand identity packages. These guidelines cover proper logo usage, color specifications, typography rules, imagery style, and application examples. For standalone design projects, we can also create simplified usage guides to ensure consistent implementation."
  },
  {
    question: "What information do you need to start a design project?",
    answer: "To start a project effectively, we need information about your business/organization, target audience, project goals, design preferences, competitive landscape, and any existing brand elements. Our detailed design brief questionnaire helps gather all necessary information to ensure our designs align with your vision and objectives."
  },
  {
    question: "How do revisions work in your design process?",
    answer: "Our standard packages include 2-3 rounds of revisions after the initial concept presentation. We welcome your feedback and work collaboratively to refine the designs until they meet your expectations. If additional revisions are needed beyond the included rounds, we can accommodate them at our hourly rate."
  },
  {
    question: "Can you work with our existing brand elements?",
    answer: "Absolutely! We're experienced in working with established brands. Whether you need a complete refresh while maintaining brand equity or simply want to extend your existing visual identity with new graphics, we can work within your established brand framework to ensure consistency."
  },
  {
    question: "Do you offer rush services for urgent projects?",
    answer: "Yes, we offer expedited services for projects with tight deadlines, subject to our current availability. Rush projects typically incur an additional fee of 25-50% depending on the timeline and complexity. Please contact us as soon as possible if you have an urgent project so we can best accommodate your needs."
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

const FAQSection = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
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
  );
};

export default FAQSection;
