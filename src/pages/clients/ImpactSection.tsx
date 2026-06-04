import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChartBar, ChatText, Rocket, ShieldCheck } from "@phosphor-icons/react";
import { clientStats } from "./clientData";

const collaborationSteps = [
  {
    icon: ChatText,
    title: "Understand the business",
    text: "We start with goals, audience, service flow, and what a good result should look like.",
  },
  {
    icon: ShieldCheck,
    title: "Design for trust",
    text: "The experience is shaped to make the brand feel credible, clear, and easy to contact.",
  },
  {
    icon: ChartBar,
    title: "Build for action",
    text: "Pages, automations, content, and integrations are connected around real customer actions.",
  },
  {
    icon: Rocket,
    title: "Improve after launch",
    text: "We keep the work measurable so updates can be guided by behavior, not guesswork.",
  },
];

const statStyles = [
  {
    card: "border-pyn-amber/50 bg-[#FFF4C7] shadow-pyn-amber/20",
    number: "text-pyn-dark",
    chip: "bg-pyn-amber text-pyn-dark",
    rotate: "lg:-rotate-2",
  },
  {
    card: "border-[#8FE3CF]/60 bg-[#DFFBF3] shadow-[#8FE3CF]/20",
    number: "text-[#075B50]",
    chip: "bg-[#075B50] text-white",
    rotate: "lg:rotate-1",
  },
  {
    card: "border-[#B8C7FF]/70 bg-[#EEF2FF] shadow-[#B8C7FF]/25",
    number: "text-[#243B8A]",
    chip: "bg-[#243B8A] text-white",
    rotate: "lg:-rotate-1",
  },
  {
    card: "border-[#F7B6C8]/70 bg-[#FFF0F5] shadow-[#F7B6C8]/25",
    number: "text-[#8A2146]",
    chip: "bg-[#8A2146] text-white",
    rotate: "lg:rotate-2",
  },
];

const ImpactSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F6FBFE] py-16 text-pyn-dark md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(246,196,83,0.26),transparent_22rem),radial-gradient(circle_at_88%_18%,rgba(143,227,207,0.28),transparent_24rem),linear-gradient(180deg,#F6FBFE_0%,#EAF4FA_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pyn-blue/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto mb-10 max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 border border-pyn-blue/10 bg-white/80 px-4 py-1.5 text-sm font-semibold text-pyn-blue shadow-sm">
              Client proof
            </Badge>
            <h2 className="text-3xl font-bold md:text-5xl">A brighter look at the work already moving</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              These are not just big numbers on dark cards. They point to shipped projects, repeat trust, and practical work across real business categories.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clientStats.map((stat, index) => {
              const style = statStyles[index % statStyles.length];

              return (
                <motion.div
                  key={stat.label}
                  className={`relative min-h-[230px] overflow-hidden rounded-lg border p-5 shadow-xl ${style.card} ${style.rotate}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${style.chip}`}>
                    0{index + 1}
                  </span>
                  <span className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-white/55" />
                  <span className="absolute left-5 top-5 h-2 w-2 rounded-full bg-pyn-dark/20" />
                  <span className="absolute left-10 top-5 h-2 w-2 rounded-full bg-pyn-dark/10" />

                  <p className={`mt-10 text-5xl font-extrabold leading-none tracking-normal md:text-6xl ${style.number}`}>
                    <Counter end={stat.value} suffix={stat.suffix} duration={1600} />
                  </p>
                  <p className="mt-5 text-lg font-bold text-pyn-dark">{stat.label}</p>
                  <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate-700">{stat.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pyn-dark py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(40,114,161,0.28),rgba(6,28,43,0.95)_52%,rgba(14,70,102,0.58))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:36px_36px] opacity-50" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto mb-14 max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-semibold text-pyn-amber">
              How we build it
            </Badge>
            <h2 className="text-3xl font-bold md:text-5xl">Creative work, guided by a simple delivery rhythm</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Each project moves from business clarity to a trustworthy experience, then into launch, learning, and improvement.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-4">
            {collaborationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative rounded-lg border border-white/10 bg-white/[0.08] p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pyn-blue text-white">
                    <step.icon className="h-5 w-5" weight="duotone" />
                  </div>
                  <span className="text-sm font-bold text-pyn-amber">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.text}</p>
                {index < collaborationSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-2 top-10 hidden h-px w-4 bg-pyn-lightBlue/60 lg:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactSection;
