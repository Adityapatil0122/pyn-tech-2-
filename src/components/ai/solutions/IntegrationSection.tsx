
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const IntegrationSection = () => {
  return (
    <section className="bg-pyn-gray p-8 rounded-lg mb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Integration</Badge>
          <h2 className="text-2xl font-bold mb-2">AI Integration & API Services</h2>
          <p className="text-gray-600">Seamlessly integrate AI technologies into your existing systems</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BadgeCheck className="h-5 w-5 text-pyn-blue mr-3" /> RESTful API integration
              </li>
              <li className="flex items-center">
                <BadgeCheck className="h-5 w-5 text-pyn-blue mr-3" /> Real-time data processing
              </li>
              <li className="flex items-center">
                <BadgeCheck className="h-5 w-5 text-pyn-blue mr-3" /> Custom API development
              </li>
              <li className="flex items-center">
                <BadgeCheck className="h-5 w-5 text-pyn-blue mr-3" /> Third-party AI service integration
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild>
                <Link to="/ai/integration">
                  Learn More About AI Integration
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
              alt="AI Integration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
