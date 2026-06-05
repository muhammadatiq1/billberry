import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
          <h2 className="text-4xl lg:text-[45px] font-sans font-bold text-primary tracking-tight flex items-center flex-wrap gap-x-3 gap-y-2">
            Our latest
            <span className="relative inline-block px-4 py-1">
              <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
              <span className="relative text-white">Blogs</span>
            </span>
          </h2>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center bg-[#16395E] hover:bg-[#112A46] text-white px-8 py-3 rounded font-medium transition-colors shadow-sm"
          >
            View all blogs
          </Link>
        </div>

        {/* Featured Blog - 50/50 Split */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-24 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-8">
            <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[11px] font-bold tracking-widest px-3 py-1 rounded mb-6">
              Clinical Insights
            </span>
            <h3 className="text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.15] mb-5 tracking-tight">
              The Future of Personalized Psychiatric Care in 2026
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-xl">
              Discover how pharmacogenomic testing and tailored treatment plans are revolutionizing how we treat complex mental health conditions, minimizing trial and error for patients.
            </p>
            <Link 
              href="/blog/future-care" 
              className="inline-flex items-center gap-1 font-bold text-gray-900 hover:text-accent-teal transition-colors text-[14px] group"
            >
              Read blog <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Subtle offset background box to match the mockup's architectural depth */}
            <div className="absolute -top-6 -right-6 bottom-6 left-6 bg-[#F8FAFC] z-0 hidden sm:block"></div>
            
            <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" 
                 alt="Featured blog" 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
          </div>
        </div>

        {/* 3-Column Standard Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Blog 1 */}
          <div className="flex flex-col group">
            <div className="w-full aspect-[16/10] bg-gray-100 mb-6 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" 
                alt="Therapy session" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-4">
                Mental Health
              </span>
              <h4 className="text-[20px] font-bold text-gray-900 leading-snug mb-3">
                Managing Anxiety in High-Stress Environments
              </h4>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                Actionable strategies and emotional wellness support specifically tailored for nurses, physicians, and first responders dealing with burnout.
              </p>
              <Link 
                href="/blog/anxiety-management" 
                className="inline-flex items-center gap-1 font-bold text-gray-900 hover:text-accent-teal transition-colors text-[13px] mt-auto group-hover:text-accent-teal"
              >
                Read blog <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="flex flex-col group">
            <div className="w-full aspect-[16/10] bg-gray-100 mb-6 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" 
                alt="Medication" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-4">
                Medication
              </span>
              <h4 className="text-[20px] font-bold text-gray-900 leading-snug mb-3">
                The Role of Medication Optimization
              </h4>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                Why continuous monitoring and thoughtful prescribing are crucial for treating complex depressive and bipolar disorders effectively.
              </p>
              <Link 
                href="/blog/medication-optimization" 
                className="inline-flex items-center gap-1 font-bold text-gray-900 hover:text-accent-teal transition-colors text-[13px] mt-auto group-hover:text-accent-teal"
              >
                Read blog <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="flex flex-col group">
            <div className="w-full aspect-[16/10] bg-gray-100 mb-6 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" 
                alt="Older adults" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="inline-block border border-accent-teal text-accent-teal uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-4">
                Older Adults
              </span>
              <h4 className="text-[20px] font-bold text-gray-900 leading-snug mb-3">
                Navigating Memory Concerns & Transitions
              </h4>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                Specialized psychiatric care approaches for addressing grief, retirement, and cognitive changes in older adulthood.
              </p>
              <Link 
                href="/blog/older-adults" 
                className="inline-flex items-center gap-1 font-bold text-gray-900 hover:text-accent-teal transition-colors text-[13px] mt-auto group-hover:text-accent-teal"
              >
                Read blog <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
