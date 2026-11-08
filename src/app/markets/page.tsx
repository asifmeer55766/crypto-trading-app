"use client";

import React, { useState } from "react";
import Link from "next/link";

// MUI Icons
import SyncIcon from "@mui/icons-material/Sync";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function MarketsPage() {
  const [activeCategory, setActiveCategory] = useState("All Coins");
  const [currency, setCurrency] = useState("USD");

  const categories = [
    "All Coins",
    "★ Favorites",
    "↑ Top Gainers",
    "↓ Top Losers",
    "Bitcoin",
    "Ethereum",
    "Stablecoins",
    "DeFi",
    "NFT",
  ];

  const marketCoins = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$68,432.12",
      change: "+2.84%",
      isPositive: true,
      marketCap: "$1.35T",
      volume: "$42.18B",
      color: "#f7931a",
      chartColor: "#10b981",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,421.76",
      change: "+3.21%",
      isPositive: true,
      marketCap: "$412.88B",
      volume: "$28.47B",
      color: "#627eea",
      chartColor: "#a855f7",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$1.00",
      change: "+0.01%",
      isPositive: true,
      marketCap: "$170.58B",
      volume: "$95.21B",
      color: "#26a17b",
      chartColor: "#14b8a6",
    },
    {
      id: 4,
      name: "Solana",
      symbol: "SOL",
      price: "$142.37",
      change: "+5.12%",
      isPositive: true,
      marketCap: "$68.98B",
      volume: "$12.74B",
      color: "#14f195",
      chartColor: "#a855f7",
    },
    {
      id: 5,
      name: "XRP",
      symbol: "XRP",
      price: "$0.52",
      change: "+1.47%",
      isPositive: true,
      marketCap: "$29.68B",
      volume: "$3.21B",
      color: "#23292f",
      chartColor: "#10b981",
    },
    {
      id: 6,
      name: "BNB",
      symbol: "BNB",
      price: "$587.24",
      change: "+2.12%",
      isPositive: true,
      marketCap: "$85.63B",
      volume: "$4.37B",
      color: "#f3ba2f",
      chartColor: "#14b8a6",
    },
    {
      id: 7,
      name: "Dogecoin",
      symbol: "DOGE",
      price: "$0.17",
      change: "+1.85%",
      isPositive: true,
      marketCap: "$25.31B",
      volume: "$2.78B",
      color: "#c2a633",
      chartColor: "#10b981",
    },
    {
      id: 8,
      name: "Cardano",
      symbol: "ADA",
      price: "$0.72",
      change: "+2.33%",
      isPositive: true,
      marketCap: "$25.22B",
      volume: "$1.89B",
      color: "#0033ad",
      chartColor: "#a855f7",
    },
  ];

  const topGainers = [
    { id: 1, name: "Bonk", symbol: "BONK", price: "$0.000028", change: "+12.85%", color: "#f59e0b" },
    { id: 2, name: "Pepe", symbol: "PEPE", price: "$0.0000071", change: "+11.32%", color: "#10b981" },
    { id: 3, name: "Floki", symbol: "FLOKI", price: "$0.00021", change: "+10.21%", color: "#eab308" },
  ];

  const topLosers = [
    { id: 1, name: "Shiba Inu", symbol: "SHIB", price: "$0.000010", change: "-8.24%", color: "#ea580c" },
    { id: 2, name: "Avalanche", symbol: "AVAX", price: "$26.32", change: "-6.17%", color: "#e11d48" },
    { id: 3, name: "Polygon", symbol: "MATIC", price: "$0.42", change: "-5.93%", color: "#7c3aed" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Header Bar: Title + Live Status */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
            <BarChartIcon sx={{ fontSize: 26 }} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Crypto Markets</h1>
            <p className="text-xs text-slate-400">
              Explore live prices and market trends
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Market
          </span>
          <span className="text-slate-600">•</span>
          <span>Last Updated: 2:45 PM</span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2640] bg-[#131828] text-slate-300 hover:text-white"
          >
            <SyncIcon sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>

      {/* 2. Top 4 Ticker Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* BTC */}
        <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7931a] text-white font-bold text-base shadow-md">
              ₿
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-400">Bitcoin (BTC)</span>
              <span className="text-base font-bold text-white">$68,432.12</span>
              <span className="flex items-center text-xs font-semibold text-emerald-400">
                <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +2.84%
              </span>
            </div>
          </div>
          <div className="w-16">
            <svg viewBox="0 0 100 40" className="stroke-emerald-400 fill-none" strokeWidth="2.5">
              <path d="M0 30 Q 30 35, 50 15 T 100 10" />
            </svg>
          </div>
        </div>

        {/* ETH */}
        <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#627eea] text-white font-bold text-base shadow-md">
              ◆
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-400">Ethereum (ETH)</span>
              <span className="text-base font-bold text-white">$3,421.76</span>
              <span className="flex items-center text-xs font-semibold text-emerald-400">
                <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +3.21%
              </span>
            </div>
          </div>
          <div className="w-16">
            <svg viewBox="0 0 100 40" className="stroke-purple-400 fill-none" strokeWidth="2.5">
              <path d="M0 32 Q 40 25, 60 15 T 100 8" />
            </svg>
          </div>
        </div>

        {/* USDT */}
        <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#26a17b] text-white font-bold text-base shadow-md">
              ₮
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-400">Tether (USDT)</span>
              <span className="text-base font-bold text-white">$1.00</span>
              <span className="flex items-center text-xs font-semibold text-emerald-400">
                <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +0.01%
              </span>
            </div>
          </div>
          <div className="w-16">
            <svg viewBox="0 0 100 40" className="stroke-teal-400 fill-none" strokeWidth="2.5">
              <path d="M0 20 Q 30 18, 50 22 T 100 18" />
            </svg>
          </div>
        </div>

        {/* SOL */}
        <div className="flex items-center justify-between rounded-2xl border border-[#1e2640] bg-[#131828] p-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14f195] text-black font-bold text-base shadow-md">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-400">Solana (SOL)</span>
              <span className="text-base font-bold text-white">$142.37</span>
              <span className="flex items-center text-xs font-semibold text-emerald-400">
                <ArrowDropUpIcon sx={{ fontSize: 16 }} /> +5.12%
              </span>
            </div>
          </div>
          <div className="w-16">
            <svg viewBox="0 0 100 40" className="stroke-purple-400 fill-none" strokeWidth="2.5">
              <path d="M0 30 Q 30 20, 60 15 T 100 5" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Category Filter Tabs & Currency selector */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                activeCategory === cat
                  ? "bg-[#4f46e5] text-white shadow-md shadow-indigo-600/30"
                  : "border border-[#1e2640] bg-[#131828] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-xl border border-[#1e2640] bg-[#131828] px-3.5 py-2 text-xs font-semibold text-white hover:border-slate-600"
        >
          <span>{currency}</span>
          <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "#94a3b8" }} />
        </button>
      </div>

      {/* 4. Complete Markets Table */}
      <div className="overflow-x-auto rounded-2xl border border-[#1e2640] bg-[#131828] shadow-sm">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="border-b border-[#1e2640] text-xs font-semibold uppercase tracking-wider text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Coin</th>
              <th scope="col" className="px-6 py-4">Price</th>
              <th scope="col" className="px-6 py-4">24h Change</th>
              <th scope="col" className="px-6 py-4">Market Cap</th>
              <th scope="col" className="px-6 py-4">24h Volume</th>
              <th scope="col" className="px-6 py-4 text-center">7D Chart</th>
              <th scope="col" className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e2640]/60">
            {marketCoins.map((coin) => (
              <tr key={coin.id} className="transition hover:bg-white/5">
                <td className="px-6 py-4 text-slate-500 font-medium">{coin.id}</td>
                <td className="px-6 py-4 font-semibold text-white">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white font-bold text-xs"
                      style={{ backgroundColor: coin.color }}
                    >
                      {coin.symbol[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white leading-tight">
                        {coin.name}
                      </span>
                      <span className="text-[11px] text-slate-400 leading-tight">
                        {coin.symbol}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-white">{coin.price}</td>
                <td className="px-6 py-4 font-semibold text-emerald-400">
                  <span className="flex items-center">
                    <ArrowDropUpIcon sx={{ fontSize: 18 }} /> {coin.change}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-200 font-medium">{coin.marketCap}</td>
                <td className="px-6 py-4 text-slate-200 font-medium">{coin.volume}</td>
                <td className="px-6 py-4">
                  <div className="mx-auto w-24">
                    <svg viewBox="0 0 100 30" className="fill-none" style={{ stroke: coin.chartColor }} strokeWidth="2">
                      <path d="M0 25 Q 25 15, 50 20 T 75 10 T 100 5" />
                    </svg>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/trade`}
                    className="inline-flex items-center gap-1 rounded-xl bg-[#4f46e5] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-500"
                  >
                    <span>Trade</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5. Bottom Two Cards: Top Gainers (Left) + Top Losers (Right) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Gainers */}
        <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
            <div className="flex items-center gap-2">
              <EmojiEventsIcon sx={{ fontSize: 20, color: "#f59e0b" }} />
              <h3 className="text-sm font-bold text-white">Top Gainers</h3>
            </div>
            <Link href="/markets?tab=gainers" className="text-xs font-semibold text-indigo-400 hover:underline">
              View All &rarr;
            </Link>
          </div>

          <div className="mt-3 flex flex-col divide-y divide-[#1e2640]/60">
            {topGainers.map((g) => (
              <div key={g.id} className="flex items-center justify-between py-3 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-3 text-slate-500">{g.id}</span>
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white font-bold text-[10px]"
                    style={{ backgroundColor: g.color }}
                  >
                    {g.symbol[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">{g.name}</span>
                    <span className="text-[10px] text-slate-400">{g.symbol}</span>
                  </div>
                </div>

                <div className="flex flex-col text-right">
                  <span className="font-semibold text-white">{g.price}</span>
                  <span className="font-bold text-emerald-400">{g.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Losers */}
        <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#1e2640]">
            <div className="flex items-center gap-2">
              <LocalFireDepartmentIcon sx={{ fontSize: 20, color: "#ef4444" }} />
              <h3 className="text-sm font-bold text-white">Top Losers</h3>
            </div>
            <Link href="/markets?tab=losers" className="text-xs font-semibold text-indigo-400 hover:underline">
              View All &rarr;
            </Link>
          </div>

          <div className="mt-3 flex flex-col divide-y divide-[#1e2640]/60">
            {topLosers.map((l) => (
              <div key={l.id} className="flex items-center justify-between py-3 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-3 text-slate-500">{l.id}</span>
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white font-bold text-[10px]"
                    style={{ backgroundColor: l.color }}
                  >
                    {l.symbol[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">{l.name}</span>
                    <span className="text-[10px] text-slate-400">{l.symbol}</span>
                  </div>
                </div>

                <div className="flex flex-col text-right">
                  <span className="font-semibold text-white">{l.price}</span>
                  <span className="font-bold text-red-400">{l.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

