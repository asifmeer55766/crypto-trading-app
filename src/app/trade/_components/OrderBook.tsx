"use client";

import React from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";

export default function OrderBook() {
  const asks = [
    { price: "68,436.21", amount: "0.5231", total: "35,777.12" },
    { price: "68,435.87", amount: "0.4120", total: "28,208.18" },
    { price: "68,435.23", amount: "0.3205", total: "21,922.46" },
    { price: "68,434.56", amount: "0.2100", total: "14,342.15" },
    { price: "68,434.22", amount: "0.1050", total: "7,188.24" },
  ];

  const bids = [
    { price: "68,432.11", amount: "0.1200", total: "8,211.85" },
    { price: "68,431.77", amount: "0.2500", total: "17,107.94" },
    { price: "68,431.20", amount: "0.3750", total: "25,661.70" },
    { price: "68,430.85", amount: "0.4820", total: "33,018.03" },
    { price: "68,430.22", amount: "0.6000", total: "41,058.13" },
  ];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center gap-2 pb-3 border-b border-[#1e2640]">
        <ReceiptIcon sx={{ fontSize: 18, color: "#818cf8" }} />
        <h3 className="text-sm font-bold text-white">Order Book</h3>
      </div>

      {/* Table Header */}
      <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-500">
        <span>Price (USDT)</span>
        <span>Amount (BTC)</span>
        <span>Total (USDT)</span>
      </div>

      {/* Asks (Sell Orders - Red) */}
      <div className="mt-2 flex flex-col gap-1">
        {asks.map((ask, idx) => (
          <div key={idx} className="flex justify-between text-xs py-0.5">
            <span className="font-medium text-red-400">{ask.price}</span>
            <span className="text-slate-300">{ask.amount}</span>
            <span className="text-slate-400">{ask.total}</span>
          </div>
        ))}
      </div>

      {/* Current Spread Price */}
      <div className="my-2.5 flex items-center justify-between rounded-lg bg-[#161b2e] px-3 py-1.5 text-xs font-bold">
        <span className="text-emerald-400 text-sm">68,432.12</span>
        <span className="text-emerald-400 text-[11px]">▲ +2.84%</span>
      </div>

      {/* Bids (Buy Orders - Green) */}
      <div className="flex flex-col gap-1">
        {bids.map((bid, idx) => (
          <div key={idx} className="flex justify-between text-xs py-0.5">
            <span className="font-medium text-emerald-400">{bid.price}</span>
            <span className="text-slate-300">{bid.amount}</span>
            <span className="text-slate-400">{bid.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

