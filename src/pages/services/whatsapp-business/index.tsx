
import React from "react";
import WhatsAppHero from "./components/WhatsAppHero";
import BusinessBenefits from "./components/BusinessBenefits";
import MessageDemo from "./components/MessageDemo";
import VerificationShowcase from "./components/VerificationShowcase";
import IndustryUseCases from "./components/IndustryUseCases";
import FAQSection from "@/components/shared/FAQSection";
import PynCTA from "@/components/shared/PynCTA";

const WhatsAppBusiness = () => {
  const faqItems = [
    {
      question: "What is WhatsApp Business API and how is it different from the regular WhatsApp Business app?",
      answer: "WhatsApp Business API is designed for medium to large businesses that want to communicate with customers at scale. Unlike the free WhatsApp Business app meant for small businesses, the API allows for integration with your existing systems, supports multiple users, enables automation through chatbots, and provides advanced metrics."
    },
    {
      question: "How long does it take to get the WhatsApp Green Tick verification?",
      answer: "The WhatsApp Green Tick (official business verification) process typically takes between 2-4 weeks after submission. The timeline depends on several factors including your business documentation, verification requirements, and Meta's review process. Our team handles the application process to ensure it meets all requirements for faster approval."
    },
    {
      question: "Can WhatsApp chatbots handle complex customer inquiries?",
      answer: "Yes, our WhatsApp chatbots can handle a wide range of customer inquiries. Using advanced AI and natural language processing, they can understand context, provide relevant information, process requests, and seamlessly transfer to human agents when needed. The bots continuously learn from interactions, improving their responses over time."
    },
    {
      question: "What types of businesses benefit most from WhatsApp Business API?",
      answer: "While businesses of all types can benefit, those with high customer interaction volumes see the greatest ROI, including: retail and e-commerce, financial services, travel and hospitality, healthcare providers, educational institutions, and customer service-intensive industries. Any business looking to enhance customer communication through a channel with high engagement rates will benefit."
    },
    {
      question: "Are there message limits or restrictions with the WhatsApp Business API?",
      answer: "Yes, WhatsApp has implemented certain policies and limitations. There are two types of messages: Session messages (customer-initiated conversations) and Template messages (business-initiated). Template messages require pre-approval by WhatsApp and must follow specific guidelines. There are also quality ratings that affect message volume allowances. Our team ensures compliance with all policies while maximizing your messaging capabilities."
    }
  ];

  return (
    <div className="min-h-screen">
      <WhatsAppHero />
      <BusinessBenefits />
      <MessageDemo />
      <VerificationShowcase />
      <IndustryUseCases />
      <FAQSection 
        title="Frequently Asked Questions" 
        description="Get answers to common questions about WhatsApp Business API and implementation."
        faqs={faqItems}
      />

      <PynCTA
        eyebrow="WhatsApp automation"
        title="Ready to Transform Your Business Communication?"
        description="Get started with WhatsApp Business API solutions tailored to your specific industry needs."
        primaryText="Request a Demo"
        secondaryText="Plan Automation Flow"
      />
    </div>
  );
};

export default WhatsAppBusiness;
