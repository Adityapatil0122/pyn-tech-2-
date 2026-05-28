
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Collect all client logos in one array for easier management
const allClients = [{
  name: "Rightspot",
  logo: "/lovable-uploads/309c1f97-c237-4e54-85a9-a263116f0227.png"
}, {
  name: "Media",
  logo: "/lovable-uploads/06971542-6afe-4a98-84bc-7d6198ab1c34.png"
}, {
  name: "Majha",
  logo: "/lovable-uploads/f604ee91-7a5f-46ba-8369-842cd70b9beb.png"
}, {
  name: "Alpha Trekkers",
  logo: "/lovable-uploads/b2e726d7-25ff-4c7f-82b3-8b3ae78603d7.png"
}, {
  name: "IAS",
  logo: "/lovable-uploads/d94c437d-5e32-4000-b493-48db76990a91.png"
}, {
  name: "Spyra Exim",
  logo: "/lovable-uploads/099a6f11-12c3-4cdd-a738-e0a638ecec40.png"
}, {
  name: "Shivraj",
  logo: "/lovable-uploads/dee93a32-4bbc-4572-a51e-c37bd9e75b19.png"
}, {
  name: "Tested OK",
  logo: "/lovable-uploads/99dc411c-69f1-4d9e-b5bf-355d03eebd46.png",
  className: "max-h-12" // Reducing the size for this specific logo
}, {
  name: "Guru Properties",
  logo: "/lovable-uploads/7d73450c-a8dd-4511-867c-bd46589f4fe7.png"
}, {
  name: "Digital",
  logo: "/lovable-uploads/d46ddff1-ee6c-46d6-a7dc-359466a6afac.png"
}, {
  name: "Quick Print",
  logo: "/lovable-uploads/a5a80f12-374c-443e-9d9f-fa65ac91c5bb.png"
}, {
  name: "AM",
  logo: "/lovable-uploads/70cbdf37-3166-46da-a5f0-38588750a1a2.png"
}, {
  name: "Launchpadd",
  logo: "/lovable-uploads/cd58c925-57fd-4ac0-beed-31e936b81997.png"
}, {
  name: "Technomania",
  logo: "/lovable-uploads/15837858-39ee-48c3-a5a5-34da64b033fa.png"
}, {
  name: "Gromax",
  logo: "/lovable-uploads/dba395d3-577f-4c45-b6f6-9f759b542a64.png"
}];

const ClientLogosSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-pyn-blue/10 text-pyn-blue mb-3 px-3 py-1 text-sm font-medium inline-block">Our Clients</Badge>
          <h2 className="text-4xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with leading businesses across industries
          </p>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {allClients.map((client, index) => (
              <motion.div key={index} 
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full relative group overflow-hidden">
                  <div className="bg-white h-24 w-full flex items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <motion.img 
                      src={client.logo} 
                      alt={client.name} 
                      className={`${client.className || 'max-h-16'} max-w-[80%] object-contain transition-all duration-300 group-hover:scale-110`} 
                      initial={{ opacity: 0.9 }}
                      whileInView={{ opacity: 1 }}
                      loading={index < 6 ? "eager" : "lazy"} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
