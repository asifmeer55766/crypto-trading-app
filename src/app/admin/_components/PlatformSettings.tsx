"use client";

import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";

export default function PlatformSettings() {
  const [makerFee, setMakerFee] = useState("0.05");
  const [takerFee, setTakerFee] = useState("0.08");
  const [maintenance, setMaintenance] = useState(false);
  const [maxWithdrawal, setMaxWithdrawal] = useState("50000");

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div>
        <div className="flex items-center gap-2 pb-4 border-b border-[#1e2640]">
          <TuneIcon sx={{ fontSize: 20, color: "#a855f7" }} />
          <h3 className="text-sm font-bold text-white">Platform Settings</h3>
        </div>

        <div className="mt-4 flex flex-col gap-4 text-xs">
          {/* Maintenance Mode Toggle */}
          <div className="flex items-center justify-between rounded-xl bg-[#161b2e] p-3">
            <div className="flex flex-col">
              <span className="font-semibold text-white">Maintenance Mode</span>
              <span className="text-[11px] text-slate-400">Suspend trading during platform updates</span>
            </div>
            <button
              type="button"
              onClick={() => setMaintenance(!maintenance)}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                maintenance ? "bg-red-500" : "bg-[#222b45]"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  maintenance ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          {/* Fee Configuration */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 font-medium">Default Maker Fee (%)</label>
              <input
                type="number"
                value={makerFee}
                onChange={(e) => setMakerFee(e.target.value)}
                className="rounded-xl border border-[#222b45] bg-[#161b2e] px-3.5 py-2 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 font-medium">Default Taker Fee (%)</label>
              <input
                type="number"
                value={takerFee}
                onChange={(e) => setTakerFee(e.target.value)}
                className="rounded-xl border border-[#222b45] bg-[#161b2e] px-3.5 py-2 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Max Withdrawal Limit */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-400 font-medium">Daily Max Withdrawal (USD)</label>
            <input
              type="number"
              value={maxWithdrawal}
              onChange={(e) => setMaxWithdrawal(e.target.value)}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-3.5 py-2 text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => alert("Platform configuration updated.")}
        className="mt-6 rounded-xl bg-[#4f46e5] py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-600/30 transition hover:bg-indigo-500"
      >
        Update Platform Rules
      </button>
    </div>
  );
}

