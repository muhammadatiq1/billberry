"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ClipboardList, 
  Pill, 
  Activity, 
  HeartPulse, 
  BrainCircuit, 
  Moon, 
  Waves, 
  ShieldAlert, 
  Brain, 
  Users, 
  Flower2, 
  Stethoscope, 
  HeartHandshake, 
  Dna,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Psychiatric Evaluations",
    desc: "Comprehensive psychiatric assessments designed to clarify diagnoses, understand symptoms, and create individualized treatment plans tailored to your goals and needs.",
    icon: ClipboardList,
    link: "/services/psychiatric-evaluations",
    color: "#1B9C8A" // Accent Teal
  },
  {
    title: "Medication Management",
    desc: "Evidence-based medication management focused on improving symptoms, minimizing side effects, optimizing treatment outcomes, and supporting long-term emotional wellness.",
    icon: Pill,
    link: "/services/medication-management",
    color: "#2E86C1" // Secondary Blue
  },
  {
    title: "Anxiety & Panic Disorder",
    desc: "Treatment for generalized anxiety, excessive worry, panic attacks, social anxiety, racing thoughts, and stress-related symptoms that interfere with daily life.",
    icon: Activity,
    link: "/services/anxiety-panic-disorder",
    color: "#E08A3C" // Accent Orange
  },
  {
    title: "Depression Treatment",
    desc: "Support for depression, sadness, low motivation, loss of interest, fatigue, emotional numbness, and difficulty functioning at home, work, or school.",
    icon: HeartPulse,
    link: "/services/depression-treatment",
    color: "#E04F5F" // Red
  },
  {
    title: "ADHD Evaluation & Treatment",
    desc: "Assessment and treatment for attention difficulties, distractibility, executive dysfunction, procrastination, disorganization, time management challenges, and concentration problems.",
    icon: BrainCircuit,
    link: "/services/adhd-evaluation",
    color: "#16395E" // Primary Dark Blue
  },
  {
    title: "Sleep & Insomnia Support",
    desc: "Treatment for difficulty falling asleep, staying asleep, restless sleep, racing thoughts at bedtime, and sleep-related mental health concerns.",
    icon: Moon,
    link: "/services/sleep-insomnia",
    color: "#6D28D9" // Purple
  },
  {
    title: "Bipolar Disorder Treatment",
    desc: "Comprehensive evaluation and medication management for bipolar disorder, mood instability, emotional regulation challenges, and recurrent mood episodes.",
    icon: Waves,
    link: "/services/bipolar-disorder",
    color: "#0284C7" // Light Blue
  },
  {
    title: "Obsessive Compulsive Disorder",
    desc: "Treatment for intrusive thoughts, compulsive behaviors, repetitive rituals, excessive checking, contamination fears, and anxiety-driven thought patterns.",
    icon: ShieldAlert,
    link: "/services/ocd-treatment",
    color: "#B45309" // Brown/Orange
  },
  {
    title: "Schizophrenia & Psychotic Disorders",
    desc: "Ongoing psychiatric care and medication management for schizophrenia, schizoaffective disorder, psychotic disorders, and other serious mental health conditions.",
    icon: Brain,
    link: "/services/schizophrenia",
    color: "#3F6212" // Green
  },
  {
    title: "Mental Health for Older Adults",
    desc: "Specialized psychiatric care addressing depression, anxiety, medication concerns, grief, memory-related symptoms, life transitions, and emotional wellness in older adulthood.",
    icon: Users,
    link: "/services/older-adults",
    color: "#1B9C8A" // Accent Teal
  },
  {
    title: "Women's Mental Health",
    desc: "Support for anxiety, depression, stress, hormonal life transitions, perimenopause-related mood changes, and emotional wellness throughout adulthood.",
    icon: Flower2,
    link: "/services/womens-mental-health",
    color: "#DB2777" // Pink
  },
  {
    title: "Healthcare Worker Burnout",
    desc: "Mental health support for nurses, physicians, healthcare workers, first responders, and caregivers experiencing chronic stress, compassion fatigue, burnout, and emotional exhaustion.",
    icon: Stethoscope,
    link: "/services/healthcare-burnout",
    color: "#2E86C1" // Secondary Blue
  },
  {
    title: "Caregiver Stress Support",
    desc: "Helping caregivers navigate stress, overwhelm, guilt, anxiety, grief, and the emotional demands associated with caring for aging parents, spouses, or loved ones.",
    icon: HeartHandshake,
    link: "/services/caregiver-support",
    color: "#E08A3C" // Accent Orange
  },
  {
    title: "Genetic Testing",
    desc: "When clinically appropriate, pharmacogenomic testing may help identify how your body processes certain psychiatric medications and support more personalized treatment decisions.",
    icon: Dna,
    link: "/services/genetic-testing",
    color: "#16395E" // Primary Dark Blue
  }
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const marqueeItems = [...services, ...services];

  return (
    <section className="py-28 bg-[#F8FAFC] overflow-hidden">
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: custom-marquee 80s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-primary mb-6 tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            Our specialized
            <span className="relative inline-block px-4 py-1">
              <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
              <span className="relative text-white">Services</span>
            </span>
          </h2>
          <p className="text-gray-500 text-[17px] leading-relaxed max-w-3xl mx-auto">
            Avenmind Health Group provides comprehensive psychiatric evaluations, medication management, and personalized mental health care for adolescents, adults, and older adults throughout Florida via secure telehealth.
          </p>
        </div>
        
        {/* Services View Toggle */}
        {!showAll ? (
          <div className="relative flex overflow-hidden py-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            
            {/* Left/Right Masks for Smooth Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>

            <div className="flex animate-marquee gap-5 lg:gap-6 w-max">
              {marqueeItems.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-[1.5rem] p-6 lg:p-7 shadow-sm hover:shadow-xl border border-gray-100/50 transition-all duration-300 relative flex flex-col group mt-4">
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute -top-6 -left-3 w-[64px] h-[64px] bg-[#F8FAFC] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                      <div 
                        className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center"
                        style={{ boxShadow: `0 8px 24px ${service.color}26` }}
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}1A`, color: service.color }}
                        >
                          <Icon size={16} strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-[17px] font-bold text-primary mt-5 mb-3 leading-tight pr-2">{service.title}</h3>
                    
                    <p className="text-gray-500 leading-[1.6] text-[13.5px] mb-6 flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="mt-auto pt-2">
                      <Link 
                        href={service.link} 
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-[13px] transition-all group-hover:gap-2"
                      >
                        Read more <ArrowRight size={14} style={{ color: service.color }} className="transition-transform" />
                      </Link>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-6 lg:gap-y-12 pt-6 pb-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-[1.5rem] p-6 lg:p-7 shadow-sm hover:shadow-xl border border-gray-100/50 transition-all duration-300 relative flex flex-col group mt-4">
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-6 -left-3 w-[64px] h-[64px] bg-[#F8FAFC] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                    <div 
                      className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center"
                      style={{ boxShadow: `0 8px 24px ${service.color}26` }}
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}1A`, color: service.color }}
                      >
                        <Icon size={16} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-[17px] font-bold text-primary mt-5 mb-3 leading-tight pr-2">{service.title}</h3>
                  
                  <p className="text-gray-500 leading-[1.6] text-[13.5px] mb-6 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto pt-2">
                    <Link 
                      href={service.link} 
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-[13px] transition-all group-hover:gap-2"
                    >
                      Read more <ArrowRight size={14} style={{ color: service.color }} className="transition-transform" />
                    </Link>
                  </div>
                  
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center justify-center gap-2 bg-white text-primary border border-gray-200 hover:border-accent-teal hover:text-accent-teal px-8 py-3.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md w-full sm:w-auto text-[15px]"
          >
            {showAll ? "View Less" : "View All Services"}
          </button>
          
          <Link href="/book" className="group flex items-center justify-center gap-2 bg-accent-teal hover:bg-[#15806E] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-[15px]">
            Book an Appointment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
