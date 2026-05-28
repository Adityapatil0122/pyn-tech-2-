
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Shield } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  text: string;
  isTyping?: boolean;
}

export const ChatInterface = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([{
    type: "bot",
    text: "Hello! I'm your AI assistant. How can I help you today?"
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const userMessage = chatMessage.trim();
    setChatMessage("");

    // Add user message to chat
    const newHistory: ChatMessage[] = [...chatHistory, {
      type: "user" as const,
      text: userMessage
    }];
    setChatHistory(newHistory);

    // Simulate bot typing
    setIsTyping(true);

    // Demo responses based on user input
    let botResponse = "Thanks for your message! This is a demo of how our AI chatbot responds to user queries in real-time.";
    if (userMessage.toLowerCase().includes("price") || userMessage.toLowerCase().includes("cost")) {
      botResponse = "Our pricing starts at $99/month for basic chatbot integration. Would you like me to send you our detailed pricing information?";
    } else if (userMessage.toLowerCase().includes("integration") || userMessage.toLowerCase().includes("setup")) {
      botResponse = "Integration is seamless with our API. Most clients are up and running within 48 hours. Our team can help you with the entire setup process!";
    } else if (userMessage.toLowerCase().includes("support") || userMessage.toLowerCase().includes("help")) {
      botResponse = "We offer 24/7 technical support with all our plans. Our average response time is under 15 minutes!";
    }

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory([...newHistory, {
        type: "bot" as const,
        text: botResponse
      }]);
    }, 1500);
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    const chatMessages = chatMessagesRef.current;
    if (!chatMessages) return;

    requestAnimationFrame(() => {
      chatMessages.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: "smooth"
      });
    });
  }, [chatHistory, isTyping]);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-pyn-blue/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-pyn-blue flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900">Pyn AI Assistant</h3>
          </div>
          <div className="flex items-center text-xs gap-1.5 text-emerald-600">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Online Now
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-xl border border-slate-100">
          <div ref={chatMessagesRef} className="h-[320px] overflow-y-auto px-4 py-5 space-y-4" style={{
            scrollBehavior: 'smooth'
          }}>
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[80%] p-3 rounded-xl shadow-sm ${msg.type === "bot" ? "bg-white border border-slate-100 text-slate-800" : "bg-pyn-blue text-white"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-xl shadow-sm bg-white border border-slate-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{
                      animationDelay: '0.2s'
                    }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{
                      animationDelay: '0.4s'
                    }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleMessageSubmit} className="p-3 border-t border-slate-100">
            <div className="relative">
              <input 
                type="text" 
                value={chatMessage} 
                onChange={e => setChatMessage(e.target.value)} 
                placeholder="Ask anything..." 
                className="w-full py-3 px-4 pr-12 rounded-full border border-slate-200 focus:outline-none focus:border-pyn-blue focus:ring-1 focus:ring-pyn-blue" 
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-pyn-blue rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-5 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(item => (
              <div 
                key={item} 
                className="w-8 h-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
        <div className="bg-white p-2 rounded-lg shadow-lg border border-slate-100 text-sm flex items-center gap-2 font-medium text-slate-700">
          <Shield className="h-4 w-4 text-pyn-blue" />
          Secure & Private
        </div>
      </div>
    </div>
  );
};
