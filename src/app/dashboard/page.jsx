"use client";

import React from "react";
import StatsRow from "./_components/StatsRow";
import MainChart from "./_components/MainChart";
import QuickTrade from "./_components/QuickTrade";
import TopCryptosTable from "./_components/TopCryptosTable";
import PortfolioDonut from "./_components/PortfolioDonut";
import RecentTransactions from "./_components/RecentTransactions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Top Stat Cards Row */}
      <StatsRow />

      {/* 2. Middle Row: Glowing Area Chart (Left) + Quick Trade Box (Right) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <MainChart />
        <QuickTrade />
      </div>

      {/* 3. Bottom Row: Top Coins (Left) + Portfolio Donut (Center) + Recent Transactions (Right) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <TopCryptosTable />
        <PortfolioDonut />
        <RecentTransactions />
      </div>
    </div>
  );
}

