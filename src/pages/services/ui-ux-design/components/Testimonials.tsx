
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechFront",
    company: "TechFront",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
    quote: "The UI/UX design team at Pyn completely transformed our product. User engagement skyrocketed by 58% after the redesign, and our conversion rates have never been higher. They took the time to truly understand our users and business goals.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO at HealthConnect",
    company: "HealthConnect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
    quote: "Working with Pyn's design team was a game-changer for our healthcare platform. They created an accessible, intuitive interface that both our patients and medical staff love. The attention to detail and user-centered approach made all the difference.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Director of Digital at RetailPlus",
    company: "RetailPlus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976",
    quote: "The Pyn team redesigned our e-commerce platform with remarkable results. They took a complex shopping experience and made it effortless for our customers. Their strategic approach to design as a business solution, not just aesthetics, was refreshing.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "Founder at Finanza App",
    company: "Finanza App",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
    quote: "Pyn's design expertise helped us take our financial app from good to exceptional. The redesign not only looked beautiful but also addressed key user pain points we hadn't even identified. The result was a 42% increase in user retention.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-full">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 bg-pyn-darkBlue rounded-full p-2">
                        <Quote className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-pyn-blue dark:text-pyn-amber font-medium">{testimonial.role}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="relative">
                      <Quote className="h-10 w-10 text-pyn-amber/40 dark:text-pyn-amber/20 absolute -top-2 -left-3" />
                      <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic relative z-10 pt-4">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
