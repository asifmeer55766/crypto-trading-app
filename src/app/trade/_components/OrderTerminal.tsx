"use client";

import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface OrderTerminalProps {
  initialTab?: "buy" | "sell";
}

export default function OrderTerminal({ initialTab = "buy" }: OrderTerminalProps) {
  const [tradeTab, setTradeTab] = useState<"buy" | "sell">(initialTab);
  const [orderType, setOrderType] = useState("Market Order");
  const [amount, setAmount] = useState("100");
  const [percentage, setPercentage] = useState("25%");

  const percentages = ["25%", "50%", "75%", "100%"];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div>
        {/* Buy / Sell Tabs */}
        <div className="grid grid-cols-2 rounded-xl bg-[#161b2e] p-1">
          <button
            type="button"
            onClick={() => setTradeTab("buy")}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              tradeTab === "buy"
                ? "bg-[#10b981] text-white shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setTradeTab("sell")}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              tradeTab === "sell"
                ? "bg-red-500 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sell
          </button>
        </div>

        {/* Order Type */}
        <div className="mt-4 flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-slate-400">Order Type</span>
            <InfoOutlinedIcon sx={{ fontSize: 14, color: "#64748b" }} />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#222b45] bg-[#161b2e] px-3.5 py-2.5">
            <span className="text-sm font-semibold text-white">
              {orderType}
            </span>
            <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#94a3b8" }} />
          </div>
        </div>

        {/* Amount with Available Balance */}
        <div className="mt-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-400">Amount</span>
            <span className="text-slate-400">Available: 1,250.00 USDT</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#222b45] bg-[#161b2e] px-3.5 py-2.5">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none"
            />
            <span className="text-xs font-bold text-slate-400">USDT</span>
          </div>
        </div>

        {/* Percentage Chips */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {percentages.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPercentage(p)}
              className={`rounded-lg py-1.5 text-xs font-semibold transition ${
                percentage === p
                  ? "bg-[#4f46e5] text-white shadow-sm"
                  : "border border-[#222b45] bg-[#161b2e] text-slate-300 hover:border-slate-600"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* You Will Receive */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-[#161b2e] px-3.5 py-2.5 text-xs">
          <span className="text-slate-400">You Will Receive</span>
          <span className="font-bold text-white">≈ 0.001460 BTC</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={() => alert(`Executed ${tradeTab.toUpperCase()} order for ${amount} USDT`)}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10b981] py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
        <span>Buy BTC</span>
      </button>
    </div>
  );
}

