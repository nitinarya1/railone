import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RailOne - Premium Train Booking",
  description: "Next-generation train booking experience",
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'RailOne',
  },
};

export const viewport = {
  themeColor: '#0A64F8',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <div className="mobile-container pb-[80px]"> {/* Added padding for fixed nav */}
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
