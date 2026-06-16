"use client";

import { useState, useEffect } from "react";
import ShogiPieceIcon from "./ShogiPieceIcon";

const navLinks = [
  { label: "教室の特徴", href: "#features" },
  { label: "クラス・料金", href: "#classes" },
  { label: "講師紹介", href: "#instructor" },
  { label: "アクセス", href: "#access" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-[8px]"
      style={{
        backgroundColor: "rgba(8,14,35,0.90)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="王手将棋教室 トップへ"
          >
            <ShogiPieceIcon kanji="王" size={36} color="#1b3a6b" textColor="#c9a84c" />
            <div className="flex flex-col leading-tight">
              <span
                className="text-kin text-lg sm:text-xl font-bold font-mincho tracking-wide"
                style={{ color: "#c9a84c" }}
              >
                王手将棋教室
              </span>
              <span className="text-white/60 text-xs tracking-widest hidden sm:block">
                ŌTE SHOGI KYŌSHITSU
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-kin-light text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                style={{ "--kin-light": "#e2c97e" } as React.CSSProperties}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#classes"
              className="ml-2 px-5 py-2 text-sm font-bold border-2 rounded-sm transition-all duration-200 font-mincho tracking-wide"
              style={{
                borderColor: "#c9a84c",
                color: "#c9a84c",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c9a84c";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0d1f42";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
              }}
            >
              体験レッスン
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white py-2.5 px-2 text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#classes"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-2.5 text-sm font-bold font-mincho tracking-wide border"
              style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
            >
              体験レッスンを予約
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
