import React from "react";
import { Calendar, Clock, ShieldCheck, Phone, User, CheckCircle2, HeartPulse } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Appointment</h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-[16px] leading-relaxed">
            Take Control of Your Billing—Effortlessly with Our Medical Billing and Coding Services: Cut Costs, Improve Accuracy, and Get Paid Faster!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick & Easy Online Booking</h2>
            <p className="text-gray-600 mb-10 text-[15px] leading-relaxed">
              Book your appointment in just a few simple steps. Our healthcare professionals are ready to provide you with the best medical care tailored to your needs.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-accent-teal" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-primary mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-500 text-[14px]">Choose from available time slots that fit your busy schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent-teal" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-primary mb-1">Quick Response</h4>
                  <p className="text-gray-500 text-[14px]">Get confirmation within 15 minutes of submitting your request</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent-teal" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-primary mb-1">Expert Billing Service</h4>
                  <p className="text-gray-500 text-[14px]">Best certified specialists at your service</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f9f8] border-l-[3px] border-accent-teal p-5 rounded-r-md">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-accent-teal" />
                <span className="font-semibold text-primary">Contact</span>
              </div>
              <p className="text-[14px] text-gray-700">
                Call <strong className="text-accent-teal">512-270-6926</strong> for Billing assistance
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-10 h-fit">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Practice or Company Name*" 
                  required 
                  className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all placeholder:text-gray-400"
                />
                <input 
                  type="text" 
                  placeholder="Name*" 
                  required 
                  className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="tel" 
                  placeholder="Phone Number*" 
                  required 
                  className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all placeholder:text-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Email*" 
                  required 
                  className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all placeholder:text-gray-400"
                />
              </div>

              <select className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all text-gray-500">
                <option value="">Please Select</option>
                <option value="Physician">Physician</option>
                <option value="Healthcare Provider">Healthcare Provider</option>
                <option value="Practice Management">Practice Management</option>
                <option value="Administrative">Administrative</option>
                <option value="Billing Service Provider">Billing Service Provider</option>
                <option value="Hospital Staff">Hospital Staff</option>
                <option value="Other">Other</option>
              </select>

              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all placeholder:text-gray-400 resize-y"
              ></textarea>

              <p className="text-[12px] text-gray-500 leading-relaxed mt-2">
                By submitting this form, you agree to our <a href="#" className="text-accent-teal hover:underline">Privacy Policy</a>. SMS consent is not shared with third parties.
              </p>

              <button type="submit" className="w-full bg-accent-teal hover:bg-[#15806E] text-white py-3.5 rounded-md font-bold transition-colors mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center pt-8 border-t border-gray-100">
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-accent-teal text-white flex items-center justify-center font-bold text-sm mb-4">1</div>
            <User className="w-10 h-10 text-accent-teal mb-4" />
            <h4 className="font-bold text-primary mb-2 text-[16px]">Fill Details</h4>
            <p className="text-[13px] text-gray-500">Provide your personal information and select your preferred service</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-accent-teal text-white flex items-center justify-center font-bold text-sm mb-4">2</div>
            <Calendar className="w-10 h-10 text-accent-teal mb-4" />
            <h4 className="font-bold text-primary mb-2 text-[16px]">Choose Date</h4>
            <p className="text-[13px] text-gray-500">Select your preferred date and time slot from available options</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-accent-teal text-white flex items-center justify-center font-bold text-sm mb-4">3</div>
            <CheckCircle2 className="w-10 h-10 text-accent-teal mb-4" />
            <h4 className="font-bold text-primary mb-2 text-[16px]">Confirmation</h4>
            <p className="text-[13px] text-gray-500">Receive instant confirmation and appointment details via email or SMS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-accent-teal text-white flex items-center justify-center font-bold text-sm mb-4">4</div>
            <HeartPulse className="w-10 h-10 text-accent-teal mb-4" />
            <h4 className="font-bold text-primary mb-2 text-[16px]">Get Assistance</h4>
            <p className="text-[13px] text-gray-500">Visit our clinic at your scheduled time and receive quality healthcare</p>
          </div>

        </div>

      </div>
    </div>
  );
}
