import Link from "next/link";

export default function MidCtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[400px] lg:h-[450px] rounded-[2.5rem] overflow-hidden flex items-center shadow-2xl">
          
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
            alt="Medical consultation" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 w-full px-10 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <h2 className="text-4xl lg:text-[3.5rem] font-sans font-bold text-white leading-[1.1] max-w-[700px] tracking-tight flex flex-wrap items-center gap-x-3 gap-y-2">
              Take control of your
              <span className="relative inline-block px-5 py-1.5 mt-2 lg:mt-0">
                <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
                <span className="relative text-white">Mental Health</span>
              </span>
            </h2>
            <Link href="/contact" className="shrink-0 bg-accent-teal hover:bg-[#15806E] text-white px-8 py-4 rounded-sm font-semibold transition-colors shadow-lg text-sm tracking-wide">
              Book a Visit
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
