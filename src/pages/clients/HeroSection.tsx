import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { clients } from "./clientData";

const featuredClients = clients.slice(0, 6);

const logoPositions = [
  "left-[6%] top-[12%]",
  "right-[7%] top-[17%]",
  "left-[10%] bottom-[18%]",
  "right-[10%] bottom-[16%]",
  "left-1/2 top-[4%] -translate-x-1/2",
  "left-1/2 bottom-[5%] -translate-x-1/2",
];

const categoryChips = ["Education", "Real estate", "Travel", "Startups"];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-pyn-dark py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(164,22,42,0.36),transparent_28rem),radial-gradient(circle_at_84%_20%,rgba(242,166,90,0.12),transparent_24rem),linear-gradient(135deg,#080305_0%,#160509_48%,#3d0610_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.84fr_1fr]">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-pyn-amber backdrop-blur-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Sparkles className="h-4 w-4" />
            Trusted client work
          </motion.div>

          <motion.h1
            className="text-4xl font-bold leading-[1.04] md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Trusted by teams building what comes next
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            Real projects across education, real estate, travel, energy, and early-stage brands.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            {categoryChips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-xl">
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            <Button
              size="lg"
              className="w-full bg-pyn-amber text-pyn-dark hover:bg-pyn-amber/85 sm:w-auto"
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
            >
              Start with Pyn <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/25 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
            >
              <Link to="/services/website-development">See services</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto h-[360px] w-full max-w-[620px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-2xl md:h-[420px]"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
        >
          <div className="absolute inset-5 rounded-lg border border-white/10" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pyn-lightBlue/20 md:h-72 md:w-72"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pyn-amber/25 md:h-44 md:w-44"
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-pyn-lightBlue/25 bg-pyn-dark/78 text-center shadow-xl backdrop-blur-xl">
            <span className="text-3xl font-bold text-white">100+</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-pyn-amber">clients</span>
          </div>

          {featuredClients.map((client, index) => (
            <motion.div
              key={client.name}
              className={`absolute ${logoPositions[index]} z-20 flex h-14 w-28 items-center justify-center rounded-lg border border-white/15 bg-white/90 p-3 shadow-lg backdrop-blur-xl sm:h-16 sm:w-36`}
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 3.8 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.className || "max-h-10"} max-w-[88%] object-contain`}
                loading={index < 3 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
