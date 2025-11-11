"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
            className="flex items-center justify-between bg-gray-800 rounded-xl p-3 shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <Image
                src={coin.image}
                alt={coin.name}
                className="w-8 h-8 rounded-full"
                width={100}
                height={100}
              />
              <span>
                {coin.name} ({coin.symbol.toUpperCase()})
              </span>
            </div>
            <div className="text-right">
              <p>${coin.current_price.toLocaleString()}</p>
              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-500"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
