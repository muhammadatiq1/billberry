"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/ajax/Info@berrybillings.com", {
        method: "POST",
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-center h-full"
    >
      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
        >
          <div className="w-24 h-24 bg-accent-teal/10 rounded-full flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-accent-teal/20 rounded-full animate-ping"></div>
            <Send className="w-10 h-10 text-accent-teal relative z-10 ml-1" />
          </div>
          <h3 className="text-4xl font-bold text-primary mb-4">Message Sent!</h3>
          <p className="text-xl text-gray-600 mb-10 max-w-md">
            Thank you for reaching out. Our experts are reviewing your request and will be in touch shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-primary font-bold rounded-xl transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="hidden" name="_subject" value="New Contact Form Message!" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary ml-1">Full Name</label>
              <input 
                required
                type="text" 
                name="Name"
                placeholder="John Doe" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/10 transition-all text-gray-700 placeholder-gray-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary ml-1">Email Address</label>
              <input 
                required
                type="email" 
                name="Email"
                placeholder="john@example.com" 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/10 transition-all text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary ml-1">Subject</label>
            <input 
              required
              type="text" 
              name="Subject"
              placeholder="How can we help you?" 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/10 transition-all text-gray-700 placeholder-gray-400"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary ml-1">Message</label>
            <textarea 
              required
              name="Message"
              placeholder="Write your message here..." 
              rows={5}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/10 transition-all text-gray-700 placeholder-gray-400 resize-y"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full bg-accent-teal hover:bg-[#087887] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
            {!isSubmitting && <Send className="w-5 h-5" />}
          </button>

          <p className="text-sm text-gray-500 text-center mt-2">
            Your information is secure and encrypted. We never share your data.
          </p>
        </form>
      )}
    </motion.div>
  );
}
