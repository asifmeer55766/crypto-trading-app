"use client";

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface TradeHeaderProps {
  onQuickBuy?: () => void;
  onQuickSell?: () => void;
}

export default function TradeHeader({ onQuickBuy, onQuickSell }: TradeHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
      {/* Left: Coin Selector & Current Price */}
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7931a] text-white font-bold text-lg shadow-md shadow-amber-500/20">
          ₿
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
            <span className="text-base font-bold text-white">
              Bitcoin (BTC)
            </span>
            <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#94a3b8" }} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-white">
              $68,432.12
            </span>
            <span className="text-xs font-semibold text-emerald-400">
              ▲ +2.84% (+$1,892.20)
            </span>
          </div>
        </div>
      </div>

      {/* Center: 24h Metrics */}
      <div className="hidden md:flex items-center gap-8 border-x border-[#1e2640] px-8">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-medium">24h High</span>
          <span className="text-sm font-bold text-white">$69,120.45</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-medium">24h Low</span>
          <span className="text-sm font-bold text-white">$66,542.12</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-medium">24h Volume</span>
          <span className="text-sm font-bold text-white">$42.18B</span>
        </div>
      </div>

      {/* Right: Quick Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onQuickBuy}
          className="flex items-center gap-2 rounded-xl bg-[#10b981] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
          <span>Buy BTC</span>
        </button>
        <button
          type="button"
          onClick={onQuickSell}
          className="flex items-center gap-2 rounded-xl bg-[#4f46e5] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-600"
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
          <span>Sell BTC</span>
        </button>
      </div>
    </div>
  );
}

