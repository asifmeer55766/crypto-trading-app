"use client";

import React from "react";
import Link from "next/link";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function MarketCoinsTable() {
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

  return (
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
  );
}

