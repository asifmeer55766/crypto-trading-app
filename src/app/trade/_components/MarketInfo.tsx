"use client";

import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function MarketInfo() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div>
        <div className="flex items-center gap-2 pb-3 border-b border-[#1e2640]">
          <InfoOutlinedIcon sx={{ fontSize: 18, color: "#38bdf8" }} />
          <h3 className="text-sm font-bold text-white">Market Info</h3>
        </div>

        {/* Coin Intro */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7931a] text-white font-bold text-lg shadow-md">
              ₿
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white">
                Bitcoin
              </span>
              <span className="text-xs font-medium text-slate-400">BTC</span>
            </div>
          </div>

          {/* Sparkline */}
          <div className="w-24">
            <svg viewBox="0 0 100 40" className="stroke-emerald-400 fill-none" strokeWidth="2.5">
              <path d="M0 35 Q 25 15, 50 25 T 80 10 T 100 5" />
            </svg>
          </div>
        </div>

        {/* Key Market Metrics */}
        <div className="mt-6 flex flex-col gap-4 border-t border-[#1e2640] pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Market Cap</span>
            <span className="text-lg font-bold text-white">$1.35T</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-400">24h Volume</span>
            <span className="text-lg font-bold text-white">$42.18B</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Circulating Supply</span>
            <span className="text-sm font-bold text-white">
              19.73M BTC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

