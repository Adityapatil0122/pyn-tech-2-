import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BotAction = {
  label: string;
  type: "prompt" | "contact" | "link";
  value?: string;
};

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
  actions?: BotAction[];
};

type ServiceInfo = {
  title: string;
  category: "AI" | "Web Services" | "Product";
  link: string;
  summary: string;
  timeline: string;
  keywords: string[];
  bestFor: string[];
};

const services: ServiceInfo[] = [
  {
    title: "AI-Powered Chatbots",
    category: "AI",
    link: "/ai/chatbots",
    summary: "Conversational agents for website support, FAQs, lead qualification, customer service, and 24/7 response flows.",
    timeline: "A focused chatbot can usually start with a 1-2 week discovery and prototype sprint. Larger bots need scope review.",
    keywords: ["chatbot", "bot", "support", "faq", "customer", "query", "assistant", "conversation", "lead"],
    bestFor: ["Customer support", "Lead capture", "FAQ automation", "Website chat"],
  },
  {
    title: "Custom AI Solutions",
    category: "AI",
    link: "/ai/custom-solutions",
    summary: "Custom AI workflows, automation, prediction, NLP, computer vision, and machine-learning systems tailored to your business data.",
    timeline: "Most custom AI work starts with a discovery sprint, then a proof of concept before full development.",
    keywords: ["custom ai", "machine learning", "automation", "prediction", "nlp", "computer vision", "model", "workflow"],
    bestFor: ["Unique business logic", "Internal automation", "Prediction systems", "AI product features"],
  },
  {
    title: "AI Integration & API",
    category: "AI",
    link: "/ai/integration",
    summary: "API and system integrations that connect AI features with your CRM, website, app, databases, and business tools.",
    timeline: "Simple integrations can begin quickly after access details are confirmed. Complex systems need architecture review.",
    keywords: ["api", "integration", "connect", "crm", "database", "backend", "system", "workflow", "automation"],
    bestFor: ["Connecting systems", "CRM automation", "AI inside existing apps", "API workflows"],
  },
  {
    title: "Data Analytics & Insights",
    category: "AI",
    link: "/ai/analytics",
    summary: "Dashboards, reporting, data analysis, KPI tracking, forecasting, and decision support for business teams.",
    timeline: "A dashboard or analytics plan usually starts with data-source review and KPI mapping.",
    keywords: ["analytics", "dashboard", "data", "report", "insight", "kpi", "forecast", "metrics"],
    bestFor: ["Business dashboards", "Performance tracking", "Data cleanup", "Forecasting"],
  },
  {
    title: "Website Development",
    category: "Web Services",
    link: "/services/website-development",
    summary: "Custom websites, responsive UI, landing pages, business sites, web apps, SEO-ready structure, and maintenance.",
    timeline: "Landing pages are faster; custom websites depend on page count, content, integrations, and design complexity.",
    keywords: ["website", "web", "landing", "wordpress", "ecommerce", "site", "seo", "maintenance"],
    bestFor: ["Business websites", "Landing pages", "E-commerce", "Responsive web apps"],
  },
  {
    title: "App Development",
    category: "Web Services",
    link: "/services/app-development",
    summary: "Mobile apps, cross-platform apps, custom web applications, backend APIs, app UI, launch support, and maintenance.",
    timeline: "App timelines depend on platforms, screens, authentication, backend, payments, and integrations.",
    keywords: ["app", "mobile", "android", "ios", "react native", "flutter", "application", "backend"],
    bestFor: ["Mobile products", "Internal apps", "Customer apps", "Cross-platform builds"],
  },
  {
    title: "Digital Marketing",
    category: "Web Services",
    link: "/services/digital-marketing",
    summary: "SEO, social campaigns, paid ads, content strategy, analytics, lead generation, and conversion improvement.",
    timeline: "Marketing work starts with audit and campaign planning. Results depend on channel, budget, and market.",
    keywords: ["marketing", "seo", "ads", "social", "campaign", "leads", "growth", "content", "roi"],
    bestFor: ["Lead generation", "Brand visibility", "SEO growth", "Campaign management"],
  },
  {
    title: "WhatsApp Business API",
    category: "Web Services",
    link: "/services/whatsapp-business",
    summary: "WhatsApp API setup, green tick guidance, automated replies, campaign flows, notifications, and chatbot support.",
    timeline: "API setup depends on business verification, templates, and integration requirements.",
    keywords: ["whatsapp", "green tick", "message", "notification", "broadcast", "template", "api", "automation"],
    bestFor: ["Customer messaging", "Notifications", "WhatsApp automation", "Support workflows"],
  },
  {
    title: "UI/UX Design",
    category: "Web Services",
    link: "/services/ui-ux-design",
    summary: "User research, wireframes, prototypes, interface design, product flows, and conversion-focused UX improvements.",
    timeline: "Design timelines depend on number of screens, research depth, and revision cycles.",
    keywords: ["ui", "ux", "design", "figma", "prototype", "wireframe", "interface", "experience"],
    bestFor: ["App design", "Website UX", "Product prototypes", "Design systems"],
  },
  {
    title: "Graphics Designing",
    category: "Web Services",
    link: "/services/graphics-designing",
    summary: "Logo design, brand identity, social media creatives, print assets, packaging, and visual communication.",
    timeline: "Graphics work depends on deliverables. Logos and brand systems need discovery, concepts, and revisions.",
    keywords: ["graphics", "graphic", "logo", "brand", "creative", "poster", "social media", "print", "identity"],
    bestFor: ["Logos", "Brand identity", "Social creatives", "Marketing collateral"],
  },
  {
    title: "Study Room Management App",
    category: "Product",
    link: "/products/study-room",
    summary: "A study-room management product for abhyasika and study halls, currently marked as coming soon on the site.",
    timeline: "This product is listed as coming soon. For early interest, the team can collect requirements.",
    keywords: ["study room", "abhyasika", "library", "study hall", "product", "student", "seat", "fees"],
    bestFor: ["Study halls", "Abhyasika management", "Student records", "Fees and seats"],
  },
];

const starterPrompts = [
  "What services does Pyn offer?",
  "Which service is best for my business?",
  "Tell me about WhatsApp Business API",
  "How can I start a project?",
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const openContact = () => {
  window.dispatchEvent(new CustomEvent("open-contact"));
};

const scoreService = (query: string, service: ServiceInfo) => {
  const haystack = normalize(`${service.title} ${service.summary} ${service.keywords.join(" ")} ${service.bestFor.join(" ")}`);
  return service.keywords.reduce((score, keyword) => {
    const normalizedKeyword = normalize(keyword);
    return query.includes(normalizedKeyword) || haystack.includes(query) ? score + normalizedKeyword.split(" ").length + 2 : score;
  }, query.includes(normalize(service.title)) ? 8 : 0);
};

const findMatches = (query: string) =>
  services
    .map((service) => ({ service, score: scoreService(query, service) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.service);

const serviceActions = (service: ServiceInfo): BotAction[] => [
  { label: `Open ${service.title}`, type: "link", value: service.link },
  { label: "Talk to Pyn", type: "contact" },
  { label: "Ask timeline", type: "prompt", value: `Timeline for ${service.title}` },
];

const getAnswer = (rawInput: string): ChatMessage => {
  const query = normalize(rawInput);
  const matches = findMatches(query);
  const topMatch = matches[0];

  const wantsContact = /\b(contact|call|phone|email|talk|human|demo|meeting|consult|consultation|start|quote|proposal)\b/.test(query);
  const asksPrice = /\b(price|pricing|cost|budget|charge|charges|package|packages|rate|rates)\b/.test(query);
  const asksTimeline = /\b(time|timeline|duration|how long|deadline|days|weeks|month|months)\b/.test(query);
  const asksServiceList = /\b(service|services|offer|offers|do you do|what do you do|solutions)\b/.test(query);
  const asksProcess = /\b(process|steps|how you work|method|workflow|start project|project start)\b/.test(query);
  const greeting = /^(hi|hello|hey|hii|namaste|good morning|good evening|good afternoon)\b/.test(query);

  if (!query || greeting) {
    return {
      id: Date.now(),
      role: "bot",
      text:
        "Hi, I am Pyn AI. I can help you choose a service, explain timelines, answer project questions, and connect you with the Pyn team. I answer from Pyn's current site information, and when something needs project-specific details I will ask instead of guessing.",
      actions: [
        { label: "Show services", type: "prompt", value: "What services does Pyn offer?" },
        { label: "Recommend service", type: "prompt", value: "Which service is best for my business?" },
        { label: "Talk to Pyn", type: "contact" },
      ],
    };
  }

  if (wantsContact && !asksPrice && !asksTimeline && !topMatch) {
    return {
      id: Date.now(),
      role: "bot",
      text:
        "You can contact Pyn Technologies at contact@pyntechnologies.com or +91 9960756292. Business hours are Monday to Saturday, 10:00 AM to 6:00 PM. I can also open the project form for you now.",
      actions: [
        { label: "Open project form", type: "contact" },
        { label: "See services", type: "prompt", value: "What services does Pyn offer?" },
      ],
    };
  }

  if (asksPrice) {
    const servicePart = topMatch ? ` for ${topMatch.title}` : "";
    return {
      id: Date.now(),
      role: "bot",
      text:
        `Pricing${servicePart} depends on scope, features, timeline, integrations, content, and support needs. To avoid a wrong estimate, Pyn should first understand your requirements. Share what you want to build, target platform, rough deadline, and any must-have features; then the team can prepare a suitable quote.`,
      actions: [
        { label: "Open quote form", type: "contact" },
        ...(topMatch ? [{ label: `Open ${topMatch.title}`, type: "link" as const, value: topMatch.link }] : []),
      ],
    };
  }

  if (asksTimeline) {
    return {
      id: Date.now(),
      role: "bot",
      text: topMatch
        ? `${topMatch.timeline} For an accurate timeline, Pyn needs your scope, pages/screens, integrations, content readiness, and launch target.`
        : "Timelines depend on project scope. A landing page is usually much faster than a custom app, AI system, or complex integration. Share the service type, features, and deadline, and Pyn can map a realistic delivery plan.",
      actions: topMatch
        ? serviceActions(topMatch)
        : [
            { label: "Choose a service", type: "prompt", value: "Which service is best for my business?" },
            { label: "Talk to Pyn", type: "contact" },
          ],
    };
  }

  if (asksProcess) {
    return {
      id: Date.now(),
      role: "bot",
      text:
        "Pyn usually starts with a short discovery call, then maps goals, features, users, and success metrics. After that the team proposes the right build path: design, prototype, development, testing, launch, and ongoing improvement. For AI or automation work, a proof-of-concept step is recommended before full build.",
      actions: [
        { label: "Book discovery", type: "contact" },
        { label: "Show services", type: "prompt", value: "What services does Pyn offer?" },
      ],
    };
  }

  if (asksServiceList && !topMatch) {
    return {
      id: Date.now(),
      role: "bot",
      text:
        "Pyn Technologies works across AI chatbots, custom AI solutions, AI/API integration, data analytics, website development, app development, digital marketing, WhatsApp Business API, UI/UX design, graphics design, and the Study Room Management product. Tell me your goal and I will suggest the closest service.",
      actions: [
        { label: "Need leads", type: "prompt", value: "I need more leads and online growth" },
        { label: "Need an app", type: "prompt", value: "I need a mobile app" },
        { label: "Need automation", type: "prompt", value: "I need automation for customer queries" },
      ],
    };
  }

  if (topMatch) {
    const related = matches.slice(1, 3).map((service) => service.title).join(" and ");
    return {
      id: Date.now(),
      role: "bot",
      text:
        `${topMatch.title} is the best match. ${topMatch.summary} It is especially useful for ${topMatch.bestFor.join(", ")}.${related ? ` Related services you may also compare: ${related}.` : ""}`,
      actions: serviceActions(topMatch),
    };
  }

  return {
    id: Date.now(),
    role: "bot",
    text:
      "I can help with Pyn services, timelines, pricing guidance, project planning, contact details, and choosing the right solution. I do not want to guess on this one. Could you share what you want to build or improve?",
    actions: [
      { label: "List services", type: "prompt", value: "What services does Pyn offer?" },
      { label: "Get recommendation", type: "prompt", value: "Which service is best for my business?" },
      { label: "Talk to Pyn", type: "contact" },
    ],
  };
};

const getPagePrompt = (pathname: string) => {
  if (pathname.includes("whatsapp")) return "Ask me about WhatsApp API, green tick, chatbots, or customer automation.";
  if (pathname.includes("app-development")) return "Ask me about app features, platforms, timeline, or maintenance.";
  if (pathname.includes("website-development")) return "Ask me about websites, SEO, maintenance, or e-commerce.";
  if (pathname.includes("digital-marketing")) return "Ask me about SEO, ads, content, or lead generation.";
  if (pathname.includes("ai")) return "Ask me about AI chatbots, integrations, analytics, or custom AI workflows.";
  if (pathname.includes("graphics") || pathname.includes("ui-ux")) return "Ask me about design, branding, prototypes, or creative deliverables.";
  return "Ask me about services, timelines, pricing, or the best option for your project.";
};

const PynAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const location = useLocation();
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const initialMessage = useMemo<ChatMessage>(
    () => ({
      id: 1,
      role: "bot",
      text: `Hi, I am Pyn AI. ${getPagePrompt(location.pathname)} I answer instantly from Pyn's service information and ask for details when a custom answer needs context.`,
      actions: [
        { label: "Show services", type: "prompt", value: "What services does Pyn offer?" },
        { label: "Recommend service", type: "prompt", value: "Which service is best for my business?" },
        { label: "Contact team", type: "contact" },
      ],
    }),
    [location.pathname]
  );

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  useEffect(() => {
    setMessages([initialMessage]);
  }, [initialMessage]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const chatScroll = chatScrollRef.current;
    if (!chatScroll) return;

    requestAnimationFrame(() => {
      chatScroll.scrollTo({
        top: chatScroll.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [messages, isOpen]);

  const submitQuestion = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage, getAnswer(trimmed)]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitQuestion(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitQuestion(input);
    }
  };

  const handleAction = (action: BotAction) => {
    if (action.type === "contact") {
      setIsOpen(false);
      window.setTimeout(openContact, 0);
      return;
    }
    if (action.type === "prompt" && action.value) {
      submitQuestion(action.value);
    }
  };

  return (
    <>
      <div className="fixed bottom-24 right-6 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={cn(
            "group flex h-14 w-14 items-center justify-center rounded-full bg-pyn-dark text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-pyn-blue",
            isOpen && "pointer-events-none scale-90 opacity-0"
          )}
          aria-label="Open Pyn AI assistant"
        >
          <Bot className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pyn-amber text-[10px] font-bold text-pyn-dark">
            AI
          </span>
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] cursor-default bg-pyn-dark/25 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close Pyn AI assistant backdrop"
          />

          <div className="fixed inset-x-3 bottom-4 z-[70] flex max-h-[calc(100dvh-2rem)] overflow-hidden rounded-lg border border-pyn-blue/15 bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-[430px] sm:max-h-[calc(100dvh-7rem)]">
            <div className="flex min-h-0 w-full flex-col">
              <div className="shrink-0 bg-pyn-dark text-white">
                <div className="flex items-start justify-between gap-4 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pyn-blue/20 text-pyn-lightBlue">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold">Pyn AI Assistant</h2>
                        <span className="rounded-full bg-pyn-amber px-2 py-0.5 text-[10px] font-bold text-pyn-dark">Live</span>
                      </div>
                      <p className="mt-0.5 text-xs text-slate-300">Service guidance in seconds</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                    aria-label="Close Pyn AI assistant"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div ref={chatScrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-pyn-gray p-4">
                <div className="mb-4 rounded-md border border-pyn-blue/10 bg-white p-3 text-xs text-slate-600">
                  <div className="mb-1 flex items-center gap-2 font-semibold text-pyn-dark">
                    <CheckCircle2 className="h-4 w-4 text-pyn-blue" />
                    Smart site assistant
                  </div>
                  It can answer service questions instantly. For custom pricing or exact deadlines, it asks for details instead of guessing.
                </div>

                <div className="space-y-4" aria-live="polite">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex gap-2", message.role === "user" ? "justify-end" : "justify-start")}
                    >
                      {message.role === "bot" && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pyn-dark text-white">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}

                      <div className={cn("max-w-[82%]", message.role === "user" && "flex flex-col items-end")}>
                        <div
                          className={cn(
                            "rounded-lg px-4 py-3 text-sm leading-relaxed shadow-sm",
                            message.role === "user"
                              ? "bg-pyn-blue text-white"
                              : "border border-slate-200 bg-white text-slate-700"
                          )}
                        >
                          {message.text}
                        </div>

                        {message.actions && message.role === "bot" && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {message.actions.map((action) =>
                              action.type === "link" && action.value ? (
                                <Link
                                  key={`${message.id}-${action.label}`}
                                  to={action.value}
                                  onClick={() => setIsOpen(false)}
                                  className="inline-flex items-center rounded-full border border-pyn-blue/20 bg-white px-3 py-1.5 text-xs font-semibold text-pyn-blue transition hover:bg-pyn-blue hover:text-white"
                                >
                                  {action.label} <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              ) : (
                                <button
                                  key={`${message.id}-${action.label}`}
                                  type="button"
                                  onClick={() => handleAction(action)}
                                  className="inline-flex items-center rounded-full border border-pyn-blue/20 bg-white px-3 py-1.5 text-xs font-semibold text-pyn-blue transition hover:bg-pyn-blue hover:text-white"
                                >
                                  {action.label}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>

                      {message.role === "user" && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pyn-blue/10 text-pyn-blue">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 border-t border-slate-200 bg-white p-3">
                <div className="mb-3 flex flex-wrap gap-2">
                  {starterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => submitQuestion(prompt)}
                      className="rounded-full bg-pyn-blue/10 px-3 py-1.5 text-xs font-medium text-pyn-blue transition hover:bg-pyn-blue hover:text-white"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex items-end gap-2">
                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    placeholder="Ask about services, pricing, timeline..."
                    className="max-h-28 min-h-11 flex-1 resize-none rounded-md border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-pyn-blue focus:ring-2 focus:ring-pyn-blue/15"
                  />
                  <Button type="submit" size="icon" className="h-11 w-11 shrink-0 bg-pyn-dark text-white hover:bg-pyn-blue">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    window.setTimeout(openContact, 0);
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-pyn-blue/20 px-3 py-2 text-sm font-semibold text-pyn-dark transition hover:bg-pyn-gray"
                >
                  <CalendarDays className="h-4 w-4 text-pyn-blue" />
                  Need exact quote? Talk to Pyn team
                  <MessageCircle className="h-4 w-4 text-pyn-blue" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PynAIAssistant;
