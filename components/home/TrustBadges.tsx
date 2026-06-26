import { ShieldCheck, Lock, Award, FileCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-12 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center gap-3 text-center transition-all hover:-translate-y-1">
            <ShieldCheck className="w-10 h-10 text-accent-teal" strokeWidth={1.5} />
            <span className="text-xs font-bold text-text uppercase tracking-wider">HIPAA Compliant</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center transition-all hover:-translate-y-1">
            <Lock className="w-10 h-10 text-accent-teal" strokeWidth={1.5} />
            <span className="text-xs font-bold text-text uppercase tracking-wider">Enterprise Security</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center transition-all hover:-translate-y-1">
            <Award className="w-10 h-10 text-accent-teal" strokeWidth={1.5} />
            <span className="text-xs font-bold text-text uppercase tracking-wider">AAPC Certified</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center transition-all hover:-translate-y-1">
            <FileCheck className="w-10 h-10 text-accent-teal" strokeWidth={1.5} />
            <span className="text-xs font-bold text-text uppercase tracking-wider">AHIMA Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
