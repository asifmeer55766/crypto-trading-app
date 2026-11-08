"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// MUI Components & Icons
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

export default function Sidebar() {
  const pathname = usePathname();

  const mainNavItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (active: boolean) => (
        <HomeRoundedIcon
          sx={{
            fontSize: 21,
            color: active ? "#ffffff" : "#94a3b8",
          }}
        />
      ),
      hasChevron: false,
    },
    {
      label: "Markets",
      href: "/markets",
      icon: (active: boolean) => (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={active ? "#ffffff" : "#94a3b8"}
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="6" y1="20" x2="6" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="18" y1="20" x2="18" y2="14" />
        </svg>
      ),
      hasChevron: false,
    },
    {
      label: "Trade",
      href: "/trade",
      icon: (active: boolean) => (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={active ? "#ffffff" : "#94a3b8"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 8l-4 4 4 4" />
          <path d="M3 12h14" />
          <path d="M17 16l4-4-4-4" />
          <path d="M21 12H7" />
        </svg>
      ),
      hasChevron: true,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: (active: boolean) => (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={active ? "#ffffff" : "#94a3b8"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      hasChevron: false,
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: (active: boolean) => (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke={active ? "#ffffff" : "#94a3b8"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <line x1="7" y1="9" x2="17" y2="9" />
          <line x1="7" y1="13" x2="13" y2="13" />
        </svg>
      ),
      hasChevron: false,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (active: boolean) => (
        <PersonOutlineRoundedIcon
          sx={{
            fontSize: 21,
            color: active ? "#ffffff" : "#94a3b8",
          }}
        />
      ),
      hasChevron: false,
    },
    {
      label: "Admin Panel",
      href: "/admin",
      icon: (active: boolean) => (
        <ShieldOutlinedIcon
          sx={{
            fontSize: 21,
            color: active ? "#ffffff" : "#94a3b8",
          }}
        />
      ),
      hasChevron: true,
    },
  ];

  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col justify-between border-r border-[#1a2238] bg-[#0c101d] px-4 py-5 select-none">
      {/* Upper Section: Brand & Nav Items */}
      <div className="flex flex-col gap-7">
        {/* Logo / Brand Header */}
        <Link href="/" className="flex items-center gap-3 px-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#4f46e5] shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white leading-tight">
              CryptoTrade
            </span>
            <span className="text-xs text-[#8f9bb3] leading-tight font-medium">
              Trade Smarter
            </span>
          </div>
        </Link>

        {/* Navigation List */}
        <nav className="flex flex-col gap-1.5">
          {mainNavItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard" || pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#4f46e5] text-white shadow-md shadow-indigo-600/30 font-semibold"
                    : "text-[#94a3b8] hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex items-center justify-center">
                    {item.icon(isActive)}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.hasChevron && (
                  <ChevronRightRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: isActive ? "#ffffff" : "#64748b",
                    }}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Lower Section: Account Actions & Rewards Card */}
      <div className="flex flex-col gap-4">
        {/* Reset Account & Logout */}
        <div className="flex flex-col gap-1 border-t border-[#1a2238] pt-3">
          <button
            type="button"
            onClick={() => {
              if (confirm("Reset demo balance to $10,000?")) {
                alert("Account reset successfully.");
              }
            }}
            className="flex items-center gap-3.5 rounded-xl px-3.5 py-2 text-left text-sm font-medium text-[#94a3b8] transition-colors hover:bg-white/5 hover:text-white"
          >
            <SyncRoundedIcon sx={{ fontSize: 20, color: "#94a3b8" }} />
            <span>Reset Account</span>
          </button>

          <button
            type="button"
            onClick={() => alert("Logged out successfully")}
            className="flex items-center gap-3.5 rounded-xl px-3.5 py-2 text-left text-sm font-medium text-[#94a3b8] transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogoutRoundedIcon sx={{ fontSize: 20, color: "#94a3b8" }} />
            <span>Logout</span>
          </button>
        </div>

        {/* Promo Card: "Trade More, Earn More!" matching Figma */}
        <div className="relative overflow-hidden rounded-2xl border border-[#2b2759] bg-gradient-to-br from-[#1a1638] via-[#12162b] to-[#0c101e] p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-snug">
                Trade More,
                <br />
                Earn More!
              </span>
              <p className="mt-1 text-[11px] text-[#8f9bb3] leading-tight">
                Get exclusive rewards
                <br />
                for active trading.
              </p>
            </div>

            {/* 3D Gift Box Visual */}
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-sm" />
              <svg
                className="relative h-8 w-8 text-indigo-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" rx="1" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
            </div>
          </div>

          <Link
            href="/rewards"
            className="mt-3.5 inline-flex items-center gap-1.5 rounded-xl bg-[#4f46e5] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            <span>Learn More</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
