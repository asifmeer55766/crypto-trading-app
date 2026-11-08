"use client";

import React from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function HoldingsTable() {
  const holdings = [
    {
      id: 1,
      name: "Bitcoin (BTC)",
      symbol: "BTC",
      amount: "0.5231",
      avgPrice: "$62,450.00",
      currentPrice: "$68,432.12",
      value: "$35,777.12",
      pl: "+9.62%",
      color: "#f7931a",
    },
    {
      id: 2,
      name: "Ethereum (ETH)",
      symbol: "ETH",
      amount: "3.2176",
      avgPrice: "$3,100.00",
      currentPrice: "$3,421.76",
      value: "$11,000.12",
      pl: "+10.32%",
      color: "#627eea",
    },
    {
      id: 3,
      name: "Solana (SOL)",
      symbol: "SOL",
      amount: "12.5000",
      avgPrice: "$120.00",
      currentPrice: "$142.37",
      value: "$1,779.63",
      pl: "+18.64%",
      color: "#14f195",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex items-center gap-2 pb-3 border-b border-[#1e2640]">
        <Inventory2OutlinedIcon sx={{ fontSize: 20, color: "#818cf8" }} />
        <h3 className="text-sm font-bold text-white">Your Holdings</h3>
      </div>

      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="text-[11px] font-semibold text-slate-500 uppercase">
            <tr>
              <th scope="col" className="pb-3">Coin</th>
              <th scope="col" className="pb-3">Amount</th>
              <th scope="col" className="pb-3">Avg. Price</th>
              <th scope="col" className="pb-3">Current Price</th>
              <th scope="col" className="pb-3">Value</th>
              <th scope="col" className="pb-3 text-right">P/L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e2640]/60">
            {holdings.map((h) => (
              <tr key={h.id} className="transition hover:bg-white/5">
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full text-white font-bold text-[10px]"
                      style={{ backgroundColor: h.color }}
                    >
                      {h.symbol[0]}
                    </div>
                    <span className="font-semibold text-white">{h.name}</span>
                  </div>
                </td>
                <td className="py-3.5 font-medium text-slate-200">{h.amount}</td>
                <td className="py-3.5 text-slate-400">{h.avgPrice}</td>
                <td className="py-3.5 font-semibold text-white">{h.currentPrice}</td>
                <td className="py-3.5 font-bold text-white">{h.value}</td>
                <td className="py-3.5 text-right font-bold text-emerald-400">
                  <span className="flex items-center justify-end">
                    <ArrowDropUpIcon sx={{ fontSize: 16 }} /> {h.pl}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

