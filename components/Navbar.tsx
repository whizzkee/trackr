// File: components/ui/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md px-6 py-3 flex items-center justify-between text-white shadow-none">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="h-12 flex items-center">
          <Image
            src="/darkTrackrLogo.png"
            alt="Trackr Logo"
            width={150}
            height={48}
            className="object-contain"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          href="/dashboard"
          className="text-gray-200 hover:text-white font-medium"
        >
          Dashboard
        </Link>
        <Link
          href="/assets"
          className="text-gray-200 hover:text-white font-medium"
        >
          Assets
        </Link>
        <Link
          href="/prices"
          className="text-gray-200 hover:text-white font-medium"
        >
          Prices
        </Link>
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">{/* Hamburger menu goes here later */}</div>
    </nav>
  );
};

export default Navbar;
