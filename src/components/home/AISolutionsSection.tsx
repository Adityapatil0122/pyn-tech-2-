import { ArrowRight, BadgeCheck, BarChart3, Bot, PlugZap, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

type AICardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  link: string;
  accent: string;
};

const AICard = ({ icon: Icon, title, description, features, link, accent }: AICardProps) => {
  return (
    <Link
      to={link}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pyn-blue/40 hover:shadow-xl"
    >
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
      <span className="inline-flex items-center text-sm font-semibold text-pyn-blue group-hover:text-pyn-darkBlue">
        View capability <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </Link>
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
      accent: "bg-slate-100 text-slate-700",
      features: ["Predictive Analytics", "Business Intelligence", "Performance Metrics", "Data Visualization"],
      link: "/ai/analytics",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-pyn-blue/10 px-4 py-1 text-sm font-semibold text-pyn-blue">
              AI Solutions
            </div>
            <h2 className="text-3xl font-bold text-pyn-dark md:text-4xl">Automation that feels useful, not ornamental</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            We focus AI work on real business moments: answering customers faster, connecting systems, reading data, and reducing repetitive effort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiSolutions.map((solution) => (
            <AICard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
