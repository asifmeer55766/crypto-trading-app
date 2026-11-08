"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

export default function ProfileHeader() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#1e2640] bg-[#131828] p-6 shadow-sm">
      {/* Background Glow Banner */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-blue-900/20" />

      <div className="relative flex flex-wrap items-end justify-between gap-4 pt-6">
        <div className="flex items-end gap-5">
          {/* Avatar with Camera Overlay */}
          <div className="relative">
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80"
              alt="John Doe"
              sx={{
                width: 80,
                height: 80,
                border: "3px solid #131828",
                boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
              }}
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#4f46e5] text-white shadow-md transition hover:bg-indigo-500"
              aria-label="Upload photo"
            >
              <CameraAltOutlinedIcon sx={{ fontSize: 15 }} />
            </button>
          </div>

          {/* User Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white leading-tight">
                John Doe
              </h2>
              <VerifiedIcon sx={{ fontSize: 18, color: "#10b981" }} />
            </div>
            <span className="text-xs text-slate-400 mt-0.5">
              john.doe@gmail.com
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-md bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
                <svg
                  className="h-3 w-3 fill-amber-400 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
                Premium Trader
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400">
                Member since Jan 2024
              </span>
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400">
            KYC Level 2 Verified
          </span>
        </div>
      </div>
    </div>
  );
}

