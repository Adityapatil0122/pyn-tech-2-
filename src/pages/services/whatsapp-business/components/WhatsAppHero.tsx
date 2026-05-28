
import React from "react";
import { MessageCircle, Shield, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppHero = () => {
  return <section className="relative bg-gradient-to-b from-[#DCF8C6] to-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6 w-full">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                WhatsApp Business API
                <span className="inline-flex items-center md:ml-3 mt-2 md:mt-0 bg-[#25D366] text-white px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Official Partner
                </span>
              </h1>
              <p className="max-w-2xl text-base lg:text-lg text-gray-700">
                Transform your business communication with WhatsApp's official Business API. Engage customers, automate responses, and scale your operations seamlessly.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>
                Get Started
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-12">
              <div className="flex items-center gap-3">
                <div className="bg-[#25D366]/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
                </div>
                <div>
                  <p className="font-semibold">Official API</p>
                  <p className="text-xs md:text-sm text-gray-600">Meta Business Partner</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#25D366]/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
                </div>
                <div>
                  <p className="font-semibold">98 %</p>
                  <p className="text-xs md:text-sm text-gray-600">Message Reading Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#25D366]/10 p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
                </div>
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-xs md:text-sm text-gray-600">Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-3 md:p-4 max-w-xs sm:max-w-sm mx-auto">
              <div className="bg-[#128C7E] text-white p-2 md:p-3 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Business Messages</p>
                    <p className="text-xs md:text-sm opacity-90">Online</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 p-3 md:p-4">
                <div className="flex gap-2">
                  <div className="bg-[#DCF8C6] rounded-lg p-2 md:p-3 max-w-[80%] ml-auto">
                    <p className="text-xs md:text-sm">Hi! I'd like to know more about your products.</p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">10:30 AM</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white border rounded-lg p-2 md:p-3 max-w-[80%]">
                    <p className="text-xs md:text-sm">Hello! Thanks for reaching out. I'll be happy to help you. What would you like to know?</p>
                    <p className="text-[10px] text-gray-500 mt-1">10:31 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default WhatsAppHero;
