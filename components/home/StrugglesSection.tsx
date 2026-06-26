import React from "react";
import { 
  AlertCircle, 
  TrendingDown, 
  Clock, 
  XCircle, 
  Banknote, 
  ClipboardList, 
  Scale, 
  Activity, 
  Users, 
  ShieldAlert, 
  Timer, 
  Search, 
  Coins 
} from "lucide-react";

const struggles = [
  { text: "High claim denials", icon: TrendingDown },
  { text: "Delayed payments", icon: Clock },
  { text: "Coding errors", icon: XCircle },
  { text: "Unpaid claims", icon: Banknote },
  { text: "Credentialing delays", icon: ClipboardList },
  { text: "Complex regulations", icon: Scale },
  { text: "Low first-pass rates", icon: Activity },
  { text: "Staff turnover", icon: Users },
  { text: "Compliance risks", icon: ShieldAlert },
  { text: "Wasted administrative time", icon: Timer },
  { text: "Audit anxiety", icon: Search },
  { text: "Underpayments", icon: Coins }
];

export default function StrugglesSection() {
  return (
    <section className="py-24 bg-bg border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 bg-surface px-4 py-1.5 rounded-md shadow-sm border border-border mb-6">
          <AlertCircle size={16} className="text-[#E04F5F]" />
          <span className="text-sm font-semibold text-text">Common Industry Struggles</span>
        </div>

        <h2 className="text-4xl font-bold text-text leading-tight tracking-tight mb-6 text-center">
          What are you struggling with?
        </h2>
        
        <p className="text-text-muted text-[17px] max-w-2xl text-center mb-16">
          High claim denials, complicated payer rules, and delayed reimbursements often leave medical practices struggling with inconsistent cash flow and administrative burnout.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {struggles.map((struggle, idx) => {
            const Icon = struggle.icon;
            return (
              <div key={idx} className="bg-surface border border-border rounded-lg px-6 py-4 flex items-center gap-4 shadow-sm hover:border-accent-teal/50 transition-colors">
                <div className="text-[#E04F5F]/80">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[15px] font-semibold text-text">{struggle.text}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
