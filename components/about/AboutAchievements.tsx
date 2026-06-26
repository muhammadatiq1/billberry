"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, Activity } from "lucide-react";

export default function AboutAchievements() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Achievements & <span className="text-accent-teal">Efficiency</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We have established our credibility as the most reliable company for Medical Billing Services with numerous achievements.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Throughout our Medical Billing process, we stay fully committed to maintaining efficiency and accuracy. Our professionals make sure of timely reimbursement for our esteemed clients. We pay meticulous attention to details and steadily adhere to industry standards that eventually result in error rates far below the national average.
            </p>
            
            <div className="flex gap-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">12+</div>
                <div className="text-accent-teal font-semibold">Years of Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">250+</div>
                <div className="text-accent-teal font-semibold">Healthcare Providers</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Clock, value: "25 Days", label: "Rapid Revenue Recovery" },
              { icon: CheckCircle2, value: "99%", label: "First-pass Resolution" },
              { icon: Activity, value: "5% - 10%", label: "Denial & Rejection" },
              { icon: Clock, value: "24 Hrs", label: "Short Turnaround Time" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-bg border border-border rounded-xl p-8 text-center hover:border-accent-teal/50 transition-all shadow-sm group"
              >
                <stat.icon className="w-10 h-10 text-accent-teal mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
