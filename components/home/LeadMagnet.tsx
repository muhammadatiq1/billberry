import { Download, FileText } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-accent-teal/10 rounded-xl flex items-center justify-center mb-6 border border-accent-teal/20">
          <FileText className="w-8 h-8 text-accent-teal" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Free Practice Revenue Guide
        </h2>
        <p className="text-text-muted text-lg mb-8 max-w-2xl">
          Discover the top 5 billing mistakes costing your practice thousands of dollars every month, and learn how to fix them today.
        </p>
        
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="flex-1 bg-bg border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-teal shadow-sm"
            required
          />
          <button 
            type="submit" 
            className="bg-accent-teal hover:bg-[#15806E] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm"
          >
            Download Now <Download className="w-4 h-4" />
          </button>
        </form>
        <p className="text-text-muted text-sm mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
}
