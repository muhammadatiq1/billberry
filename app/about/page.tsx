import React from "react";
import PartnersSection from "@/components/home/PartnersSection";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import AboutHero from "@/components/about/AboutHero";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutGrowth from "@/components/about/AboutGrowth";
import AboutVision from "@/components/about/AboutVision";
import { HeartPulse } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <AboutHero />
      <AboutAchievements />
      <AboutGrowth />
      <AboutVision />

      {/* Partners/Software */}
      <PartnersSection />

      {/* CTA / Form Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                We're here to help
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                If you're ready to improve collections, reduce denials, and get faster payments, you're in the right place. Our certified team delivers expert medical billing and coding services designed to improve every stage of the billing cycle.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-accent-teal/10 flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-accent-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Available 24/7</h4>
                  <p className="text-gray-500">Schedule a call with one of our experts now.</p>
                </div>
              </div>
            </div>

            <div>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
