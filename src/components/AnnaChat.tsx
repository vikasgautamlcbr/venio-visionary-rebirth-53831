import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import annaAvatar from "@/assets/anna-avatar.gif";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING_MESSAGE = "Hi, I'm Anna. I help law firms streamline eDiscovery with the right mix of Venio Review, ECA, Cloud, and Legal Hold. Tell me what challenge you're facing, and I'll guide you to the best solution.";

export const AnnaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Floating Avatar */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur-xl opacity-60 animate-pulse"></div>
          <Avatar className="relative h-24 w-24 border-4 border-white/20 shadow-2xl ring-4 ring-accent/30 backdrop-blur-sm">
            <AvatarImage src={annaAvatar} alt="Anna" className="object-cover" />
            <AvatarFallback className="bg-gradient-to-br from-accent to-secondary text-white text-2xl">A</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Anna Title */}
      <div className="text-center mb-6 pt-12">
        <h3 className="text-2xl font-bold text-white mb-1">Anna</h3>
        <p className="text-white/70 text-sm">Your AI Legal Assistant</p>
      </div>

      <div className="flex flex-col h-[600px] glass-dark rounded-3xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 pt-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              } animate-fade-in`}
            >
              {message.role === "assistant" && (
                <Avatar className="h-10 w-10 border-2 border-accent/30 shadow-lg flex-shrink-0">
                  <AvatarImage src={annaAvatar} alt="Anna" />
                  <AvatarFallback className="bg-primary/10">A</AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={`max-w-[75%] px-5 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-accent to-secondary text-white shadow-lg shadow-accent/20"
                    : "glass backdrop-blur-md border border-white/20 text-white shadow-lg"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
              
              {message.role === "user" && (
                <Avatar className="h-10 w-10 border-2 border-accent/30 shadow-lg flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-br from-accent to-secondary text-white">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start animate-fade-in">
              <Avatar className="h-10 w-10 border-2 border-accent/30 shadow-lg flex-shrink-0">
                <AvatarImage src={annaAvatar} alt="Anna" />
                <AvatarFallback className="bg-primary/10">A</AvatarFallback>
              </Avatar>
              <div className="glass backdrop-blur-md border border-white/20 text-white shadow-lg px-5 py-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  <p className="text-sm">Anna is thinking...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-6 border-t border-white/10 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Anna about Venio solutions..."
              disabled={isLoading}
              className="flex-1 glass border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent focus-visible:border-accent/50"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              size="icon"
              className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
