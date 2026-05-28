
import React, { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [{
  name: "John Smith",
  company: "Alpha Trekkers",
  role: "CEO",
  content: "Pyn Technologies has been instrumental in transforming our digital presence. Their innovative solutions and dedication to quality are unmatched.",
  logo: "/lovable-uploads/b2e726d7-25ff-4c7f-82b3-8b3ae78603d7.png"
}, {
  name: "Sarah Johnson",
  company: "Media",
  role: "Marketing Director",
  content: "Working with Pyn has been a game-changer for our business. Their team's expertise and professionalism exceeded our expectations.",
  logo: "/lovable-uploads/06971542-6afe-4a98-84bc-7d6198ab1c34.png"
}, {
  name: "Michael Chen",
  company: "Technomania",
  role: "CTO",
  content: "The technical expertise and innovative solutions provided by Pyn Technologies have helped us stay ahead in our digital transformation journey.",
  logo: "/lovable-uploads/15837858-39ee-48c3-a5a5-34da64b033fa.png"
}, {
  name: "Emily Davis",
  company: "Rightspot",
  role: "Operations Manager",
  content: "Pyn's dedication to delivering high-quality solutions and their attention to detail has made them our trusted technology partner.",
  logo: "/lovable-uploads/309c1f97-c237-4e54-85a9-a263116f0227.png"
}, {
  name: "Robert Wilson",
  company: "Digital",
  role: "Product Manager",
  content: "The team at Pyn Technologies consistently delivers innovative solutions that drive real business results. Their expertise is truly remarkable.",
  logo: "/lovable-uploads/d46ddff1-ee6c-46d6-a7dc-359466a6afac.png"
}];

const TestimonialsSection = () => {
  const testimonialPlugin = useMemo(() => Autoplay({
    delay: 5000,
    stopOnInteraction: true
  }), []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>
        
        <Carousel
          plugins={[testimonialPlugin]}
          className="max-w-4xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.company} 
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
