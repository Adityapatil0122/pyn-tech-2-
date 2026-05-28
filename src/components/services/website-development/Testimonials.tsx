
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "GrowthTech Solutions",
    image: "/lovable-uploads/67975efd-66ad-469d-9433-65656e6f6759.png",
    stars: 5,
    quote: "Working with Pyn was an absolute pleasure. Their team took the time to understand our unique needs and delivered a website that perfectly represents our brand. The increase in leads has been remarkable since launch."
  },
  {
    name: "David Chen",
    position: "Founder & CEO",
    company: "Innovate Retail",
    image: "/lovable-uploads/099a6f11-12c3-4cdd-a738-e0a638ecec40.png", 
    stars: 5,
    quote: "The e-commerce platform Pyn built for us has transformed our business. Sales are up 40% year-over-year, and customers frequently compliment the intuitive shopping experience. Their development process was transparent and efficient."
  },
  {
    name: "Amanda Williams",
    position: "Operations Manager",
    company: "Horizon Services",
    image: "/lovable-uploads/aaaa4c43-b383-4d81-bdc8-3c1ec517064a.png",
    stars: 5,
    quote: "Pyn delivered our new corporate website on time and within budget. Their team was responsive, professional, and incredibly skilled. The new site has significantly improved our online presence and conversion rates."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Client Testimonials
          </span>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't take our word for it - hear from the businesses we've helped transform with our website development services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-10 left-0 text-pyn-blue/10">
            <Quote className="w-24 h-24" />
          </div>
          
          {/* Testimonial cards */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-pyn-gray/30 rounded-2xl p-8 md:p-10 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex mb-4">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-pyn-blue">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pyn-blue hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-pyn-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pyn-blue hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
