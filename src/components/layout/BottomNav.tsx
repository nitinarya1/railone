import Link from 'next/link';
import { Home, Ticket, FileSearch, Menu } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full max-w-[480px] bg-blue-600 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 overflow-hidden">
      <div className="flex justify-between items-center px-6 py-3">
        
        <Link href="/" className="flex flex-col items-center gap-1 opacity-100 transition-opacity">
          <div className="bg-white/20 p-2 rounded-2xl mb-1">
             <Home size={22} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white text-[10px] font-semibold tracking-wide">Home</span>
        </Link>
        
        <Link href="/bookings" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
           <div className="p-2 mb-1">
             <Ticket size={22} className="text-white" />
           </div>
          <span className="text-white/80 text-[10px] font-medium tracking-wide">My Bookings</span>
        </Link>
        
        <Link href="/pnr" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
          <div className="p-2 mb-1">
             <FileSearch size={22} className="text-white" />
          </div>
          <span className="text-white/80 text-[10px] font-medium tracking-wide">PNR</span>
        </Link>
        
        <Link href="/menu" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
           <div className="p-2 mb-1">
             <Menu size={22} className="text-white" />
           </div>
          <span className="text-white/80 text-[10px] font-medium tracking-wide">Menu</span>
        </Link>
        
      </div>
    </div>
  );
}
