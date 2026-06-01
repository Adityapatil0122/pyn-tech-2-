import { ArrowRight, Building2, Sparkles, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { clients } from "./clientData";

const floatingClients = clients.slice(0, 8);

const logoPositions = [
  "left-[7%] top-[10%]",
  "right-[8%] top-[14%]",
  "left-[17%] top-[39%]",
  "right-[19%] top-[42%]",
  "left-[8%] bottom-[12%]",
  "right-[9%] bottom-[14%]",
  "left-[39%] top-[5%]",
  "right-[39%] bottom-[7%]",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-pyn-dark py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(164,22,42,0.28),rgba(8,3,5,0.9)_48%,rgba(90,10,20,0.72))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45" />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-pyn-lightBlue/50 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2], x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-pyn-amber backdrop-blur-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-4 w-4" />
            Client stories, not just client logos
          </motion.div>

          <motion.h1
            className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Brands that trusted Pyn to build, launch, and grow smarter
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            From education and real estate to travel, energy, printing, and startups, we help teams turn digital presence into practical business momentum.
          </motion.p>

          <motion.div
            className="mt-8 grid gap-3 sm:flex sm:flex-wrap"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <Button
              size="lg"
              className="w-full bg-pyn-amber text-pyn-dark hover:bg-pyn-amber/85 sm:w-auto"
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
            >
              Build with us <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/25 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
            >
              <Link to="/services/website-development">Explore services</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            {[
              { icon: UsersRound, value: "100+", label: "clients supported" },
              { icon: Building2, value: "15+", label: "business categories" },
              { icon: Sparkles, value: "360", label: "digital execution" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                <item.icon className="mb-3 h-5 w-5 text-pyn-amber" />
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto h-[390px] w-full max-w-[560px] rounded-lg border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14 }}
        >
          <div className="absolute inset-5 rounded-lg border border-white/10" />
          <div className="absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-transparent via-pyn-lightBlue/45 to-transparent" />
          <div className="absolute inset-y-12 left-1/2 w-px bg-gradient-to-b from-transparent via-pyn-lightBlue/45 to-transparent" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border border-pyn-lightBlue/25 bg-pyn-dark/70 text-center shadow-xl backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pyn-amber">Pyn</span>
            <span className="mt-1 text-sm text-slate-200">client network</span>
          </div>

          {floatingClients.map((client, index) => (
            <motion.div
              key={client.name}
              className={`absolute ${logoPositions[index]} z-20 flex h-16 w-32 items-center justify-center rounded-lg border border-white/15 bg-white/85 p-3 shadow-lg backdrop-blur-xl`}
              animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], opacity: [0.82, 1, 0.82] }}
              transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.className || "max-h-10"} max-w-[86%] object-contain`}
                loading={index < 4 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
