"use client";

import React, { useState } from "react";
import TradeHeader from "./_components/TradeHeader";
import CandlestickChart from "./_components/CandlestickChart";
import OrderTerminal from "./_components/OrderTerminal";
import OrderBook from "./_components/OrderBook";
import RecentTrades from "./_components/RecentTrades";
import MarketInfo from "./_components/MarketInfo";

export default function TradePage() {
  const [terminalTab, setTerminalTab] = useState<"buy" | "sell">("buy");

  return (
    <div className="flex flex-col gap-5">
      {/* 1. Header Bar: Coin details, 24h Stats & Buy/Sell shortcuts */}
      <TradeHeader
        onQuickBuy={() => setTerminalTab("buy")}
        onQuickSell={() => setTerminalTab("sell")}
      />

      {/* 2. Middle Row: Candlestick Chart (Left) & Order Terminal (Right) */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <CandlestickChart />
        <OrderTerminal initialTab={terminalTab} />
      </div>

      {/* 3. Bottom Row: Order Book + Recent Trades + Market Info */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <OrderBook />
        <RecentTrades />
        <MarketInfo />
      </div>
    </div>
  );
}
