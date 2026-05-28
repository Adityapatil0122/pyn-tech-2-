
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const MarketingFAQ = () => {
  const faqItems = [{
    question: "How quickly will I see results from digital marketing?",
    answer: "Digital marketing results vary based on strategy, industry, and competitive landscape. Paid advertising can deliver immediate visibility and traffic, while SEO typically requires 3-6 months to show significant improvements. Social media marketing shows gradual engagement growth over 2-3 months. Our approach focuses on both quick wins and sustainable long-term growth, with regular reporting to track progress throughout the journey."
  }, {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We establish clear KPIs aligned with your business objectives before launching any campaign. These typically include metrics like conversion rate, cost per acquisition, return on ad spend (ROAS), organic traffic growth, engagement rates, and ultimately, revenue impact. We provide comprehensive dashboards and regular reports that show both the marketing metrics and their direct impact on your business outcomes."
  }, {
    question: "What digital marketing channels will work best for my business?",
    answer: "The optimal channel mix depends on your industry, target audience, competition, and business goals. During our initial strategy development, we conduct thorough research to identify where your audience is most active and receptive. We then recommend a prioritized channel strategy that allocates budget based on potential impact. This approach ensures you're investing in the channels most likely to deliver strong returns for your specific business."
  }, {
    question: "How much should I budget for digital marketing?",
    answer: "Effective budget allocation depends on your growth goals, competitive landscape, and current digital presence. As a general guideline, businesses typically allocate 7-15% of revenue to marketing. We work with clients across various budget ranges and can develop strategies scaled appropriately for your situation. Our approach focuses on maximizing ROI regardless of budget size, with transparent recommendations on where to allocate resources for the greatest impact."
  }, {
    question: "Do I need to be on all social media platforms?",
    answer: "No, being on every platform typically dilutes your efforts and resources. We recommend focusing on platforms where your target audience is most active and engaged. Our strategy development includes audience research to identify the 2-3 platforms that will drive the highest ROI for your specific business. This concentrated approach allows for higher quality content, more consistent engagement, and better results than spreading resources too thin across all platforms."
  }, {
    question: "How do you stay updated with digital marketing trends and algorithm changes?",
    answer: "Our team maintains industry certifications, participates in continuous education programs, and allocates dedicated time each week for research and development. We're active members of professional digital marketing communities and have direct relationships with platform representatives. This commitment ensures we're always implementing current best practices and can quickly adapt strategies when platform algorithms or trends change."
  }, {
    question: "Can you work with our in-house marketing team?",
    answer: "Absolutely! We often collaborate with in-house teams, providing specialized expertise while integrating with your existing processes. We can structure our partnership in multiple ways: as an extension of your team handling specific channels, as strategic advisors providing direction and training, or as implementation specialists executing strategies developed collaboratively. Our flexible approach ensures seamless integration with your current marketing operations."
  }];
  
  return (
    <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-3">Common Questions</span>
          <h2 className="font-bold mb-4 text-4xl">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to questions our clients frequently ask about our digital marketing services.
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
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                    <span className="text-left font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {item.answer}
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

export default MarketingFAQ;
