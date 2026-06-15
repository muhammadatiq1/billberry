import Image from "next/image";

const partners = [
  "01-3.webp",
  "02-2-1.webp",
  "04.webp",
  "05-1.webp",
  "06-1.webp",
  "07.webp",
  "08.webp",
  "11.webp",
  "12.webp",
  "13-1.webp",
  "17-1.webp"
];

export default function PartnersSection() {
  return (
    <section id="software" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-sans font-bold text-primary mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
          Medical Billing Software We Leverage for Revenue Cycle Management
        </h2>
        <p className="text-gray-500 text-[17px] leading-relaxed max-w-2xl mx-auto">
          Here are some Industry top listed EHR being operated by us.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <style>{`
        @keyframes partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partner-row {
          animation: partner-marquee 40s linear infinite;
        }
        .hover-pause:hover .animate-partner-row {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="relative w-full hover-pause py-4 overflow-hidden">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-partner-row gap-12 lg:gap-20 items-center">
          {[...partners, ...partners, ...partners].map((logo, index) => (
            <div key={index} className="w-[180px] h-[80px] shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image 
                src={`/Images/partners/${logo}`} 
                alt={`EHR Partner`} 
                width={180} 
                height={80} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
