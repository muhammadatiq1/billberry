"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-full min-h-[400px] bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100"
    >
      <div className="w-full h-full rounded-[2rem] overflow-hidden relative min-h-[400px]">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10"></div>
        <iframe 
          src="https://maps.google.com/maps?q=15442%20Ventura%20Blvd%20STE%20201-2613%2C%20Sherman%20Oaks%2C%20CA%2091403&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 absolute inset-0"
        ></iframe>
      </div>
    </motion.div>
  );
}
