import type { ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, Bot, CheckCircle2, MessageCircle, PlugZap, Sparkles, Workflow } from "lucide-react";
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

const assistantHighlights = ["Answers faster", "Captures leads", "Alerts your team"];

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
      className="relative overflow-hidden rounded-lg border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-2xl md:p-4"
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-white/90 text-pyn-dark shadow-xl backdrop-blur-xl">
        <div className="relative min-h-[320px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center md:min-h-[390px]">
          <div className="absolute inset-0 bg-gradient-to-t from-pyn-dark/80 via-pyn-dark/20 to-transparent" />

          <motion.div
            className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-sm font-semibold text-pyn-blue shadow-lg backdrop-blur-xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            AI assistant active
          </motion.div>

          <motion.div
            className="absolute bottom-5 right-5 max-w-[250px] rounded-lg border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-xl"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-pyn-blue">
              <MessageCircle className="h-4 w-4" />
              New customer question
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              "Can you help me choose the right service?"
            </p>
          </motion.div>
        </div>

        <div className="p-5 md:p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pyn-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-pyn-blue">
            <Sparkles className="h-3.5 w-3.5" />
            Simple AI support
          </div>
          <h3 className="max-w-xl text-2xl font-bold leading-tight md:text-3xl">
            One clear assistant for leads, support, and follow-ups
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Customers ask naturally. The assistant replies, collects details, and sends the next step to your team.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {assistantHighlights.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-pyn-blue/15 bg-pyn-gray/80 px-3 py-3 text-sm font-semibold text-pyn-dark"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-pyn-blue" />
                <span>{item}</span>
              </motion.div>
            ))}
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
      className="relative isolate overflow-hidden pb-28 pt-20 md:pb-32 md:pt-28"
      style={{
        background:
          "linear-gradient(180deg, #061C2B 0%, #082536 22%, #0E4666 44%, #2872A1 58%, #8BBAD4 72%, #CBDDE9 84%, #F3F8FB 100%)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-pyn-dark to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent via-[#CBDDE9]/65 to-[#F3F8FB]" />
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

        <div className="mt-16 rounded-lg border border-white/50 bg-white/72 p-4 shadow-xl shadow-pyn-dark/10 backdrop-blur-2xl md:p-6">
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
