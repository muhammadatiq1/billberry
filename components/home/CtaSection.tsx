import Link from "next/link";
import { Star, Calendar, BadgeCheck } from "lucide-react";

function VideoCard({ name, image, isCenter = false, verified = false }: any) {
  return (
    <div className={`relative flex flex-col items-center w-full max-w-[260px] md:max-w-[280px] lg:max-w-[320px] shrink-0 ${isCenter ? 'z-20 lg:scale-110 mt-0' : 'z-10 mt-10 opacity-90 hidden md:flex'}`}>
      
      <div 
        className="relative w-full h-[320px] lg:h-[380px] rounded-[1.5rem] overflow-hidden shadow-2xl bg-gray-100"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' 
        }}
      >
        <img src={image} className="w-full h-full object-cover" alt={name} />
        
        {/* Top Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-medium border border-white/10 shadow-sm">
          <img src={image} className="w-5 h-5 rounded-full object-cover" alt={name} />
          <span>{name}</span>
          {verified && <BadgeCheck size={14} className="text-white fill-blue-500" />}
        </div>
      </div>
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
            <span className="relative text-white">Mental Health?</span>
          </span>
        </h2>
        
        <p className="text-gray-500 text-[16px] max-w-lg text-center mb-8">
          Sign up with Avenmind and connect instantly with doctors, access your reports, and receive ongoing wellness support.
        </p>

        {/* CTA Button */}
        <Link 
          href="/book" 
          className="inline-flex items-center gap-2 bg-accent-teal hover:bg-[#15806E] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_8px_20px_rgba(27,156,138,0.3)] hover:-translate-y-0.5 mb-16 lg:mb-24"
        >
          <Calendar size={18} />
          Book a call
        </Link>

        {/* Video Cards Grid */}
        <div className="flex justify-center items-start gap-4 lg:gap-8 w-full max-w-4xl mx-auto pb-10">
          
          <VideoCard 
            name="Robert Hughes"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
          />
          
          <VideoCard 
            name="Dr. Sarah Jenkins"
            verified={true}
            isCenter={true}
            image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
          />
          
          <VideoCard 
            name="Leila Harmozi"
            verified={true}
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
          />

        </div>

      </div>
    </section>
  );
}
