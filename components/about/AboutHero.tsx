"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Target, CheckCircle2 } from "lucide-react";

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/20 border border-accent-teal/30 mb-8 backdrop-blur-sm">
          <ShieldCheck className="w-5 h-5 text-accent-teal" />
          <span className="text-sm font-bold text-accent-teal uppercase tracking-widest">
            About berrybilling
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-tight mb-8">
          Empowering Healthcare Providers <br className="hidden lg:block"/>
          Through <span className="text-accent-teal">Expert Solutions</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
          berrybilling is a HIPAA compliant RCM solutions company with more than 12 years of medical billing experience across all specialties. Your Trusted Medical Billing Company for Long-Term Success.
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: CheckCircle2, text: "99% Claim Success" },
            { icon: Clock, text: "24/7 Support Team" },
            { icon: Target, text: "Future-Ready Solutions" },
            { icon: ShieldCheck, text: "Zero Compliance Errors" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors"
            >
              <item.icon className="w-8 h-8 text-accent-teal mx-auto mb-3" />
              <div className="font-bold text-white text-lg">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
