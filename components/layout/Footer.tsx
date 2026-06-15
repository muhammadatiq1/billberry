import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 pb-0 pt-20 relative overflow-hidden">
      <footer className="mx-auto max-w-7xl pt-10 flex flex-col justify-between relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          
          {/* Left Column: Logo, Desc, Newsletter */}
          <div className="flex flex-col gap-6 lg:w-1/3 xl:w-1/4">
            <Image 
              src="/Images/logo/1.svg" 
              alt="Billberry Health Group" 
              width={200} 
              height={50} 
              className="h-10 w-auto mb-2"
            />
            <p className="text-gray-500 text-[14px] leading-relaxed pr-8">
              Modern RCM solutions designed to help practices manage billing, automate revenue workflows, and grow with confidence.
            </p>
            
            <div className="mt-2">
              <h4 className="text-primary font-bold mb-3 text-[15px]">Subscribe Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="bg-white border border-gray-300 rounded-l-md py-2.5 px-4 text-[14px] text-primary placeholder:text-gray-400 focus:outline-none focus:border-[#1B9C8A] focus:ring-1 focus:ring-[#1B9C8A] w-full shadow-sm"
                />
                <button className="bg-[#1B9C8A] hover:bg-[#15806E] text-white px-5 rounded-r-md font-semibold transition-colors text-[14px] shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 lg:w-3/4 xl:w-2/3">
            
            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-primary font-bold text-[16px] mb-2">Services</h4>
              <Link href="/services/medical-billing" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Medical Billing</Link>
              <Link href="/services/ar-management" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">AR Management</Link>
              <Link href="/services/credentialing" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Credentialing</Link>
              <Link href="/services/practice-management" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Practice Management</Link>
              <Link href="/services/ehr-solutions" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">EHR Solutions</Link>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-primary font-bold text-[16px] mb-2">Company</h4>
              <Link href="/about" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">About</Link>
              <Link href="/careers" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Careers</Link>
              <Link href="/blog" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Blog</Link>
              <Link href="/contact" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Contact</Link>
              <Link href="/partners" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Partners</Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-primary font-bold text-[16px] mb-2">Resources</h4>
              <Link href="/help" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Help Center</Link>
              <Link href="/faq" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Provider FAQ</Link>
              <Link href="/portal" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Client Portal</Link>
              <Link href="/privacy" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Terms of Service</Link>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-primary font-bold text-[16px] mb-2">Socials</h4>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Twitter</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">LinkedIn</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Instagram</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Facebook</Link>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-start gap-6 py-6 border-t border-gray-300">
          <div className="text-[15px] text-primary font-medium pt-1">
            © {new Date().getFullYear()} Billberry. All rights reserved.
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-primary font-medium items-end text-right">
            <Link href="/privacy" className="hover:text-[#1B9C8A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1B9C8A] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#1B9C8A] transition-colors">Cookies</Link>
          </div>
        </div>

      </footer>
      
      {/* Massive Background Text Watermark */}
      <div className="absolute bottom-[-4%] lg:bottom-[-12%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden flex justify-center">
        <h1 className="text-[140px] sm:text-[200px] md:text-[280px] lg:text-[350px] font-black text-[#f1f5f9] tracking-tighter leading-none whitespace-nowrap">
          Billberry
        </h1>
      </div>
    </div>
  );
}
