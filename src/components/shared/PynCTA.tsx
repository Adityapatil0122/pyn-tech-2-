import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MessageCircle, Sparkles, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PynCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryText?: string;
  secondaryText?: string;
  secondaryLink?: string;
  className?: string;
  innerClassName?: string;
  compact?: boolean;
  id?: string;
  children?: React.ReactNode;
}

const openContact = () => {
  window.dispatchEvent(new CustomEvent("open-contact"));
};

const steps = [
  { icon: Sparkles, label: "Shape the idea", value: "01" },
  { icon: Workflow, label: "Build the system", value: "02" },
  { icon: Zap, label: "Launch and improve", value: "03" },
];

export const PynCTA: React.FC<PynCTAProps> = ({
  eyebrow = "Start with Pyn",
  title,
  description,
  primaryText = "Book a Strategy Call",
  secondaryText = "Send Project Details",
  secondaryLink,
  className,
  innerClassName,
  compact = false,
  id = "pyn-cta",
  children,
}) => {
  return (
    <section id={id} className={cn("relative w-full overflow-hidden bg-pyn-dark text-white", className)}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pyn-lightBlue to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pyn-amber to-transparent" />
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[linear-gradient(120deg,transparent_0%,rgba(24,199,201,0.12)_48%,rgba(245,185,66,0.16)_100%)] lg:block" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div
          className={cn(
            "grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20",
            compact && "py-12 md:py-14",
            innerClassName
          )}
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-pyn-lightBlue backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-pyn-amber" />
              {eyebrow}
            </div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
              {description}
            </p>

            {children ? (
              <div className="mt-8">{children}</div>
            ) : (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-pyn-amber text-pyn-dark hover:bg-pyn-amber/80"
                  onClick={openContact}
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {primaryText}
                </Button>
                {secondaryLink ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/15"
                    asChild
                  >
                    <Link to={secondaryLink}>
                      {secondaryText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/15"
                    onClick={openContact}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {secondaryText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold text-slate-400">Pyn sprint</p>
                  <p className="mt-1 text-lg font-semibold">From idea to launch path</p>
                </div>
                <div className="rounded-full bg-pyn-blue/20 px-3 py-1 text-sm font-semibold text-pyn-lightBlue">
                  Live
                </div>
              </div>

              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.label} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-pyn-dark/50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-pyn-amber">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{step.label}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-pyn-lightBlue to-pyn-amber" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-pyn-lightBlue">{step.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-md bg-white/10 px-3 py-3">
                  <p className="text-lg font-bold text-pyn-amber">48h</p>
                  <p className="text-xs text-slate-300">first map</p>
                </div>
                <div className="rounded-md bg-white/10 px-3 py-3">
                  <p className="text-lg font-bold text-pyn-lightBlue">3x</p>
                  <p className="text-xs text-slate-300">clearer flow</p>
                </div>
                <div className="rounded-md bg-white/10 px-3 py-3">
                  <p className="text-lg font-bold text-white">1</p>
                  <p className="text-xs text-slate-300">next move</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PynCTA;
