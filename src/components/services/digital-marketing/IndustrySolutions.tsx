
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Home, ShoppingCart, PlaneTakeoff, Heart, Building2, UtensilsCrossed, BarChart, Hotel, Briefcase, Sparkles } from "lucide-react";

const industries = [{
  id: "ecommerce",
  title: "E-Commerce",
  icon: ShoppingCart,
  description: "Boost online sales with targeted ads, SEO optimization, and conversion-focused strategies that deliver measurable ROI for your e-commerce business."
}, {
  id: "real-estate",
  title: "Real Estate",
  icon: Home,
  description: "Generate qualified leads with geo-targeted campaigns, virtual tours, and property listing optimization designed specifically for real estate professionals."
}, {
  id: "healthcare",
  title: "Healthcare",
  icon: Heart,
  description: "Build trust and patient relationships with HIPAA-compliant marketing campaigns, reputation management, and educational content strategies."
}, {
  id: "hospitality",
  title: "Hospitality & Tourism",
  icon: Hotel,
  description: "Increase bookings and occupancy rates with engaging visual content, targeted travel ads, and strategic social media campaigns for hotels and destinations."
}, {
  id: "education",
  title: "Education",
  icon: GraduationCap,
  description: "Drive enrollments with engaging campaigns, virtual tours, and personalized nurturing sequences for educational institutions and online courses."
}, {
  id: "b2b",
  title: "B2B Services",
  icon: Briefcase,
  description: "Generate qualified leads and nurture accounts with thought leadership content, ABM strategies, and targeted LinkedIn campaigns for B2B businesses."
}, {
  id: "finance",
  title: "Finance & Banking",
  icon: Building2,
  description: "Build trust and client relationships with compliance-friendly marketing campaigns, educational content, and targeted financial service promotions."
}, {
  id: "restaurants",
  title: "Restaurants & Food",
  icon: UtensilsCrossed,
  description: "Increase reservations and orders with mouth-watering content, local SEO, and targeted promotions to attract diners to your food business."
}, {
  id: "travel",
  title: "Travel & Tourism",
  icon: PlaneTakeoff,
  description: "Inspire travelers with immersive destination marketing, seasonal promotions, and targeted advertising campaigns that drive bookings."
}, {
  id: "beauty",
  title: "Beauty & Cosmetics",
  icon: Sparkles,
  description: "Captivate beauty enthusiasts with stunning visual content, influencer partnerships, and targeted ad campaigns that drive product sales."
}, {
  id: "marketing",
  title: "Marketing Agencies",
  icon: BarChart,
  description: "Enhance your own marketing agency's reach with white-label solutions, case studies, and industry-specific strategies to attract new clients."
}];

const IndustryCard = ({
  industry,
  index
}: {
  industry: typeof industries[0];
  index: number;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className="flex flex-col h-full">
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group overflow-hidden border-gray-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-pyn-blue"></div>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-full bg-pyn-blue/10 transition-colors group-hover:bg-pyn-blue/20">
              <industry.icon className="h-6 w-6 text-pyn-blue" />
            </div>
            <CardTitle className="text-xl">{industry.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex-grow">
          <p className="text-gray-600">{industry.description}</p>
        </CardContent>
        <div className="p-4 mt-auto">
          
        </div>
      </Card>
    </motion.div>;
};

const IndustrySolutions = () => {
  return <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Industry Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Our tailored digital marketing strategies deliver measurable results across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => <IndustryCard key={industry.id} industry={industry} index={index} />)}
        </div>
      </div>
    </section>;
};

export default IndustrySolutions;
