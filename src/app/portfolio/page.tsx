"use client";

import React, { useState } from "react";
import PieChartIcon from "@mui/icons-material/PieChart";
import PortfolioStats from "./_components/PortfolioStats";
import PortfolioAllocation from "./_components/PortfolioAllocation";
import HoldingsTable from "./_components/HoldingsTable";
import PerformanceChart from "./_components/PerformanceChart";
import PortfolioTransactions from "./_components/PortfolioTransactions";

export default function PortfolioPage() {
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const timeframes = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Header Bar: Title & Timeframe Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
            <PieChartIcon sx={{ fontSize: 26 }} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">My Portfolio</h1>
            <p className="text-xs text-slate-400">
              Track your holdings and performance
            </p>
          </div>
        </div>

        {/* Timeframe Chips */}
        <div className="flex items-center rounded-xl bg-[#161b2e] p-1">
          {timeframes.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setActiveTimeframe(tf)}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                activeTimeframe === tf
                  ? "bg-[#4f46e5] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Top 4 Metric Cards */}
      <PortfolioStats />

      {/* 3. Middle Section: Portfolio Allocation (Left) + Holdings Table (Right) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PortfolioAllocation />
        <div className="lg:col-span-2">
          <HoldingsTable />
        </div>
      </div>

      {/* 4. Bottom Section: Performance Overview (Left) + Recent Transactions (Right) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PerformanceChart />
        <PortfolioTransactions />
      </div>
    </div>
  );
}

