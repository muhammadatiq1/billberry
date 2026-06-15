import Link from "next/link";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:pt-24 lg:pb-20">
      {/* Premium Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1B9C8A]/10 via-transparent to-transparent pointer-events-none opacity-70 z-0"></div>
      
      {/* Animated Background Infographics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1B9C8A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Rotating Circular Data Graphic */}
        <svg className="absolute top-[15%] left-[5%] w-96 h-96 text-accent-teal opacity-[0.03] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="4 4"/>
          <circle cx="50" cy="50" r="35" strokeDasharray="2 6"/>
          <circle cx="50" cy="50" r="25" strokeDasharray="1 8"/>
        </svg>

        {/* EKG / Line Chart Graphic sliding horizontally */}
        <div className="absolute top-[60%] left-0 w-[200%] h-32 opacity-[0.04] text-primary flex animate-marquee">
          <svg className="w-1/2 h-full" viewBox="0 0 1000 100" fill="none" stroke="currentColor" strokeWidth="1.5" preserveAspectRatio="none">
            <path d="M0 50 H200 L220 20 L250 90 L280 50 H600 L620 30 L650 70 L680 50 H1000" />
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1000 100" fill="none" stroke="currentColor" strokeWidth="1.5" preserveAspectRatio="none">
            <path d="M0 50 H200 L220 20 L250 90 L280 50 H600 L620 30 L650 70 L680 50 H1000" />
          </svg>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-sans font-bold text-primary leading-[1.05] tracking-tight mb-6">
              Advanced Medical <br className="hidden lg:block" /> 
              Billing Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B9C8A] to-[#2E86C1]">Your Facility</span> <br className="hidden lg:block" /> 
            </h1>
            <p className="text-gray-500 text-[17px] max-w-md leading-relaxed mb-10">
              Billberry delivers seamless solutions to safeguard revenue, maximize reimbursements, minimize errors, and ensure faster payments.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link href="/book" className="bg-primary hover:bg-[#0c233f] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_8px_20px_rgba(12,35,63,0.15)] hover:shadow-[0_10px_25px_rgba(12,35,63,0.2)] hover:-translate-y-0.5">
                Book Discovery Call
              </Link>
              <Link href="/services" className="bg-white hover:bg-gray-50 text-primary border border-gray-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                Explore Services
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=32" alt="Patient" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Patient" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Patient" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=4" alt="Patient" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FFB800] mb-1">
                  <Star size={14} className="fill-current" />
                  <Star size={14} className="fill-current" />
                  <Star size={14} className="fill-current" />
                  <Star size={14} className="fill-current" />
                  <Star size={14} className="fill-current" />
                </div>
                <p className="text-gray-500 text-[14px] leading-tight">
                  Join <strong className="text-primary font-bold">500+ Healthcare Providers</strong> today
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Staggered Masonry Grid */}
          <div className="w-full lg:w-[55%] h-[500px] sm:h-[550px] lg:h-[650px] flex gap-4 lg:gap-6 pr-0 lg:-mr-8 overflow-hidden hover-pause-vertical relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <style>{`
              @keyframes hero-slide-up {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              @keyframes hero-slide-down {
                0% { transform: translateY(-50%); }
                100% { transform: translateY(0); }
              }
              .hero-animate-up {
                animation: hero-slide-up 40s linear infinite;
              }
              .hero-animate-down {
                animation: hero-slide-down 40s linear infinite;
              }
            `}</style>
            
            {/* Left Column (Slides UP) */}
            <div className="w-1/2 flex flex-col gap-4 lg:gap-6 hero-animate-up">
              
              {/* Block 1 */}
              <div className="flex flex-col gap-4 lg:gap-6 w-full shrink-0">
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Doctor consulting patient" />
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm border-[4px] border-[#2E86C1]/10 bg-[#2E86C1]/5 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Smiling female doctor" />
                  <div className="absolute inset-0 bg-[#2E86C1]/20 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Therapist with patient" />
                </div>
              </div>

              {/* Block 2 (Duplicate for seamless loop) */}
              <div className="flex flex-col gap-4 lg:gap-6 w-full shrink-0">
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Doctor consulting patient" />
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm border-[4px] border-[#2E86C1]/10 bg-[#2E86C1]/5 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Smiling female doctor" />
                  <div className="absolute inset-0 bg-[#2E86C1]/20 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Therapist with patient" />
                </div>
              </div>

            </div>
            
            {/* Right Column (Slides DOWN) */}
            <div className="w-1/2 flex flex-col gap-4 lg:gap-6 hero-animate-down mt-12 lg:mt-24">
              
              {/* Block 1 */}
              <div className="flex flex-col gap-4 lg:gap-6 w-full shrink-0">
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Diverse patient smiling" />
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm border-[4px] border-[#3FA46A]/10 bg-[#3FA46A]/5 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Older patient with doctor" />
                  <div className="absolute inset-0 bg-[#1B9C8A]/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Doctor with child patient" />
                </div>
              </div>

              {/* Block 2 (Duplicate for seamless loop) */}
              <div className="flex flex-col gap-4 lg:gap-6 w-full shrink-0">
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Diverse patient smiling" />
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm border-[4px] border-[#3FA46A]/10 bg-[#3FA46A]/5 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Older patient with doctor" />
                  <div className="absolute inset-0 bg-[#1B9C8A]/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="w-full h-[260px] lg:h-[300px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Doctor with child patient" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
