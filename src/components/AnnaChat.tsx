import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import annaAvatar from "@/assets/anna-avatar.gif";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface UserInfo {
  name: string;
  email: string;
}

export const AnnaChat = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "" });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleStartChat = () => {
    if (!userInfo.name.trim() || !userInfo.email.trim()) return;
    
    const greeting = `Hi ${userInfo.name}! I'm Anna. I help law firms streamline eDiscovery with the right mix of Venio Review, ECA, Cloud, and Legal Hold. Tell me what challenge you're facing, and I'll guide you to the best solution.`;
    setMessages([{ role: "assistant", content: greeting }]);
    setHasStarted(true);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("anna-chat", {
        body: { 
          messages: [...messages, userMessage],
          userInfo 
        },
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

  if (!hasStarted) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-8 animate-fade-in">
          {/* Centered Avatar */}
          <Avatar className="h-24 w-24 border-4 border-white/20 shadow-2xl">
            <AvatarImage src={annaAvatar} alt="Anna" />
            <AvatarFallback className="bg-primary/10 text-2xl">A</AvatarFallback>
          </Avatar>

          {/* Welcome Card */}
          <Card className="w-full p-8 bg-background/80 backdrop-blur-lg border-border/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Meet Anna</h2>
            <p className="text-center text-muted-foreground mb-6">
              Your AI guide to eDiscovery solutions
            </p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Your Name</Label>
                <Input
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  placeholder="Enter your name"
                  className="mt-1.5 bg-background/50 border-border/50"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  placeholder="Enter your email"
                  className="mt-1.5 bg-background/50 border-border/50"
                />
              </div>

              <Button
                onClick={handleStartChat}
                disabled={!userInfo.name.trim() || !userInfo.email.trim()}
                className="w-full"
              >
                Start Chat with Anna
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

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
        {/* Top Fade Effect */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background/80 to-transparent z-10 pointer-events-none" />
        
        {/* Scrollable Messages */}
        <div className="space-y-6 max-h-[500px] overflow-y-auto px-4 pt-4 scroll-smooth">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } animate-fade-in`}
            >
              <Card
                className={`max-w-[80%] p-4 shadow-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/90 backdrop-blur-sm border-border/50"
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
              <Card className="max-w-[80%] p-4 bg-background/90 backdrop-blur-sm border-border/50 shadow-lg">
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
              placeholder={`Ask Anna about eDiscovery solutions, ${userInfo.name}...`}
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
