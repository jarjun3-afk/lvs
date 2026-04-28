import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_URL } from "../data/services";

const NAV = [
  { label: "Home", to: "/#home", id: "home" },
  { label: "Services", to: "/#services", id: "services" },
  { label: "About", to: "/#about", id: "about" },
  { label: "Contact", to: "/#contact", id: "contact" },
];

export default function Header() {
  const location = useLocation();
  const onHome = location.pathname === "/";

  const handleNav = (e, hash) => {
    if (!onHome) return; // let Link handle navigation
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 bg-[#05080f]/75 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
        <Link
          to="/"
          data-testid="header-logo"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-md overflow-hidden ring-1 ring-white/10 group-hover:ring-[#00ff9c]/60 transition">
            <img
              src={LOGO_URL}
              alt="Leela Vigil Solutions"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-display text-[15px] font-bold text-white">
              Leela Vigil <span className="text-[#00ff9c]">Solutions</span>
            </div>
            <div className="text-mono text-[10px] tracking-[0.25em] text-[#00cfff]/80 uppercase">
              Secure · Vigilant · Trusted
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={onHome ? `#${n.id}` : `/#${n.id}`}
              onClick={(e) => handleNav(e, n.id)}
              data-testid={`nav-${n.id}`}
              className="text-mono text-[12px] uppercase tracking-[0.2em] text-slate-300 hover:text-[#00ff9c] px-4 py-2 rounded-md transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[#00ff9c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <a
          href={onHome ? "#quote" : "/#quote"}
          onClick={(e) => handleNav(e, "quote")}
          data-testid="header-cta"
          className="hidden sm:inline-flex relative overflow-hidden btn-shimmer items-center gap-2 bg-[#00ff9c] text-[#05080f] font-bold text-mono text-[11px] uppercase tracking-[0.2em] px-5 py-3 rounded-md hover:bg-white transition-colors glow-green"
        >
          Get Quote
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
