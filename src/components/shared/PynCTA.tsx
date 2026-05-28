import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";
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

export const PynCTA: React.FC<PynCTAProps> = ({
  eyebrow = "Start the next move",
  title,
  description,
  primaryText = "Plan My Project",
  secondaryText = "Share Project Details",
  secondaryLink,
  className,
  innerClassName,
  compact = false,
  id = "pyn-cta",
  children,
}) => {
  return (
    <section id={id} className={cn("w-full bg-white py-12 md:py-16", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-lg bg-gradient-to-br from-pyn-dark via-pyn-blue to-pyn-darkBlue px-6 py-14 text-center text-white shadow-2xl shadow-pyn-blue/20 md:px-12 md:py-16",
            compact && "py-12 md:py-14",
            innerClassName
          )}
        >
          <div className="pointer-events-none absolute -left-24 bottom-[-8rem] h-72 w-72 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-20 top-[-9rem] h-80 w-80 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute right-16 top-16 h-4 w-4 rounded-full bg-pyn-amber/70" />
          <div className="pointer-events-none absolute left-12 top-12 h-7 w-7 rounded-full bg-white/10" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mb-5 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-pyn-blue shadow-sm">
              {eyebrow}
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
              {description}
            </p>

            {children ? (
              <div className="mt-8">{children}</div>
            ) : (
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="min-w-52 rounded-full bg-white text-pyn-blue shadow-lg shadow-pyn-dark/10 hover:bg-pyn-gray hover:text-pyn-dark"
                  onClick={openContact}
                >
                  {primaryText}
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Button>

                {secondaryLink ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-52 rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-pyn-blue"
                    asChild
                  >
                    <Link to={secondaryLink}>
                      {secondaryText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-52 rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-pyn-blue"
                    onClick={openContact}
                  >
                    {secondaryText}
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PynCTA;
