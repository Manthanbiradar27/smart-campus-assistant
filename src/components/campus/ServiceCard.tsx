import React from "react";
import { CampusService } from "@/types/campus";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: CampusService;
  onClick: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <Card 
      className="p-4 cursor-pointer hover:shadow-glow transition-bounce hover:scale-105 border-0 bg-gradient-subtle"
      onClick={() => onClick(service.id)}
    >
      <div className="text-center">
        <div className={cn(
          "w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl",
          service.color
        )}>
          {service.icon}
        </div>
        <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
    </Card>
  );
};