import { User, Heart, Leaf, Shield } from "lucide-react";

export default function ValuePropSection() {
  return (
    <section className="py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Header Block (Col 1, Row 1) */}
          <div className="flex flex-col justify-center pr-8 pb-8 lg:pb-0">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] leading-[1.1] font-serif font-bold text-primary mb-6 tracking-tight drop-shadow-sm">
              Why<br />Choose<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">Avenmind</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              This isn't just another psychiatric clinic. It's a transformation for your mental well-being.
            </p>
          </div>

          {/* Card 1: Clean White (Col 2, Row 1) */}
          <div className="bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group cursor-pointer">
            <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 text-accent-teal pointer-events-none">
              <User size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold text-primary group-hover:text-accent-teal transition-colors">Personalized Care</h3>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                Get care tailored specifically to your unique needs, history, and life goals.
              </p>
            </div>
          </div>

          {/* Card 2: Solid Primary Navy (Col 3, Row 1) */}
          <div className="bg-primary shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group cursor-pointer">
            <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 text-white pointer-events-none">
              <Heart size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-accent-teal transition-colors">Compassionate Support</h3>
              <p className="text-gray-300 text-[17px] leading-relaxed">
                Experience a safe, non-judgmental space where you can truly be heard and understood.
              </p>
            </div>
          </div>

          {/* Card 3: Image Background (Col 1 & 2, Row 2) */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:col-span-2 group shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" 
              alt="Whole Person" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Navy Gradient Overlay for text readability at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/10 group-hover:via-primary/60 transition-colors duration-700"></div>
            
            <div className="relative h-full flex flex-col justify-between p-8 z-10">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Leaf size={24} />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-teal transition-colors">Whole-Person Approach</h3>
                <p className="text-gray-200 text-[17px] leading-relaxed max-w-md">
                  We believe mind, body, and spirit work together. We look beyond symptoms to treat the complete you.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Image Background (Col 3, Row 2) */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] group shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-gray-100">
            {/* Background Image (Abstract/Surreal) */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
              alt="Confidential" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Teal Gradient Overlay for bottom text */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-teal/95 via-accent-teal/60 to-transparent group-hover:via-accent-teal/80 transition-colors duration-700"></div>

            <div className="relative h-full flex flex-col justify-between p-8 z-10">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Shield size={24} />
              </div>
              <div className="mt-auto pt-20">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Fully Confidential</h3>
                <p className="text-white/95 text-[17px] leading-relaxed">
                  Your privacy is our top priority. Our systems are secure, HIPAA compliant, and fully discrete.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
