"use client";

import React from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileForm from "./_components/ProfileForm";
import AccountTierCard from "./_components/AccountTierCard";
import SecuritySummary from "./_components/SecuritySummary";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Profile Top Banner & Avatar Info */}
      <ProfileHeader />

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: Form Details (2 cols) */}
        <div className="lg:col-span-2">
          <ProfileForm />
        </div>

        {/* Right: Tier & Security Status (1 col) */}
        <div className="flex flex-col gap-6">
          <AccountTierCard />
          <SecuritySummary />
        </div>
      </div>
    </div>
  );
}

