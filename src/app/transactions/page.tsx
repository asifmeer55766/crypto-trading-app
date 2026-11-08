"use client";

import React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import TransactionStats from "./_components/TransactionStats";
import TransactionTable from "./_components/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Header Bar: Title + Date Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
            <SwapHorizIcon sx={{ fontSize: 26 }} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Transactions</h1>
            <p className="text-xs text-slate-400">
              View your complete transaction history
            </p>
          </div>
        </div>

        {/* Date Filter Dropdown */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-[#1e2640] bg-[#131828] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:border-slate-600"
        >
          <CalendarTodayOutlinedIcon sx={{ fontSize: 16, color: "#818cf8" }} />
          <span>Last 30 Days</span>
          <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "#94a3b8" }} />
        </button>
      </div>

      {/* 2. Top 4 Metric Cards */}
      <TransactionStats />

      {/* 3. Transaction History Table */}
      <TransactionTable />
    </div>
  );
}

