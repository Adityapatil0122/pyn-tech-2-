import React from "react";
import { ArrowRight } from "lucide-react";
import { Features } from "@/components/ai/chatbots/Features";
import { Industries } from "@/components/ai/chatbots/Industries";
import { FAQ } from "@/components/ai/chatbots/FAQ";
import { Stats } from "@/components/ai/chatbots/Stats";
import { ChatInterface } from "@/components/ai/chatbots/hero/ChatInterface";
import { StandardCTA } from "@/components/ai/shared/StandardCTA";

const AIChatbots = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-pyn-gray py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="space-y-6 lg:w-1/2">
              <div className="inline-block rounded-full bg-pyn-blue/10 px-3 py-1 text-sm font-medium text-pyn-blue">
                AI-Powered Chatbots
              </div>
              <h1 className="text-4xl font-bold text-pyn-dark md:text-5xl lg:text-6xl">
                Transform Customer Experience with AI Chatbots
              </h1>
              <p className="text-lg leading-relaxed text-slate-700">
                Deploy intelligent conversational agents that understand context, learn from interactions, and deliver personalized experiences 24/7.
              </p>
              <button
                className="inline-flex items-center rounded-lg bg-pyn-dark px-6 py-3 font-medium text-white transition-colors hover:bg-pyn-darkBlue"
                onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
              >
                Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="lg:w-1/2">
              <ChatInterface />
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Stats />
      <Industries />
      <FAQ />
      <StandardCTA
        title="Ready to Transform Your Customer Experience?"
        description="Let's build an AI chatbot that delights your customers and grows your business."
        buttonText="Start Your Chatbot Project"
      />
    </div>
  );
};

export default AIChatbots;
