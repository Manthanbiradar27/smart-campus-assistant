import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { ServiceCard } from "./ServiceCard";
import { QuickActions } from "./QuickActions";
import { TypingIndicator } from "./TypingIndicator";
import { CampusMessage } from "@/types/campus";
import { campusServices, campusInfo } from "@/data/campusData";
import { Send } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

export const CampusAssistant: React.FC = () => {
  const [messages, setMessages] = useState<CampusMessage[]>([
    {
      id: "1",
      text: "Hello! I'm your Smart Campus Assistant 🎓\n\nI can help you with schedules, facilities, dining, library services, and administrative procedures. What would you like to know about campus today?",
      sender: "assistant",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Schedule queries
    if (message.includes("library") && message.includes("hours")) {
      return `📚 Library Hours:\n${campusInfo.schedules.library}`;
    }
    if (message.includes("dining") && (message.includes("hours") || message.includes("close"))) {
      return `🍽️ Dining Hours:\n${campusInfo.schedules.dining}`;
    }
    if (message.includes("gym") && message.includes("hours")) {
      return `💪 Gym Hours:\n${campusInfo.schedules.gym}`;
    }
    if (message.includes("shuttle")) {
      return `🚌 Shuttle Schedule:\n${campusInfo.schedules.shuttle}`;
    }
    
    // Facility queries
    if (message.includes("computer lab") || message.includes("lab")) {
      return `💻 Computer Labs:\n${campusInfo.facilities.labs}`;
    }
    if (message.includes("parking")) {
      return `🅿️ Parking Information:\n${campusInfo.facilities.parking}`;
    }
    if (message.includes("gym") || message.includes("fitness")) {
      return `🏃‍♂️ Fitness Center:\n${campusInfo.facilities.gym}`;
    }
    
    // Dining queries
    if (message.includes("menu") || message.includes("food")) {
      return `🍽️ Dining Options:\n\n**Main Dining Hall:**\n${campusInfo.dining.mainHall}\n\n**Campus Café:**\n${campusInfo.dining.cafe}\n\n**Food Trucks:**\n${campusInfo.dining.foodTrucks}`;
    }
    
    // Administrative queries
    if (message.includes("register") || message.includes("registration")) {
      return `📝 Registration Information:\n${campusInfo.administrative.registrar}`;
    }
    if (message.includes("financial aid") || message.includes("scholarships")) {
      return `💰 Financial Aid:\n${campusInfo.administrative.financial}`;
    }
    if (message.includes("counseling") || message.includes("mental health")) {
      return `🧠 Counseling Services:\n${campusInfo.administrative.counseling}`;
    }
    if (message.includes("career") || message.includes("job")) {
      return `🎯 Career Services:\n${campusInfo.administrative.career}`;
    }
    
    // Emergency
    if (message.includes("emergency") || message.includes("safety")) {
      return `🚨 Emergency Information:\n**Campus Emergency:** Call 911 or campus security at (555) 123-4567\n**Safety Escort:** Available 24/7 - call (555) 123-SAFE\n**Anonymous Reporting:** Visit campus.edu/report`;
    }
    
    // Default responses
    const defaultResponses = [
      "I can help you with information about schedules, facilities, dining, library services, and administrative procedures. Could you be more specific about what you're looking for?",
      "That's a great question! Try selecting one of the service categories above, or ask me about specific campus services like library hours, dining options, or how to register for classes.",
      "I'm here to help with all things campus-related! Feel free to ask about building locations, office hours, meal plans, or any other campus services you need information about."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    const userMessage: CampusMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(text);
      const assistantMessage: CampusMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "assistant", 
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedCategory(serviceId);
    const service = campusServices.find(s => s.id === serviceId);
    if (service) {
      handleSendMessage(`Tell me about ${service.name.toLowerCase()}`);
    }
  };

  const handleQuickAction = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputText);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-primary/80"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-primary-foreground mb-2">
              Smart Campus Assistant
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your AI-powered guide to campus life 🎓
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Service Categories */}
        <Card className="mb-6 p-6 bg-card/80 backdrop-blur-sm border-0 shadow-elegant">
          <h2 className="text-xl font-semibold mb-4 text-center">What can I help you with?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {campusServices.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                onClick={handleServiceClick}
              />
            ))}
          </div>
        </Card>

        {/* Chat Interface */}
        <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-elegant">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {selectedCategory && (
            <div className="px-4 py-2 border-t border-border">
              <QuickActions 
                category={selectedCategory}
                onQuickAction={handleQuickAction}
              />
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about campus schedules, facilities, dining, and more..."
                className="flex-1 bg-background/50"
                disabled={isTyping}
              />
              <Button 
                onClick={() => handleSendMessage(inputText)}
                disabled={!inputText.trim() || isTyping}
                variant="hero"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};