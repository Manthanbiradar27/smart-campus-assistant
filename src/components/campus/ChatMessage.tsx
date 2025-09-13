import React from "react";
import { CampusMessage } from "@/types/campus";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: CampusMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={cn(
      "flex mb-4 animate-in slide-in-from-bottom-2",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-chat transition-smooth",
        isUser 
          ? "bg-gradient-primary text-primary-foreground ml-8"
          : "bg-card text-card-foreground mr-8 border border-border"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        <span className={cn(
          "text-xs opacity-70 mt-1 block",
          isUser ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};