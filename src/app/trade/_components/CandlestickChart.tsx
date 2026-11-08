"use client";

import React, { useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function CandlestickChart() {
  const [selectedInterval, setSelectedInterval] = useState("1h");
  const [chartMode, setChartMode] = useState<"tradingview" | "depth">("tradingview");

  const intervals = ["1m", "5m", "15m", "1h", "4h", "1D", "1W"];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm lg:col-span-2">
      {/* Chart Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e2640] pb-3.5">
        {/* Interval Chips */}
        <div className="flex items-center gap-1">
          {intervals.map((intv) => (
            <button
              key={intv}
              type="button"
              onClick={() => setSelectedInterval(intv)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                selectedInterval === intv
                  ? "bg-[#4f46e5] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {intv}
            </button>
          ))}

          <div className="mx-2 h-4 w-px bg-[#1e2640]" />

          {/* Chart Indicator toggles */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-slate-400 hover:text-white"
          >
            <BarChartIcon sx={{ fontSize: 16 }} />
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-slate-400 hover:text-white"
          >
            <span>Indicators</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
          </button>
        </div>

        {/* TradingView / Depth Mode */}
        <div className="flex items-center rounded-xl bg-[#161b2e] p-1">
          <button
            type="button"
            onClick={() => setChartMode("tradingview")}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
              chartMode === "tradingview"
                ? "bg-[#4f46e5] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            TradingView
          </button>
          <button
            type="button"
            onClick={() => setChartMode("depth")}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
              chartMode === "depth"
                ? "bg-[#4f46e5] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Depth
          </button>
        </div>
      </div>

      {/* Candlestick Canvas SVG Graphic */}
      <div className="relative mt-4 h-80 w-full overflow-hidden">
        {/* Price Current Indicator Line */}
        <div className="absolute right-0 top-[88px] flex items-center z-10">
          <div className="h-px w-full border-t border-dashed border-emerald-500/80" />
          <span className="rounded-l bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
            68,432.12
          </span>
        </div>

        {/* Candlestick SVG Graphic with Moving Averages & Volume Bars */}
        <svg viewBox="0 0 650 280" className="h-full w-full">
          {/* Grid Horizontal */}
          <line x1="0" y1="40" x2="600" y2="40" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="600" y2="90" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="140" x2="600" y2="140" stroke="#1e2640" strokeDasharray="3 3" />
          <line x1="0" y1="190" x2="600" y2="190" stroke="#1e2640" strokeDasharray="3 3" />

          {/* Price Y-Axis Labels */}
          <text x="605" y="44" fill="#64748b" fontSize="10">70,000.00</text>
          <text x="605" y="94" fill="#64748b" fontSize="10">68,432.12</text>
          <text x="605" y="144" fill="#64748b" fontSize="10">66,000.00</text>
          <text x="605" y="194" fill="#64748b" fontSize="10">64,000.00</text>
          <text x="605" y="244" fill="#64748b" fontSize="10">62,000.00</text>

          {/* Moving Average Lines */}
          <path
            d="M 10 160 Q 100 170, 200 135 T 350 115 T 450 85 T 580 90"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.8"
            opacity="0.85"
          />
          <path
            d="M 10 145 Q 120 150, 220 125 T 380 100 T 480 80 T 580 95"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.8"
            opacity="0.75"
          />

          {/* Candlesticks Sample Data */}
          <line x1="20" y1="140" x2="20" y2="175" stroke="#10b981" strokeWidth="1.5" />
          <rect x="16" y="145" width="8" height="25" fill="#10b981" rx="1" />

          <line x1="38" y1="135" x2="38" y2="185" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="34" y="145" width="8" height="30" fill="#ef4444" rx="1" />

          <line x1="56" y1="130" x2="56" y2="160" stroke="#10b981" strokeWidth="1.5" />
          <rect x="52" y="135" width="8" height="20" fill="#10b981" rx="1" />

          <line x1="74" y1="125" x2="74" y2="170" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="70" y="135" width="8" height="25" fill="#ef4444" rx="1" />

          <line x1="92" y1="130" x2="92" y2="180" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="88" y="140" width="8" height="35" fill="#ef4444" rx="1" />

          <line x1="110" y1="120" x2="110" y2="165" stroke="#10b981" strokeWidth="1.5" />
          <rect x="106" y="125" width="8" height="30" fill="#10b981" rx="1" />

          <line x1="128" y1="115" x2="128" y2="155" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="124" y="120" width="8" height="25" fill="#ef4444" rx="1" />

          <line x1="146" y1="110" x2="146" y2="150" stroke="#10b981" strokeWidth="1.5" />
          <rect x="142" y="115" width="8" height="25" fill="#10b981" rx="1" />

          <line x1="164" y1="100" x2="164" y2="140" stroke="#10b981" strokeWidth="1.5" />
          <rect x="160" y="105" width="8" height="30" fill="#10b981" rx="1" />

          <line x1="182" y1="105" x2="182" y2="145" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="178" y="110" width="8" height="25" fill="#ef4444" rx="1" />

          <line x1="200" y1="95" x2="200" y2="135" stroke="#10b981" strokeWidth="1.5" />
          <rect x="196" y="100" width="8" height="28" fill="#10b981" rx="1" />

          <line x1="218" y1="85" x2="218" y2="130" stroke="#10b981" strokeWidth="1.5" />
          <rect x="214" y="90" width="8" height="32" fill="#10b981" rx="1" />

          <line x1="236" y1="80" x2="236" y2="125" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="232" y="85" width="8" height="30" fill="#ef4444" rx="1" />

          <line x1="254" y1="75" x2="254" y2="115" stroke="#10b981" strokeWidth="1.5" />
          <rect x="250" y="80" width="8" height="28" fill="#10b981" rx="1" />

          <line x1="272" y1="65" x2="272" y2="105" stroke="#10b981" strokeWidth="1.5" />
          <rect x="268" y="70" width="8" height="30" fill="#10b981" rx="1" />

          <line x1="290" y1="70" x2="290" y2="115" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="286" y="75" width="8" height="32" fill="#ef4444" rx="1" />

          <line x1="308" y1="75" x2="308" y2="120" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="304" y="80" width="8" height="30" fill="#ef4444" rx="1" />

          <line x1="326" y1="70" x2="326" y2="110" stroke="#10b981" strokeWidth="1.5" />
          <rect x="322" y="75" width="8" height="28" fill="#10b981" rx="1" />

          <line x1="344" y1="60" x2="344" y2="100" stroke="#10b981" strokeWidth="1.5" />
          <rect x="340" y="65" width="8" height="30" fill="#10b981" rx="1" />

          <line x1="362" y1="68" x2="362" y2="108" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="358" y="72" width="8" height="25" fill="#ef4444" rx="1" />

          <line x1="380" y1="65" x2="380" y2="105" stroke="#10b981" strokeWidth="1.5" />
          <rect x="376" y="70" width="8" height="22" fill="#10b981" rx="1" />

          {/* Volume Bars */}
          <rect x="16" y="240" width="8" height="20" fill="#10b981" opacity="0.6" />
          <rect x="34" y="235" width="8" height="25" fill="#ef4444" opacity="0.6" />
          <rect x="52" y="245" width="8" height="15" fill="#10b981" opacity="0.6" />
          <rect x="70" y="238" width="8" height="22" fill="#ef4444" opacity="0.6" />
          <rect x="88" y="225" width="8" height="35" fill="#ef4444" opacity="0.6" />
          <rect x="106" y="240" width="8" height="20" fill="#10b981" opacity="0.6" />
          <rect x="124" y="244" width="8" height="16" fill="#ef4444" opacity="0.6" />
          <rect x="142" y="235" width="8" height="25" fill="#10b981" opacity="0.6" />
          <rect x="160" y="230" width="8" height="30" fill="#10b981" opacity="0.6" />
          <rect x="178" y="242" width="8" height="18" fill="#ef4444" opacity="0.6" />
          <rect x="196" y="235" width="8" height="25" fill="#10b981" opacity="0.6" />
          <rect x="214" y="228" width="8" height="32" fill="#10b981" opacity="0.6" />
          <rect x="232" y="238" width="8" height="22" fill="#ef4444" opacity="0.6" />
          <rect x="250" y="230" width="8" height="30" fill="#10b981" opacity="0.6" />
          <rect x="268" y="220" width="8" height="40" fill="#10b981" opacity="0.6" />
          <rect x="286" y="228" width="8" height="32" fill="#ef4444" opacity="0.6" />
          <rect x="304" y="236" width="8" height="24" fill="#ef4444" opacity="0.6" />
          <rect x="322" y="232" width="8" height="28" fill="#10b981" opacity="0.6" />
          <rect x="340" y="225" width="8" height="35" fill="#10b981" opacity="0.6" />
          <rect x="358" y="238" width="8" height="22" fill="#ef4444" opacity="0.6" />
          <rect x="376" y="242" width="8" height="18" fill="#10b981" opacity="0.6" />
        </svg>

        {/* Bottom Timestamps */}
        <div className="flex justify-between px-4 text-[11px] text-slate-500 pt-2">
          <span>12:00</span>
          <span>18:00</span>
          <span>Nov 8</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
        </div>
      </div>
    </div>
  );
}

