
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const TechStackSection = () => {
  // Remove duplicate C logo
  const techStack = [{
    icon: "/lovable-uploads/9439c8d1-d12d-4555-b67e-8897ae42ef91.png",
    name: "React"
  }, {
    icon: "/lovable-uploads/548e2388-53ed-4ee8-bb29-d8c15dbeb003.png",
    name: "Angular"
  }, {
    icon: "/lovable-uploads/a6ab499e-bdc7-44c0-8b7a-97dbc1924b5f.png",
    name: "Vue.js"
  }, {
    icon: "/lovable-uploads/6cc6b647-86b5-4992-b566-c7295d3c2329.png",
    name: "Node.js"
  }, {
    icon: "/lovable-uploads/d689ae77-6976-4ab8-acfa-ca3371f77799.png",
    name: "Python"
  }, {
    icon: "/lovable-uploads/271607ce-13bd-4c7c-abcc-db1544ce3022.png",
    name: "PHP"
  }, {
    icon: "/lovable-uploads/11756638-d726-4dbd-94c3-878de8dc3143.png",
    name: "Java"
  }, {
    icon: "/lovable-uploads/b9cfedb7-014c-4b8f-90aa-b02d0e459835.png",
    name: "MySQL"
  }, {
    icon: "/lovable-uploads/aaaa4c43-b383-4d81-bdc8-3c1ec517064a.png",
    name: "MongoDB"
  }, {
    icon: "/lovable-uploads/efff9ce2-0d1a-4339-9821-6f46dffd1a3c.png",
    name: "AWS"
  }, {
    icon: "/lovable-uploads/e0c77dd0-d53b-4534-ba42-bd3a1a1c6071.png",
    name: "Docker"
  }, {
    icon: "/lovable-uploads/db6a96ff-c965-4229-bf66-60a1b90a099f.png",
    name: "Kubernetes"
  }, {
    icon: "/lovable-uploads/67975efd-66ad-469d-9433-65656e6f6759.png",
    name: "Git"
  }, {
    icon: "/lovable-uploads/64c9a4ae-b4e3-42c6-83e3-d77f88e9d813.png",
    name: "Jenkins"
  }, {
    icon: "/lovable-uploads/687e9571-dbed-4323-9c80-3c5cdcdcec2b.png",
    name: "Azure"
  }, {
    icon: "/lovable-uploads/eaeb12e4-5b77-40c5-830f-428206f97df4.png",
    name: "Firebase"
  }, {
    icon: "/lovable-uploads/1d9a30dd-c8fa-4ed4-80d1-7fbf26f66a4d.png",
    name: "GraphQL"
  }, {
    icon: "/lovable-uploads/649f2038-0ab8-4e74-bedf-d05983079b64.png",
    name: "TypeScript"
  }];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 flex justify-center">
            <div className="rounded-full bg-pyn-blue/10 px-4 py-1 text-sm font-semibold text-pyn-blue">
              Technology
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-pyn-dark">Technology Stack</h2>
          <p className="text-lg text-slate-600">Modern tools chosen for reliability, speed, and maintainability</p>
        </div>
        
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <div key={index} className="p-2">
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pyn-blue/30 hover:shadow-lg">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className={`${tech.name === "Tested OK" ? "max-h-14" : "max-h-12"} w-auto object-contain transition-all duration-300 group-hover:scale-110`}
                        loading="lazy" 
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-48">
                    <p className="text-sm font-medium">{tech.name}</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
