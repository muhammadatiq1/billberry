"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadCaptureForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/ajax/infoberrybillings@gmail.com", {
        method: "POST",
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (submitted) {
    return (
      <div className="bg-surface rounded-2xl shadow-sm border border-border p-8 h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent-teal" />
        </div>
        <h3 className="text-2xl font-bold text-text mb-4">Assessment Requested!</h3>
        <p className="text-text-muted mb-8 max-w-sm">
          Our billing experts will review your details and contact you within 24 hours to schedule your free assessment.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-accent-teal font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border p-6 sm:p-8 relative overflow-hidden">
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text mb-2">Free Billing Assessment</h3>
        <p className="text-text-muted text-[15px]">Find out how much revenue your practice might be leaving on the table.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="hidden" name="_subject" value="New Billing Assessment Request!" />
        <input type="hidden" name="_captcha" value="false" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-text">First Name *</label>
            <input required type="text" name="First Name" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-shadow" placeholder="John" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-text">Last Name *</label>
            <input required type="text" name="Last Name" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-shadow" placeholder="Doe" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-text">Work Email *</label>
          <input required type="email" name="Email" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-shadow" placeholder="john@clinic.com" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-text">Practice Name</label>
          <input type="text" name="Practice Name" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-shadow" placeholder="Doe Medical Center" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-text">Job Title / Role</label>
          <select name="Job Title" className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-shadow text-text">
            <option value="">Please Select</option>
            <option value="Physician">Physician</option>
            <option value="Healthcare Provider">Healthcare Provider</option>
            <option value="Practice Management">Practice Management</option>
            <option value="Administrative">Administrative</option>
            <option value="Billing Service Provider">Billing Service Provider</option>
            <option value="Hospital Staff">Hospital Staff</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="mt-2 w-full bg-accent-teal hover:bg-[#15806E] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm group">
          Get My Assessment
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center text-[12px] text-text-muted mt-2">
          By submitting this form, you agree to our <a href="/privacy" className="text-accent-teal hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
