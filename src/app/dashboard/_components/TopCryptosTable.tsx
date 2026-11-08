"use client";

import React from "react";
import Link from "next/link";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function TopCryptosTable() {
  const topCoins = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$68,432.12",
      change: "+2.84%",
      isPositive: true,
      marketCap: "$1.35T",
      color: "#f59e0b",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,421.76",
      change: "+3.21%",
      isPositive: true,
      marketCap: "$412.8B",
      color: "#6366f1",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$1.00",
      change: "+0.01%",
      isPositive: true,
      marketCap: "$170.5B",
      color: "#10b981",
    },
    {
      id: 4,
      name: "Solana",
      symbol: "SOL",
      price: "$142.37",
      change: "+5.12%",
      isPositive: true,
      marketCap: "$68.9B",
      color: "#ec4899",
    },
    {
      id: 5,
      name: "XRP",
      symbol: "XRP",
      price: "$0.52",
      change: "+1.47%",
      isPositive: true,
      marketCap: "$29.6B",
      color: "#38bdf8",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <BarChartIcon sx={{ fontSize: 20, color: "#818cf8" }} />
          <h3 className="text-sm font-bold text-white">
            Top Cryptocurrencies
          </h3>
        </div>
        <Link href="/markets" className="text-xs font-semibold text-indigo-400 hover:underline">
          View All &rarr;
        </Link>
      </div>

      <div className="mt-3 flex flex-col divide-y divide-[#1e2640]/60">
        {topCoins.map((coin) => (
          <div key={coin.id} className="flex items-center justify-between py-2.5 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-3 text-slate-500">{coin.id}</span>
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full text-white font-bold text-[10px]"
                style={{ backgroundColor: coin.color }}
              >
                {coin.symbol[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">{coin.name}</span>
                <span className="text-[10px] text-slate-400">{coin.symbol}</span>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <span className="font-semibold text-white">{coin.price}</span>
              <span className="font-medium text-emerald-400">{coin.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

