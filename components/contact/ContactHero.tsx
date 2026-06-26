"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="pt-40 pb-48 bg-primary relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-accent-teal/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#15806E]/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-accent-teal" />
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Get In Touch</span>
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Elevate Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-teal-200">
              Revenue Cycle
            </span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-gray-300 leading-relaxed">
            Take control of your billing effortlessly. Connect with our medical billing and coding experts to cut costs, improve accuracy, and get paid faster.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
