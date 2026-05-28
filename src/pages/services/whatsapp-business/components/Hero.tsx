
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pyn-blue to-pyn-darkBlue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Your Business Communication with WhatsApp
              </h1>
              <p className="mt-4 text-xl opacity-90">
                Leverage the world's most popular messaging platform to enhance customer engagement, automate support, and drive business growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white text-pyn-blue hover:bg-gray-100 border-white"
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              >
                Get Started
              </Button>
              <Button 
                size="lg"
                className="bg-transparent border border-white hover:bg-white/10"
              >
                View Demo <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1611746872915-64382b5c7b84?auto=format&fit=crop&q=80&w=600" 
              alt="WhatsApp Business Communication" 
              className="rounded-lg shadow-lg max-w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
