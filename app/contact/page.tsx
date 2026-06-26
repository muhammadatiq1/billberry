import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <ContactHero />

      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Info Banner */}
          <div className="mb-16">
            <ContactInfo />
          </div>

          {/* Form and Map Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Form */}
            <div>
              <ContactForm />
            </div>
            {/* Right: Map */}
            <div>
              <ContactMap />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
