
import React from "react";
import { CheckCircle, Shield, Clock } from "lucide-react";

const VerificationShowcase = () => {
  return <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center bg-[#25D366] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Official Business Account
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Get the Green Tick Verification
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Stand out with official WhatsApp verification and build trust with your customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="bg-[#25D366]/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Business Verification</h3>
              <p className="text-sm md:text-base text-gray-600">Complete verification of your business identity and documentation</p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="bg-[#25D366]/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Quick Process</h3>
              <p className="text-sm md:text-base text-gray-600">Streamlined verification process with our expert guidance</p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="bg-[#25D366]/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#128C7E]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Official Status</h3>
              <p className="text-sm md:text-base text-gray-600">Receive the green verification badge for your business account</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default VerificationShowcase;
