"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, CheckCircle2, PhoneCall, FileText, Quote, Star, ChevronDown } from "lucide-react";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import { 
  performanceMetrics, 
  specialtiesList, 
  expertiseList,
  testimonials,
  faqs
} from "@/lib/services-data";

export default function ServiceDetailContent({ service }: { service: any }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* 2. Detailed Content Sections */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {service.contentSections.map((section: any, idx: number) => {
              const localImages = [
                "/images/services/medical-1.png",
                "/images/services/medical-2.png",
                "/images/services/medical-3.png"
              ];
              const imageSrc = localImages[idx % localImages.length];

              return (
                <motion.div 
                  key={idx} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className="bg-surface rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className={`flex flex-col gap-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{section.title}</h2>
                      {section.paragraphs.map((para: string, pIdx: number) => (
                        <p key={pIdx} className="text-lg text-gray-600 leading-relaxed">
                          {para}
                        </p>
                      ))}
                      
                      {section.bulletPoints && (
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-fit mt-4">
                          <h4 className="text-xl font-bold text-primary mb-4">Core Components</h4>
                          <div className="flex flex-col gap-3">
                            {section.bulletPoints.map((bullet: string, bIdx: number) => (
                              <div key={bIdx} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center shrink-0">
                                  <Check size={14} className="text-accent-teal font-bold" />
                                </div>
                                <span className="text-primary font-semibold text-[15px]">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image Column */}
                    <div className={`relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <Image 
                        src={imageSrc}
                        alt={section.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Stats Grid Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">The Outcomes We Help Providers Achieve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Reliable, Transparent, and Scalable Billing for Modern Practices</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {performanceMetrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-accent-teal mb-3">{metric.value}</div>
                <div className="text-white font-medium text-[15px]">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specialties & Expertise */}
      <section className="py-24 bg-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">Billing for Every Specialty</h2>
              <p className="text-lg text-gray-600 mb-10">We support a wide range of providers with customized services that improve accuracy and help you get paid faster.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialtiesList.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 size={20} className="text-accent-teal" />
                    <span className="font-semibold text-primary text-[15px]">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-surface p-10 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-full blur-2xl -mr-10 -mb-10"></div>
              <h2 className="text-3xl font-bold text-primary mb-8 relative z-10">Our Full Expertise</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                {expertiseList.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-accent-teal font-bold mt-1 group-hover:translate-x-1 transition-transform">-</span>
                    <span className="text-gray-700 font-medium">{exp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Form Area */}
      <section className="py-24 bg-surface border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">We're here to help</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We're available 24/7. Schedule a call with one of our experts now to see how Billberry can revolutionize your revenue cycle.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent-teal/10 rounded-full flex items-center justify-center">
                    <PhoneCall size={24} className="text-accent-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Call Us Anytime</div>
                    <div className="text-2xl font-bold text-primary">512-270-6926</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent-teal/10 rounded-full flex items-center justify-center">
                    <FileText size={24} className="text-accent-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email Us</div>
                    <div className="text-xl font-bold text-primary">infoberrybillings@gmail.com</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Schedule Your Free Assessment</h3>
              <LeadCaptureForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Esteemed Clients</h2>
            <p className="text-xl text-gray-600">See what healthcare providers are saying about us.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-surface p-10 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-lg transition-shadow">
                <Quote size={40} className="text-gray-100 absolute top-8 left-8" />
                <div className="relative z-10">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 text-lg italic leading-relaxed mb-8">
                    "{test.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-primary text-lg">{test.name}</div>
                      <div className="text-accent-teal font-medium">{test.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-surface border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services.</p>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer bg-white group-open:bg-gray-50 transition-colors">
                  <h3 className="text-lg lg:text-xl font-bold text-primary pr-8">{faq.question}</h3>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-open:bg-accent-teal group-open:text-white transition-colors">
                    <ChevronDown size={20} className="transition-transform duration-300 group-open:rotate-180" />
                  </div>
                </summary>
                <div className="px-6 lg:px-8 pb-8 pt-2">
                  <p className="text-gray-600 text-lg leading-relaxed border-t border-gray-100 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
