"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Comprehensive <span className="text-accent-teal">RCM Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Billberry delivers specialized medical billing, coding, and practice management solutions to maximize your revenue and ensure compliance.
        </motion.p>
      </div>
    </section>
  );
}
