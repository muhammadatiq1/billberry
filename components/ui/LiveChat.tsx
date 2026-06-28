"use client";

import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-accent-teal hover:bg-[#15806E] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open Live Chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-[350px] bg-surface dark:bg-slate-900 border border-border shadow-2xl rounded-2xl overflow-hidden z-50 transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-primary p-4 flex items-center justify-between text-white">
          <div className="flex flex-col">
            <span className="font-bold text-sm">berrybilling Support</span>
            <span className="text-xs text-white/80 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Typically replies in minutes
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="h-[300px] p-4 flex flex-col gap-3 overflow-y-auto bg-bg dark:bg-slate-800">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-accent-teal">BB</span>
            </div>
            <div className="bg-surface dark:bg-slate-700 border border-border text-text p-3 rounded-2xl rounded-tl-none text-[14px] shadow-sm max-w-[80%]">
              Hello! I'm your billing advisor. How can we help you boost your practice revenue today?
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-3 bg-surface dark:bg-slate-900 border-t border-border flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-bg dark:bg-slate-800 border border-border rounded-full px-4 py-2 text-[14px] focus:outline-none focus:border-accent-teal"
          />
          <button className="w-9 h-9 rounded-full bg-accent-teal hover:bg-[#15806E] flex items-center justify-center text-white shrink-0">
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
