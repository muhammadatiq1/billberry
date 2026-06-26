import Link from "next/link";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24 bg-primary">
      
      {/* Background Slideshow */}
      <style>{`
        @keyframes hero-zoom-fade {
          0% { opacity: 1; transform: scale(1); }
          25% { opacity: 1; transform: scale(1.05); }
          33% { opacity: 0; transform: scale(1.06); }
          92% { opacity: 0; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .bg-slide-1 { animation: hero-zoom-fade 24s infinite; }
        .bg-slide-2 { animation: hero-zoom-fade 24s infinite 8s; opacity: 0; }
        .bg-slide-3 { animation: hero-zoom-fade 24s infinite 16s; opacity: 0; }
      `}</style>

      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-slide-1" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-slide-2" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-slide-3" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1920&auto=format&fit=crop')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary/85 z-10"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-start text-left">
        
        <div className="w-full lg:w-[65%]">
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-bold text-white leading-[1.05] tracking-tight mb-8">
            Advanced Medical Billing Care for <span className="text-accent-teal">Your Facility</span>
          </h1>
          
          <p className="text-gray-300 text-[18px] lg:text-[20px] max-w-2xl leading-relaxed mb-10">
            Billberry delivers seamless solutions to safeguard revenue, maximize reimbursements, minimize errors, and ensure faster payments.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="bg-accent-teal hover:bg-[#15806E] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-sm text-lg">
              Schedule Consultation
            </Link>
            <Link href="/services" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all text-lg">
              Explore Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
