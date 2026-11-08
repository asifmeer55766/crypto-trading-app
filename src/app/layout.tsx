import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Sidebar from "@/src/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoTrade - Trade Smarter",
  description:
    "A full stack application for cryptocurrency & asset trading like Bitcoin, Ethereum, and Gold.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#0b0e17] text-slate-100">
        <div className="flex min-h-screen">
          {/* Left Sidebar from Dashboard.png */}
          <Sidebar />

          {/* Main Area: Top Header + Page Content */}
          <div className="flex flex-1 flex-col min-w-0">
            <Header />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
