import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-pyn-dark py-24 text-white md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-pyn-dark via-pyn-dark/90 to-pyn-dark/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="w-[calc(100vw-2rem)] max-w-4xl md:w-auto">
          <div className="mb-6 inline-block max-w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center text-sm font-semibold leading-snug text-pyn-lightBlue backdrop-blur">
            AI, automation, web, app, design, and digital growth
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl lg:text-7xl">
            Build intelligent digital systems that move your business forward
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Pyn Technologies turns ideas into usable products, automated workflows, stronger customer channels, and measurable online growth.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Button
              size="lg"
              className="w-full justify-center bg-pyn-amber text-pyn-dark hover:bg-pyn-amber/80 sm:w-auto"
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
            >
              Plan a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full justify-center border-white/40 bg-white/5 text-white hover:bg-white/15 sm:w-auto" asChild>
              <Link to="/ai/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
