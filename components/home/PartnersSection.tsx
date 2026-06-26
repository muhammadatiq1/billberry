import Image from "next/image";

const partners = [
  "01-3.webp",
  "02-2-1.webp",
  "04.webp",
  "05-1.webp",
  "06-1.webp",
  "07.webp",
  "08.webp",
  "11.webp",
  "12.webp",
  "13-1.webp",
  "17-1.webp"
];

export default function PartnersSection() {
  return (
    <section id="software" className="py-24 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-text mb-6">
          Medical Billing Software We Leverage
        </h2>
        <p className="text-text-muted text-[17px] max-w-2xl mx-auto">
          We are experts in the industry's top EHR and practice management systems.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center">
          {partners.map((logo, index) => (
            <div key={index} className="w-[140px] h-[60px] flex items-center justify-center transition-transform hover:-translate-y-1 duration-300">
              <Image 
                src={`/Images/partners/${logo}`} 
                alt={`EHR Partner`} 
                width={140} 
                height={60} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
