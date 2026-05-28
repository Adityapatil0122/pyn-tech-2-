
import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-pyn-blue to-pyn-darkBlue py-20 overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <Button asChild variant="ghost" size="sm" className="mb-6 text-white hover:text-white">
              <Link to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intelligent Solutions for Modern Business
            </h1>
            <p className="opacity-90 mb-8 text-lg max-w-xl">
              Transform your business with our cutting-edge AI solutions that drive innovation and growth.
            </p>
            <Button size="lg" className="bg-white text-pyn-blue hover:bg-gray-100" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>
              Get Started Today
            </Button>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="AI Solutions" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
