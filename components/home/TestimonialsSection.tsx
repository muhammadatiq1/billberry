import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 4.9,
    text: "The healthcare services here are fantastic. It's motivating to see how much I've improved over time. The staff has a great mix of professionalism and care.",
    name: "Kate Davis",
    username: "grateful_patient_8",
    color: "text-[#3FA46A]"
  },
  {
    rating: 4.5,
    text: "The care tracker is fantastic. It's motivating to see how much my health has improved over time. The doctors provide a great mix of expertise and empathy.",
    name: "Martin Kazlauskas",
    username: "sartorial_statue_59",
    color: "text-primary"
  },
  {
    rating: 4.9,
    text: "My recovery process is fantastic. It's motivating to see how much I've improved over time. The clinic has a great mix of modern facilities and amazing staff.",
    name: "Sanjay Sharma",
    username: "voracious_rainbows_68",
    color: "text-secondary"
  },
  {
    rating: 4.2,
    text: "The health monitoring is fantastic. It's motivating to see how much I've improved over time. The team has a great mix of technology and personal touch.",
    name: "Tawanna Afumba",
    username: "intransigent_toejam_15",
    color: "text-[#1B9C8A]"
  },
  {
    rating: 4.9,
    text: "The therapy progress is fantastic. It's motivating to see how much I've improved over time. The specialists offer a great mix of insights and guidance.",
    name: "Larry King",
    username: "pendulous_unicorn_46",
    color: "text-[#FFB800]"
  },
  {
    rating: 4.8,
    text: "The patient portal is fantastic. It's motivating to see how much I've improved over time. The system has a great mix of accessibility and security.",
    name: "Fatima Mohamed",
    username: "salubrious_artist_72",
    color: "text-primary"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-sans font-bold text-primary mb-6 tracking-tight flex items-center justify-center gap-3">
          Our trusted 
          <span className="relative inline-block px-4 py-1">
            <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
            <span className="relative text-white">Patients</span>
          </span>
        </h2>
        <p className="text-gray-500 text-[16px] leading-relaxed max-w-2xl mx-auto">
          Our mission is to drive progress and enhance the lives of our patients by delivering superior care and services that exceed expectations.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <style>{`
        @keyframes row-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes row-marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-row {
          animation: row-marquee 40s linear infinite;
        }
        .animate-row-reverse {
          animation: row-marquee-reverse 40s linear infinite;
        }
        .hover-pause:hover .animate-row,
        .hover-pause:hover .animate-row-reverse {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative w-full hover-pause py-4">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="flex flex-col gap-8">
          {/* Top Row (Moves Left) */}
          <div className="flex w-max animate-row gap-8">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, index) => (
              <div 
                key={`top-${index}`} 
                className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 w-[280px] lg:w-[320px] shrink-0 flex flex-col hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`font-black text-[17px] tracking-tight ${t.color}`}>
                    Avenmind
                  </div>
                  <div className="flex items-center gap-1 font-bold text-gray-700 text-sm">
                    {t.rating} <Star size={14} className="fill-[#3FA46A] text-[#3FA46A]" />
                  </div>
                </div>

                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                  "{t.text}"
                </p>

                <div>
                  <h4 className="font-bold text-primary text-[14px]">{t.name}</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5">@{t.username}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row (Moves Right) */}
          <div className="flex w-max animate-row-reverse gap-8">
            {[...[...testimonials].reverse(), ...[...testimonials].reverse(), ...[...testimonials].reverse(), ...[...testimonials].reverse()].map((t, index) => (
              <div 
                key={`bottom-${index}`} 
                className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 w-[280px] lg:w-[320px] shrink-0 flex flex-col hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`font-black text-[17px] tracking-tight ${t.color}`}>
                    Avenmind
                  </div>
                  <div className="flex items-center gap-1 font-bold text-gray-700 text-sm">
                    {t.rating} <Star size={14} className="fill-[#3FA46A] text-[#3FA46A]" />
                  </div>
                </div>

                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                  "{t.text}"
                </p>

                <div>
                  <h4 className="font-bold text-primary text-[14px]">{t.name}</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5">@{t.username}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
