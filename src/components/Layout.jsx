"use client";
import React, { useEffect, useRef, useState } from "react";
import BackgroundEffects from "./BackgroundEffects";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(
              (prev) => new Set([...prev, entry.target.dataset.animate])
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects mousePosition={mousePosition} scrollY={scrollY} />

      {/* Page Content */}
      <Navigation />
      <main className="relative z-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
