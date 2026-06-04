import { ArrowRight, Seal, ChartBar, Code, ChatText, Palette, AppWindow, DeviceMobile } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import ColorfulIcon, { type ColorfulIconPalette } from "@/components/icons/ColorfulIcon";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  link: string;
  palette: ColorfulIconPalette;
};

const ServiceCard = ({ icon, title, description, features, link, palette }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group grid h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pyn-blue/40 hover:shadow-xl"
    >
      <div className="mb-5 flex items-center gap-4">
        <ColorfulIcon icon={icon} palette={palette} />
        <h3 className="text-xl font-semibold text-pyn-dark">{title}</h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-slate-600">{description}</p>
      <ul className="mb-6 grid gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-slate-600">
            <Seal className="mr-2 h-4 w-4 text-pyn-blue" weight="fill" /> {feature}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center text-sm font-semibold text-pyn-blue group-hover:text-pyn-darkBlue">
        Learn more <ArrowRight className="ml-2 h-4 w-4" weight="bold" />
      </span>
    </Link>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description: "Fast, responsive websites and web apps built around clear conversion paths.",
      icon: Code,
      palette: "ocean" as const,
      features: ["Custom Web Development", "eCommerce Solutions", "WordPress Development", "Responsive Design"],
      link: "/services/website-development",
    },
    {
      title: "App Development",
      description: "Mobile and cross-platform applications designed for real daily use.",
      icon: DeviceMobile,
      palette: "sky" as const,
      features: ["Native App Development", "Cross-platform Solutions", "App UI/UX Design", "App Maintenance"],
      link: "/services/app-development",
    },
    {
      title: "Digital Marketing",
      description: "Campaign systems for visibility, leads, and measurable online momentum.",
      icon: ChartBar,
      palette: "sunset" as const,
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Marketing"],
      link: "/services/digital-marketing",
    },
    {
      title: "WhatsApp Business API",
      description: "Automation, broadcasts, and support flows for high-response customer channels.",
      icon: ChatText,
      palette: "mint" as const,
      features: ["Business Account Setup", "Automated Responses", "Broadcast Messages", "Analytics Dashboard"],
      link: "/services/whatsapp-business",
    },
    {
      title: "UI/UX Design",
      description: "Interfaces that make complex products easier to trust, scan, and use.",
      icon: AppWindow,
      palette: "violet" as const,
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
      link: "/services/ui-ux-design",
    },
    {
      title: "Graphics Design",
      description: "Brand visuals, social creatives, and print assets with a clean digital finish.",
      icon: Palette,
      palette: "rose" as const,
      features: ["Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design"],
      link: "/services/graphics-designing",
    },
  ];

  return (
    <section className="bg-pyn-gray py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-pyn-amber/20 px-4 py-1 text-sm font-semibold text-pyn-dark">
            Services
          </div>
          <h2 className="text-3xl font-bold text-pyn-dark md:text-4xl">One team for product, automation, design, and growth</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Pyn brings the parts together so your website, apps, customer channels, and marketing work like one connected system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
