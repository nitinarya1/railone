"use client";
import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] p-4 flex justify-center max-w-[480px] mx-auto animate-in slide-in-from-top-10 fade-in duration-500">
      <div className="bg-white rounded-2xl shadow-xl w-full border border-blue-100 flex items-center p-4 gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
           <img src="/icon.svg" alt="RailOne" className="w-8 h-8 filter brightness-0 invert" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-slate-800 font-bold text-sm">Add RailOne to Homescreen</h4>
          <p className="text-slate-500 text-[10px] leading-tight mt-1">Get fast access and better mobile experience</p>
        </div>

        <button 
          onClick={handleInstallClick}
          className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-blue-700 active:scale-95 transition-all"
        >
          Install
        </button>

        <button 
          onClick={() => setShowPrompt(false)}
          className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
