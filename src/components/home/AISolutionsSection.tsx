import type { ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, Bot, PlugZap, Sparkles, Workflow, Zap } from "lucide-react";
import { Link } from "react-router-dom";

type AICardProps = {
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
  link: string;
  accent: string;
  index: number;
};

const businessMoments = ["Customer support", "Lead capture", "WhatsApp flows", "Internal tasks", "Sales follow-up", "Analytics"];

const workflowSteps = [
  { label: "Listen", value: "Website, WhatsApp, forms" },
  { label: "Understand", value: "Intent, context, urgency" },
  { label: "Act", value: "Reply, route, update CRM" },
  { label: "Improve", value: "Measure and optimize" },
];

const AICard = ({ icon: Icon, title, description, features, link, accent, index }: AICardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Link
        to={link}
        className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-lg border border-pyn-blue/15 bg-white/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-pyn-lightBlue/40 hover:shadow-xl"
      >
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pyn-darkBlue via-pyn-blue to-pyn-lightBlue opacity-70 transition-opacity group-hover:opacity-100" />
        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${accent}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-pyn-dark">{title}</h3>
        <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-600">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-slate-600">
              <BadgeCheck className="mr-2 h-4 w-4 text-pyn-blue" /> {feature}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center text-sm font-semibold text-pyn-blue group-hover:text-pyn-darkBlue">
          View capability <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
};

const AIFlowVisual = () => {
  return (
    <motion.div
      className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl md:p-5"
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />
      <div className="relative grid min-h-[488px] gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col rounded-lg border border-white/10 bg-pyn-dark/72 p-4 backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-pyn-lightBlue" />
              <span className="h-3 w-3 rounded-full bg-pyn-amber" />
              <span className="h-3 w-3 rounded-full bg-white/35" />
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-pyn-amber">Pyn AI Console</span>
          </div>

          <div className="space-y-3">
            <motion.div
              className="rounded-lg border border-white/10 bg-white/10 p-4"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pyn-lightBlue">Incoming lead</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                "Can you suggest the right service for a real estate website with WhatsApp automation?"
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] p-4"
                  animate={{ opacity: [0.78, 1, 0.78] }}
                  transition={{ duration: 3.6, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pyn-lightBlue to-transparent" />
                  <p className="text-sm font-bold text-white">{step.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{step.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
            <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-pyn-amber via-pyn-lightBlue to-white"
                animate={{ width: ["18%", "76%", "38%", "92%"], x: ["0%", "12%", "0%", "6%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs text-slate-300">
              <span>Intent matched</span>
              <span>Action ready</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/80 p-5 text-pyn-dark shadow-xl backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pyn-darkBlue via-pyn-blue to-pyn-lightBlue" />
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-pyn-blue">Automation map</p>
                <h3 className="text-2xl font-bold">From question to customer action</h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pyn-blue text-white">
                <Zap className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-4">
              {["Website chatbot", "Recommendation engine", "WhatsApp follow-up", "Team notification"].map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pyn-blue/10 text-sm font-bold text-pyn-blue">
                    {index + 1}
                  </span>
                  <div className="h-2 overflow-hidden rounded-full bg-pyn-blue/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-pyn-blue to-pyn-lightBlue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${58 + index * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.16 }}
                    />
                  </div>
                  <span className="w-32 text-right text-xs font-semibold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/80 shadow-lg backdrop-blur-xl">
              <div className="h-28 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pyn-blue">Insights</p>
                <p className="mt-1 text-sm font-semibold text-pyn-dark">Dashboards that tell teams what to do next.</p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/80 p-4 shadow-lg backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pyn-blue">Response stack</p>
              <div className="mt-4 space-y-3">
                {["Chatbot reply", "Lead score", "CRM update"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center justify-between rounded-md bg-pyn-gray/80 px-3 py-2 text-sm font-semibold text-pyn-dark"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
                  >
                    <span>{item}</span>
                    <span className="h-2 w-2 rounded-full bg-pyn-blue" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AISolutionsSection = () => {
  const aiSolutions = [
    {
      title: "AI-Powered Chatbots",
      description: "Conversational assistants for support, lead capture, and customer self-service.",
      icon: Bot,
      accent: "bg-pyn-blue/10 text-pyn-blue",
      features: ["Virtual Support 24/7", "Multi-language Support", "Custom Training", "Analytics Dashboard"],
      link: "/ai/chatbots",
    },
    {
      title: "Custom AI Solutions",
      description: "Practical AI workflows built around your data, operations, and growth goals.",
      icon: Workflow,
      accent: "bg-pyn-amber/20 text-pyn-dark",
      features: ["Process Automation", "ML Model Development", "Solution Architecture", "Integration Services"],
      link: "/ai/custom-solutions",
    },
    {
      title: "AI Integration & API",
      description: "Connect AI models, third-party tools, and internal systems with dependable APIs.",
      icon: PlugZap,
      accent: "bg-pyn-lightBlue/20 text-pyn-darkBlue",
      features: ["Third-party Integration", "Custom API Development", "Seamless Connectivity", "Real-time Processing"],
      link: "/ai/integration",
    },
    {
      title: "Data Analytics & Insights",
      description: "Dashboards, forecasts, and decision systems that make business data usable.",
      icon: BarChart3,
      accent: "bg-pyn-dark/10 text-pyn-dark",
      features: ["Predictive Analytics", "Business Intelligence", "Performance Metrics", "Data Visualization"],
      link: "/ai/analytics",
    },
  ];

  return (
    <section
      id="ai-solutions"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #061C2B 0%, #082536 22%, #0E4666 46%, #2872A1 58%, #CBDDE9 74%, #F3F8FB 100%)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-pyn-dark to-transparent" />
      <div className="absolute inset-x-0 top-[55%] h-56 bg-gradient-to-b from-transparent via-[#CBDDE9] to-[#F3F8FB]" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-pyn-amber backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              AI Solutions
            </div>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Automation that feels like a useful business engine
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              We focus AI work on real business moments: answering customers faster, connecting systems, reading data, and reducing repetitive effort.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {businessMoments.map((moment, index) => (
                <motion.span
                  key={moment}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  {moment}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <AIFlowVisual />
        </div>

        <div className="mt-16 rounded-lg border border-pyn-blue/15 bg-white/60 p-4 shadow-xl backdrop-blur-2xl md:p-6">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-pyn-blue/10 px-4 py-1 text-sm font-semibold text-pyn-blue">
                Choose the right layer
              </div>
              <h3 className="text-3xl font-bold text-pyn-dark md:text-4xl">AI that plugs into the way your business already moves</h3>
            </div>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Start with one useful workflow, then expand into support, operations, integrations, and analytics as your team sees traction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aiSolutions.map((solution, index) => (
              <AICard key={solution.title} {...solution} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
