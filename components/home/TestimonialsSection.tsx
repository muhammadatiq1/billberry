import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 4.9,
    text: "The medical billing services here are fantastic. It's motivating to see how much our revenue has improved over time. The team has a great mix of professionalism and accuracy.",
    name: "Dr. Kate Davis",
    username: "grateful_provider_8",
  },
  {
    rating: 4.8,
    text: "The AR cleanup is fantastic. It's motivating to see how much our cash flow has improved over time. The experts provide a great mix of expertise and efficiency.",
    name: "Martin Kazlauskas",
    username: "clinic_admin_59",
  },
  {
    rating: 4.9,
    text: "Our revenue cycle process is finally smooth. It's motivating to see how much our denials dropped over time. berrybilling has a great mix of modern technology and amazing staff.",
    name: "Dr. Sanjay Sharma",
    username: "clinic_owner_68",
  },
  {
    rating: 4.9,
    text: "The coding accuracy is fantastic. It's motivating to see how much our reimbursements improved over time. The team has a great mix of technology and personal touch.",
    name: "Tawanna Afumba",
    username: "rcm_manager_15",
  },
  {
    rating: 4.9,
    text: "The financial progress is fantastic. It's motivating to see how much our bottom line improved over time. The specialists offer a great mix of insights and guidance.",
    name: "Larry King",
    username: "practice_owner_46",
  },
  {
    rating: 4.8,
    text: "The credentialing service is fantastic. It's motivating to see how fast our new providers got onboarded. The system has a great mix of speed and security.",
    name: "Dr. Fatima Mohamed",
    username: "medical_director_72",
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-text-muted text-[17px] leading-relaxed">
            Our mission is to drive progress and enhance the financial health of healthcare providers by delivering superior billing services that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-bg rounded-xl p-6 border border-border flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="font-bold text-[16px] text-text">
                  berrybilling
                </div>
                <div className="flex items-center gap-1 font-bold text-text-muted text-sm">
                  {t.rating} <Star size={14} className="fill-accent-teal text-accent-teal" />
                </div>
              </div>

              <p className="text-text-muted text-[14px] leading-relaxed mb-6 flex-grow italic">
                "{t.text}"
              </p>

              <div>
                <h4 className="font-bold text-text text-[14px]">{t.name}</h4>
                <p className="text-text-muted text-[12px] mt-0.5">@{t.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
