import { ArrowRight, Monitor, Code, Server, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pyn-blue/10 to-pyn-gray">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 z-10">
            <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-2 animate-fade-in">
              Website Development
            </span>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pyn-dark to-pyn-blue text-5xl font-bold">
              Transform Your Digital Presence with Custom Web Solutions
            </h1>
            <p className="text-lg text-gray-700 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Create stunning, high-performance websites that drive engagement, conversions, and growth for your business. 
              Our expert team delivers tailored web experiences that represent your brand perfectly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <Button size="lg" className="bg-pyn-blue hover:bg-pyn-darkBlue text-white" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-800 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs ml-2">website-project.jsx</div>
              </div>
              
              <div className="bg-gray-900 p-6 font-mono text-sm max-h-[280px] overflow-y-auto">
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">1</span>
                  <span className="text-pyn-lightBlue">import</span>
                  <span className="text-white mx-1">React</span>
                  <span className="text-pyn-lightBlue">from</span>
                  <span className="text-green-400 ml-1">'react'</span>
                  <span className="text-gray-300">;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">2</span>
                  <span className="text-gray-300"></span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">3</span>
                  <span className="text-pyn-amber">function</span>
                  <span className="text-yellow-300 ml-1">WebsiteProject</span>
                  <span className="text-white">()</span>
                  <span className="text-white ml-1">&#123;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">4</span>
                  <span className="text-white ml-4">return</span>
                  <span className="text-white ml-1">(</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">5</span>
                  <span className="text-white ml-8">&#60;</span>
                  <span className="text-green-400">div</span>
                  <span className="text-pyn-amber"> className</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">"container"</span>
                  <span className="text-white">&#62;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">6</span>
                  <span className="text-white ml-12">&#60;</span>
                  <span className="text-green-400">header</span>
                  <span className="text-pyn-amber"> className</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">"hero-section"</span>
                  <span className="text-white">&#62;</span>
                </div>
                <div className="flex items-start animation-pulse">
                  <span className="text-gray-500 mr-4 select-none">7</span>
                  <span className="text-white ml-16">&#60;</span>
                  <span className="text-green-400">h1</span>
                  <span className="text-white">&#62;</span>
                  <span className="text-white">Your Amazing Website</span>
                  <span className="text-white">&#60;/</span>
                  <span className="text-green-400">h1</span>
                  <span className="text-white">&#62;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">8</span>
                  <span className="text-white ml-12">&#60;/</span>
                  <span className="text-green-400">header</span>
                  <span className="text-white">&#62;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">9</span>
                  <span className="text-white ml-8">&#60;/</span>
                  <span className="text-green-400">div</span>
                  <span className="text-white">&#62;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">10</span>
                  <span className="text-white ml-4">)</span>
                  <span className="text-white">;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">11</span>
                  <span className="text-white">&#125;</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">12</span>
                  <span className="text-gray-300"></span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 mr-4 select-none">13</span>
                  <span className="text-pyn-lightBlue">export</span>
                  <span className="text-pyn-lightBlue ml-1">default</span>
                  <span className="text-yellow-300 ml-1">WebsiteProject</span>
                  <span className="text-white">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 z-10 relative">
          {[{
          icon: Monitor,
          title: "Modern Design",
          description: "Stunning visuals that captivate users"
        }, {
          icon: Code,
          title: "Clean Code",
          description: "Optimized performance and maintainability"
        }, {
          icon: Server,
          title: "Robust Backend",
          description: "Powerful server-side solutions"
        }, {
          icon: Globe,
          title: "Global Reach",
          description: "SEO-optimized for maximum visibility"
        }].map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${0.2 + index * 0.1}s`
        }}>
              <div className="w-12 h-12 bg-pyn-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-pyn-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Hero;
