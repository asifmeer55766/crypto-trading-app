"use client";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ReceiptIcon from "@mui/icons-material/Receipt";

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const transactions = [
    {
      id: 1,
      type: "Buy",
      coin: "Bitcoin (BTC)",
      amount: "0.0050 BTC",
      price: "$68,432.12",
      total: "$342.16",
      datetime: "Nov 8, 2025 • 14:32",
      status: "Completed",
      color: "#f7931a",
    },
    {
      id: 2,
      type: "Sell",
      coin: "Ethereum (ETH)",
      amount: "1.0000 ETH",
      price: "$3,421.76",
      total: "$3,421.76",
      datetime: "Nov 8, 2025 • 12:18",
      status: "Completed",
      color: "#627eea",
    },
    {
      id: 3,
      type: "Buy",
      coin: "Solana (SOL)",
      amount: "5.0000 SOL",
      price: "$142.37",
      total: "$711.85",
      datetime: "Nov 7, 2025 • 17:45",
      status: "Completed",
      color: "#14f195",
    },
    {
      id: 4,
      type: "Sell",
      coin: "Bitcoin (BTC)",
      amount: "0.0020 BTC",
      price: "$68,120.45",
      total: "$136.24",
      datetime: "Nov 7, 2025 • 11:20",
      status: "Completed",
      color: "#f7931a",
    },
    {
      id: 5,
      type: "Buy",
      coin: "XRP (XRP)",
      amount: "500.0000 XRP",
      price: "$0.52",
      total: "$260.00",
      datetime: "Nov 6, 2025 • 19:10",
      status: "Completed",
      color: "#23292f",
    },
    {
      id: 6,
      type: "Sell",
      coin: "Dogecoin (DOGE)",
      amount: "1000.0000 DOGE",
      price: "$0.17",
      total: "$170.00",
      datetime: "Nov 6, 2025 • 15:30",
      status: "Completed",
      color: "#c2a633",
    },
    {
      id: 7,
      type: "Buy",
      coin: "Cardano (ADA)",
      amount: "200.0000 ADA",
      price: "$0.72",
      total: "$144.00",
      datetime: "Nov 5, 2025 • 13:25",
      status: "Completed",
      color: "#0033ad",
    },
    {
      id: 8,
      type: "Sell",
      coin: "Litecoin (LTC)",
      amount: "1.5000 LTC",
      price: "$112.28",
      total: "$168.42",
      datetime: "Nov 5, 2025 • 10:50",
      status: "Completed",
      color: "#345d9d",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      {/* Table Header: Title + Search + Export */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1e2640]">
        <div className="flex items-center gap-2">
          <ReceiptIcon sx={{ fontSize: 20, color: "#818cf8" }} />
          <h3 className="text-sm font-bold text-white">Transaction History</h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon sx={{ fontSize: 18, color: "#64748b" }} className="absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions..."
              className="rounded-xl border border-[#222b45] bg-[#161b2e] py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => alert("Transactions exported as CSV.")}
            className="flex items-center gap-1.5 rounded-xl bg-[#4f46e5] px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-500"
          >
            <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="text-[11px] font-semibold text-slate-500 uppercase">
            <tr>
              <th scope="col" className="py-3 px-4">#</th>
              <th scope="col" className="py-3 px-4">Type</th>
              <th scope="col" className="py-3 px-4">Coin</th>
              <th scope="col" className="py-3 px-4">Amount</th>
              <th scope="col" className="py-3 px-4">Price (USD)</th>
              <th scope="col" className="py-3 px-4">Total (USD)</th>
              <th scope="col" className="py-3 px-4">Date & Time</th>
              <th scope="col" className="py-3 px-4">Status</th>
              <th scope="col" className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e2640]/60">
            {transactions.map((tx) => (
              <tr key={tx.id} className="transition hover:bg-white/5">
                <td className="py-3.5 px-4 text-slate-500 font-medium">{tx.id}</td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold ${
                      tx.type === "Buy"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    {tx.type === "Buy" ? (
                      <ArrowDownwardIcon sx={{ fontSize: 12 }} />
                    ) : (
                      <ArrowUpwardIcon sx={{ fontSize: 12 }} />
                    )}
                    {tx.type}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-semibold text-white">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full text-white font-bold text-[10px]"
                      style={{ backgroundColor: tx.color }}
                    >
                      {tx.coin[0]}
                    </div>
                    <span>{tx.coin}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-slate-200">{tx.amount}</td>
                <td className="py-3.5 px-4 text-slate-300 font-medium">{tx.price}</td>
                <td className="py-3.5 px-4 font-bold text-white">{tx.total}</td>
                <td className="py-3.5 px-4 text-slate-400">{tx.datetime}</td>
                <td className="py-3.5 px-4">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {tx.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => alert(`Details for Transaction #${tx.id}`)}
                    className="inline-flex items-center gap-1 rounded-lg border border-[#222b45] px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:border-slate-500 hover:text-white"
                  >
                    <VisibilityOutlinedIcon sx={{ fontSize: 14 }} />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between border-t border-[#1e2640] pt-4 mt-3 text-xs text-slate-400">
        <span>Showing 1 to 8 of 12 transactions</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPage(Math.max(1, page - 1))}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#222b45] bg-[#161b2e] text-slate-400 hover:text-white"
          >
            &lt;
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4f46e5] font-bold text-white shadow-sm"
          >
            1
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#222b45] bg-[#161b2e] text-slate-400 hover:text-white"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => setPage(page + 1)}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#222b45] bg-[#161b2e] text-slate-400 hover:text-white"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

