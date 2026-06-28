import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-surface px-4 sm:px-6 lg:px-8 pb-0 pt-20 relative overflow-hidden border-t border-border">
      <footer className="mx-auto max-w-7xl pt-10 flex flex-col justify-between relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          
          {/* Left Column: Logo, Desc, Newsletter */}
          <div className="flex flex-col gap-6 lg:w-1/3 xl:w-1/4">
            <Image 
              src="/Images/logo/logo main.svg" 
              alt="berrybilling" 
              width={200} 
              height={50} 
              className="h-10 w-auto mb-2"
            />
            <p className="text-text-muted text-[14px] leading-relaxed pr-8">
              berrybilling<br/>
              15442 Ventura Blvd STE 201-2613<br/>
              Sherman Oaks, CA 91403<br/><br/>
              <strong>Sales:</strong> Sales@berrybillingsllc.com<br/>
              <strong>Info:</strong> Info@berrybillings.com<br/>
              <strong>Hours:</strong> 7:00 AM – 4:00 PM
            </p>
            
            <div className="mt-2">
              <h4 className="text-primary font-bold mb-3 text-[15px]">Subscribe Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="bg-surface border border-border rounded-l-md py-2.5 px-4 text-[14px] text-text placeholder:text-text-muted focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal w-full shadow-sm"
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
              <Link href="/services/medical-billing-coding" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Medical Billing</Link>
              <Link href="/services/ar-denial-management" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">AR Management</Link>
              <Link href="/services/revenue-cycle-management" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">RCM Services</Link>
              <Link href="/services/physician-credentialing" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Credentialing</Link>
              <Link href="/services/ehr-solutions" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">EHR Solutions</Link>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-primary font-bold text-[16px] mb-2">Company</h4>
              <Link href="/about" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">About Us</Link>
              <Link href="/services" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">All Services</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Careers</Link>
              <Link href="/contact" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Contact</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Partners</Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-primary font-bold text-[16px] mb-2">Resources</h4>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Help Center</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Provider FAQ</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Client Portal</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[14px] text-gray-500 font-medium hover:text-[#1B9C8A] transition-colors">Terms of Service</Link>
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
        <div className="flex justify-between items-start gap-6 py-6 border-t border-border mt-8">
          <div className="text-[15px] text-text-muted font-medium pt-1">
            © {new Date().getFullYear()} berrybilling. All rights reserved.
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-text-muted font-medium items-end text-right">
            <Link href="/privacy" className="hover:text-[#1B9C8A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1B9C8A] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#1B9C8A] transition-colors">Cookies</Link>
          </div>
        </div>

      </footer>
      
      {/* Massive Background Text Watermark */}
      <div className="absolute bottom-[-4%] lg:bottom-[-12%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden flex justify-center opacity-50">
        <h1 className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-black text-border tracking-tighter leading-none whitespace-nowrap">
          berrybilling
        </h1>
      </div>
    </div>
  );
}
