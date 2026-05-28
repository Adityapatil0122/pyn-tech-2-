import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
const technologies = [{
  name: "React",
  description: "Build dynamic user interfaces with the industry's most popular JavaScript library",
  details: "We leverage React's component-based architecture to create reusable UI elements and maintain a consistent look and feel throughout your website. React allows us to build interactive features that update in real-time without page refreshes."
}, {
  name: "Next.js",
  description: "Server-side rendering for improved performance and SEO",
  details: "Next.js provides the perfect framework for building high-performance websites with server-side rendering, static generation, and optimized loading. This results in faster page loads and better search engine visibility."
}, {
  name: "Tailwind CSS",
  description: "Create beautiful, responsive designs with modern utility-first CSS",
  details: "Tailwind CSS allows us to craft pixel-perfect designs that adapt seamlessly to any screen size. Its utility-first approach enables rapid development while maintaining complete design flexibility."
}, {
  name: "TypeScript",
  description: "Write safer, more maintainable code with static type checking",
  details: "TypeScript adds strong typing to JavaScript, catching errors during development rather than at runtime. This leads to more robust code, better developer experience, and fewer bugs in production."
}, {
  name: "Node.js",
  description: "Power your applications with JavaScript on the server side",
  details: "Node.js enables us to build scalable, high-performance backend systems using JavaScript. Its event-driven architecture is perfect for handling many concurrent connections efficiently."
}, {
  name: "MongoDB",
  description: "Store and retrieve data with a flexible, document-based database",
  details: "MongoDB's document-oriented structure allows for flexible schema design that can evolve with your business needs. It provides high performance, high availability, and easy scalability."
}, {
  name: "GraphQL",
  description: "Fetch precisely the data you need with a powerful query language",
  details: "GraphQL enables clients to request exactly the data they need, nothing more and nothing less. This reduces overfetching and underfetching, leading to more efficient applications and better user experiences."
}, {
  name: "AWS",
  description: "Deploy scalable, reliable applications on industry-leading cloud infrastructure",
  details: "Amazon Web Services provides a robust cloud platform with services for computing, storage, databases, analytics, and more. We leverage AWS to ensure your website is secure, scalable, and highly available."
}];
const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">Technology Stack</span>
          <h2 className="font-bold mb-4 text-4xl">Cutting-Edge Technologies We Master</h2>
          <p className="text-gray-600 text-base">
            We leverage the most powerful, modern web technologies to build robust, scalable solutions that deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => <Card key={index} className={`transform transition-all duration-300 cursor-pointer h-full ${activeIndex === index ? "scale-105 shadow-xl" : "hover:scale-105 hover:shadow-md"}`} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pyn-darkBlue">{tech.name}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-60" : "max-h-0"}`}>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed">{tech.details}</p>
                  </div>
                </div>
                
                <div className="mt-4 text-pyn-blue text-sm font-medium">
                  {activeIndex === index ? "Click to collapse" : "Click to learn more"}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TechStack;