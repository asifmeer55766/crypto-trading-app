"use client";

import React from "react";
import Link from "next/link";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function PerformanceChart() {
  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm lg:col-span-2">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <ShowChartIcon sx={{ fontSize: 20, color: "#818cf8" }} />
          <h3 className="text-sm font-bold text-white">Performance Overview</h3>
        </div>
        <Link href="/portfolio" className="text-xs font-semibold text-indigo-400 hover:underline">
          View Details &rarr;
        </Link>
      </div>

      <div className="relative mt-4 h-64 w-full">
        {/* Floating target tag */}
        <div className="absolute right-10 top-12 rounded-lg bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white shadow-md">
          $4,892.50
        </div>

        <svg viewBox="0 0 600 200" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid */}
          <line x1="0" y1="40" x2="600" y2="40" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="600" y2="90" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="140" x2="600" y2="140" stroke="#1e2640" strokeDasharray="3 3" />

          {/* Y Labels */}
          <text x="5" y="44" fill="#64748b" fontSize="10">$6k</text>
          <text x="5" y="94" fill="#64748b" fontSize="10">$5k</text>
          <text x="5" y="144" fill="#64748b" fontSize="10">$4k</text>
          <text x="5" y="194" fill="#64748b" fontSize="10">$3k</text>

          {/* Area */}
          <path
            d="M 30 180 Q 100 150, 180 160 T 320 120 T 450 90 T 570 60 L 570 200 L 30 200 Z"
            fill="url(#perfGrad)"
          />

          {/* Line */}
          <path
            d="M 30 180 Q 100 150, 180 160 T 320 120 T 450 90 T 570 60"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />

          {/* Target Dot */}
          <circle cx="570" cy="60" r="5" fill="#10b981" />
        </svg>

        <div className="flex justify-between px-6 text-[11px] text-slate-500 pt-2">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

