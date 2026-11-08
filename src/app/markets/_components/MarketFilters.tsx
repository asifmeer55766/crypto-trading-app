"use client";

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface MarketFiltersProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  currency: string;
}

export default function MarketFilters({
  activeCategory,
  onSelectCategory,
  currency,
}: MarketFiltersProps) {
  const categories = [
    "All Coins",
    "★ Favorites",
    "↑ Top Gainers",
    "↓ Top Losers",
    "Bitcoin",
    "Ethereum",
    "Stablecoins",
    "DeFi",
    "NFT",
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
              activeCategory === cat
                ? "bg-[#4f46e5] text-white shadow-md shadow-indigo-600/30"
                : "border border-[#1e2640] bg-[#131828] text-slate-300 hover:border-slate-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex items-center gap-1.5 rounded-xl border border-[#1e2640] bg-[#131828] px-3.5 py-2 text-xs font-semibold text-white hover:border-slate-600"
      >
        <span>{currency}</span>
        <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "#94a3b8" }} />
      </button>
    </div>
  );
}

