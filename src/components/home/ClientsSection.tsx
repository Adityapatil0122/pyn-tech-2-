
import React, { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const ClientsSection = () => {
  // Client data with correct logos from the client page
  const clients = [
    { name: "Rightspot", logo: "/lovable-uploads/309c1f97-c237-4e54-85a9-a263116f0227.png" },
    { name: "Media", logo: "/lovable-uploads/06971542-6afe-4a98-84bc-7d6198ab1c34.png" },
    { name: "Majha", logo: "/lovable-uploads/f604ee91-7a5f-46ba-8369-842cd70b9beb.png" },
    { name: "Alpha Trekkers", logo: "/lovable-uploads/b2e726d7-25ff-4c7f-82b3-8b3ae78603d7.png" },
    { name: "IAS", logo: "/lovable-uploads/d94c437d-5e32-4000-b493-48db76990a91.png" },
    { name: "Spyra Exim", logo: "/lovable-uploads/099a6f11-12c3-4cdd-a738-e0a638ecec40.png" },
    { name: "Shivraj", logo: "/lovable-uploads/dee93a32-4bbc-4572-a51e-c37bd9e75b19.png" },
    { name: "Tested OK", logo: "/lovable-uploads/99dc411c-69f1-4d9e-b5bf-355d03eebd46.png" },
    { name: "Guru Properties", logo: "/lovable-uploads/7d73450c-a8dd-4511-867c-bd46589f4fe7.png" },
    { name: "Digital", logo: "/lovable-uploads/d46ddff1-ee6c-46d6-a7dc-359466a6afac.png" },
    { name: "Quick Print", logo: "/lovable-uploads/a5a80f12-374c-443e-9d9f-fa65ac91c5bb.png" },
    { name: "AM", logo: "/lovable-uploads/70cbdf37-3166-46da-a5f0-38588750a1a2.png" },
    { name: "Launchpadd", logo: "/lovable-uploads/cd58c925-57fd-4ac0-beed-31e936b81997.png" },
    { name: "Technomania", logo: "/lovable-uploads/15837858-39ee-48c3-a5a5-34da64b033fa.png" },
    { name: "Gromax", logo: "/lovable-uploads/dba395d3-577f-4c45-b6f6-9f759b542a64.png" }
  ];
  
  // Create extremely slow autoplay plugin
  const plugin = useMemo(
    () => 
      Autoplay({
        delay: 30000, // 30 seconds delay between slides - extremely slow
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 flex justify-center">
            <div className="rounded-full bg-pyn-blue/10 px-4 py-1 text-sm font-semibold text-pyn-blue">
              Our Clients
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-pyn-dark">Trusted by practical, ambitious teams</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We work with local and growing brands that need digital tools to feel clearer, faster, and easier to operate.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              duration: 1000, // Very slow transition
            }}
            plugins={[plugin]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {[...clients, ...clients].map((client, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
                  <div className="p-2">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="transition-all duration-300"
                        >
                          <div 
                            className="group flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:border-pyn-blue/30 hover:shadow-lg"
                          >
                            <img
                              src={client.logo}
                              alt={client.name}
                              className={`${client.name === "Tested OK" ? "max-h-14" : "max-h-16"} w-auto object-contain transition-all duration-300 group-hover:scale-110`}
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-48">
                        <div className="flex justify-center">
                          <p className="text-sm font-medium">{client.name}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
