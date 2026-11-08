"use client";

import React from "react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

export default function AccountTierCard() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-6 shadow-sm">
      <div>
        <div className="flex items-center gap-2 pb-4 border-b border-[#1e2640]">
          <WorkspacePremiumOutlinedIcon sx={{ fontSize: 20, color: "#f59e0b" }} />
          <h3 className="text-sm font-bold text-white">Tier & Trading Limits</h3>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {/* Current Tier */}
          <div className="flex items-center justify-between rounded-xl bg-[#161b2e] p-3.5">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Current Tier</span>
              <span className="text-sm font-bold text-white">VIP Trader 1</span>
            </div>
            <span className="rounded-lg bg-amber-500/15 px-2.5 py-1 text-xs font-bold text-amber-400">
              Active
            </span>
          </div>

          {/* Maker / Taker Fees */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-[#222b45] bg-[#161b2e] p-3">
              <span className="text-slate-400">Maker Fee</span>
              <p className="mt-0.5 text-sm font-bold text-emerald-400">0.05%</p>
            </div>
            <div className="rounded-xl border border-[#222b45] bg-[#161b2e] p-3">
              <span className="text-slate-400">Taker Fee</span>
              <p className="mt-0.5 text-sm font-bold text-emerald-400">0.08%</p>
            </div>
          </div>

          {/* Daily Withdrawal Bar */}
          <div className="flex flex-col gap-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Daily Withdrawal Limit</span>
              <span className="font-semibold text-white">$50,000 / $50,000</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2640]">
              <div className="h-full w-0 bg-emerald-500 rounded-full" />
            </div>
            <span className="text-[11px] text-slate-500">
              Resets every 24 hours at 00:00 UTC
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => alert("Upgrade request submitted.")}
        className="mt-6 w-full rounded-xl border border-[#222b45] bg-[#161b2e] py-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
      >
        Upgrade to VIP Tier 2 &rarr;
      </button>
    </div>
  );
}

