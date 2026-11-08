"use client";

import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function TransactionStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Trades */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400">
          <ArrowUpwardIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Total Trades</span>
          <span className="text-lg font-bold text-white">12</span>
          <span className="flex items-center text-xs font-semibold text-emerald-400">
            <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +20.0%
          </span>
        </div>
      </div>

      {/* Total Spent */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
          <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Total Spent</span>
          <span className="text-lg font-bold text-white">$1,245.50</span>
          <span className="flex items-center text-xs font-semibold text-emerald-400">
            <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +12.5%
          </span>
        </div>
      </div>

      {/* Total Received */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
          <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Total Received</span>
          <span className="text-lg font-bold text-white">$1,342.75</span>
          <span className="flex items-center text-xs font-semibold text-emerald-400">
            <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +18.3%
          </span>
        </div>
      </div>

      {/* Net Profit / Loss */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
          <TrendingUpIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Net Profit/Loss</span>
          <span className="text-lg font-bold text-white">+$97.25</span>
          <span className="flex items-center text-xs font-semibold text-emerald-400">
            <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +7.8%
          </span>
        </div>
      </div>
    </div>
  );
}

