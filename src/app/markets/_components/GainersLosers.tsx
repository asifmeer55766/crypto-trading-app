"use client";

import React from "react";
import Link from "next/link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function GainersLosers() {
  const topGainers = [
    { id: 1, name: "Bonk", symbol: "BONK", price: "$0.000028", change: "+12.85%", color: "#f59e0b" },
    { id: 2, name: "Pepe", symbol: "PEPE", price: "$0.0000071", change: "+11.32%", color: "#10b981" },
    { id: 3, name: "Floki", symbol: "FLOKI", price: "$0.00021", change: "+10.21%", color: "#eab308" },
  ];

  const topLosers = [
    { id: 1, name: "Shiba Inu", symbol: "SHIB", price: "$0.000010", change: "-8.24%", color: "#ea580c" },
    { id: 2, name: "Avalanche", symbol: "AVAX", price: "$26.32", change: "-6.17%", color: "#e11d48" },
    { id: 3, name: "Polygon", symbol: "MATIC", price: "$0.42", change: "-5.93%", color: "#7c3aed" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Top Gainers */}
      <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
          <div className="flex items-center gap-2">
            <EmojiEventsIcon sx={{ fontSize: 20, color: "#f59e0b" }} />
            <h3 className="text-sm font-bold text-white">Top Gainers</h3>
          </div>
          <Link href="/markets?tab=gainers" className="text-xs font-semibold text-indigo-400 hover:underline">
            View All &rarr;
          </Link>
        </div>

        <div className="mt-3 flex flex-col divide-y divide-[#1e2640]/60">
          {topGainers.map((g) => (
            <div key={g.id} className="flex items-center justify-between py-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 text-slate-500">{g.id}</span>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white font-bold text-[10px]"
                  style={{ backgroundColor: g.color }}
                >
                  {g.symbol[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{g.name}</span>
                  <span className="text-[10px] text-slate-400">{g.symbol}</span>
                </div>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-semibold text-white">{g.price}</span>
                <span className="font-bold text-emerald-400">{g.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Losers */}
      <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
          <div className="flex items-center gap-2">
            <LocalFireDepartmentIcon sx={{ fontSize: 20, color: "#ef4444" }} />
            <h3 className="text-sm font-bold text-white">Top Losers</h3>
          </div>
          <Link href="/markets?tab=losers" className="text-xs font-semibold text-indigo-400 hover:underline">
            View All &rarr;
          </Link>
        </div>

        <div className="mt-3 flex flex-col divide-y divide-[#1e2640]/60">
          {topLosers.map((l) => (
            <div key={l.id} className="flex items-center justify-between py-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 text-slate-500">{l.id}</span>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white font-bold text-[10px]"
                  style={{ backgroundColor: l.color }}
                >
                  {l.symbol[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{l.name}</span>
                  <span className="text-[10px] text-slate-400">{l.symbol}</span>
                </div>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-semibold text-white">{l.price}</span>
                <span className="font-bold text-red-400">{l.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

