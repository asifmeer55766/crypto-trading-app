"use client";

import React from "react";
import Link from "next/link";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function RecentTrades() {
  const recentTrades = [
    { price: "68,432.12", amount: "0.0125", time: "14:32:18", isUp: true },
    { price: "68,431.77", amount: "0.0032", time: "14:32:16", isUp: false },
    { price: "68,432.20", amount: "0.0057", time: "14:32:14", isUp: true },
    { price: "68,431.90", amount: "0.0071", time: "14:32:12", isUp: false },
    { price: "68,432.11", amount: "0.0200", time: "14:32:10", isUp: true },
    { price: "68,431.45", amount: "0.0105", time: "14:32:08", isUp: false },
    { price: "68,432.12", amount: "0.0150", time: "14:32:06", isUp: true },
  ];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <FlashOnIcon sx={{ fontSize: 18, color: "#a855f7" }} />
          <h3 className="text-sm font-bold text-white">Recent Trades</h3>
        </div>
        <Link href="/trades" className="text-xs font-semibold text-indigo-400 hover:underline">
          View All &rarr;
        </Link>
      </div>

      {/* Table Header */}
      <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-500">
        <span>Price (USDT)</span>
        <span>Amount (BTC)</span>
        <span>Time</span>
      </div>

      {/* Trades Rows */}
      <div className="mt-2 flex flex-col gap-2">
        {recentTrades.map((t, idx) => (
          <div key={idx} className="flex justify-between text-xs py-0.5 items-center">
            <span
              className={`font-semibold flex items-center ${
                t.isUp ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {t.isUp ? "↑ " : "↓ "} {t.price}
            </span>
            <span className="text-slate-300">{t.amount}</span>
            <span className="text-slate-400 text-[11px]">{t.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

