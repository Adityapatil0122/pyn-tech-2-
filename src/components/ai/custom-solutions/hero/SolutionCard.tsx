
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: {
    text: string;
    color: string;
  };
  variant: 'light' | 'dark';
  iconBgClass: string;
}

export const SolutionCard = ({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  variant, 
  iconBgClass 
}: SolutionCardProps) => {
  const isDark = variant === 'dark';
  
  return (
    <Card className={`border-none shadow-md ${
      isDark 
        ? "bg-gradient-to-br from-pyn-blue to-pyn-darkBlue text-white" 
        : "bg-white"
    } overflow-visible`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className={`p-1.5 ${iconBgClass} rounded-lg`}>
            <Icon className={`h-4 w-4 ${isDark ? "text-white" : ""}`} />
          </div>
          <div className="flex items-center gap-1">
            <div className={`w-1.5 h-1.5 rounded-full ${status.color}`}></div>
            <span className={`text-xs ${isDark ? "text-white/80" : "text-gray-600"}`}>{status.text}</span>
          </div>
        </div>
        <h4 className={`font-medium text-sm mb-1 ${!isDark ? "text-gray-800" : ""}`}>{title}</h4>
        <p className={`text-xs ${isDark ? "text-white/80" : "text-gray-600"}`}>{description}</p>
      </CardContent>
    </Card>
  );
};
