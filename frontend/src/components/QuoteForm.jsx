import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { SERVICES } from "../data/services";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function QuoteForm({ defaultService = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: defaultService,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!form.name || !form.email || !form.mobile || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/quote`, form);
      const { whatsapp_url, email_sent } = res.data || {};
      toast.success(
        email_sent
          ? "Request received! Email sent. Opening WhatsApp…"
          : "Request received! Opening WhatsApp…"
      );
      setForm({ name: "", email: "", mobile: "", service: defaultService, message: "" });
      if (whatsapp_url) {
        // Slight delay so toast is visible
        setTimeout(() => window.open(whatsapp_url, "_blank"), 600);
      }
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = Array.isArray(detail)
        ? detail.map((d) => d.msg).join(", ")
        : detail || "Could not submit. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      data-testid="quote-form"
      className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl overflow-hidden"
    >
      <div className="scan-line" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">Full Name</label>
          <input
            data-testid="quote-name"
            value={form.name}
            onChange={update("name")}
            required
            placeholder="John Doe"
            className="lvs-input mt-2"
          />
        </div>
        <div>
          <label className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">Email</label>
          <input
            data-testid="quote-email"
            type="email"
            value={form.email}
            onChange={update("email")}
            required
            placeholder="you@email.com"
            className="lvs-input mt-2"
          />
        </div>
        <div>
          <label className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">Mobile Number</label>
          <input
            data-testid="quote-mobile"
            value={form.mobile}
            onChange={update("mobile")}
            required
            placeholder="+91 9XXXXXXXXX"
            className="lvs-input mt-2"
          />
        </div>
        <div>
          <label className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">Service Interested</label>
          <select
            data-testid="quote-service"
            value={form.service}
            onChange={update("service")}
            className="lvs-input mt-2 appearance-none"
          >
            <option value="">— Select a service —</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / Custom">Other / Custom</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-mono text-[10px] uppercase tracking-[0.25em] text-[#00cfff]">Tell us about your requirement</label>
        <textarea
          data-testid="quote-message"
          value={form.message}
          onChange={update("message")}
          required
          rows={6}
          placeholder="Site type, number of cameras / sensors, location, timeline…"
          className="lvs-input mt-2 resize-y"
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-xs text-slate-500 max-w-md">
          On submit, we’ll email our team and pre-fill a WhatsApp message to <span className="text-[#00ff9c]">+91 63625 54499</span> for a fast response.
        </p>
        <button
          type="submit"
          disabled={loading}
          data-testid="quote-submit"
          className="relative overflow-hidden btn-shimmer inline-flex items-center gap-2 bg-[#00ff9c] text-[#05080f] font-bold text-mono text-[12px] uppercase tracking-[0.2em] px-7 py-4 rounded-md hover:bg-white transition-colors glow-green disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {loading ? "Sending…" : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
