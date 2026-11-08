"use client";

import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    phone: "+1 (555) 234-5678",
    country: "United States",
    timezone: "UTC-5 (Eastern Time)",
    currency: "USD ($)",
    bio: "Active crypto day trader & commodities investor.",
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-[#1e2640] bg-[#131828] p-6 shadow-sm">
      <div className="flex items-center gap-2 pb-4 border-b border-[#1e2640]">
        <PersonOutlineIcon sx={{ fontSize: 20, color: "#818cf8" }} />
        <h3 className="text-sm font-bold text-white">Personal Information</h3>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        {/* Name Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Email Address</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="rounded-xl border border-[#222b45] bg-[#161b2e]/60 px-4 py-2.5 text-sm text-slate-400 cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Phone Number</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Timezone</label>
            <input
              type="text"
              value={formData.timezone}
              onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400">Display Currency</label>
            <input
              type="text"
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
              className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-400">Trader Bio</label>
          <textarea
            rows={3}
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="rounded-xl border border-[#222b45] bg-[#161b2e] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          {saved ? (
            <span className="text-xs font-semibold text-emerald-400">
              ✓ Profile saved successfully!
            </span>
          ) : (
            <span className="text-xs text-slate-500">
              Last modified 2 days ago
            </span>
          )}

          <button
            type="submit"
            className="rounded-xl bg-[#4f46e5] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

