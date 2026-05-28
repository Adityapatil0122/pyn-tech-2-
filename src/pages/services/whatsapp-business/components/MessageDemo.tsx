
import React from "react";
import { MessageCircle, CheckCheck } from "lucide-react";

const messages = [{
  type: "received",
  text: "Hi! I'd like to check my order status.",
  time: "10:30 AM"
}, {
  type: "sent",
  text: "Hello! I can help you with that. Could you please provide your order number?",
  time: "10:31 AM"
}, {
  type: "received",
  text: "#ORD123456",
  time: "10:31 AM"
}, {
  type: "sent",
  text: "Thank you! Your order #ORD123456 is currently out for delivery and will arrive by 2 PM today.",
  time: "10:32 AM"
}];

const MessageDemo = () => {
  return <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              See WhatsApp Business API in Action
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Experience how your business can handle customer interactions efficiently
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-[320px] sm:max-w-md mx-auto">
            <div className="bg-[#128C7E] text-white p-3 md:p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Customer Service</p>
                  <p className="text-xs md:text-sm opacity-90">Online</p>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 space-y-3 md:space-y-4 bg-[#ECE5DD]">
              {messages.map((message, index) => <div key={index} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`relative max-w-[85%] rounded-lg p-2 md:p-3 ${message.type === 'sent' ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                    <p className="text-xs md:text-sm">{message.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-500">{message.time}</span>
                      {message.type === 'sent' && <CheckCheck className="w-3 h-3 md:w-4 md:h-4 text-[#53bdeb]" />}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default MessageDemo;
