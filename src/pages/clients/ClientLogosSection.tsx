import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Pause, Play, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { clients } from "./clientData";

const LogoRail = ({ reverse = false }: { reverse?: boolean }) => {
  const railClients = useMemo(() => [...clients, ...clients], []);

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex w-max gap-4 py-2 ${reverse ? "animate-client-marquee-reverse" : "animate-client-marquee"}`}>
        {railClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex h-20 w-44 items-center justify-center rounded-lg border border-pyn-blue/15 bg-white/70 px-5 shadow-sm backdrop-blur-xl"
          >
            <img
              src={client.logo}
              alt=""
              className={`${client.className || "max-h-12"} max-w-[82%] object-contain opacity-80`}
              loading={index < 8 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientLogosSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeClient = clients[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % clients.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-pyn-blue/25 to-transparent" />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 border-none bg-pyn-blue/10 px-4 py-1.5 text-sm font-semibold text-pyn-blue">
            Our Clients
          </Badge>
          <h2 className="text-3xl font-bold text-pyn-dark md:text-5xl">A moving wall of real partnerships</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Every logo here represents a different business problem, audience, and growth goal. The work stays simple to use, but the systems behind it are built with intent.
          </p>
        </motion.div>

        <div className="mb-12 space-y-3">
          <LogoRail />
          <LogoRail reverse />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            className="relative overflow-hidden rounded-lg border border-pyn-blue/15 bg-white/75 p-6 shadow-xl backdrop-blur-2xl md:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pyn-darkBlue via-pyn-blue to-pyn-lightBlue" />
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-pyn-blue/10 px-3 py-1 text-sm font-semibold text-pyn-blue">
                <Sparkles className="h-4 w-4" />
                Live spotlight
              </div>
              <button
                type="button"
                onClick={() => setIsPaused((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pyn-blue/20 text-pyn-blue transition hover:bg-pyn-blue hover:text-white"
                aria-label={isPaused ? "Play client spotlight" : "Pause client spotlight"}
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex min-h-40 items-center justify-center rounded-lg border border-pyn-blue/15 bg-white/75 p-8 backdrop-blur-xl">
                  <img
                    src={activeClient.logo}
                    alt={activeClient.name}
                    className={`${activeClient.className || "max-h-20"} max-w-[78%] object-contain`}
                    loading="eager"
                  />
                </div>

                <div className="mt-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pyn-blue">
                    {activeClient.category}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-pyn-dark">{activeClient.name}</h3>
                  <p className="mt-3 min-h-16 text-base leading-relaxed text-slate-600">{activeClient.highlight}</p>
                </div>

                <div className="mt-7 flex items-center justify-between rounded-lg border border-pyn-blue/10 bg-pyn-gray/70 px-4 py-3">
                  <span className="text-sm font-semibold text-pyn-dark">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(clients.length).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-pyn-blue">
                    Partnership profile <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {clients.map((client, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={client.name}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group relative flex h-28 items-center justify-center overflow-hidden rounded-lg border p-4 text-left shadow-sm backdrop-blur-xl transition-all duration-300 ${
                    isActive
                      ? "border-pyn-lightBlue/50 bg-pyn-blue/10 shadow-xl"
                      : "border-pyn-blue/15 bg-white/70 hover:-translate-y-1 hover:border-pyn-blue/35 hover:shadow-lg"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pyn-darkBlue via-pyn-blue to-pyn-lightBlue transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`${client.className || "max-h-14"} max-w-[82%] object-contain transition-transform duration-300 group-hover:scale-105`}
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
