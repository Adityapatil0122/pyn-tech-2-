
import React from 'react';
import FAQSection from "@/components/shared/FAQSection";

export const SolutionsFAQSection = () => {
  const faqs = [
    {
      question: "What types of AI solutions do you offer?",
      answer: "We offer a comprehensive range of AI solutions including chatbots, custom AI development, data analytics, and AI integration services tailored to your business needs."
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can automate tasks, provide valuable insights from data, improve customer service through chatbots, and optimize business processes for better efficiency and decision-making."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including healthcare, finance, retail, manufacturing, and technology sectors, adapting our AI solutions to meet industry-specific requirements."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on the complexity of the solution, typically ranging from 4-12 weeks for basic implementations to 3-6 months for more complex solutions."
    }
  ];

  return (
    <FAQSection 
      title="Frequently Asked Questions"
      description="Get answers to common questions about our AI solutions"
      faqs={faqs}
    />
  );
};
