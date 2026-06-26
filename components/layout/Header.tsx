"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  ChevronDown, 
  X, 
  FileText, 
  LineChart, 
  Briefcase, 
  BadgeCheck, 
  Building2, 
  Database, 
  PhoneCall, 
  ShieldAlert,
  ChevronRight
} from "lucide-react";

const serviceCategories = [
  {
    id: "core",
    title: "Core Billing",
    services: [
      { title: "Medical Billing & Coding", desc: "Maximize revenue with accurate coding", icon: FileText, link: "/services/medical-billing-coding" },
      { title: "AR & Denial Management", desc: "Resolve unpaid claims and lower denials", icon: LineChart, link: "/services/ar-denial-management" },
      { title: "Revenue Cycle Management", desc: "End-to-end solutions to optimize cash flow", icon: Briefcase, link: "/services/revenue-cycle-management" }
    ]
  },
  {
    id: "practice",
    title: "Practice Solutions",
    services: [
      { title: "Physician Credentialing", desc: "Seamless payer enrollment and paperwork", icon: BadgeCheck, link: "/services/physician-credentialing" },
      { title: "Practice Management", desc: "Strategic guidance to scale your practice", icon: Building2, link: "/services/practice-management" }
    ]
  },
  {
    id: "tech",
    title: "Technology & Support",
    services: [
      { title: "Electronic Health Records", desc: "Secure, HIPAA-compliant EHR implementation", icon: Database, link: "/services/ehr-solutions" },
      { title: "Contact Center", desc: "24/7 patient support and coordination", icon: PhoneCall, link: "/services/contact-center" }
    ]
  },
  {
    id: "compliance",
    title: "Compliance & Auditing",
    services: [
      { title: "Compliance & Auditing", desc: "Protect against regulatory penalties", icon: ShieldAlert, link: "/services/compliance-auditing" }
    ]
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  
  // Mobile accordion state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const activeCategoryData = serviceCategories.find(c => c.id === activeCategory);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl bg-white rounded-2xl shadow-lg border border-border pointer-events-auto transition-all">
      <div className="px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/Images/logo/1.svg" 
                alt="Billberry" 
                width={300} 
                height={80} 
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-sans text-[15px] font-medium text-gray-700 h-full">
            <Link href="/" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Home
            </Link>
            <Link href="/about" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              About Us
            </Link>
            
            {/* Services with Mega Menu */}
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className={`flex items-center gap-1 h-full transition-colors border-b-[3px] border-transparent ${isMegaMenuOpen ? 'text-accent-teal' : 'hover:text-accent-teal'}`}>
                Services <ChevronDown size={16} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transition-all duration-300 origin-top mt-2 ${isMegaMenuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}`}
              >
                <div className="flex h-[400px]">
                  {/* Left Sidebar */}
                  <div className="w-[35%] bg-gray-50 flex flex-col py-4 border-r border-gray-100">
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        className={`flex items-center justify-between px-6 py-4 text-left transition-colors font-semibold text-[15px] ${
                          activeCategory === cat.id 
                            ? 'bg-accent-teal text-white border-l-4 border-l-[#15806E]' 
                            : 'text-primary hover:bg-gray-100 border-l-4 border-l-transparent'
                        }`}
                      >
                        {cat.title}
                        <ChevronRight size={16} className={activeCategory === cat.id ? 'opacity-100' : 'opacity-0'} />
                      </button>
                    ))}
                  </div>

                  {/* Right Content */}
                  <div className="w-[65%] bg-white p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">Featured {activeCategoryData?.title}</h3>
                        <p className="text-gray-500 text-[13px]">Explore our specialized solutions.</p>
                      </div>
                      <Link href="/services" className="text-accent-teal font-semibold text-[13px] hover:underline whitespace-nowrap">
                        Browse all services
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 overflow-y-auto">
                      {activeCategoryData?.services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <Link key={idx} href={service.link} className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-accent-teal/10 group-hover:border-accent-teal/20 transition-colors">
                              <Icon size={20} className="text-gray-600 group-hover:text-accent-teal transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-primary group-hover:text-accent-teal transition-colors mb-1">{service.title}</h4>
                              <p className="text-[13px] text-gray-500 leading-relaxed">{service.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/contact" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-accent-teal px-6 py-2.5 text-[15px] font-bold text-white shadow-sm hover:bg-[#15806E] transition-colors"
            >
              Book Discovery Call
            </Link>
            <button 
              className="lg:hidden text-primary hover:text-accent-teal transition-colors ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-100 ${isMobileMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible border-none"}`}
      >
        <div className="px-4 sm:px-6 py-6 flex flex-col gap-4 overflow-y-auto max-h-[85vh] pb-10">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal py-2">Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal py-2">About Us</Link>
          
          {/* Mobile Services Accordion */}
          <div className="flex flex-col border-y border-gray-100 py-2">
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between text-[17px] font-medium text-primary hover:text-accent-teal py-2"
            >
              Services
              <ChevronDown size={20} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              {serviceCategories.map((cat) => (
                <div key={cat.id} className="flex flex-col pl-4 border-l-2 border-gray-100 mb-2">
                  <button 
                    onClick={() => setExpandedMobileCategory(expandedMobileCategory === cat.id ? null : cat.id)}
                    className="flex items-center justify-between text-[15px] font-bold text-gray-700 py-2"
                  >
                    {cat.title}
                    <ChevronDown size={16} className={`transition-transform text-gray-400 ${expandedMobileCategory === cat.id ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`flex flex-col overflow-hidden transition-all duration-200 ${expandedMobileCategory === cat.id ? 'max-h-[500px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                    {cat.services.map((service, idx) => (
                      <Link 
                        key={idx} 
                        href={service.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[14px] text-gray-500 py-2 pl-2 hover:text-accent-teal"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link 
                href="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-bold text-accent-teal py-3 mt-2 border-t border-gray-50"
              >
                View All Services &rarr;
              </Link>
            </div>
          </div>

          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal py-2">Contact</Link>

          <div className="pt-6 mt-2">
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center rounded-xl bg-accent-teal px-5 py-4 text-[16px] font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
