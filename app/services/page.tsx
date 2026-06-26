import React from "react";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg">
      <ServicesHero />
      <ServicesGrid />

      {/* CTA Section */}
      <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to optimize your revenue?</h2>
            <p className="text-gray-600 text-lg">Let our experts analyze your current billing processes and show you where you can increase your bottom line.</p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
