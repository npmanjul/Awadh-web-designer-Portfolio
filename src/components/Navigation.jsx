"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="Awadh Web Designer"
                  width={70} // Adjusted size for proper display
                  height={70}
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-[24px] font-bold">
                    Awadh
                  </span>
                  <span className="text-slate-400 text-[17px]">
                    Web Designer
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
