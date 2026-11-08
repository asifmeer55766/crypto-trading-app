"use client";

import React, { useState, useRef, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SyncIcon from "@mui/icons-material/Sync";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#0b0e17] px-6 py-3.5 border-b border-[#1a2238]">
      <div className="flex items-center justify-between gap-6">
        {/* Left Side: Search Bar */}
        <div className="relative w-full max-w-sm sm:max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <SearchIcon sx={{ fontSize: 26 }} />
          </div>
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search coins... (e.g. Bitcoin, Ethereum)"
            className="w-full rounded-xl  bg-[#131726] py-3.5 pl-14 pr-4 text-md text-slate-200 placeholder-[#5e6982] transition-colors focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Right Side: Notification Bell & User Profile */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Notification Bell with Badge '3' */}
          <IconButton
            size="small"
            aria-label="3 notifications"
            className="!text-slate-300 hover:!bg-white/5"
            sx={{ p: 0.8 }}
          >
            <Badge
              badgeContent={3}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#ef4444",
                  color: "#ffffff",
                  fontSize: 10,
                  height: 16,
                  minWidth: 16,
                  fontWeight: 700,
                  top: 2,
                  right: 2,
                },
              }}
            >
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 24 }} />
            </Badge>
          </IconButton>

          {/* User Profile Trigger */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-white/5 text-left focus:outline-none"
            >
              {/* Profile Avatar */}
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"
                alt="Asif Hussain "
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: "#1e2640",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                JD
              </Avatar>

              {/* User Info (Name + Role) */}
              <div className="hidden sm:flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-white leading-tight">
                    Asif Hussain
                  </span>
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: 24,
                      color: "#94a3b8",
                      transform: profileOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {/* Gold Crown */}
                  <svg
                    className="h-3 w-3 fill-amber-400 text-amber-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                  <span className="text-[11px] font-medium text-amber-400 leading-tight">
                    Premium Trader
                  </span>
                </div>
              </div>
            </button>

            {/* Profile Dropdown Menu from Design */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-[#222943] bg-[#161b2e] p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                {/* Speech Bubble Arrow */}
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 border-l border-t border-[#222943] bg-[#161b2e]" />

                {/* User Header Inside Dropdown */}
                <div className="relative flex items-center gap-3 px-2 py-2">
                  <Avatar
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"
                    alt="Asif Hussain"
                    sx={{ width: 40, height: 40 }}
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-semibold text-white truncate">
                      Asif Hussain
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      asif@gmail.com
                    </span>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="mt-2 flex flex-col gap-0.5">
                  <button
                    type="button"
                    onClick={() => setProfileOpen(false)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <PersonOutlineIcon sx={{ fontSize: 24, color: "#94a3b8" }} />
                    Profile Settings
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfileOpen(false)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <ShieldOutlinedIcon sx={{ fontSize: 24, color: "#94a3b8" }} />
                    Security
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfileOpen(false)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <ReceiptLongOutlinedIcon
                      sx={{ fontSize: 24, color: "#94a3b8" }}
                    />
                    Transaction History
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setProfileOpen(false);
                      alert("Account reset request triggered.");
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <SyncIcon sx={{ fontSize: 24, color: "#94a3b8" }} />
                    Reset Account
                  </button>
                </div>

                {/* Divider */}
                <div className="my-2 border-t border-[#222943]" />

                {/* Admin Dashboard */}
                <button
                  type="button"
                  onClick={() => setProfileOpen(false)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
                >
                  <svg
                    className="h-4.5 w-4.5 fill-amber-400 text-amber-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                  Admin Dashboard
                </button>

                {/* Divider */}
                <div className="my-2 border-t border-[#222943]" />

                {/* Logout */}
                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    alert("Logged out successfully");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-[#ef4444] transition-colors hover:bg-red-500/10"
                >
                  <LogoutIcon sx={{ fontSize: 18, color: "#ef4444" }} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
