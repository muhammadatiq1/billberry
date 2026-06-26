import Link from "next/link";
import { Star, Calendar } from "lucide-react";

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-surface p-8 rounded-xl border border-border w-full max-w-[280px]">
      <div className="text-4xl lg:text-5xl font-bold text-accent-teal mb-3">{value}</div>
      <div className="text-text-muted font-medium text-center text-[16px]">{label}</div>
    </div>
  );
}

export default function CtaSection() {
  return (
    <section className="py-24 bg-bg border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1 text-accent-teal">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
          <span className="text-sm font-semibold text-text">5/5 (2,739)</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-text leading-[1.1] tracking-tight mb-5 text-center">
          Ready to prioritize your Revenue Cycle?
        </h2>
        
        <p className="text-text-muted text-[17px] max-w-lg text-center mb-8">
          Partner with Billberry to streamline your medical billing, lower your denial rates, and recover lost revenue faster than ever.
        </p>

        <Link 
          href="/contact" 
          className="bg-accent-teal text-white hover:bg-[#15806E] px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg flex items-center justify-center gap-2 group mb-16 lg:mb-24"
        >
          <Calendar size={18} />
          Book Discovery Call
        </Link>

        <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8 w-full max-w-5xl mx-auto pb-10">
          <StatCard value="98.9%" label="First-Pass Clean Claim Rate" />
          <StatCard value="30%" label="Average Revenue Increase" />
          <StatCard value="15 Days" label="Average Days in A/R" />
        </div>

      </div>
    </section>
  );
}
