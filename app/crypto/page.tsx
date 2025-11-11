"use client";

import { useEffect, useState } from "react";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  market_cap: number;
  price_change_percentage_24h: number;
};

export default function CryptoPage() {
  const [coins, setCoins] = useState<Coin[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/crypto/prices")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400 p-6">Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Top Coins</h1>
      <ul className="space-y-2">
        {coins.map((coin) => (
          <li
            key={coin.id}
            className="flex justify-between bg-gray-800 rounded-xl p-3 shadow-sm"
          >
            <span>{coin.name}</span>
            <span>${coin.current_price.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
