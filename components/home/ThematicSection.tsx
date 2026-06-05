import Link from "next/link";

export default function ThematicSection() {
  return (
    <section className="py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          Real Conversations. Real
          <span className="relative inline-block px-4 py-1 font-sans">
            <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
            <span className="relative text-white">Change.</span>
          </span>
        </h2>
        <p className="text-lg text-text-muted mb-10">
          We believe that true healing begins when science meets compassion. Our whole-person approach means we look beyond the symptoms to understand your unique story, helping you build resilience and achieve lasting clarity.
        </p>
        <Link href="/approach" className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white transition-colors">
          Read Our Full Approach
        </Link>
      </div>
    </section>
  );
}
