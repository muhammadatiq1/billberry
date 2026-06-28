"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutVision() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeRight}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Turn complex billing into <span className="text-accent-teal">clean revenue</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We come from different cultures and walks of life, but we're all driven by one shared purpose—helping healthcare providers grow through trust, teamwork, and reliable solutions. These values make our Medical Billing Services stand out and create lasting impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              berrybilling delivers flexible, consistent services that support providers worldwide. This allows our clients to fully focus on delivering outstanding care, while we expertly manage their billing needs. Every success story motivates us to discover new ways to increase revenue and improve day-to-day operations.
            </p>
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-white/10 border-l-4 border-accent-teal p-6 rounded-r-lg backdrop-blur-sm transition-transform"
            >
              <p className="text-xl font-medium text-white italic">
                "Strong partnerships and clear strategies lead to powerful results. Your success is what drives us forward—every single day. Let's spark new revenue opportunities, together."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Exceeding Client Expectations</h3>
            <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
              Inspired by a clear vision and an unstoppable commitment to your success, we place excellence at the core of everything we do. Our team doesn't just meet expectations—we constantly redefine them. From meticulous quality control to continuous professional development, we leave no stone unturned in our pursuit of perfection. 
            </p>
            <p className="text-gray-300 leading-relaxed relative z-10">
              As a leading company with exceptional accomplishments, berrybilling prioritizes staying constantly connected with the evolving dynamics to gain valuable insights into clients' needs. Our informed decisions, predictable analytics, and unparalleled achievements establish us as the most reliable company in the USA. We're not here to play it safe—we're here to set the standard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
