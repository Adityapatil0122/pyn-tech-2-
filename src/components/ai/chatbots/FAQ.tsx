
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [{
    question: "How long does it take to implement an AI chatbot?",
    answer: "Implementation time varies based on complexity and requirements. A basic chatbot can be deployed in 2-4 weeks, while more sophisticated solutions with custom integrations may take 6-12 weeks. We work closely with your team to establish a realistic timeline based on your specific needs."
  }, {
    question: "Can the chatbot integrate with our existing systems?",
    answer: "Yes, our AI chatbots are designed to integrate seamlessly with your existing systems, including CRM platforms, knowledge bases, ticketing systems, and custom databases. We provide robust APIs and pre-built connectors for popular business applications to ensure smooth data flow."
  }, {
    question: "How accurate are the AI chatbot responses?",
    answer: "Our AI chatbots achieve accuracy rates of 92-98% depending on the domain and training data quality. The system continuously learns from interactions to improve over time. For complex or uncertain queries, the chatbot can be configured to escalate to human agents, ensuring customers always receive accurate information."
  }, {
    question: "Can the chatbot handle multiple languages?",
    answer: "Yes, our AI chatbots support multilingual capabilities and can be configured to communicate in virtually any language. The system automatically detects the user's language and responds accordingly, ensuring a seamless experience for global audiences."
  }, {
    question: "How secure is the chatbot for handling sensitive information?",
    answer: "Security is paramount in our design. Our chatbots incorporate end-to-end encryption, secure authentication methods, and comply with industry standards like GDPR, HIPAA, and PCI DSS where required. For healthcare, financial, and other sensitive applications, we implement additional security measures tailored to your compliance requirements."
  }, {
    question: "What kind of analytics and reporting is available?",
    answer: "Our chatbots come with comprehensive analytics dashboards that provide insights into user interactions, common queries, resolution rates, satisfaction scores, and operational metrics. Custom reports can be configured for specific KPIs, and data can be exported or integrated with your business intelligence tools."
  }, {
    question: "How does the AI chatbot learn and improve over time?",
    answer: "Our chatbots utilize machine learning algorithms that analyze each interaction to improve accuracy and response quality. The system identifies patterns in user queries, learns from successful resolutions, and adapts to changing language patterns. You can also provide direct feedback to accelerate the learning process."
  }, {
    question: "Can we customize the chatbot's appearance and tone?",
    answer: "Absolutely! Our chatbots are fully customizable to match your brand identity, including visual elements, conversation flow, and tone of voice. We'll work with you to ensure the chatbot represents your brand authentically and delivers the right customer experience."
  }];
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-pyn-dark">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are answers to some common questions about our AI chatbot solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left py-4">
                  <div className="flex items-center">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
