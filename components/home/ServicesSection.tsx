import Link from "next/link";
import { 
  ShieldAlert, 
  Briefcase,
  FileText,
  PhoneCall,
  Database,
  Building2,
  BadgeCheck,
  LineChart,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Medical Billing and Coding",
    desc: "Maximize revenue by up to 30% with accurate coding and streamlined billing processes. We ensure a 98.9% first-pass acceptance rate for faster payments.",
    icon: FileText,
    link: "/services/medical-billing-coding",
  },
  {
    title: "AR & Denial Management",
    desc: "Our expert team resolves unpaid claims and handles A/R cleanup strategies to recover underpayments and drastically lower your denial rates.",
    icon: LineChart,
    link: "/services/ar-denial-management",
  },
  {
    title: "Physician Credentialing",
    desc: "Seamless enrollment with Medicare, Medicaid, and commercial payers. We handle the paperwork so your providers can start seeing patients faster.",
    icon: BadgeCheck,
    link: "/services/physician-credentialing",
  },
  {
    title: "Revenue Cycle Management",
    desc: "End-to-end RCM solutions designed to optimize your financial performance, improve cash flow, and ensure compliance at every step of the revenue cycle.",
    icon: Briefcase,
    link: "/services/revenue-cycle-management",
  },
  {
    title: "Contact Center & Patient Scheduling",
    desc: "24/7 live patient support, appointment scheduling, and front-desk coordination to improve patient satisfaction and reduce no-show rates.",
    icon: PhoneCall,
    link: "/services/contact-center",
  },
  {
    title: "Electronic Health Records (EHR)",
    desc: "Secure, HIPAA-compliant EHR implementation and data management solutions tailored to the needs of modern healthcare facilities.",
    icon: Database,
    link: "/services/ehr-solutions",
  },
  {
    title: "Practice Management Consulting",
    desc: "Strategic guidance to streamline workflows, reduce administrative burdens, and scale your healthcare practice effectively.",
    icon: Building2,
    link: "/services/practice-management",
  },
  {
    title: "Compliance & Auditing",
    desc: "Thorough auditing services to ensure zero compliance errors and protect your practice against regulatory penalties.",
    icon: ShieldAlert,
    link: "/services/compliance-auditing",
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-bg border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">
            Our Specialized Services
          </h2>
          <p className="text-text-muted text-[17px] leading-relaxed">
            berrybilling delivers comprehensive medical billing, coding, and RCM solutions for healthcare practices and facilities, ensuring streamlined operations and maximized revenue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-surface rounded-xl p-6 border border-border flex flex-col hover:border-accent-teal/50 transition-colors">
                <div className="w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center mb-5">
                  <Icon size={24} className="text-accent-teal" />
                </div>
                
                <h3 className="text-[17px] font-bold text-text mb-3 leading-tight">{service.title}</h3>
                
                <p className="text-text-muted text-[14px] leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center gap-1.5 text-accent-teal font-semibold text-[14px] hover:text-[#15806E] transition-colors"
                  >
                    Read more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
