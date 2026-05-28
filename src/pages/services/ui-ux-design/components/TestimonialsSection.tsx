
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The UI/UX redesign completely transformed our product. Conversion rates increased by 40% within the first month after launch.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stars: 5
  },
  {
    quote: "They didn't just create beautiful designs, they solved real user problems. Our customer support tickets decreased by 26% after implementing the new interface.",
    author: "Michael Chen",
    role: "CTO",
    company: "Horizon Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stars: 5
  },
  {
    quote: "The team's research-driven approach gave us confidence that we were making the right design decisions. The results have exceeded our expectations.",
    author: "Alex Rivera",
    role: "CEO",
    company: "NexusApp",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 relative"
          >
            <div className="absolute top-6 right-6 text-pyn-lightBlue">
              <Quote className="h-10 w-10 opacity-20" />
            </div>
            
            <div className="flex mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-pyn-amber" />
              ))}
            </div>
            
            <blockquote className="text-slate-700 mb-6 relative z-10">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-pyn-blue/10 px-4 py-2 rounded-full text-pyn-darkBlue text-sm font-medium">
          <Star className="h-4 w-4 fill-current text-pyn-amber" />
          <span>Rated 4.9/5 from over 150+ client reviews</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
