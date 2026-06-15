"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ClipboardList, 
  Activity, 
  ShieldAlert, 
  Users, 
  Stethoscope, 
  HeartHandshake, 
  ArrowRight,
  Briefcase,
  FileText,
  PhoneCall,
  Database,
  Building2,
  BadgeCheck,
  LineChart
} from "lucide-react";

const services = [
  {
    title: "Medical Billing and Coding",
    desc: "Maximize revenue by up to 30% with accurate coding and streamlined billing processes. We ensure a 98.9% first-pass acceptance rate for faster payments.",
    icon: FileText,
    link: "/services/medical-billing-coding",
    color: "#1B9C8A" // Accent Teal
  },
  {
    title: "AR & Denial Management",
    desc: "Our expert team resolves unpaid claims and handles A/R cleanup strategies to recover underpayments and drastically lower your denial rates.",
    icon: LineChart,
    link: "/services/ar-denial-management",
    color: "#2E86C1" // Secondary Blue
  },
  {
    title: "Physician Credentialing",
    desc: "Seamless enrollment with Medicare, Medicaid, and commercial payers. We handle the paperwork so your providers can start seeing patients faster.",
    icon: BadgeCheck,
    link: "/services/physician-credentialing",
    color: "#E08A3C" // Accent Orange
  },
  {
    title: "Revenue Cycle Management",
    desc: "End-to-end RCM solutions designed to optimize your financial performance, improve cash flow, and ensure compliance at every step of the revenue cycle.",
    icon: Briefcase,
    link: "/services/revenue-cycle-management",
    color: "#16395E" // Primary Dark Blue
  },
  {
    title: "Contact Center & Patient Scheduling",
    desc: "24/7 live patient support, appointment scheduling, and front-desk coordination to improve patient satisfaction and reduce no-show rates.",
    icon: PhoneCall,
    link: "/services/contact-center",
    color: "#0284C7" // Light Blue
  },
  {
    title: "Electronic Health Records (EHR)",
    desc: "Secure, HIPAA-compliant EHR implementation and data management solutions tailored to the needs of modern healthcare facilities.",
    icon: Database,
    link: "/services/ehr-solutions",
    color: "#6D28D9" // Purple
  },
  {
    title: "Practice Management Consulting",
    desc: "Strategic guidance to streamline workflows, reduce administrative burdens, and scale your healthcare practice effectively.",
    icon: Building2,
    link: "/services/practice-management",
    color: "#3F6212" // Green
  },
  {
    title: "Compliance & Auditing",
    desc: "Thorough auditing services to ensure zero compliance errors and protect your practice against regulatory penalties.",
    icon: ShieldAlert,
    link: "/services/compliance-auditing",
    color: "#E04F5F" // Red
  }
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const marqueeItems = [...services, ...services];

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
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
            Billberry delivers comprehensive medical billing, coding, and RCM solutions for healthcare practices and facilities, ensuring streamlined operations and maximized revenue.
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
