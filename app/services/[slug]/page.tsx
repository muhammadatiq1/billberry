import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
    </div>
  );
}
