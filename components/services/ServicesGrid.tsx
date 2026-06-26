"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/services-data";

export default function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-bg relative">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl -ml-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-surface rounded-3xl p-8 border border-border flex flex-col hover:border-accent-teal/50 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-teal group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-accent-teal group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent-teal transition-colors">{service.title}</h3>
                
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {service.shortDesc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-2 text-accent-teal font-bold text-[15px] hover:text-[#15806E] transition-colors group/link"
                  >
                    Explore Service 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
