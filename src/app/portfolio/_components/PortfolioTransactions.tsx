"use client";

import React from "react";
import Link from "next/link";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SyncIcon from "@mui/icons-material/Sync";

export default function PortfolioTransactions() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <ReceiptIcon sx={{ fontSize: 20, color: "#38bdf8" }} />
          <h3 className="text-sm font-bold text-white">Recent Transactions</h3>
        </div>
        <Link href="/transactions" className="text-xs font-semibold text-indigo-400 hover:underline">
          View All &rarr;
        </Link>
      </div>

      <div className="my-2 flex flex-col gap-3">
        {/* Tx 1 */}
        <div className="flex items-center justify-between rounded-xl p-2 transition hover:bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <SouthEastIcon sx={{ fontSize: 18 }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Bought BTC</span>
              <span className="text-[10px] text-slate-400">Apr 28, 2025 • 2:30 PM</span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-emerald-400">+0.0100 BTC</span>
            <span className="text-[10px] text-slate-400">$684.32</span>
          </div>
        </div>

        {/* Tx 2 */}
        <div className="flex items-center justify-between rounded-xl p-2 transition hover:bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/20 text-red-400">
              <NorthEastIcon sx={{ fontSize: 18 }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Sold ETH</span>
              <span className="text-[10px] text-slate-400">Apr 27, 2025 • 1:45 PM</span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-red-400">-0.5000 ETH</span>
            <span className="text-[10px] text-slate-400">$1,710.88</span>
          </div>
        </div>

        {/* Tx 3 */}
        <div className="flex items-center justify-between rounded-xl p-2 transition hover:bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <SyncIcon sx={{ fontSize: 18 }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Account Reset</span>
              <span className="text-[10px] text-slate-400">Apr 27, 2025 • 10:20 AM</span>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-400">--</span>
        </div>
      </div>

      <div className="pt-2">
        <Link
          href="/transactions"
          className="flex w-full items-center justify-center rounded-xl border border-[#222b45] bg-[#161b2e] py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/5"
        >
          View Full History &rarr;
        </Link>
      </div>
    </div>
  );
}

