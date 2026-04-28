import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LOGO_URL, SERVICES } from "../data/services";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/5 bg-[#05080f] mt-12"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9c]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Leela Vigil Solutions"
              className="w-12 h-12 rounded-md ring-1 ring-white/10 object-cover"
            />
            <div>
              <div className="text-display text-lg font-bold">
                Leela Vigil <span className="text-[#00ff9c]">Solutions</span>
              </div>
              <div className="text-mono text-[10px] tracking-[0.25em] text-[#00cfff]/80 uppercase">
                Mysuru · Karnataka
              </div>
            </div>
          </Link>
          <p className="mt-5 text-slate-400 text-sm leading-relaxed max-w-sm">
            6+ years of trusted security & networking solutions for residential,
            commercial, banking and industrial clients across Karnataka.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-mono text-[11px] uppercase tracking-[0.25em] text-[#00cfff] mb-4">
            Services
          </div>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`footer-service-${s.slug}`}
                  className="text-slate-300 hover:text-[#00ff9c] text-sm transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="text-mono text-[11px] uppercase tracking-[0.25em] text-[#00cfff] mb-4">
            Reach Us
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-slate-300">
              <Mail size={16} className="mt-0.5 text-[#00ff9c]" />
              <div>
                <a href="mailto:contact@leelavigils.com" className="hover:text-[#00ff9c]">contact@leelavigils.com</a>
                <br />
                <a href="mailto:leelavigils@gmail.com" className="hover:text-[#00ff9c]">leelavigils@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <Phone size={16} className="mt-0.5 text-[#00ff9c]" />
              <div>
                <strong className="text-white">Bharath Kumar CM</strong> · +91 97436 26883 · +91 63625 54499
                <br />
                <strong className="text-white">Arjun J</strong> · +91 99800 91299
              </div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <MapPin size={16} className="mt-0.5 text-[#00ff9c]" />
              <span>22 Chikkaharadanahalli, Jayanagar, Mysuru, Karnataka — 570034</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <Clock size={16} className="mt-0.5 text-[#00ff9c]" />
              <span>
                Mon – Sat · 9:30 AM – 6:30 PM
                <span className="text-slate-500"> · Sunday Closed</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© 2026 Leela Vigil Solutions. Secure Today. Protect Forever.</div>
          <div className="text-mono uppercase tracking-[0.25em]">
            <span className="text-[#00ff9c]">●</span> System Online
          </div>
        </div>
      </div>
    </footer>
  );
}
