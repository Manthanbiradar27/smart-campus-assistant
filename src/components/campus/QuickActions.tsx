import React from "react";
import { Button } from "@/components/ui/button";
import { quickResponses } from "@/data/campusData";

interface QuickActionsProps {
  category: string;
  onQuickAction: (question: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ category, onQuickAction }) => {
  const actions = quickResponses[category as keyof typeof quickResponses];
  
  if (!actions) return null;

  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium text-muted-foreground mb-2">Quick questions:</h4>
      <div className="flex flex-wrap gap-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="campus"
            size="sm"
            onClick={() => onQuickAction(action)}
            className="text-xs"
          >
            {action}
          </Button>
        ))}
      </div>
    </div>
  );
};