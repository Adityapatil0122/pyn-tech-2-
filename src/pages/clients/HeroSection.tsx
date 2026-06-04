import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { clients } from "./clientData";

const featuredClients = clients.slice(0, 6);

const logoPositions = [
  "left-[1%] top-[8%] sm:left-[2%] sm:top-[9%]",
  "right-[1%] top-[12%] sm:right-[4%] sm:top-[13%]",
  "left-[1%] top-[54%] sm:left-[3%] sm:top-[48%]",
  "right-[1%] top-[56%] sm:right-[2%] sm:top-[51%]",
  "left-[14%] bottom-[2%]",
  "right-[14%] bottom-[8%]",
];

const categoryChips = ["Education", "Real estate", "Travel", "Startups"];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-pyn-dark py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(40,114,161,0.38),transparent_28rem),radial-gradient(circle_at_84%_20%,rgba(203,221,233,0.18),transparent_24rem),linear-gradient(135deg,#061C2B_0%,#082536_48%,#0E4666_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.84fr_1fr]">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-pyn-amber"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Sparkle className="h-4 w-4" weight="duotone" />
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
              <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
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
              Start with Pyn <ArrowRight className="h-4 w-4" weight="bold" />
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
          className="relative mx-auto h-[320px] w-full max-w-[680px] overflow-visible sm:h-[380px] md:h-[460px]"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
        >
          <div
            className="absolute left-[8%] top-[8%] h-24 w-24 rounded-full bg-pyn-lightBlue/16 blur-2xl"
          />
          <div
            className="absolute bottom-[2%] right-[7%] h-32 w-32 rounded-full bg-pyn-blue/22 blur-3xl"
          />
          <div
            className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pyn-lightBlue/20 sm:h-64 sm:w-64 md:h-80 md:w-80"
          />
          <div
            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-40 sm:w-40 md:h-52 md:w-52"
          />
          <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pyn-lightBlue/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-pyn-lightBlue/15 to-transparent" />

          <div
            className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-pyn-lightBlue/25 bg-pyn-dark/[0.88] text-center shadow-2xl shadow-pyn-blue/20 sm:h-28 sm:w-28 md:h-32 md:w-32"
          >
            <span className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">100+</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-pyn-amber sm:text-xs sm:tracking-[0.18em]">clients</span>
          </div>

          {featuredClients.map((client, index) => (
            <div
              key={client.name}
              className={`group absolute ${logoPositions[index]} z-20 ${index >= 4 ? "hidden sm:flex" : "flex"} h-12 w-28 items-center justify-center rounded-lg border border-white/20 bg-white/95 p-2 shadow-xl shadow-pyn-dark/15 sm:h-16 sm:w-40 sm:p-3 md:h-[74px] md:w-44`}
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-white via-pyn-lightBlue/20 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={client.logo}
                alt={client.name}
                className={`relative max-h-8 max-w-[88%] object-contain sm:max-h-10 md:max-h-12 ${client.className || ""}`}
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
