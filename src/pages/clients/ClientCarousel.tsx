
import React, { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
}

interface ClientCarouselProps {
  clients: Client[];
  direction: "ltr" | "rtl";
  bgColor: string;
  itemSizeClass?: string;
  logoHeight?: string;
  logoContainerHeight?: string;
}

const ClientCarousel = ({ 
  clients, 
  direction, 
  bgColor, 
  itemSizeClass = "basis-1/3 md:basis-1/3 lg:basis-1/4", 
  logoHeight = "max-h-20",
  logoContainerHeight = "h-24"
}: ClientCarouselProps) => {
  // Create autoplay plugin with much slower speed
  const pluginAutoplay = useMemo(
    () => 
      Autoplay({
        delay: 3000, // 3 seconds delay between slides
        stopOnInteraction: false,
      }),
    []
  );

  const isRtl = direction === "rtl";

  return (
    <Carousel
      opts={{
        align: isRtl ? "end" : "start",
        loop: true,
        dragFree: true,
        slidesToScroll: 1,
        duration: 80, // Even slower transition
      }}
      plugins={[pluginAutoplay]}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4" dir={isRtl ? "rtl" : "ltr"}>
        {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
          <CarouselItem key={index} className={`${itemSizeClass} pl-4`}>
            <div className="p-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="transition-all duration-300"
              >
                <Card 
                  className={`flex items-center justify-center ${logoContainerHeight} transition-all duration-300 group p-3 border border-gray-100 before:hidden shadow-md hover:shadow-lg`} 
                  style={{aspectRatio: "3/1"}}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`${client.name === "Tested OK" ? "max-h-14" : logoHeight} w-auto object-contain transition-all duration-300 group-hover:scale-110`}
                    loading="eager" // For faster loading
                  />
                </Card>
              </motion.div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={`absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-${bgColor} to-transparent z-10`} />
      <div className={`absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-${bgColor} to-transparent z-10`} />
    </Carousel>
  );
};

export default ClientCarousel;
