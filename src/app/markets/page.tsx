"use client";

import React, { useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import SyncIcon from "@mui/icons-material/Sync";

import MarketStats from "./_components/MarketStats";
import MarketFilters from "./_components/MarketFilters";
import MarketCoinsTable from "./_components/MarketCoinsTable";
import GainersLosers from "./_components/GainersLosers";

export default function MarketsPage() {
  const [activeCategory, setActiveCategory] = useState("All Coins");
  const [currency] = useState("USD");

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Header Bar: Title + Live Status */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
            <BarChartIcon sx={{ fontSize: 26 }} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Crypto Markets</h1>
            <p className="text-xs text-slate-400">
              Explore live prices and market trends
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Market
          </span>
          <span className="text-slate-600">•</span>
          <span>Last Updated: 2:45 PM</span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2640] bg-[#131828] text-slate-300 hover:text-white"
          >
            <SyncIcon sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>

      {/* 2. Top 4 Ticker Cards */}
      <MarketStats />

      {/* 3. Category Filter Tabs */}
      <MarketFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        currency={currency}
      />

      {/* 4. Complete Markets Table */}
      <MarketCoinsTable />

      {/* 5. Bottom Two Cards: Top Gainers & Top Losers */}
      <GainersLosers />
    </div>
  );
}
