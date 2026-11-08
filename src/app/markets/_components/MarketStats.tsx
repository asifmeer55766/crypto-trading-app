"use client";

import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function MarketStats() {
  const stats = [
    {
      name: "Bitcoin (BTC)",
      price: "$68,432.12",
      change: "+2.84%",
      symbol: "₿",
      color: "#f7931a",
      chartColor: "#10b981",
      path: "M0 30 Q 30 35, 50 15 T 100 10",
    },
    {
      name: "Ethereum (ETH)",
      price: "$3,421.76",
      change: "+3.21%",
      symbol: "◆",
      color: "#627eea",
      chartColor: "#a855f7",
      path: "M0 32 Q 40 25, 60 15 T 100 8",
    },
    {
      name: "Tether (USDT)",
      price: "$1.00",
      change: "+0.01%",
      symbol: "₮",
      color: "#26a17b",
      chartColor: "#14b8a6",
      path: "M0 20 Q 30 18, 50 22 T 100 18",
    },
    {
      name: "Solana (SOL)",
      price: "$142.37",
      change: "+5.12%",
      symbol: "S",
      color: "#14f195",
      chartColor: "#a855f7",
      path: "M0 30 Q 30 20, 60 15 T 100 5",
      textColor: "text-black",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-base shadow-md ${s.textColor || "text-white"
                }`}
              style={{ backgroundColor: s.color }}
            >
              {s.symbol}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-400">{s.name}</span>
              <span className="text-base font-bold text-white">{s.price}</span>
              <span className="flex items-center text-xs font-semibold text-emerald-400">
                <ArrowDropUpIcon sx={{ fontSize: 16 }} /> {s.change}
              </span>
            </div>
          </div>
          <div className="w-16">
            <svg viewBox="0 0 100 40" className="fill-none" style={{ stroke: s.chartColor }} strokeWidth="2.5">
              <path d={s.path} />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

