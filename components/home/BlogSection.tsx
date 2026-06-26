import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text tracking-tight">
            Our Latest Insights
          </h2>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center bg-primary hover:bg-[#112A46] text-white px-8 py-3 rounded-md font-medium transition-colors shadow-sm"
          >
            View all blogs
          </Link>
        </div>

        {/* Featured Blog */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[11px] font-bold tracking-widest px-3 py-1 rounded mb-6">
              Industry News
            </span>
            <h3 className="text-3xl font-bold text-text leading-tight mb-5 tracking-tight">
              Preparing Your Practice for the 2026 ICD-10 Updates
            </h3>
            <p className="text-text-muted text-[15px] leading-relaxed mb-8 max-w-xl">
              Discover the major coding changes coming next year. Our experts break down how to update your EHR, train your staff, and prevent sudden spikes in claim denials.
            </p>
            <Link 
              href="/blog/icd-10-updates" 
              className="inline-flex items-center gap-1 font-bold text-accent-teal hover:text-[#15806E] transition-colors text-[14px] group"
            >
              Read blog <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="w-full aspect-[4/3] bg-bg border border-border rounded-xl overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" 
                 alt="Featured blog" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>

        {/* 3-Column Standard Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Blog 1 */}
          <div className="flex flex-col">
            <div className="w-full aspect-[16/10] bg-bg border border-border rounded-lg mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" 
                alt="Billing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-4">
                Revenue Cycle
              </span>
              <h4 className="text-[18px] font-bold text-text leading-snug mb-3">
                5 Ways to Reduce Your A/R Days
              </h4>
              <p className="text-text-muted text-[14px] leading-relaxed mb-6">
                Actionable strategies to follow up on aging claims and drastically reduce the time it takes to get paid by commercial payers.
              </p>
              <Link 
                href="/blog/reduce-ar-days" 
                className="inline-flex items-center gap-1 font-bold text-accent-teal hover:text-[#15806E] transition-colors text-[13px] mt-auto"
              >
                Read blog <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="flex flex-col">
            <div className="w-full aspect-[16/10] bg-bg border border-border rounded-lg mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" 
                alt="Credentialing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-4">
                Credentialing
              </span>
              <h4 className="text-[18px] font-bold text-text leading-snug mb-3">
                The True Cost of Credentialing Delays
              </h4>
              <p className="text-text-muted text-[14px] leading-relaxed mb-6">
                Why continuous monitoring and proactive credentialing are crucial to keeping your new providers generating revenue on day one.
              </p>
              <Link 
                href="/blog/cost-of-delays" 
                className="inline-flex items-center gap-1 font-bold text-accent-teal hover:text-[#15806E] transition-colors text-[13px] mt-auto"
              >
                Read blog <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="flex flex-col">
            <div className="w-full aspect-[16/10] bg-bg border border-border rounded-lg mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" 
                alt="Practice Management" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-4">
                Management
              </span>
              <h4 className="text-[18px] font-bold text-text leading-snug mb-3">
                Transitioning to a New EHR System
              </h4>
              <p className="text-text-muted text-[14px] leading-relaxed mb-6">
                A checklist for practice managers to ensure data integrity and zero billing interruptions during major software migrations.
              </p>
              <Link 
                href="/blog/ehr-transition" 
                className="inline-flex items-center gap-1 font-bold text-accent-teal hover:text-[#15806E] transition-colors text-[13px] mt-auto"
              >
                Read blog <ChevronRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
