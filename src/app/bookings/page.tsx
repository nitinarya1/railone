"use client";
import { ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function Bookings() {
  return (
    <main className="min-h-screen bg-[#F0F2F5] pb-24">
      {/* Header */}
      <div className="bg-[#0A64F8] pt-12 px-4 pb-6 rounded-b-[2rem]">
        <div className="flex items-center justify-between text-white">
          <Link href="/">
             <button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ArrowLeft size={20} />
             </button>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold tracking-wide">Booking Details</h1>
            <span className="text-xs text-white/80 mt-1">Mobile: 8795615050</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center">
             <Share2 size={20} />
          </button>
        </div>
        <p className="text-sm text-green-300 font-medium mt-6 text-center">Thank You Mohit, Happy Journey !</p>
      </div>

      <div className="px-4 -mt-3">
        {/* Main Ticket Card Wrapper */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden rounded-t-sm w-full mx-auto relative border border-slate-100">
           
           {/* Top Animated Section */}
           <div className="p-[0.15rem] bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-t-sm">
             <div className="bg-[#2A2B3A] rounded-t-sm p-5 relative overflow-hidden flex flex-col items-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}}
                />
                
                {/* Side Text - Indian Railways */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[8px] font-bold tracking-widest text-[#94A3B8]">
                   INDIAN RAILWAYS
                </div>
                {/* Right Text */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10px] font-bold tracking-widest text-[#94A3B8]">
                   भारतीय रेल
                </div>

                <h3 className="text-white font-semibold text-sm z-10 mb-2">Dynamic preview will close in</h3>
                <div className="text-5xl font-black text-[#FF3B30] tracking-wider font-mono z-10 drop-shadow-[0_0_8px_rgba(255,59,48,0.5)] mb-3">
                   02:47
                </div>
                
                <span className="text-[#94A3B8] text-[10px] uppercase font-bold tracking-wider z-10">Ticket Booking Date & Time</span>
                <span className="text-[#FF9500] text-lg font-bold mt-1 z-10">10 Apr 2026, 20:29</span>
                <span className="text-[#94A3B8] text-[10px] z-10 mt-1">R15504</span>
                <span className="text-[#94A3B8] text-[10px] z-10 mt-1">Ticket is Non-Transferable</span>
             </div>
           </div>

           {/* Content Section */}
           <div className="p-6">
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-semibold text-slate-800">Journey Ticket</span>
                <span className="text-sm font-bold text-slate-800 font-mono tracking-wider">XMB7EBZ09C</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">PRAYAGRAJ JN.</span>
                <div className="flex-1 px-3 flex items-center justify-center text-[10px] text-slate-400 font-medium">
                   —329 km—
                </div>
                <span className="text-sm font-bold text-slate-700 text-right">MAU RANIPUR</span>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-medium">Via</span>
                  <span className="text-sm font-semibold text-slate-700">NYN-MKP</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-slate-500 font-medium">Passenger</span>
                  <span className="text-sm font-semibold text-slate-700">1 Adult, 0 Child</span>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-medium">Booked on</span>
                  <span className="text-xs font-semibold text-slate-700">10/04/2026 20:29</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-slate-500 font-medium">*Valid Till</span>
                  <span className="text-xs font-semibold text-slate-700">10/04/2026 23:59</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-slate-300">
                <p className="text-[11px] font-semibold text-slate-700 leading-relaxed uppercase">
                   SECOND | MAIL/EXPRESS | JOURNEY | ₹125.00<br/>
                   IR:09AAAGM0289C1ZH
                </p>
              </div>

              {/* Decorative side ticket cutouts */}
              <div className="absolute left-[-10px] bottom-[220px] w-5 h-5 bg-[#F0F2F5] rounded-full border border-slate-100"></div>
              <div className="absolute right-[-10px] bottom-[220px] w-5 h-5 bg-[#F0F2F5] rounded-full border border-slate-100"></div>
              
           </div>

           {/* Footer of card */}
           <div className="bg-slate-50 px-6 py-4 rounded-b-[2rem] border-t border-slate-100">
               <p className="text-[9px] text-slate-400 italic">
                 *Valid for start of journey by 10/04/2026 or until departure of first train
               </p>
           </div>
           
           <div className="h-4 w-full bg-gradient-to-b from-indigo-100/50 to-transparent"></div>
        </div>

        {/* Warning Note */}
        <div className="mt-6 bg-[#FFE4E1]/50 border border-red-200/50 rounded-xl p-4">
           <p className="text-[11px] text-[#FF3B30] text-center font-medium leading-relaxed">
             Note: This ticket is non refundable. Ticket is stored locally on the device. Please do not change your handset or perform factory reset.
           </p>
        </div>

        {/* Bottom Button */}
        <button className="w-full mt-6 py-4 rounded-full border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
          Book Connecting Journey
        </button>

      </div>
    </main>
  );
}
