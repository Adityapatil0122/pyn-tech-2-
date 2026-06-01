import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BarChart3, MessageSquareText, Rocket, ShieldCheck } from "lucide-react";
import { clientStats } from "./clientData";

const collaborationSteps = [
  {
    icon: MessageSquareText,
    title: "Understand the business",
    text: "We start with goals, audience, service flow, and what a good result should look like.",
  },
  {
    icon: ShieldCheck,
    title: "Design for trust",
    text: "The experience is shaped to make the brand feel credible, clear, and easy to contact.",
  },
  {
    icon: BarChart3,
    title: "Build for action",
    text: "Pages, automations, content, and integrations are connected around real customer actions.",
  },
  {
    icon: Rocket,
    title: "Improve after launch",
    text: "We keep the work measurable so updates can be guided by behavior, not guesswork.",
  },
];

const ImpactSection = () => {
  return (
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
          <Badge className="mb-4 border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-semibold text-pyn-amber backdrop-blur-xl">
            Built for outcomes
          </Badge>
          <h2 className="text-3xl font-bold md:text-5xl">The work is creative, but the goal is simple</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Clients come from different industries, but they usually need the same thing: a stronger digital presence that helps people understand, trust, and take action.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4">
          {clientStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur-2xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-4xl font-bold text-pyn-amber md:text-5xl">
                <Counter end={stat.value} suffix={stat.suffix} duration={1800} />
              </p>
              <p className="mt-3 font-semibold text-white">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{stat.detail}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-pyn-amber to-pyn-lightBlue"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(100, 56 + index * 12)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.25 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {collaborationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pyn-blue text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-pyn-amber">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.text}</p>
              {index < collaborationSteps.length - 1 && (
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-2 top-10 hidden h-px w-4 bg-pyn-lightBlue/60 lg:block"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.35 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
