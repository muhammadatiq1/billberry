"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 pointer-events-auto transition-all">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/Images/logo%202%20aven.svg" 
                alt="Avenmind Health Group" 
                width={300} 
                height={80} 
                priority
                className="h-12 md:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-[15px] font-medium text-gray-600 h-full">
            <div className="flex items-center gap-1 cursor-pointer hover:text-accent-teal transition-colors h-full">
              For You <ChevronDown size={14} />
            </div>
            
            {/* Why Avenmind - Mega Menu */}
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 cursor-pointer h-full border-b-[3px] border-transparent group-hover:text-accent-teal group-hover:border-accent-teal transition-colors pt-[3px]">
                Why Avenmind <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              {/* Mega Menu Dropdown Box */}
              <div className="absolute left-1/2 -translate-x-1/3 top-[76px] w-[850px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t border-gray-100 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 cursor-default">
                <div className="flex p-10 gap-12">
                  
                  {/* Column 1: Main Links */}
                  <div className="w-[30%] flex flex-col gap-5 border-r border-gray-200 pr-6">
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">About Us</Link>
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">Solutions</Link>
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">Case Studies</Link>
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">Avenmind Member Journey</Link>
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">Clinical Research Institute</Link>
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">Avenmind ROI</Link>
                    <Link href="#" className="text-gray-800 hover:text-accent-teal transition-colors text-[16px]">Pricing</Link>
                  </div>
                  
                  {/* Column 2: Programs */}
                  <div className="w-[35%] flex flex-col gap-4">
                    <h4 className="text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-2">Programs</h4>
                    <Link href="#" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">Fertility & Family Building</Link>
                    <Link href="#" className="text-accent-teal font-medium flex items-center gap-1.5 text-[15px]">
                      <span className="text-accent-teal font-bold text-xl leading-none -mt-1">&rsaquo;</span> Avenmind Managed Benefit
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">Maternity & Newborn Care</Link>
                    <Link href="#" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">Parenting & Pediatrics</Link>
                    <Link href="#" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">Menopause & Midlife Health</Link>
                  </div>
                  
                  {/* Column 3: Extensions */}
                  <div className="w-[35%] flex flex-col gap-4">
                    <h4 className="text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-2">Program Extensions</h4>
                    <Link href="#" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">Avenmind Wallet</Link>
                    <Link href="#" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">Avenmind Milk</Link>
                  </div>
                  
                </div>
              </div>
            </div>

            <Link href="/providers" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Providers
            </Link>
            <Link href="/health-plans" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Health Plans
            </Link>
            
            {/* Resources - Mega Menu */}
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 cursor-pointer h-full border-b-[3px] border-transparent group-hover:text-accent-teal group-hover:border-accent-teal transition-colors pt-[3px]">
                Resources <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              {/* Mega Menu Dropdown Box */}
              <div className="absolute right-0 top-[76px] w-[800px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t border-gray-100 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 cursor-default">
                <div className="flex p-10 gap-10">
                  
                  {/* Column 1: Links */}
                  <div className="w-[30%] flex flex-col gap-5 border-r border-gray-200 pr-6">
                    <Link href="/blog" className="text-gray-800 hover:text-accent-teal transition-colors text-[17px]">Blog</Link>
                    <Link href="/resources" className="text-gray-800 hover:text-accent-teal transition-colors text-[17px]">Resource center</Link>
                    <Link href="/webinars" className="text-gray-800 hover:text-accent-teal transition-colors text-[17px]">Webinars</Link>
                  </div>
                  
                  {/* Featured Resource */}
                  <div className="w-[70%] flex items-center gap-8 pl-4">
                    <div className="w-1/2 flex flex-col items-start">
                      <h4 className="text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-4">Featured Resource</h4>
                      <h3 className="text-[19px] leading-tight font-medium text-gray-900 mb-4">
                        Avenmind's State of Women's and Family Health Benefits 2026
                      </h3>
                      <Link href="#" className="text-accent-teal font-medium flex items-center gap-1 text-[16px] hover:text-[#15806E] transition-colors">
                        View resource <span className="ml-1 text-xl leading-none">&rarr;</span>
                      </Link>
                    </div>
                    <div className="w-1/2 h-full flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop" 
                        alt="Featured resource" 
                        className="w-full h-36 object-cover rounded-xl shadow-sm"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="/book"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-accent-teal px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
            <button 
              className="lg:hidden text-primary hover:text-accent-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-100 ${isMobileMenuOpen ? "max-h-[calc(100vh-76px)] opacity-100 visible" : "max-h-0 opacity-0 invisible border-none"}`}
      >
        <div className="px-4 sm:px-6 py-6 flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-76px)] pb-10">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">For You</Link>
          
          <div className="flex flex-col gap-3">
            <div className="text-[17px] font-medium text-primary">Why Avenmind</div>
            <div className="pl-4 flex flex-col gap-4 border-l-2 border-gray-100 mt-2">
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-[16px]">About Us</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-[16px]">Solutions</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-[16px]">Pricing</Link>
            </div>
          </div>
          
          <Link href="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Providers</Link>
          <Link href="/health-plans" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Health Plans</Link>
          
          <div className="flex flex-col gap-3">
            <div className="text-[17px] font-medium text-primary">Resources</div>
            <div className="pl-4 flex flex-col gap-4 border-l-2 border-gray-100 mt-2">
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-[16px]">Blog</Link>
              <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-[16px]">Resource center</Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-4">
            <Link 
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center rounded-xl bg-accent-teal px-5 py-4 text-[16px] font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
