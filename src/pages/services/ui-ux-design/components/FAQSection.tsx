
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is UI/UX design and why is it important?",
    answer: "UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design ensures the overall experience is intuitive and valuable. Together, they create products that are not only visually appealing but also functional and enjoyable to use. Good UI/UX design increases user engagement, reduces bounce rates, and improves conversion rates by creating interfaces that users find intuitive and satisfying."
  },
  {
    question: "How long does a typical UI/UX design project take?",
    answer: "The timeline varies based on project complexity, but a typical process ranges from 4-12 weeks. This includes research, wireframing, prototyping, visual design, and testing phases. We'll provide a detailed timeline during our initial consultation based on your specific requirements and project scope."
  },
  {
    question: "Do you work with existing brands or create new visual identities?",
    answer: "We do both! For established brands, we ensure our designs align with existing brand guidelines while enhancing user experience. For new businesses, we can develop a complete visual identity alongside the UI/UX design to ensure consistency across all customer touchpoints."
  },
  {
    question: "How do you ensure your designs are accessible to all users?",
    answer: "Accessibility is a core principle in our design process. We follow WCAG guidelines, ensure proper color contrast, implement keyboard navigation, add appropriate alt text, and test with screen readers. We also conduct usability testing with diverse user groups to identify and address potential barriers."
  },
  {
    question: "What deliverables can I expect from a UI/UX design project?",
    answer: "Our deliverables typically include user research reports, user personas, journey maps, information architecture diagrams, wireframes, interactive prototypes, UI style guides, design systems, and production-ready design files that your development team can implement."
  },
  {
    question: "How do you measure the success of a UI/UX design?",
    answer: "We define success metrics at the beginning of each project, which may include increased conversion rates, reduced bounce rates, improved task completion rates, higher user satisfaction scores, or decreased support tickets. We use analytics, A/B testing, and user feedback to measure these outcomes."
  },
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
    <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-3">Common Questions</span>
          <h2 className="font-bold mb-4 text-4xl">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to questions our clients frequently ask about our UI/UX design services.
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

export default FAQSection;
