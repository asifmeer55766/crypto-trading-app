"use client";

import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function AdminStats() {
  const stats = [
    {
      title: "Total Registered Users",
      value: "24,582",
      change: "+8.4%",
      icon: PeopleAltOutlinedIcon,
      color: "#818cf8",
      bg: "bg-indigo-600/20",
    },
    {
      title: "24h Platform Volume",
      value: "$142,850,210",
      change: "+14.2%",
      icon: QueryStatsOutlinedIcon,
      color: "#10b981",
      bg: "bg-emerald-600/20",
    },
    {
      title: "Total Fee Revenue",
      value: "$482,530.80",
      change: "+11.6%",
      icon: PaymentsOutlinedIcon,
      color: "#f59e0b",
      bg: "bg-amber-600/20",
    },
    {
      title: "System Uptime",
      value: "99.98%",
      change: "Operational",
      icon: CheckCircleOutlineIcon,
      color: "#06b6d4",
      bg: "bg-cyan-600/20",
      isBadge: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.title}
            className="flex items-center gap-4 rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm"
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.bg}`}>
              <Icon sx={{ fontSize: 24, color: s.color }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-400">{s.title}</span>
              <span className="text-lg font-bold text-white">{s.value}</span>
              {s.isBadge ? (
                <span className="text-xs font-semibold text-emerald-400 mt-0.5">
                  ● {s.change}
                </span>
              ) : (
                <span className="flex items-center text-xs font-semibold text-emerald-400">
                  <ArrowDropUpIcon sx={{ fontSize: 16 }} /> {s.change} vs last month
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

