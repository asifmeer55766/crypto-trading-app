"use client";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function UserManagementTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john.doe@gmail.com",
      role: "VIP Trader",
      kyc: "Level 2 (Verified)",
      balance: "$4,892.50",
      status: "Active",
    },
    {
      id: "USR-002",
      name: "Sarah Jenkins",
      email: "sarah.j@outlook.com",
      role: "Standard Trader",
      kyc: "Level 2 (Verified)",
      balance: "$12,340.00",
      status: "Active",
    },
    {
      id: "USR-003",
      name: "Alex Rivera",
      email: "alex.rivera@crypto.org",
      role: "Institutional",
      kyc: "Level 3 (Enterprise)",
      balance: "$250,000.00",
      status: "Active",
    },
    {
      id: "USR-004",
      name: "Michael Chen",
      email: "m.chen@gmail.com",
      role: "Standard Trader",
      kyc: "Level 1 (Basic)",
      balance: "$850.20",
      status: "Pending KYC",
    },
    {
      id: "USR-005",
      name: "Elena Rostova",
      email: "elena.r@mail.ru",
      role: "VIP Trader",
      kyc: "Level 2 (Verified)",
      balance: "$34,120.00",
      status: "Active",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1e2640]">
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-white">User Management</h3>
          <p className="text-xs text-slate-400">View and manage trader accounts & verification status</p>
        </div>

        <div className="relative">
          <SearchIcon sx={{ fontSize: 18, color: "#64748b" }} className="absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search users..."
            className="rounded-xl border border-[#222b45] bg-[#161b2e] py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="text-[11px] font-semibold text-slate-500 uppercase">
            <tr>
              <th scope="col" className="py-3 px-4">User</th>
              <th scope="col" className="py-3 px-4">Role</th>
              <th scope="col" className="py-3 px-4">KYC Status</th>
              <th scope="col" className="py-3 px-4">Account Balance</th>
              <th scope="col" className="py-3 px-4">Status</th>
              <th scope="col" className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e2640]/60">
            {users.map((u) => (
              <tr key={u.id} className="transition hover:bg-white/5">
                <td className="py-3.5 px-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">{u.name}</span>
                    <span className="text-[11px] text-slate-400">{u.email}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-slate-200">{u.role}</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    <VerifiedIcon sx={{ fontSize: 14, color: "#10b981" }} />
                    {u.kyc}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-white">{u.balance}</td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      u.status === "Active"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        u.status === "Active" ? "bg-emerald-400" : "bg-amber-400"
                      }`}
                    />
                    {u.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    type="button"
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <MoreVertIcon sx={{ fontSize: 18 }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

