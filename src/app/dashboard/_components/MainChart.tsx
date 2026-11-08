"use client";

import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function MainChart() {
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const timeframes = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm lg:col-span-2">
      {/* Chart Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e2640] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7931a] text-white font-bold">
            ₿
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-white">
                Bitcoin (BTC)
              </span>
              <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#94a3b8" }} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white">
                $68,432.12
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                ▲ +2.84% (24h)
              </span>
            </div>
          </div>
        </div>

        {/* Timeframe Chips */}
        <div className="flex items-center rounded-xl bg-[#1a2035] p-1">
          {timeframes.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setActiveTimeframe(tf)}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                activeTimeframe === tf
                  ? "bg-[#4f46e5] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Glow Chart */}
      <div className="relative mt-4 h-64 w-full">
        {/* Floating Price Badge */}
        <div className="absolute right-12 top-6 rounded-lg bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white shadow-md">
          $68,432.12
        </div>

        {/* Chart SVG */}
        <svg viewBox="0 0 600 200" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line x1="0" y1="40" x2="600" y2="40" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="600" y2="90" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="140" x2="600" y2="140" stroke="#1e2640" strokeDasharray="3 3" />

          {/* Area */}
          <path
            d="M 0 170 Q 50 140, 100 150 T 200 120 T 300 80 T 400 90 T 500 50 T 600 40 L 600 200 L 0 200 Z"
            fill="url(#chartGradient)"
          />

          {/* Glowing Line */}
          <path
            d="M 0 170 Q 50 140, 100 150 T 200 120 T 300 80 T 400 90 T 500 50 T 600 40"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />

          {/* End Point Glow */}
          <circle cx="600" cy="40" r="4.5" fill="#10b981" />
        </svg>

        {/* X-Axis Labels */}
        <div className="flex justify-between text-[11px] text-slate-500 pt-2">
          <span>12AM</span>
          <span>4AM</span>
          <span>8AM</span>
          <span>12PM</span>
          <span>4PM</span>
          <span>8PM</span>
        </div>
      </div>
    </div>
  );
}

