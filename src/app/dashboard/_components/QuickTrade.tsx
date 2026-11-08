"use client";

import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function QuickTrade() {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState("100");
  const [selectedQuickAmount, setSelectedQuickAmount] = useState("$100");

  const quickAmounts = ["$50", "$100", "$500", "Max"];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div>
        {/* Buy / Sell Toggle Tabs */}
        <div className="grid grid-cols-2 rounded-xl bg-[#161b2e] p-1">
          <button
            type="button"
            onClick={() => setTradeType("buy")}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              tradeType === "buy"
                ? "bg-[#10b981] text-white shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setTradeType("sell")}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              tradeType === "sell"
                ? "bg-red-500 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sell
          </button>
        </div>

        {/* Coin Selector */}
        <div className="mt-4 flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-400">Select Coin</label>
          <div className="flex items-center justify-between rounded-xl border border-[#222b45] bg-[#161b2e] px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f7931a] text-xs font-bold text-white">
                ₿
              </span>
              <span className="text-sm font-semibold text-white">
                Bitcoin (BTC)
              </span>
            </div>
            <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#94a3b8" }} />
          </div>
        </div>

        {/* Amount Input */}
        <div className="mt-4 flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-400">Amount</label>
          <div className="flex items-center rounded-xl border border-[#222b45] bg-[#161b2e] px-3">
            <span className="text-xs font-semibold text-slate-400">USD</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "#94a3b8", mr: 1 }} />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent py-2.5 text-right text-sm font-semibold text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Quick Amount Chips */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {quickAmounts.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                setSelectedQuickAmount(q);
                if (q !== "Max") setAmount(q.replace("$", ""));
              }}
              className={`rounded-lg py-1.5 text-xs font-semibold transition ${
                selectedQuickAmount === q
                  ? "bg-[#4f46e5] text-white shadow-sm"
                  : "border border-[#222b45] bg-[#161b2e] text-slate-300 hover:border-slate-600"
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buy Button */}
      <button
        type="button"
        onClick={() => alert(`Submitted ${tradeType.toUpperCase()} order for $${amount}`)}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10b981] py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
        <span>Buy BTC</span>
      </button>
    </div>
  );
}

