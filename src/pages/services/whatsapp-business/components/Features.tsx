
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Check, MessageSquareCode, TrendingUp, Database, ArrowRight } from "lucide-react";

const features = [
  {
    title: "WhatsApp Business API Setup",
    description: "Complete WhatsApp Business API setup and integration with your systems.",
    icon: MessageSquare,
    benefits: ["Reach 2 billion+ users worldwide", "Enterprise-grade messaging", "Seamless integration"]
  },
  {
    title: "Green Tick Verification",
    description: "Official WhatsApp Business account verification for enhanced credibility.",
    icon: Check,
    benefits: ["Official verification", "Increased trust", "Brand protection"]
  },
  {
    title: "Automated Messaging",
    description: "Intelligent automated message flows for 24/7 customer engagement.",
    icon: MessageSquareCode,
    benefits: ["24/7 engagement", "Custom flows", "Instant responses"]
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive analytics dashboard for tracking message performance.",
    icon: Database,
    benefits: ["Real-time metrics", "Engagement tracking", "Custom reports"]
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise WhatsApp Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and features to transform your business communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-pyn-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-pyn-blue" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-pyn-blue mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
