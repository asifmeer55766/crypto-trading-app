"use client";

import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function PortfolioStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Portfolio Value */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
          <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Total Portfolio Value</span>
          <span className="text-lg font-bold text-white">$4,892.50</span>
          <span className="flex items-center text-xs font-semibold text-emerald-400">
            <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +12.45%
          </span>
        </div>
      </div>

      {/* Total Profit / Loss */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400">
          <TrendingUpIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Total Profit / Loss</span>
          <span className="text-lg font-bold text-white">+$583.20</span>
          <span className="flex items-center text-xs font-semibold text-emerald-400">
            <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +12.45%
          </span>
        </div>
      </div>

      {/* Total Invested */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400">
          <PaidOutlinedIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">Total Invested</span>
          <span className="text-lg font-bold text-white">$4,309.30</span>
        </div>
      </div>

      {/* 24h Change */}
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-600/20 text-yellow-400">
          <StarOutlineIcon sx={{ fontSize: 24 }} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400">24h Change</span>
          <span className="text-lg font-bold text-emerald-400">▲ +$170.25</span>
          <span className="text-xs font-semibold text-emerald-400">+3.60%</span>
        </div>
      </div>
    </div>
  );
}

