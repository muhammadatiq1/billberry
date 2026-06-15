import Link from "next/link";
import { Star, Calendar, BadgeCheck } from "lucide-react";

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 w-full max-w-[280px] transition-transform hover:-translate-y-1">
      <div className="text-4xl lg:text-5xl font-black text-accent-teal mb-3">{value}</div>
      <div className="text-gray-600 font-medium text-center text-[16px]">{label}</div>
    </div>
  );
}

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] -translate-y-1/2 left-0 w-1/3 h-2/3" 
             style={{ 
               backgroundImage: 'radial-gradient(#CBD5E1 2px, transparent 2px)', 
               backgroundSize: '32px 32px', 
               maskImage: 'linear-gradient(to right, black, transparent)', 
               WebkitMaskImage: 'linear-gradient(to right, black, transparent)' 
             }}>
        </div>
        <div className="absolute top-[40%] -translate-y-1/2 right-0 w-1/3 h-2/3" 
             style={{ 
               backgroundImage: 'radial-gradient(#CBD5E1 2px, transparent 2px)', 
               backgroundSize: '32px 32px', 
               maskImage: 'linear-gradient(to left, black, transparent)', 
               WebkitMaskImage: 'linear-gradient(to left, black, transparent)' 
             }}>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Review Stars */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1 text-accent-teal">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
          <span className="text-sm font-semibold text-gray-700">5/5 (2,739)</span>
        </div>

        {/* Headings */}
        <h2 className="text-4xl lg:text-5xl font-sans font-bold text-primary leading-[1.1] tracking-tight mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          Ready to prioritize your
          <span className="relative inline-block px-5 py-1.5">
            <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
            <span className="relative text-white">Revenue Cycle?</span>
          </span>
        </h2>
        
        <p className="text-gray-500 text-[16px] max-w-lg text-center mb-8">
          Partner with Billberry to streamline your medical billing, lower your denial rates, and recover lost revenue faster than ever.
        </p>

        {/* CTA Button */}
        <Link 
          href="/book" 
          className="inline-flex items-center gap-2 bg-accent-teal hover:bg-[#15806E] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_8px_20px_rgba(27,156,138,0.3)] hover:-translate-y-0.5 mb-16 lg:mb-24"
        >
          <Calendar size={18} />
          Book Discovery Call
        </Link>

        {/* RCM Stats Grid */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8 w-full max-w-5xl mx-auto pb-10">
          <StatCard value="98.9%" label="First-Pass Clean Claim Rate" />
          <StatCard value="30%" label="Average Revenue Increase" />
          <StatCard value="15 Days" label="Average Days in A/R" />
        </div>

      </div>
    </section>
  );
}
