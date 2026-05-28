
import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    company: "FashionFinder E-commerce",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    quote: "The team completely transformed our digital strategy. Our e-commerce sales increased by 137% in just 6 months, and our customer acquisition cost dropped by 42%. Their data-driven approach and creative execution delivered results beyond our expectations.",
    industry: "E-commerce",
    results: "137% sales increase"
  }, {
    name: "Michael Chen",
    company: "TechGrowth SaaS",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    quote: "Working with this team has been transformative for our B2B SaaS business. They developed a comprehensive strategy that increased our qualified leads by 210% and shortened our sales cycle by 35%. Their understanding of the B2B landscape is exceptional.",
    industry: "SaaS",
    results: "210% more leads"
  }, {
    name: "Jennifer Smith",
    company: "Urban Real Estate",
    position: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    quote: "Their local SEO and PPC campaigns completely transformed our real estate business. We're now ranking #1 for all our target keywords and have seen a 185% increase in qualified property inquiries. The team's attention to detail and strategic approach made all the difference.",
    industry: "Real Estate",
    results: "185% more inquiries"
  }, {
    name: "David Rodriguez",
    company: "Wellness Center",
    position: "Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    quote: "Their marketing strategy helped us stand out in a competitive healthcare market. Our new patient acquisitions increased by 94% and our booking rate improved by 73%. Their HIPAA-compliant campaigns were both effective and compliant with all regulations.",
    industry: "Healthcare",
    results: "94% new patient growth"
  }, {
    name: "Emily Wilson",
    company: "Gourmet Restaurants",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    quote: "The local SEO and social media campaigns they developed for our restaurant group exceeded all expectations. Our foot traffic increased by 156% and online reservations grew by 215%. Their understanding of the hospitality industry is truly impressive.",
    industry: "Hospitality",
    results: "215% reservation growth"
  }];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from businesses that trusted us with their digital marketing
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="mb-6 text-gray-700 line-clamp-6">{testimonial.quote}</p>
                      
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.position}</div>
                          <div className="text-sm text-pyn-blue">{testimonial.results}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
