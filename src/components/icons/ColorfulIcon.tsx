import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type PhosphorLikeIcon = ComponentType<{
  className?: string;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}>;

export type ColorfulIconPalette =
  | "ocean"
  | "mint"
  | "violet"
  | "sunset"
  | "rose"
  | "sky"
  | "lime"
  | "graphite";

const paletteClasses: Record<ColorfulIconPalette, string> = {
  ocean: "text-blue-600",
  mint: "text-emerald-600",
  violet: "text-violet-600",
  sunset: "text-orange-500",
  rose: "text-rose-500",
  sky: "text-sky-500",
  lime: "text-lime-600",
  graphite: "text-slate-700",
};

interface ColorfulIconProps {
  icon: PhosphorLikeIcon;
  palette?: ColorfulIconPalette;
  className?: string;
  iconClassName?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

const ColorfulIcon = ({
  icon: Icon,
  palette = "ocean",
  className,
  iconClassName,
  weight = "duotone",
}: ColorfulIconProps) => {
  const iconColor = paletteClasses[palette];

  return (
    <span
      data-preserve-color
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110",
        className,
      )}
    >
      <Icon className={cn("h-7 w-7", iconColor, iconClassName)} weight={weight} />
    </span>
  );
};

export default ColorfulIcon;
