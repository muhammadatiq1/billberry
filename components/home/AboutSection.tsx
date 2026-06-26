import { CheckCircle2, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">

            <h2 className="text-4xl lg:text-[2.75rem] font-sans font-bold text-text mb-6 leading-[1.15] tracking-tight flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="relative inline-block px-4 py-1">
                <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
                <span className="relative text-white">About Us</span>
              </span>
            </h2>
            
            <p className="text-text-muted text-[17px] leading-relaxed mb-8 font-light">
              We believe in the power of data-driven insights and streamlined medical billing processes. By partnering closely with our healthcare providers, we gain a deep understanding of their unique financial workflows, allowing us to deliver customized RCM solutions that maximize revenue and reduce administrative burdens.
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent-teal shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-text font-medium text-[16px]">Expert team of certified AAPC/AHIMA medical coders</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent-teal shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-text font-medium text-[16px]">State-of-the-art secure, HIPAA-compliant billing software</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent-teal shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-text font-medium text-[16px]">Provider-focused vision for faster revenue recovery and lower denials</span>
              </li>
            </ul>
            <div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-primary hover:bg-[#0c233f] border border-transparent text-white px-8 py-4 rounded-md font-medium transition-colors shadow-sm text-[15px]">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Right Side: Images */}
          <div className="w-full lg:w-1/2 relative">
            
            <div className="w-[85%] h-[400px] lg:h-[500px] rounded-2xl overflow-hidden ml-auto relative z-10 flex items-center justify-center bg-bg border border-border shadow-sm p-12">
              <img 
                src="/Images/logo/1.svg" 
                alt="Billberry Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
