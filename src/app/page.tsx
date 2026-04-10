import { Search, MapPin, Map, Clock, Utensils, IndianRupee, ShieldAlert, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="pt-12 px-6 pb-6 flex justify-between items-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-blue-200">
             <span className="text-blue-600 font-bold">M</span>
          </div>
          <div className="flex items-center">
             {/* Logo Placeholder */}
             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-2">
                 <div className="w-4 flex flex-col gap-[2px]">
                   <div className="h-[2px] bg-white rounded-full translate-x-1" />
                   <div className="h-[2px] bg-white rounded-full w-3/4 translate-x-2" />
                 </div>
             </div>
             <span className="text-xl font-bold text-slate-800 tracking-tight">RailOne</span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 relative">
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>
      </div>

      <div className="px-6 py-4">
        {/* More Offerings */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">More Offerings</h2>
        
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 mb-8">
          {/* Row 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-[#FFE4E1]/40 flex items-center justify-center shadow-sm">
                <Search className="text-pink-500" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">Search<br/>Trains</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-green-50/80 flex items-center justify-center shadow-sm">
                <Clock className="text-emerald-500" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">PNR<br/>Status</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center shadow-sm">
                <MapPin className="text-blue-500" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">Coach<br/>Position</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-yellow-50/80 flex items-center justify-center shadow-sm">
                <Navigation className="text-amber-500" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">Track Your<br/>Train</span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-purple-50/80 flex items-center justify-center shadow-sm">
                <Utensils className="text-purple-500" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">Order<br/>Food</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center shadow-sm">
                <IndianRupee className="text-slate-600" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">File<br/>Refund</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-red-50/80 flex items-center justify-center shadow-sm">
                <ShieldAlert className="text-red-400" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">Rail<br/>Madad</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50/80 flex items-center justify-center shadow-sm">
                <Map className="text-emerald-600" strokeWidth={1.5} size={28} />
            </div>
            <span className="text-xs font-medium text-slate-600 text-center leading-tight">Travel<br/>Feedback</span>
          </div>
        </div>

        {/* Upcoming Journey */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Upcoming Journey</h2>
        
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#8E54E9] to-[#4776E6] p-6 text-white relative overflow-hidden shadow-lg shadow-purple-500/20 mb-8">
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
           
           <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="text-sm font-medium text-white/90">Tue, 1 Jul 25</span>
              <span className="text-sm font-bold tracking-wider">22582</span>
           </div>

           <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-col">
                 <span className="text-2xl font-bold tracking-wide">NDLS</span>
                 <span className="text-xs text-white/70 mt-1">NEW DELHI</span>
              </div>
              
              <div className="flex-1 px-4 flex flex-col items-center">
                 <div className="w-full flex items-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="flex-1 h-[1px] border-t border-dashed border-white/50 relative">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 p-1 rounded-full">
                         <Search size={12} className="text-white" />
                       </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                 </div>
                 <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] mt-2 font-medium backdrop-blur-sm">
                    CHHAPRA
                 </div>
              </div>

              <div className="flex flex-col text-right">
                 <span className="text-2xl font-bold tracking-wide">CPR</span>
                 <span className="text-xs text-white/70 mt-1">CHHAPRA</span>
              </div>
           </div>

           <div className="flex items-center justify-between mt-8 relative z-10">
              <span className="text-[#A3E635] font-bold tracking-wide">Reserved</span>
              <div className="flex gap-3">
                 <button className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
                   Book Again
                 </button>
                 <Link href="/bookings">
                   <button className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
                     View Details
                   </button>
                 </Link>
              </div>
           </div>
        </div>

        {/* Large Shipment - just placeholder as in image */}
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-lg font-bold text-slate-800">Large Shipment</h2>
           <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1">
             <span className="text-xs font-semibold text-slate-500">Hide</span>
             <div className="w-8 h-4 bg-slate-300 rounded-full relative">
               <div className="w-3 h-3 bg-white rounded-full absolute top-[2px] left-[2px] shadow-sm"></div>
             </div>
           </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-10 overflow-x-hidden">
           <div className="flex flex-col items-center gap-2 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Search className="text-blue-500" size={18} />
             </div>
             <span className="text-[10px] font-medium text-slate-600 text-center leading-tight">Plan<br/>Shipment</span>
           </div>
           <div className="flex flex-col items-center gap-2 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin className="text-blue-500" size={18} />
             </div>
             <span className="text-[10px] font-medium text-slate-600 text-center leading-tight">Track<br/>Shipment</span>
           </div>
           <div className="flex flex-col items-center gap-2 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Search className="text-blue-500" size={18} />
             </div>
             <span className="text-[10px] font-medium text-slate-600 text-center leading-tight">Fare<br/>Calculator</span>
           </div>
        </div>

      </div>
    </main>
  );
}
