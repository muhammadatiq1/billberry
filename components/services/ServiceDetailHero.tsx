"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { globalStats } from "@/lib/services-data";

export default function ServiceDetailHero({ service }: { service: any }) {
  const Icon = service.icon;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-accent-teal hover:text-white transition-colors mb-10 font-bold text-[15px]">
          <ArrowLeft size={18} /> Back to all services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent-teal/20 rounded-2xl flex items-center justify-center border border-accent-teal/30">
                <Icon size={32} className="text-accent-teal" />
              </div>
              <h2 className="text-xl font-bold text-accent-teal uppercase tracking-wider">{service.title}</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-8">
              {service.heroTitle}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              {service.heroDesc}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {service.heroMetrics.map((metric: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent-teal shrink-0" />
                  <span className="text-white text-lg font-medium">{metric}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {service.heroTags.map((tag: string, idx: number) => (
                <span key={idx} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Global Stats Card */}
          <motion.div initial="hidden" animate="visible" variants={fadeLeft} className="lg:pl-12 flex flex-col justify-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center relative z-10">Billberry by the Numbers</h3>
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {globalStats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-accent-teal mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium text-[15px]">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
                <p className="text-white font-bold text-lg italic">
                  "Thousands of providers growing their practice with Billberry. Now It's Your Turn!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
