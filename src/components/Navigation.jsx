"use client";
import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <Link href="/">
              <img
                src="https://topranklucknow.com/wp-content/uploads/2025/04/cropped-Top-Rank-Logo-removebg-preview.png"
                alt="logo"
                className="h-12 sm:h-15 "
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
