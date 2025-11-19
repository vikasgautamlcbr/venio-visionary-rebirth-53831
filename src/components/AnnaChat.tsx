import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import annaAvatar from "@/assets/anna-avatar.gif";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING = "Hi, I'm Anna. Before we dive into how Venio can help you, I'd love to know who I'm speaking with. What's your name?";

const FADE_DISTANCE = 60; // pixels from top where fade starts

export const AnnaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageOpacities, setMessageOpacities] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  const calculateOpacities = () => {
    if (!scrollContainerRef.current) return;
    
    const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
    const newOpacities = messageRefs.current.map((ref) => {
      if (!ref) return 1;
      
      const messageTop = ref.getBoundingClientRect().top;
      const distanceFromTop = messageTop - containerTop;
      
      if (distanceFromTop >= FADE_DISTANCE) return 1;
      if (distanceFromTop <= 0) return 0;
      
      return distanceFromTop / FADE_DISTANCE;
    });
    
    setMessageOpacities(newOpacities);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    calculateOpacities();
    container.addEventListener('scroll', calculateOpacities);
    
    return () => container.removeEventListener('scroll', calculateOpacities);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("anna-chat", {
        body: { messages: [...messages, userMessage] },
      });

      if (error) throw error;

      if (data?.choices?.[0]?.message?.content) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Centered Avatar */}
      <div className="flex justify-center mb-6 animate-fade-in">
        <Avatar className="h-20 w-20 border-4 border-white/20 shadow-2xl">
          <AvatarImage src={annaAvatar} alt="Anna" />
          <AvatarFallback className="bg-primary/10 text-xl">A</AvatarFallback>
        </Avatar>
      </div>

      {/* Floating Messages Container with Fade Effect */}
      <div className="relative mb-6">
        {/* Scrollable Messages with Custom Scrollbar */}
        <div 
          ref={scrollContainerRef}
          className="space-y-6 max-h-[500px] overflow-y-auto px-4 pt-4 scroll-smooth custom-scrollbar pr-2"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              ref={(el) => (messageRefs.current[index] = el)}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } animate-fade-in transition-opacity duration-150`}
              style={{ opacity: messageOpacities[index] ?? 1 }}
            >
            <Card
              className={`max-w-[80%] p-4 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background/90 backdrop-blur-sm border-border/50 shadow-sm"
              }`}
            >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </Card>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-fade-in">
              <Card className="max-w-[80%] p-4 bg-background/90 backdrop-blur-sm border-border/50 shadow-sm">
                <div className="flex gap-2 items-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Anna is typing...</span>
                </div>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Floating Input */}
      <div className="px-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <Card className="p-4 bg-background/90 backdrop-blur-lg border-border/50 shadow-2xl">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 bg-background/50 border-border/50"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              size="icon"
              className="shrink-0"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
