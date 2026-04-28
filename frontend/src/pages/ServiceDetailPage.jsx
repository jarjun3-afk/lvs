import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Sparkles, Building2, ArrowUpRight } from "lucide-react";
import { getServiceBySlug, SERVICES } from "../data/services";
import QuoteForm from "../components/QuoteForm";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) {
    return (
      <main className="pt-32 pb-24 px-5 md:px-10 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-display text-3xl font-bold">Service not found</h1>
          <p className="mt-3 text-slate-400">The service you’re looking for doesn’t exist.</p>
          <button
            onClick={() => navigate("/")}
            data-testid="not-found-back"
            className="mt-6 inline-flex items-center gap-2 bg-[#00ff9c] text-[#05080f] font-bold text-mono text-[12px] uppercase tracking-[0.2em] px-6 py-3 rounded-md hover:bg-white transition-colors"
          >
            <ArrowLeft size={16} /> Back to home
          </button>
        </div>
      </main>
    );
  }

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="pt-28 pb-24">
      {/* Back to home */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Link
          to="/#services"
          data-testid="back-to-home"
          className="inline-flex items-center gap-2 text-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 hover:text-[#00ff9c] transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">
              Service / {service.code}
            </div>
            <h1 className="text-display mt-3 text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              {service.title}
            </h1>
            <div className="mt-4 text-mono text-sm uppercase tracking-[0.2em] text-[#00ff9c]">
              {service.tagline}
            </div>
            <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
              {service.overview}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#service-quote"
                data-testid="service-cta-quote"
                className="relative overflow-hidden btn-shimmer inline-flex items-center gap-2 bg-[#00ff9c] text-[#05080f] font-bold text-mono text-[12px] uppercase tracking-[0.2em] px-7 py-4 rounded-md hover:bg-white transition-colors glow-green"
              >
                Request quote <ArrowUpRight size={16} />
              </a>
              <a
                href="https://wa.me/916362554499"
                target="_blank"
                rel="noreferrer"
                data-testid="service-cta-whatsapp"
                className="inline-flex items-center gap-2 text-mono text-[12px] uppercase tracking-[0.2em] text-white border border-[#00cfff]/40 px-7 py-4 rounded-md hover:bg-[#00cfff]/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 glow-cyan">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent" />
              <div className="scan-line" />
              {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2", "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"].map((c, i) => (
                <span key={i} className={`absolute w-6 h-6 border-[#00ff9c] ${c}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features + Use cases */}
      <section className="relative mt-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-[#00ff9c]" />
              <h2 className="text-display text-2xl font-bold">What you get</h2>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                  data-testid="service-feature"
                >
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#00ff9c]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3">
              <Building2 size={20} className="text-[#00cfff]" />
              <h2 className="text-display text-2xl font-bold">Where we deploy</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {service.useCases.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-3 text-sm text-slate-300 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00cfff]" />
                  {u}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Office hours · Mon – Sat · 9:30 AM – 6:30 PM
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="service-quote" className="relative mt-24 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">// Get free quote</div>
          <h2 className="text-display mt-3 text-3xl md:text-4xl font-bold leading-tight mb-6">
            Plan your <span className="text-[#00ff9c]">{service.title}</span> install
          </h2>
          <QuoteForm defaultService={service.title} />
        </div>
      </section>

      {/* Other services */}
      <section className="relative mt-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-[#00cfff]">// Explore</div>
              <h2 className="text-display mt-3 text-2xl md:text-3xl font-bold">Other services</h2>
            </div>
            <Link
              to="/#services"
              data-testid="all-services-link"
              className="text-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 hover:text-[#00ff9c]"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] hover:border-[#00ff9c]/50 hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">/ {o.code}</div>
                  <div className="text-display text-lg font-semibold mt-1 group-hover:text-[#00ff9c] transition-colors">
                    {o.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
