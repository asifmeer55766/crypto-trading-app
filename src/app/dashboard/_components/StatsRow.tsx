"use client";

import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Bitcoin (BTC) */}
      <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm transition hover:border-slate-700">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7931a] text-white font-bold shadow-md shadow-amber-500/20">
            ₿
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-400">Bitcoin (BTC)</span>
            <span className="text-lg font-bold text-white">$68,432.12</span>
            <span className="flex items-center text-xs font-semibold text-emerald-400">
              <ArrowDropUpIcon sx={{ fontSize: 18 }} /> +2.84%
            </span>
          </div>
        </div>
        {/* Mini Sparkline */}
        <div className="w-20">
          <svg viewBox="0 0 100 40" className="stroke-emerald-400 fill-none" strokeWidth="2.5">
            <path d="M0 30 Q 25 35, 40 20 T 70 25 T 100 10" />
          </svg>
        </div>
      </div>

      {/* Ethereum (ETH) */}
      <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm transition hover:border-slate-700">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#627eea] text-white font-bold shadow-md shadow-indigo-500/20">
            ◆
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-400">Ethereum (ETH)</span>
            <span className="text-lg font-bold text-white">$3,421.76</span>
            <span className="flex items-center text-xs font-semibold text-emerald-400">
              <ArrowDropUpIcon sx={{ fontSize: 18 }} /> +3.21%
            </span>
          </div>
        </div>
        {/* Mini Sparkline */}
        <div className="w-20">
          <svg viewBox="0 0 100 40" className="stroke-purple-400 fill-none" strokeWidth="2.5">
            <path d="M0 32 Q 30 15, 55 28 T 80 18 T 100 12" />
          </svg>
        </div>
      </div>

      {/* Total Portfolio */}
      <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm transition hover:border-slate-700">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 shadow-md">
            <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 24 }} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-400">Total Portfolio</span>
            <span className="text-lg font-bold text-white">$4,892.50</span>
            <span className="flex items-center text-xs font-semibold text-emerald-400">
              <ArrowDropUpIcon sx={{ fontSize: 18 }} /> +12.45%
            </span>
          </div>
        </div>
        {/* Mini Sparkline */}
        <div className="w-20">
          <svg viewBox="0 0 100 40" className="stroke-emerald-400 fill-none" strokeWidth="2.5">
            <path d="M0 35 Q 20 20, 50 25 T 75 15 T 100 5" />
          </svg>
        </div>
      </div>

      {/* Available Balance + Deposit Button */}
      <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm transition hover:border-slate-700">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 shadow-md">
            <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 24 }} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-400">Available Balance</span>
            <span className="text-lg font-bold text-white">$1,250.00</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => alert("Deposit modal triggered")}
          className="rounded-xl bg-[#4f46e5] px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-500"
        >
          Deposit
        </button>
      </div>
    </div>
  );
}

