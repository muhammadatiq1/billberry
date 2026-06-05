"use client";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    id: "01",
    title: "Primary Care Centers",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Advanced Laboratories",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Modern Consultation",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Surgical Facilities",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Pediatric Wards",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Therapy & Recovery",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "07",
    title: "Patient Lounges",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "08",
    title: "Research Centers",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "09",
    title: "Emergency Care",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Radiology & Imaging",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Intensive Care",
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "12",
    title: "Maternity Ward",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "13",
    title: "Nutrition Planning",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "14",
    title: "Mental Health Clinic",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "15",
    title: "Dental Services",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop",
  }
];
// (galleryItems array remains above this, untouched)
export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  // Duplicate the array 3 times to create a massive track for seamless infinite looping
  const marqueeItems = [...galleryItems, ...galleryItems, ...galleryItems];

  const exactScroll = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize exact scroll
    exactScroll.current = container.scrollWidth / 3;
    container.scrollLeft = exactScroll.current;

    let animationId: number;

    const render = () => {
      // 1. Auto Scroll Logic
      if (!isHovered.current) {
        // Accumulate exact scroll position to prevent browser integer-rounding bugs on scrollLeft
        exactScroll.current += 0.5; // Slightly faster but guaranteed to move

        // Seamless Infinite Loop Snap
        const setWidth = container.scrollWidth / 3;
        if (exactScroll.current >= setWidth * 2) {
          exactScroll.current = setWidth;
        } else if (exactScroll.current <= 0) {
          exactScroll.current = setWidth;
        }

        container.scrollLeft = exactScroll.current;
      } else {
        // Keep exactScroll in sync if user manually scrolled
        exactScroll.current = container.scrollLeft;
      }

      // 2. 3D "Concave Mirror" Coverflow Math
      const cards = container.querySelectorAll('.gallery-card');
      const screenCenter = window.innerWidth / 2;

      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distanceFromCenter = cardCenter - screenCenter;
        const ratio = Math.min(1, Math.abs(distanceFromCenter) / screenCenter);

        // Rotation (inwards curve)
        let rotation = -(distanceFromCenter / screenCenter) * 60;
        rotation = Math.max(-65, Math.min(65, rotation)); 

        // Scale (center is very far back, edges come close)
        let scale = 0.5 + Math.pow(ratio, 1.5) * 1.1;
        scale = Math.min(1.8, scale); 

        card.style.transform = `perspective(1000px) rotateY(${rotation}deg) scale(${scale})`;
        card.style.zIndex = Math.round(Math.abs(distanceFromCenter)); 
        card.style.opacity = "1";
      });

      animationId = requestAnimationFrame(render);
    };

    // Initialize position to the middle set to allow scrolling
    container.scrollLeft = container.scrollWidth / 3;

    // Start animation loop
    animationId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-28 bg-white overflow-hidden relative">
      {/* Background soft glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#1B9C8A]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
        <h3 className="text-[#FF6B6B] font-bold text-[14px] uppercase tracking-widest mb-4">
          Behind the Care
        </h3>
        <h2 className="text-4xl lg:text-5xl font-sans font-bold text-primary mb-6 tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          Our beautiful
          <span className="relative inline-block px-4 py-1">
            <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
            <span className="relative text-white">Locations</span>
          </span>
        </h2>
        <p className="text-gray-500 text-[16px] max-w-2xl mx-auto mb-8">
          Explore our state-of-the-art clinics, advanced laboratories, and comfortable recovery spaces designed for your ultimate wellbeing.
        </p>

        <div className="flex justify-center">
          <button className="inline-flex items-center gap-3 bg-[#1B9C8A] hover:bg-[#15806E] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            See more Locations <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* 3D Auto-Scroll Container */}
      <div className="relative w-full pb-10 z-10 flex overflow-hidden">

        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        <div
          ref={containerRef}
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
          onTouchStart={() => isHovered.current = true}
          onTouchEnd={() => isHovered.current = false}
          className="flex overflow-x-auto gap-10 py-32 scrollbar-hide cursor-grab active:cursor-grabbing w-full"
          style={{
            paddingLeft: "calc(50vw - 160px)",
            paddingRight: "calc(50vw - 160px)"
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="gallery-card shrink-0 flex flex-col items-center"
              style={{
                width: "240px",
                transformStyle: "preserve-3d",
                willChange: "transform, opacity"
              }}
            >
              <div className="w-full h-[320px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-6 bg-white border-[6px] border-white transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(27,156,138,0.25)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="text-center">
                <span className="text-[#FF6B6B] font-black text-lg">#{item.id}</span>
                <h4 className="text-primary font-bold mt-1 text-[16px]">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
