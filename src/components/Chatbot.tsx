"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessage } from "../lib/gemini";
import { suggestedQuestions } from "../data/chatbotKnowledge";
import Image from "next/image";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Hi there! 👋 I'm the RV Tech Labs assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const handleSendMessage = async (e: React.FormEvent | null, quickMsg?: string) => {
    if (e) e.preventDefault();
    const userMsg = (quickMsg || input).trim();
    if (!userMsg || isLoading) return;

    setInput("");
    setShowSuggestions(false);

    const newUserMessage: Message = { id: Date.now().toString(), role: "user", content: userMsg };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const result = await sendMessage(userMsg, messages);

      if (typeof result === "string") {
        // Handle sentinel error codes returned by gemini.ts
        const botContent =
          result === "DEMO_MODE_ACTIVE"
            ? "The AI assistant is currently in demo mode. The API key is not configured — please contact us via our Contact page!"
            : result === "QUOTA_EXCEEDED"
            ? "I'm sorry, I'm having trouble connecting right now. Please try again later or visit our Contact page."
            : result === "API_ERROR"
            ? "I'm sorry, I'm having trouble connecting right now. Please try again later or visit our Contact page."
            : result;

        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "bot", content: botContent },
        ]);
        setIsLoading(false);
      } else {
        // Handle Response stream
        const botMessageId = Date.now().toString();
        setMessages((prev) => [
          ...prev,
          { id: botMessageId, role: "bot", content: "" },
        ]);
        setIsLoading(false); // Remove loading indicator once streaming starts

        const reader = result.body?.getReader();
        const decoder = new TextDecoder();
        let fullContent = "";

        if (reader) {
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const chunk = decoder.decode(value);
              fullContent += chunk;

              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId ? { ...msg, content: fullContent } : msg
                )
              );
            }
          } catch (error) {
            console.error("Stream reading error:", error);
          } finally {
            reader.releaseLock();
          }
        }
      }
    } catch {
      // Fallback — gemini.ts should never throw, but just in case
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          content: "I'm sorry, I'm having trouble connecting right now. Please try again later or visit our Contact page."
        },
      ]);
      setIsLoading(false);
    }
  };

  const BotAvatar = () => (
    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-100">
      <Image src="/logo.png" alt="RV Tech Labs" width={32} height={32} className="object-cover w-full h-full" />
    </div>
  );

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-hover text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
            aria-label="Open Chat"
          >
            <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-100 overflow-hidden font-sans"
            style={{ height: isMinimized ? "auto" : "560px", maxHeight: "85vh" }}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
                  <Image src="/logo.png" alt="RV Tech Labs" width={36} height={36} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">RV Tech Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-xs text-white/80">Online & ready to help</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* Minimize button */}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
                  aria-label={isMinimized ? "Expand Chat" : "Minimize Chat"}
                >
                  <span className="block w-3 h-0.5 bg-current rounded" />
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close Chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Collapsible Body */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-5 pb-2 space-y-4 bg-slate-50 scroll-smooth">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-end gap-2.5 max-w-[88%] ${message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                      >
                        {message.role === "bot" ? (
                          <BotAvatar />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`py-2.5 px-4 rounded-2xl text-[13px] leading-relaxed shadow-sm whitespace-pre-wrap ${message.role === "user"
                              ? "bg-secondary text-white rounded-br-sm"
                              : "bg-white border border-slate-100 text-slate-700 rounded-bl-sm"
                            }`}
                        >
                          {message.content}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-end gap-2.5 max-w-[88%] mr-auto"
                      >
                        <BotAvatar />
                         <div className="py-3 px-4 rounded-2xl bg-white border border-slate-100 rounded-bl-sm flex items-center gap-1.5">
                          <motion.div className="w-2 h-2 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0 }} />
                          <motion.div className="w-2 h-2 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0.15 }} />
                          <motion.div className="w-2 h-2 bg-primary/60 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0.3 }} />
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested Questions */}
                  <AnimatePresence>
                    {showSuggestions && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                         className="px-4 pt-3 pb-1 bg-white border-t border-slate-100 overflow-x-auto shrink-0"
                      >
                        <p className="text-[10px] text-slate-400 mb-2 font-medium uppercase tracking-wide">Quick Questions</p>
                        <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
                          {suggestedQuestions.map((q, i) => (
                            <button
                              key={i}
                              onClick={() => handleSendMessage(null, q)}
                               className="text-[11px] text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-white rounded-full px-3 py-1.5 whitespace-nowrap transition-all shrink-0"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Input Area */}
                   <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                    <form onSubmit={handleSendMessage} className="relative flex items-center">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything about RV Tech Labs..."
                         className="w-full bg-slate-50 border border-slate-200 text-sm rounded-full pl-5 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 placeholder:text-slate-400"
                        disabled={isLoading}
                      />
                      <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 p-2 bg-primary text-white rounded-full hover:bg-primary-hover disabled:opacity-50 disabled:hover:bg-primary transition-all hover:scale-105 active:scale-95"
                        aria-label="Send message"
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </button>
                    </form>
                    <div className="text-center mt-2">
                      <span className="text-[10px] text-slate-400">Powered by RV Tech AI · Gemini</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
