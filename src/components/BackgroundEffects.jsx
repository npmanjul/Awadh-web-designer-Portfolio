import React from "react";

const BackgroundEffects = ({ mousePosition, scrollY }) => {
  return (
    <>
      {/* Sophisticated Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-30" />

        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
          <div className="absolute -top-40 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(99,102,241,0.12),transparent_65%)] blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[700px] w-[900px] bg-[radial-gradient(closest-side,rgba(168,85,247,0.1),transparent_65%)] blur-3xl" />
          <div className="absolute top-1/2 left-0 h-[600px] w-[800px] bg-[radial-gradient(closest-side,rgba(16,185,129,0.08),transparent_65%)] blur-3xl" />
        </div>

        {/* Ambient Light Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />

        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse-slow delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse-slow delay-1500" />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse-slow delay-500" />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-16 w-3 h-3 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-sm rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-20 w-2 h-2 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full animate-float delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-sm animate-float delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-md rotate-12 animate-float delay-1500" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-sm animate-float delay-500" />

        {/* Additional animated shapes with new animations */}
        <div className="absolute top-1/6 right-1/6 w-4 h-4 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-lg animate-drift" />
        <div className="absolute bottom-1/6 left-1/6 w-3 h-3 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full animate-rotate-slow" />
        <div className="absolute top-3/4 left-1/4 w-2.5 h-2.5 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-md animate-breathe" />
        <div className="absolute top-1/4 right-1/3 w-3.5 h-3.5 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-lg animate-drift delay-2000" />

        {/* Subtle light rays */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />

        {/* Additional ambient effects */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-3000" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-slow delay-2500" />

        {/* Floating text particles */}
        <div className="absolute top-1/6 left-1/6 text-xs text-blue-400/20 font-mono animate-float select-none pointer-events-none">
          &lt;/&gt;
        </div>
        <div className="absolute top-2/6 right-1/6 text-xs text-purple-400/20 font-mono animate-float delay-1000 select-none pointer-events-none">
          {}
        </div>
        <div className="absolute bottom-1/6 left-2/6 text-xs text-emerald-400/20 font-mono animate-float delay-2000 select-none pointer-events-none">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-2/6 right-2/6 text-xs text-pink-400/20 font-mono animate-float delay-1500 select-none pointer-events-none">
          [ ]
        </div>

        {/* Parallax scrolling elements */}
        <div
          className="absolute top-1/3 left-1/5 w-2 h-2 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full animate-pulse-slow"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full animate-pulse-slow delay-1000"
          style={{
            transform: `translateY(${-scrollY * 0.08}px)`,
          }}
        />

        {/* Interactive grid highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_50%)] opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      {/* Enhanced Cursor Effect */}
      <div
        className="fixed w-64 h-64 pointer-events-none z-10 transition-all duration-300 ease-out opacity-40"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`,
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      {/* Secondary cursor trail effect */}
      <div
        className="fixed w-32 h-32 pointer-events-none z-5 transition-all duration-500 ease-out opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)`,
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
      />

      {/* Interactive floating particles that follow cursor */}
      <div
        className="fixed w-4 h-4 pointer-events-none z-15 transition-all duration-700 ease-out opacity-60"
        style={{
          background: `radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%)`,
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate(${Math.sin(scrollY * 0.01) * 20}px, ${
            Math.cos(scrollY * 0.01) * 20
          }px)`,
        }}
      />
    </>
  );
};

export default BackgroundEffects;
