"use client";

import React from "react";
import Link from "next/link";
import PieChartIcon from "@mui/icons-material/PieChart";

export default function PortfolioDonut() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <PieChartIcon sx={{ fontSize: 20, color: "#a855f7" }} />
          <h3 className="text-sm font-bold text-white">
            Your Portfolio
          </h3>
        </div>
        <Link href="/portfolio" className="text-xs font-semibold text-indigo-400 hover:underline">
          View Details &rarr;
        </Link>
      </div>

      {/* Donut Chart Visual */}
      <div className="my-4 flex items-center justify-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {/* BTC segment */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#f97316"
              strokeWidth="10"
              strokeDasharray="100 140"
              strokeDashoffset="0"
            />
            {/* ETH segment */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#8b5cf6"
              strokeWidth="10"
              strokeDasharray="83 157"
              strokeDashoffset="-100"
            />
            {/* USDT segment */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="10"
              strokeDasharray="55 185"
              strokeDashoffset="-183"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-sm font-bold text-white">$4,892.50</span>
            <span className="text-[10px] text-slate-400">Total Value</span>
          </div>
        </div>
      </div>

      {/* Allocation Legend */}
      <div className="grid grid-cols-3 gap-2 text-center border-t border-[#1e2640] pt-3 text-xs">
        <div>
          <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mr-1" />
          <span className="text-slate-400">BTC</span>
          <p className="font-bold text-white">42.1%</p>
        </div>
        <div>
          <span className="inline-block h-2 w-2 rounded-full bg-purple-500 mr-1" />
          <span className="text-slate-400">ETH</span>
          <p className="font-bold text-white">34.7%</p>
        </div>
        <div>
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-1" />
          <span className="text-slate-400">USDT</span>
          <p className="font-bold text-white">23.2%</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#161b2e] px-3.5 py-2 text-xs">
        <span className="text-slate-400">Profit / Loss</span>
        <span className="font-bold text-emerald-400">▲ +$583.20 (+12.45%)</span>
      </div>
    </div>
  );
}

