"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import Navbar from "@/components/Navbar";
import {
  BarChart3,
  DollarSign,
  Database,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  const tools = [
    {
      title: "Crypto Tracker",
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      description: "Monitor live crypto prices and your portfolio performance.",
    },
    {
      title: "Stock Tracker",
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      description: "Track real-time stock data and visualize your investments.",
    },
    {
      title: "Data Dashboard",
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
      description: "View all your financial data in one unified dashboard.",
    },
    {
      title: "API Hub",
      icon: <Database className="h-6 w-6 text-orange-500" />,
      description:
        "Access data endpoints for custom integrations and analytics.",
    },
    {
      title: "Market Insights",
      icon: <Globe className="h-6 w-6 text-pink-500" />,
      description: "Get real-time market sentiment, trends, and news.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 tracking-tight">TRACKR</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A modern financial dashboard that brings together crypto, stocks,
            and data analytics — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700 hover:border-slate-600 transition-colors duration-200 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-start space-y-4">
                  <div className="flex items-center space-x-3">
                    {tool.icon}
                    <h2 className="text-xl font-semibold">{tool.title}</h2>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                  <Button variant="secondary" className="mt-auto">
                    Open
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
