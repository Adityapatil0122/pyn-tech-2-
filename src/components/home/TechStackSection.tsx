import { motion } from "framer-motion";
import { Cpu, Layers3, Network, Sparkles, Zap } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type TechGroup = "Frontend" | "Backend" | "Cloud" | "Data" | "DevOps";

type TechItem = {
  icon: string;
  name: string;
  group: TechGroup;
  description: string;
};

const techStack: TechItem[] = [
  {
    icon: "/lovable-uploads/9439c8d1-d12d-4555-b67e-8897ae42ef91.png",
    name: "React",
    group: "Frontend",
    description: "Fast interfaces for dashboards, portals, and modern web apps.",
  },
  {
    icon: "/lovable-uploads/548e2388-53ed-4ee8-bb29-d8c15dbeb003.png",
    name: "Angular",
    group: "Frontend",
    description: "Structured enterprise interfaces with scalable patterns.",
  },
  {
    icon: "/lovable-uploads/a6ab499e-bdc7-44c0-8b7a-97dbc1924b5f.png",
    name: "Vue.js",
    group: "Frontend",
    description: "Lightweight interactive experiences with clean component logic.",
  },
  {
    icon: "/lovable-uploads/6cc6b647-86b5-4992-b566-c7295d3c2329.png",
    name: "Node.js",
    group: "Backend",
    description: "APIs, real-time services, and automation-friendly server logic.",
  },
  {
    icon: "/lovable-uploads/d689ae77-6976-4ab8-acfa-ca3371f77799.png",
    name: "Python",
    group: "Backend",
    description: "AI workflows, analytics, integrations, and backend services.",
  },
  {
    icon: "/lovable-uploads/271607ce-13bd-4c7c-abcc-db1544ce3022.png",
    name: "PHP",
    group: "Backend",
    description: "Reliable web backends, CMS work, and business portals.",
  },
  {
    icon: "/lovable-uploads/11756638-d726-4dbd-94c3-878de8dc3143.png",
    name: "Java",
    group: "Backend",
    description: "Stable application logic for long-running business platforms.",
  },
  {
    icon: "/lovable-uploads/b9cfedb7-014c-4b8f-90aa-b02d0e459835.png",
    name: "MySQL",
    group: "Data",
    description: "Clean relational storage for products, CRMs, and admin tools.",
  },
  {
    icon: "/lovable-uploads/aaaa4c43-b383-4d81-bdc8-3c1ec517064a.png",
    name: "MongoDB",
    group: "Data",
    description: "Flexible data models for content, analytics, and app state.",
  },
  {
    icon: "/lovable-uploads/efff9ce2-0d1a-4339-9821-6f46dffd1a3c.png",
    name: "AWS",
    group: "Cloud",
    description: "Cloud foundations for hosting, scaling, and managed services.",
  },
  {
    icon: "/lovable-uploads/e0c77dd0-d53b-4534-ba42-bd3a1a1c6071.png",
    name: "Docker",
    group: "DevOps",
    description: "Portable deployments that keep environments consistent.",
  },
  {
    icon: "/lovable-uploads/db6a96ff-c965-4229-bf66-60a1b90a099f.png",
    name: "Kubernetes",
    group: "DevOps",
    description: "Container orchestration for larger cloud-native systems.",
  },
  {
    icon: "/lovable-uploads/67975efd-66ad-469d-9433-65656e6f6759.png",
    name: "Git",
    group: "DevOps",
    description: "Version control that keeps delivery organized and traceable.",
  },
  {
    icon: "/lovable-uploads/64c9a4ae-b4e3-42c6-83e3-d77f88e9d813.png",
    name: "Jenkins",
    group: "DevOps",
    description: "Release automation for repeatable builds and deployments.",
  },
  {
    icon: "/lovable-uploads/687e9571-dbed-4323-9c80-3c5cdcdcec2b.png",
    name: "Azure",
    group: "Cloud",
    description: "Cloud services for enterprise apps, data, and integrations.",
  },
  {
    icon: "/lovable-uploads/eaeb12e4-5b77-40c5-830f-428206f97df4.png",
    name: "Firebase",
    group: "Cloud",
    description: "Quick product launches with auth, storage, and real-time data.",
  },
  {
    icon: "/lovable-uploads/1d9a30dd-c8fa-4ed4-80d1-7fbf26f66a4d.png",
    name: "GraphQL",
    group: "Backend",
    description: "Precise API layers for flexible products and dashboards.",
  },
  {
    icon: "/lovable-uploads/649f2038-0ab8-4e74-bedf-d05983079b64.png",
    name: "TypeScript",
    group: "Frontend",
    description: "Safer front-end code with stronger editor and build support.",
  },
];

const groupStyles: Record<TechGroup, string> = {
  Frontend: "border-pyn-lightBlue/40 bg-pyn-lightBlue/10 text-pyn-lightBlue",
  Backend: "border-pyn-amber/40 bg-pyn-amber/20 text-pyn-amber",
  Cloud: "border-white/25 bg-white/10 text-white",
  Data: "border-pyn-blue/40 bg-pyn-blue/20 text-pyn-lightBlue",
  DevOps: "border-slate-300/25 bg-slate-200/10 text-slate-100",
};

const stackLayers = [
  {
    icon: Sparkles,
    title: "Experience Layer",
    tools: "React, Angular, Vue, TypeScript",
    progress: 92,
  },
  {
    icon: Cpu,
    title: "Logic Layer",
    tools: "Node, Python, Java, PHP, GraphQL",
    progress: 86,
  },
  {
    icon: Network,
    title: "Cloud Layer",
    tools: "AWS, Azure, Firebase, Docker, Kubernetes",
    progress: 78,
  },
];

const TechStackSection = () => {
  const groups = Array.from(new Set(techStack.map((tech) => tech.group)));

  return (
    <section className="relative isolate overflow-hidden bg-pyn-dark py-24 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(40,114,161,0.34),transparent_30rem),radial-gradient(circle_at_84%_28%,rgba(203,221,233,0.22),transparent_26rem),linear-gradient(135deg,#061C2B_0%,#082536_48%,#0E4666_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

      <motion.div
        className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full border border-pyn-lightBlue/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[-9rem] bottom-8 h-96 w-96 rounded-full border border-pyn-amber/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-pyn-amber backdrop-blur-xl">
            <Zap className="h-4 w-4" />
            Technology
          </div>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            A stack that feels alive behind every build
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            We combine proven frameworks, cloud tools, and automation pipelines into systems that are fast to launch and easy to keep improving.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <motion.div
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-2xl md:p-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pyn-lightBlue via-pyn-amber to-white" />
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-pyn-amber">Build pipeline</p>
                <h3 className="mt-1 text-2xl font-bold">From idea to stable launch</h3>
              </div>
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/10"
                animate={{ boxShadow: ["0 0 0 rgba(40,114,161,0)", "0 0 28px rgba(203,221,233,0.35)", "0 0 0 rgba(40,114,161,0)"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Layers3 className="h-6 w-6 text-pyn-lightBlue" />
              </motion.div>
            </div>

            <div className="space-y-4">
              {stackLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <motion.div
                    key={layer.title}
                    className="rounded-lg border border-white/10 bg-pyn-dark/40 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-pyn-amber">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-white">{layer.title}</h4>
                        <p className="text-sm text-slate-300">{layer.tools}</p>
                      </div>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-pyn-lightBlue via-pyn-amber to-white"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${layer.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + index * 0.15 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["18", "tools"],
                ["5", "layers"],
                ["24/7", "ready"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/10 px-3 py-4 backdrop-blur-xl">
                  <p className="text-2xl font-bold text-pyn-amber">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-2xl md:p-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.12),transparent_18rem)]" />
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-pyn-lightBlue">Stack constellation</p>
                <h3 className="text-2xl font-bold">Tools mapped by delivery layer</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {groups.map((group) => (
                  <span key={group} className={`rounded-full border px-3 py-1 text-xs font-semibold ${groupStyles[group]}`}>
                    {group}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-pyn-lightBlue/30 to-transparent lg:block" />
              <div className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-pyn-amber/25 to-transparent lg:block" />

              {techStack.map((tech, index) => (
                <HoverCard key={tech.name} openDelay={100}>
                  <HoverCardTrigger asChild>
                    <motion.button
                      type="button"
                      className="group relative min-h-[112px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.74] p-4 shadow-lg backdrop-blur-xl transition-colors hover:border-pyn-lightBlue/50 focus:outline-none focus:ring-2 focus:ring-pyn-amber/70"
                      initial={{ opacity: 0, scale: 0.82, y: 22 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.42, delay: index * 0.035 }}
                      whileHover={{ y: -8, scale: 1.03 }}
                    >
                      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pyn-blue via-pyn-lightBlue to-pyn-amber opacity-0 transition-opacity group-hover:opacity-100" />
                      <motion.span
                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-sm"
                        animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                        transition={{ duration: 3.4 + (index % 4) * 0.35, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="max-h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </motion.span>
                      <span className="mt-3 block text-center text-xs font-bold uppercase tracking-[0.14em] text-pyn-dark">
                        {tech.name}
                      </span>
                    </motion.button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 border-pyn-blue/20 bg-white/90 backdrop-blur-xl">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="font-semibold text-pyn-dark">{tech.name}</p>
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${groupStyles[tech.group]}`}>
                        {tech.group}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{tech.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
