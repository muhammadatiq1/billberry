"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileCheck, Banknote, Users, TrendingUp } from "lucide-react";

export default function AboutGrowth() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Growth and Expansion
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our relentless focus on excellence and proven results has sparked powerful momentum—leading to consistent growth and a thriving, ever-expanding community of satisfied clients who count on us to deliver.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: FileCheck, value: "95%", label: "Electronic Claim" },
            { icon: Banknote, value: "95%", label: "Electronic Payment" },
            { icon: Users, value: "100%", label: "Client Retention" },
            { icon: TrendingUp, value: "30%", label: "Revenue Increase" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-surface border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <item.icon className="w-10 h-10 text-accent-teal mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-gray-600 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
