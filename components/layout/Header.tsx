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
                src="/Images/logo/1.svg" 
                alt="Billberry Health Group" 
                width={300} 
                height={80} 
                priority
                className="h-12 md:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-[15px] font-medium text-gray-600 h-full">
            <Link href="#" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Home
            </Link>
            <Link href="#about" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              About Us
            </Link>
            <Link href="#software" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Software
            </Link>
            <Link href="#services" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Services
            </Link>
            <Link href="#testimonials" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Testimonials
            </Link>
            <Link href="#blog" className="flex items-center h-full hover:text-accent-teal transition-colors border-b-[3px] border-transparent">
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="/book"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-accent-teal px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Book Discovery Call
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
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Home</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">About Us</Link>
          <Link href="#software" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Software</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Services</Link>
          <Link href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Testimonials</Link>
          <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-primary hover:text-accent-teal">Blog</Link>

          <div className="pt-6 border-t border-gray-100 mt-4">
            <Link 
              href="/book"
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
