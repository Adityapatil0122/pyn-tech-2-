
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Home, Car, PlaneTakeoff, Flower2, Sparkles, Heart, ShoppingCart, PaintBucket, UtensilsCrossed, Building2, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const industries = [{
  id: "education",
  title: "Education",
  icon: GraduationCap,
  description: "Send automated updates on admissions, timetables, and exam schedules. Engage students and parents with instant notifications, reminders, and FAQs on WhatsApp."
}, {
  id: "real-estate",
  title: "Real Estate",
  icon: Home,
  description: "Engage prospects with instant property details, schedule site visits, and share brochures via WhatsApp. Automate follow-ups and improve lead conversion effortlessly."
}, {
  id: "automotive",
  title: "Automotive Industry",
  icon: Car,
  description: "Automate service reminders, send promotional offers, and provide instant customer support on WhatsApp. Enhance customer experience with seamless booking and inquiries."
}, {
  id: "travel",
  title: "Travel & Tourism",
  icon: PlaneTakeoff,
  description: "Automate travel bookings, send itinerary details, and provide 24/7 support with AI-powered WhatsApp chatbots. Enhance customer engagement and boost conversions effortlessly."
}, {
  id: "spa",
  title: "Spa & Salons",
  icon: Flower2,
  description: "Manage appointments, send promotional offers, and automate reminders—all through WhatsApp. Enable easy catalog browsing and secure payments for a seamless customer experience."
}, {
  id: "beauty",
  title: "Beauty & Cosmetics",
  icon: Sparkles,
  description: "Enable beauty brands to showcase products, automate order processing, and engage customers with WhatsApp marketing. Boost conversions with seamless shopping experiences."
}, {
  id: "health",
  title: "Health & Wellness",
  icon: Heart,
  description: "Enhance patient engagement with automated appointment scheduling, reminders, and instant support via WhatsApp. Improve clinic efficiency and patient care."
}, {
  id: "ecommerce",
  title: "E-commerce",
  icon: ShoppingCart,
  description: "Enhance your D2C brand with WhatsApp-based catalog sharing, automated invoicing, and seamless customer engagement to boost sales."
}, {
  id: "home-decor",
  title: "Home Decor & Furnishing",
  icon: PaintBucket,
  description: "Streamline order management, shipment tracking, and customer feedback collection with WhatsApp automation. Simplify the buying process and boost sales."
}, {
  id: "restaurants",
  title: "Restaurants & Food Businesses",
  icon: UtensilsCrossed,
  description: "Simplify order management, menu sharing, and online payments with WhatsApp automation to enhance customer experience."
}, {
  id: "banking",
  title: "Banking & Finance",
  icon: Building2,
  description: "Automate rent reminders, payment collection, and customer interactions using WhatsApp Business API for improved financial operations."
}, {
  id: "marketing",
  title: "Marketing Agencies",
  icon: BarChart,
  description: "Empower agencies with WhatsApp automation to send personalized offers, retarget customers. Increase conversions with AI-driven marketing campaigns."
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
    delay: index * 0.07
  }} className="h-full">
      <Card className="border-0 shadow-md h-full">
        <CardHeader className="pb-2 rounded-t-lg bg-green-50">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2.5 rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/20">
              <industry.icon className="h-5 w-5 text-[#128C7E]" />
            </div>
            <CardTitle className="text-lg font-semibold">{industry.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4 flex-grow text-sm text-gray-600">
          <p className="text-base">{industry.description}</p>
        </CardContent>
      </Card>
    </motion.div>;
};

const IndustryUseCases = () => {
  return <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-3">Industry Specific</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Industry Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Discover how WhatsApp Business API can transform communication across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, index) => <IndustryCard key={industry.id} industry={industry} index={index} />)}
        </div>
      </div>
    </section>;
};

export default IndustryUseCases;
