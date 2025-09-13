import React from "react";

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-card border border-border rounded-2xl px-4 py-3 mr-8 shadow-chat">
        <div className="flex items-center space-x-1">
          <div className="text-sm text-muted-foreground">Assistant is typing</div>
          <div className="flex space-x-1 ml-2">
            <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};