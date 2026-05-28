
import { ArrowRight, Smartphone, AppWindow, Server, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pyn-blue/10 to-pyn-gray">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 z-10">
            <span className="inline-block px-3 py-1 bg-pyn-blue/20 text-pyn-blue rounded-full text-sm font-medium mb-2 animate-fade-in">
              Mobile App Development
            </span>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pyn-blue to-pyn-darkBlue text-5xl font-bold">
              Transform Your Vision Into Powerful Digital Experiences
            </h1>
            <p className="text-lg text-gray-700 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
              We craft innovative mobile and web applications that solve real business challenges, 
              delight users, and drive measurable results across platforms.
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
                <div className="text-gray-400 text-xs ml-2">app-project.tsx</div>
              </div>
              
              <div className="grid gap-5 p-6 sm:grid-cols-3">
                {[
                  {
                    title: "Pyn OS",
                    metric: "96%",
                    label: "Flow health",
                    tone: "from-pyn-dark to-pyn-blue",
                  },
                  {
                    title: "Launch",
                    metric: "18k",
                    label: "Active users",
                    tone: "from-white to-pyn-gray",
                  },
                  {
                    title: "Pulse",
                    metric: "4.9",
                    label: "App rating",
                    tone: "from-pyn-blue to-pyn-lightBlue",
                  },
                ].map((screen) => (
                  <div key={screen.title} className="mx-auto w-full max-w-[150px] rounded-[2rem] border-[6px] border-pyn-dark bg-pyn-dark p-1 shadow-xl">
                    <div className={`min-h-[280px] rounded-[1.5rem] bg-gradient-to-br ${screen.tone} p-4 text-pyn-dark`}>
                      <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-pyn-dark/20"></div>
                      <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
                        <div className="text-xs font-semibold text-pyn-blue">{screen.title}</div>
                        <div className="mt-3 text-3xl font-bold text-pyn-dark">{screen.metric}</div>
                        <div className="text-xs text-slate-500">{screen.label}</div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-2 rounded-full bg-white/70"></div>
                        <div className="h-2 w-2/3 rounded-full bg-pyn-amber"></div>
                        <div className="grid grid-cols-3 gap-2 pt-4">
                          <div className="h-8 rounded-xl bg-white/70"></div>
                          <div className="h-8 rounded-xl bg-pyn-amber/80"></div>
                          <div className="h-8 rounded-xl bg-white/70"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pyn-blue/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pyn-darkBlue/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 z-10 relative">
          {[{
            icon: Smartphone,
            title: "iOS App Development",
            description: "Native and cross-platform solutions for Apple devices"
          }, {
            icon: AppWindow,
            title: "Android App Development",
            description: "Custom Android applications with material design"
          }, {
            icon: LayoutDashboard,
            title: "Custom Web Applications",
            description: "Responsive web apps optimized for all devices"
          }, {
            icon: Server,
            title: "Performance Optimized",
            description: "Fast, efficient apps with optimized performance"
          }].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{
              animationDelay: `${0.2 + index * 0.1}s`
            }}>
              <div className="w-12 h-12 bg-pyn-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-pyn-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
