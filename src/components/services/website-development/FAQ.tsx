
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [{
  question: "How long does it take to develop a website?",
  answer: "The timeline for website development varies depending on the complexity and scope of the project. A simple informational website might take 4-6 weeks, while a complex e-commerce platform or web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
}, {
  question: "What's included in your website development services?",
  answer: "Our comprehensive website development services include discovery and planning, UX/UI design, frontend and backend development, content integration, responsive design implementation, SEO optimization, testing and quality assurance, deployment, and post-launch support. We can also provide ongoing maintenance and updates as needed."
}, {
  question: "Will my website be mobile-responsive?",
  answer: "Absolutely! All websites we develop are fully responsive and optimized for all devices including smartphones, tablets, laptops, and desktop computers. We follow a mobile-first approach to ensure excellent user experience across all screen sizes."
}, {
  question: "Do you provide content management systems (CMS)?",
  answer: "Yes, we implement robust content management systems that allow you to easily update your website's content without technical knowledge. Depending on your needs, we can use established CMS platforms like WordPress or develop a custom CMS tailored to your specific requirements."
}, {
  question: "How do you handle website security?",
  answer: "Security is a top priority in all our website development projects. We implement industry standard security practices including secure coding, SSL certificates, regular updates and patches, robust authentication systems, data encryption, and protection against common vulnerabilities like SQL injection and cross-site scripting."
}, {
  question: "Can you help with SEO for my website?",
  answer: "Yes, we integrate SEO best practices throughout the development process. This includes proper HTML structure, fast loading speeds, mobile optimization, schema markup, and SEO-friendly URLs. We can also provide advanced SEO services including keyword research, content optimization, and technical SEO audits."
}, {
  question: "Do you provide website maintenance after launch?",
  answer: "We offer flexible website maintenance plans to keep your site secure, updated, and performing optimally. Our maintenance services include security updates, performance optimization, content updates, technical support, and regular backups to ensure your website remains in excellent condition."
}, {
  question: "How much does website development cost?",
  answer: "Website development costs vary based on your specific requirements, complexity, and features needed. We provide custom quotes after understanding your project needs. Our transparent pricing structure ensures you know exactly what you're paying for, with no hidden fees or surprises."
}];

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

const FAQ = () => {
  return (
    <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">Common Questions</span>
          <h2 className="font-bold mb-4 text-4xl">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to questions our clients frequently ask about our website development services and process.
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

export default FAQ;
