"use client";

import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";

export default function SecuritySummary() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-6 shadow-sm">
      <div>
        <div className="flex items-center gap-2 pb-4 border-b border-[#1e2640]">
          <ShieldOutlinedIcon sx={{ fontSize: 20, color: "#10b981" }} />
          <h3 className="text-sm font-bold text-white">Security & 2FA</h3>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {/* 2FA */}
          <div className="flex items-center justify-between rounded-xl bg-[#161b2e] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <SmartphoneOutlinedIcon sx={{ fontSize: 18 }} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">
                  Authenticator App (2FA)
                </span>
                <span className="text-[11px] text-slate-400">
                  Google Authenticator enabled
                </span>
              </div>
            </div>
            <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
              Enabled
            </span>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between rounded-xl bg-[#161b2e] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                <LockOutlinedIcon sx={{ fontSize: 18 }} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">
                  Password
                </span>
                <span className="text-[11px] text-slate-400">
                  Last changed 3 months ago
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => alert("Change password modal")}
              className="text-xs font-semibold text-indigo-400 hover:underline"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#1e2640] pt-4 text-xs">
        <span className="text-slate-400">Security Health Score</span>
        <span className="font-bold text-emerald-400">92% (Excellent)</span>
      </div>
    </div>
  );
}

