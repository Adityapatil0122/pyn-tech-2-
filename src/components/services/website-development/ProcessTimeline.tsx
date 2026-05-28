import { CheckCircle2 } from "lucide-react";
const steps = [{
  title: "Discovery & Strategy",
  description: "We begin by understanding your business goals, target audience, and competitive landscape. This phase includes detailed discussions, research, and planning to establish project requirements, scope, and timelines.",
  substeps: ["Business goals analysis", "Target audience research", "Competitive analysis", "Content strategy development", "Technical requirements gathering"]
}, {
  title: "UX/UI Design",
  description: "Our designers create intuitive, engaging interfaces that align with your brand and meet user needs. We develop wireframes, mockups, and interactive prototypes to visualize the solution before development begins.",
  substeps: ["Information architecture", "Wireframing and layout design", "Visual design and branding", "Interactive prototyping", "Usability testing"]
}, {
  title: "Development",
  description: "Our engineers bring designs to life using modern frameworks and best practices. We build responsive, accessible websites optimized for performance across all devices and browsers.",
  substeps: ["Frontend development", "Backend integration", "Content management implementation", "API development", "Performance optimization"]
}, {
  title: "Quality Assurance",
  description: "Rigorous testing ensures your website functions flawlessly under all conditions. We test across devices, browsers, and network conditions to identify and resolve any issues before launch.",
  substeps: ["Functional testing", "Responsive design testing", "Cross-browser compatibility", "Performance benchmarking", "Security testing"]
}, {
  title: "Deployment & Launch",
  description: "We carefully deploy your website to production environments, ensuring a smooth transition. Our launch process includes final checks, SEO verification, analytics setup, and monitoring systems.",
  substeps: ["Server configuration", "Domain and DNS setup", "SSL implementation", "Analytics and tracking setup", "Backup and recovery systems"]
}, {
  title: "Ongoing Support",
  description: "Our partnership continues after launch with comprehensive maintenance and support services. We monitor performance, implement updates, and continually optimize your website to ensure long-term success.",
  substeps: ["Performance monitoring", "Security updates and patches", "Content updates", "Feature enhancements", "Analytics and reporting"]
}];
const ProcessTimeline = () => {
  return <section className="py-20 bg-pyn-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-3">
            Our Process
          </span>
          <h2 className="font-bold mb-4 text-4xl">A Proven Development Methodology</h2>
          <p className="text-gray-600">
            We follow a structured, collaborative approach to ensure your website is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-pyn-blue/30 z-0"></div>
          
          <div className="relative z-10">
            {steps.map((step, index) => <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12 animate-fade-in`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Timeline node */}
                <div className="flex-none flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-pyn-blue flex items-center justify-center shadow-lg relative z-10">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-grow md:w-5/12 bg-white p-6 rounded-xl shadow-md ml-6 md:ml-0 md:mx-6 
                  ${index % 2 === 0 ? "text-right" : ""}`}>
                  <h3 className="text-xl font-bold mb-3 text-pyn-darkBlue">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className={`flex flex-wrap gap-2 text-sm ${index % 2 === 0 ? "justify-end" : ""}`}>
                    {step.substeps.map((substep, i) => <span key={i} className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-blue rounded-full">
                        {substep}
                      </span>)}
                  </div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessTimeline;