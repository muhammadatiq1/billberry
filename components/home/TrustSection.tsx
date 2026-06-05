import { CheckCircle2, Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              Trusted, Credentialed
              <span className="relative inline-block px-4 py-1 font-sans">
                <span className="absolute inset-0 bg-accent-teal rounded-xl"></span>
                <span className="relative text-white">Care</span>
              </span>
            </h2>
            <ul className="space-y-4 mb-8">
              {['Board-Certified Psychiatric Providers', 'Evidence-Based Treatment Plans', 'Hundreds of successful patient outcomes', 'In-network with major insurance plans'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-accent-green shrink-0 mt-0.5 mr-3" size={20} />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 items-center p-4 bg-bg rounded-lg border border-border">
              <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-400">Photo</div>
              <div>
                <p className="font-semibold text-primary">Dr. Jane Smith, MD</p>
                <p className="text-sm text-text-muted">Board-Certified Psychiatrist</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary text-white p-8 md:p-12 rounded-2xl relative">
            <div className="text-6xl font-serif text-accent-teal absolute top-6 left-6 opacity-30">&quot;</div>
            <blockquote className="relative z-10 text-lg md:text-xl font-serif leading-relaxed mb-6 italic">
              Avenmind changed my life. The team truly listened to me and crafted a care plan that made me feel understood for the first time.
            </blockquote>
            <div className="flex items-center gap-2 text-accent-green">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-4 font-medium">— Sarah M., Verified Patient</p>
          </div>
        </div>
      </div>
    </section>
  );
}
