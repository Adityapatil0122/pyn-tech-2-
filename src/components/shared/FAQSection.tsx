import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
}
const FAQSection = ({
  title,
  description,
  faqs
}: FAQSectionProps) => {
  return <section className="py-16 bg-pyn-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold mb-4 text-center text-4xl">{title}</h2>
          {description && <p className="text-gray-600 mb-8 text-center text-base">{description}</p>}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 rounded-t-lg">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;