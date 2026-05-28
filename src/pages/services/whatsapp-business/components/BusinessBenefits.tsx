
import React from "react";
import { CheckCircle, MessageCircle, Shield, Users, Clock, BarChart } from "lucide-react";

const benefits = [{
  icon: MessageCircle,
  title: "Automated Responses",
  description: "Set up automated replies for common queries and provide instant support to your customers 24/7."
}, {
  icon: Shield,
  title: "Official Verification",
  description: "Get the coveted green tick mark that establishes your business's authenticity on WhatsApp."
}, {
  icon: Users,
  title: "Multiple Users",
  description: "Enable your entire team to handle customer conversations from a single business account."
}, {
  icon: Clock,
  title: "24/7 Availability",
  description: "Stay connected with your customers round the clock with automated messaging systems."
}, {
  icon: BarChart,
  title: "Analytics Dashboard",
  description: "Track message metrics, response times, and customer engagement with detailed analytics."
}, {
  icon: CheckCircle,
  title: "Template Messages",
  description: "Create and send approved message templates for marketing and transactional communications."
}];

const BusinessBenefits = () => {
  return <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Transform Your Business Communication
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Leverage WhatsApp Business API features to enhance customer engagement and streamline operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-[#25D366]/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default BusinessBenefits;
