import React from "react";
import { AlertCircle } from "lucide-react";

const row1 = [
  { text: "Long waiting times", icon: "⏳" },
  { text: "High consultation costs", icon: "💸" },
  { text: "Travel time wasted", icon: "🚗" },
  { text: "Confusing paperwork", icon: "📑" },
  { text: "Risk of infections", icon: "🦠" },
  { text: "Unclear diagnosis", icon: "🤷" },
];

const row2 = [
  { text: "Language barriers", icon: "🗣️" },
  { text: "Inconsistent care quality", icon: "📉" },
  { text: "Unavailable doctors", icon: "👨‍⚕️" },
  { text: "Lack of empathy", icon: "❤️‍🩹" },
  { text: "Slow responses", icon: "🐢" },
  { text: "Hidden charges", icon: "💳" },
];

const row3 = [
  { text: "Rushed consultations", icon: "⏱️" },
  { text: "Delayed test reports", icon: "📊" },
  { text: "Lost medical records", icon: "📂" },
  { text: "Limited appointments", icon: "🗓️" },
  { text: "Outdated facilities", icon: "🏢" },
  { text: "Hard to reach staff", icon: "📞" },
];

const row4 = [
  { text: "Poor patient experience", icon: "😞" },
  { text: "Lack of privacy", icon: "🔒" },
  { text: "Limited support staff", icon: "🤝" },
  { text: "No follow-ups", icon: "❌" },
  { text: "Confusing prescriptions", icon: "💊" },
  { text: "Uncomfortable waiting rooms", icon: "🪑" },
];

function Pill({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[15px] font-medium text-gray-700 whitespace-nowrap mx-2">
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = "40s" }: { items: any[]; reverse?: boolean; speed?: string }) {
  return (
    <div className="flex w-max" style={{ animation: `marquee ${speed} linear infinite ${reverse ? 'reverse' : 'normal'}` }}>
      {/* First set */}
      <div className="flex items-center">
        {items.map((item, idx) => (
          <Pill key={idx} text={item.text} icon={item.icon} />
        ))}
      </div>
      {/* Duplicated set for infinite scroll */}
      <div className="flex items-center">
        {items.map((item, idx) => (
          <Pill key={`dup-${idx}`} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function StrugglesSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mb-16 relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6">
          <AlertCircle size={16} className="text-[#E04F5F]" />
          <span className="text-sm font-semibold text-gray-700">Common struggles</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-[3.25rem] font-sans font-bold text-primary leading-[1.1] tracking-tight mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          What are you
          <span className="relative inline-block px-5 py-1.5">
            <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
            <span className="relative text-white">Struggling</span>
          </span>
          with?
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-500 text-[17px] max-w-2xl text-center">
          Long waiting times, limited access to specialists, and unclear reports often leave patients frustrated and disconnected from their own health journey.
        </p>

      </div>

      {/* Marquee Area */}
      <div className="relative w-full max-w-[1600px] mx-auto">
        {/* Fade Out Masks (Left and Right) */}
        <div className="absolute inset-y-0 left-0 w-32 lg:w-64 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 lg:w-64 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex flex-col gap-5 py-4 w-full overflow-hidden">
          <MarqueeRow items={row1} speed="45s" />
          <MarqueeRow items={row2} speed="55s" reverse={true} />
          <MarqueeRow items={row3} speed="40s" />
          <MarqueeRow items={row4} speed="50s" reverse={true} />
        </div>
      </div>
      
    </section>
  );
}
