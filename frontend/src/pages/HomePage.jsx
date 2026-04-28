import React from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Network,
  Fingerprint,
  Flame,
  DoorClosed,
  Layers,
  Radar,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Building2,
  Wrench,
} from "lucide-react";
import { SERVICES, HERO_BG, LOGO_URL } from "../data/services";
import QuoteForm from "../components/QuoteForm";

const ICONS = {
  "cctv-surveillance": Camera,
  "lan-networking": Network,
  "biometric-access": Fingerprint,
  "fire-smoke-systems": Flame,
  "door-sensors": DoorClosed,
  "shutter-sensors": Layers,
  "motion-sensors": Radar,
};

const STATS = [
  { k: "6+", v: "Years of expertise" },
  { k: "500+", v: "Sites secured" },
  { k: "24/7", v: "Monitoring support" },
  { k: "99.9%", v: "Uptime SLA" },
];

const CLIENTS = [
  "Banking & ATMs",
  "Retail & Showrooms",
  "Industrial & Warehouses",
  "Residential & Villas",
  "Hospitals & Clinics",
  "Schools & Institutes",
  "Hotels & Restaurants",
  "Government Offices",
];

export default function HomePage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[100vh] flex items-center pt-28 pb-20 bg-radial-hero overflow-hidden"
      >
        <div className="absolute inset-0 bg-scanlines opacity-60 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-[420px] h-[420px] rounded-full bg-[#00ff9c]/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-40 w-[520px] h-[520px] rounded-full bg-[#00cfff]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="inline-flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.3em] text-[#00ff9c] border border-[#00ff9c]/30 rounded-full px-4 py-1.5 bg-[#00ff9c]/5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#00ff9c] animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-[#00ff9c]" />
              </span>
              Mysuru · Trusted since 2019
            </div>
            <h1 className="text-display mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] text-white">
              Smart security for a{" "}
              <span className="text-[#00ff9c]">safer</span>
              <br />
              <span className="text-white/90">tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-slate-400 text-base md:text-lg leading-relaxed">
              We design, install and maintain CCTV surveillance, biometric access, fire-safety, networking and intrusion-detection systems — engineered for banks, businesses, factories and homes across Karnataka.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                data-testid="hero-cta-quote"
                className="relative overflow-hidden btn-shimmer inline-flex items-center gap-2 bg-[#00ff9c] text-[#05080f] font-bold text-mono text-[12px] uppercase tracking-[0.2em] px-7 py-4 rounded-md hover:bg-white transition-colors glow-green"
              >
                Get free quote <ArrowUpRight size={16} />
              </a>
              <a
                href="#services"
                data-testid="hero-cta-services"
                className="inline-flex items-center gap-2 text-mono text-[12px] uppercase tracking-[0.2em] text-white border border-[#00cfff]/40 px-7 py-4 rounded-md hover:bg-[#00cfff]/10 transition-colors"
              >
                Explore services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {STATS.map((s) => (
                <div
                  key={s.v}
                  className="border border-white/10 rounded-xl p-4 bg-white/[0.02] backdrop-blur-sm"
                >
                  <div className="text-display text-2xl md:text-3xl font-bold text-[#00ff9c]">{s.k}</div>
                  <div className="text-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 glow-cyan">
              <img
                src={HERO_BG}
                alt="Security operations"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent" />
              <div className="scan-line" />

              {/* Camera overlay HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-mono text-[10px] uppercase tracking-[0.25em] text-[#00ff9c]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  REC · CAM-04
                </span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                <span>Mysuru · KA</span>
                <span>1080p · 30fps</span>
              </div>

              {/* Corner brackets */}
              {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2", "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"].map((c, i) => (
                <span key={i} className={`absolute w-6 h-6 border-[#00ff9c] ${c}`} />
              ))}
            </div>

            {/* Floating logo card */}
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-[#0f1b2e]/90 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 glow-green">
              <img src={LOGO_URL} alt="logo" className="w-10 h-10 rounded-md" />
              <div>
                <div className="text-display text-sm font-bold text-white">ISO-grade install</div>
                <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-[#00cfff]">Certified Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <section className="relative py-10 border-y border-white/5 bg-[#070b14] overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap text-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} className="mx-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]" />
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">// About us</div>
            <h2 className="text-display mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Six years of <span className="text-[#00ff9c]">protecting</span> what matters most.
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Leela Vigil Solutions is a trusted security solutions provider with 6+ years of industry experience, delivering advanced and reliable protection systems for residential, commercial, banking and industrial clients.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Our mission is to create a safer, smarter environment through innovative technology, high-quality products and expert installation. From CCTV and biometric access to LAN networking, motion sensors and fire-safety systems — we ensure seamless integration and dependable performance.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: ShieldCheck, t: "End-to-End Solutions", d: "Survey, design, supply, install, configure & maintain — single accountable team." },
              { icon: Award, t: "Certified Engineers", d: "OEM-trained technicians for Hikvision, CP Plus, Dahua, Cisco and more." },
              { icon: Building2, t: "All Sectors Covered", d: "Banks, retail, factories, schools, hospitals, homes — proven references." },
              { icon: Wrench, t: "AMC & Support", d: "Annual maintenance with on-site SLA. We don’t disappear after install." },
            ].map((card) => (
              <div
                key={card.t}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#00ff9c]/40 hover:bg-white/[0.05] transition-all"
              >
                <card.icon size={26} className="text-[#00ff9c]" />
                <div className="text-display mt-4 text-lg font-semibold">{card.t}</div>
                <div className="text-sm text-slate-400 mt-2 leading-relaxed">{card.d}</div>
                <ArrowUpRight
                  size={18}
                  className="absolute top-5 right-5 text-slate-600 group-hover:text-[#00ff9c] group-hover:rotate-12 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section id="services" className="relative py-24 px-5 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">// What we do</div>
              <h2 className="text-display mt-3 text-3xl md:text-5xl font-bold leading-tight">
                Engineered <span className="text-[#00ff9c]">security systems</span><br />
                for every site.
              </h2>
            </div>
            <p className="text-slate-400 max-w-md">
              Tap any service to see specs, supported brands, real use cases and request a tailored quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => {
              const Icon = ICONS[s.slug] || Camera;
              const featured = idx === 0;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  data-testid={`service-card-${s.slug}`}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] hover:border-[#00ff9c]/50 hover:-translate-y-1 transition-all ${
                    featured ? "lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
                    <div className="absolute top-4 left-4 text-mono text-[10px] uppercase tracking-[0.3em] text-[#00ff9c]">
                      / {s.code}
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-md bg-[#05080f]/70 border border-white/10 flex items-center justify-center text-[#00ff9c] group-hover:bg-[#00ff9c] group-hover:text-[#05080f] transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-display text-xl font-semibold text-white group-hover:text-[#00ff9c] transition-colors">
                        {s.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-slate-500 group-hover:text-[#00ff9c] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.short}</p>
                    <div className="mt-4 text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">
                      Learn more →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 px-5 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">// Contact</div>
            <h2 className="text-display mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Talk to a security <span className="text-[#00ff9c]">expert</span> today.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
              Free site survey across Mysuru and surrounding districts. We respond within business hours, usually within minutes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  body: (
                    <>
                      <a href="mailto:contact@leelavigils.com" className="hover:text-[#00ff9c]">contact@leelavigils.com</a>
                      <br />
                      <a href="mailto:leelavigils@gmail.com" className="hover:text-[#00ff9c]">leelavigils@gmail.com</a>
                    </>
                  ),
                },
                {
                  icon: Phone,
                  title: "Call us",
                  body: (
                    <>
                      <strong className="text-white">Bharath Kumar CM</strong>
                      <br />
                      <a href="tel:+919743626883" className="hover:text-[#00ff9c]">+91 97436 26883</a> · <a href="tel:+916362554499" className="hover:text-[#00ff9c]">+91 63625 54499</a>
                      <br />
                      <strong className="text-white mt-1 inline-block">Arjun J</strong>
                      <br />
                      <a href="tel:+919980091299" className="hover:text-[#00ff9c]">+91 99800 91299</a>
                    </>
                  ),
                },
                {
                  icon: MapPin,
                  title: "Office",
                  body: <>22 Chikkaharadanahalli, Jayanagar, Mysuru, Karnataka — 570034</>,
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  body: (
                    <>
                      <span className="text-white">Monday – Saturday</span> · 9:30 AM – 6:30 PM
                      <br />
                      <span className="text-slate-500">Sunday — Closed</span>
                    </>
                  ),
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-[#00ff9c]/40 transition-colors"
                  data-testid={`contact-${title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div className="w-10 h-10 rounded-md bg-[#00ff9c]/10 border border-[#00ff9c]/30 flex items-center justify-center text-[#00ff9c]">
                    <Icon size={18} />
                  </div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff] mb-1">
                      {title}
                    </div>
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="quote" className="lg:col-span-7">
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">// Get free quote</div>
            <h3 className="text-display mt-3 text-2xl md:text-3xl font-bold leading-tight mb-6">
              Tell us what you’re protecting.
            </h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
