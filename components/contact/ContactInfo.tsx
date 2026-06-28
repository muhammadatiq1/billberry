"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <h2 className="text-3xl font-bold mb-2 text-primary relative z-10">Contact Information</h2>
      <p className="text-gray-500 mb-10 text-[15px] relative z-10">Our team is ready to help you optimize your revenue cycle.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center shrink-0 group-hover:bg-accent-teal transition-colors">
            <MapPin className="w-6 h-6 text-accent-teal group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg mb-1">Location</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">15442 Ventura Blvd STE 201-2613<br/>Sherman Oaks, CA 91403</p>
          </div>
        </div>

        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center shrink-0 group-hover:bg-accent-teal transition-colors">
            <Mail className="w-6 h-6 text-accent-teal group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg mb-1">Email</h3>
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-semibold text-gray-800 text-[14px]">Sales: </span>
                <a href="mailto:Sales@berrybillingsllc.com" className="text-gray-600 hover:text-accent-teal transition-colors text-[14px]">Sales@berrybillingsllc.com</a>
              </div>
              <div>
                <span className="font-semibold text-gray-800 text-[14px]">Info: </span>
                <a href="mailto:Info@berrybillings.com" className="text-gray-600 hover:text-accent-teal transition-colors text-[14px]">Info@berrybillings.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center shrink-0 group-hover:bg-accent-teal transition-colors">
            <Phone className="w-6 h-6 text-accent-teal group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg mb-1">Phone</h3>
            <a href="tel:12345678910" className="text-gray-600 hover:text-accent-teal transition-colors text-[15px]">12345678910</a>
          </div>
        </div>

        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center shrink-0 group-hover:bg-accent-teal transition-colors">
            <Clock className="w-6 h-6 text-accent-teal group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg mb-1">Hours</h3>
            <p className="text-gray-600 text-[15px]">Mon-Sat: 7AM - 4PM</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm font-medium">Follow us on social media for updates and insights.</p>
        <div className="flex items-center gap-4">
          {[
            { Icon: FacebookIcon, href: "#" },
            { Icon: TwitterIcon, href: "#" },
            { Icon: LinkedinIcon, href: "#" },
            { Icon: InstagramIcon, href: "#" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-accent-teal hover:border-accent-teal hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <social.Icon />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
