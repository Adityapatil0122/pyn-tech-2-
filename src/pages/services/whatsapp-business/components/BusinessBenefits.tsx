
import React from "react";
import { CheckCircle, ChatCircle, Shield, Users, Clock, ChartBar } from "@phosphor-icons/react";
import ColorfulIcon from "@/components/icons/ColorfulIcon";

const benefits = [{
  icon: ChatCircle,
  palette: "mint" as const,
  title: "Automated Responses",
  description: "Set up automated replies for common queries and provide instant support to your customers 24/7."
}, {
  icon: Shield,
  palette: "lime" as const,
  title: "Official Verification",
  description: "Get the coveted green tick mark that establishes your business's authenticity on WhatsApp."
}, {
  icon: Users,
  palette: "sky" as const,
  title: "Multiple Users",
  description: "Enable your entire team to handle customer conversations from a single business account."
}, {
  icon: Clock,
  palette: "sunset" as const,
  title: "24/7 Availability",
  description: "Stay connected with your customers round the clock with automated messaging systems."
}, {
  icon: ChartBar,
  palette: "ocean" as const,
  title: "Analytics Dashboard",
  description: "Track message metrics, response times, and customer engagement with detailed analytics."
}, {
  icon: CheckCircle,
  palette: "violet" as const,
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
              <ColorfulIcon icon={benefit.icon} palette={benefit.palette} className="mb-4 h-10 w-10 md:h-12 md:w-12" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default BusinessBenefits;
