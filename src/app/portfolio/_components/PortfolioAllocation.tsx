"use client";

import React from "react";
import Link from "next/link";
import PieChartIcon from "@mui/icons-material/PieChart";

export default function PortfolioAllocation() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <PieChartIcon sx={{ fontSize: 20, color: "#a855f7" }} />
          <h3 className="text-sm font-bold text-white">Portfolio Allocation</h3>
        </div>
        <Link href="/portfolio" className="text-xs font-semibold text-indigo-400 hover:underline">
          View Details &rarr;
        </Link>
      </div>

      {/* Donut Chart Visual */}
      <div className="my-6 flex items-center justify-center">
        <div className="relative flex h-44 w-44 items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {/* BTC */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#f97316"
              strokeWidth="11"
              strokeDasharray="100 140"
              strokeDashoffset="0"
            />
            {/* ETH */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#8b5cf6"
              strokeWidth="11"
              strokeDasharray="83 157"
              strokeDashoffset="-100"
            />
            {/* SOL */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#06b6d4"
              strokeWidth="11"
              strokeDasharray="55 185"
              strokeDashoffset="-183"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-base font-bold text-white">$4,892.50</span>
            <span className="text-xs text-slate-400">Total Value</span>
          </div>
        </div>
      </div>

      {/* Legend list */}
      <div className="flex flex-col gap-2.5 border-t border-[#1e2640] pt-4 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="text-slate-300 font-medium">Bitcoin (BTC)</span>
          </div>
          <span className="font-bold text-white">42.1%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
            <span className="text-slate-300 font-medium">Ethereum (ETH)</span>
          </div>
          <span className="font-bold text-white">34.7%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
            <span className="text-slate-300 font-medium">Solana (SOL)</span>
          </div>
          <span className="font-bold text-white">23.2%</span>
        </div>
      </div>
    </div>
  );
}

