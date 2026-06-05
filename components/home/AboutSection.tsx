import { CheckCircle2, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1B9C8A]/10 border border-[#1B9C8A]/20 w-fit mb-6">
              <span className="text-xs font-bold text-[#1B9C8A] uppercase tracking-widest">
                About Avenmind Healthcare
              </span>
            </div>

            <h2 className="text-4xl lg:text-[2.75rem] font-sans font-bold text-primary mb-6 leading-[1.15] tracking-tight flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="relative inline-block px-4 py-1">
                <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
                <span className="relative text-white">About Us</span>
              </span>
            </h2>
            
            <p className="text-gray-500 text-[17px] leading-relaxed mb-8 font-light">
              We believe in the power of collaboration and advanced medical science. By partnering closely with our patients, we gain a deep understanding of their unique needs, allowing us to deliver customized healthcare solutions that truly make a difference.
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1B9C8A] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-primary font-medium text-[16px]">Expert team of medical professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1B9C8A] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-primary font-medium text-[16px]">State-of-the-art facilities and modern treatments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1B9C8A] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-primary font-medium text-[16px]">Patient-focused vision for better health outcomes</span>
              </li>
            </ul>

            <div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-primary hover:bg-[#0c233f] text-white px-8 py-4 rounded-md font-medium transition-colors shadow-sm text-[15px]">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Right Side: Images */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Main Image */}
            <div className="w-[85%] h-[500px] rounded-2xl overflow-hidden shadow-2xl ml-auto relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1200&auto=format&fit=crop" 
                alt="Medical Professionals" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-12 left-0 w-[55%] h-[300px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white z-20">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" 
                alt="Doctor consultation" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute top-12 left-4 bg-white p-5 lg:p-6 rounded-xl shadow-xl z-30 flex items-center gap-4 border border-gray-100">
              <div className="w-12 h-12 bg-[#1B9C8A]/10 rounded-full flex items-center justify-center text-[#1B9C8A]">
                <Users size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+ Years</p>
                <p className="text-sm text-gray-500 font-medium">Of Excellence</p>
              </div>
            </div>

            {/* Background Accent Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F0F9F8] rounded-full z-0 pointer-events-none"></div>

          </div>

        </div>

      </div>
    </section>
  );
}
