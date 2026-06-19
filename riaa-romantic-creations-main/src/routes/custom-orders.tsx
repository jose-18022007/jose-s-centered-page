import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Send, Upload, Palette, Sparkles, Package } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { wa } from "@/lib/site";

export const Route = createFileRoute("/custom-orders")({
  head: () => ({
    meta: [
      { title: "Custom Orders — Riaa Candles & Chocolates" },
      { name: "description", content: "Tell us about your occasion, budget and vision — we'll craft a bespoke gift just for you." },
      { property: "og:title", content: "Custom Orders — Riaa" },
    ],
  }),
  component: CustomOrdersPage,
});

const steps = [
  { i: MessageCircle, t: "Share Your Vision", d: "Tell us your occasion, quantity, and ideas." },
  { i: Palette, t: "We Design It", d: "Our team crafts a custom plan just for you." },
  { i: Sparkles, t: "We Handcraft It", d: "Your order is made with care and love." },
  { i: Package, t: "Delivered with Love", d: "Beautifully packaged and ready to delight." },
];

function CustomOrdersPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", occasion: "Wedding", qty: "", budget: "", date: "", req: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Riaa Candles! I would like to place a custom order.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nOccasion: ${form.occasion}\nQuantity: ${form.qty}\nBudget: ${form.budget}\nEvent Date: ${form.date}\nRequirements: ${form.req}`;
    window.open(wa(msg), "_blank");
  };

  return (
    <>
      <PageHero dark label="Custom Orders" title={<>Let's Create Something <span className="italic text-[var(--color-rose-primary)]">Uniquely Yours</span></>} subtitle="From a single anniversary candle to 500 wedding favours, we handcraft to your story.">
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["500+", "Custom Orders"],
            ["Any", "Occasion"],
            ["Any", "Budget"],
          ].map(([n, l]) => (
            <div key={l} className="glass-dark rounded-[32px] px-6 py-5 text-center text-white">
              <div style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: 36, color: "#e2a5b4" }}>{n}</div>
              <div className="font-label mt-1 text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Steps */}
      <section className="px-6 py-20 sm:px-10 sm:py-24" style={{ background: "#fdf6f9" }}>
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-title text-center">How it <span className="text-gradient-rose italic">works</span></h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white" style={{ background: "var(--gradient-rose)", boxShadow: "0 8px 24px rgba(196,122,138,0.35)" }}>
                  <span style={{ fontFamily: "var(--font-italiana)", fontSize: 22 }}>0{i + 1}</span>
                </div>
                <s.i size={22} color="#c47a8a" className="mx-auto mt-4" />
                <h3 className="mt-3" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 18, color: "#2d1f26" }}>{s.t}</h3>
                <p className="mt-2 text-[13px] text-[var(--color-text-muted)]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-20 sm:px-10 sm:py-24" style={{ background: "var(--color-bg-primary)" }}>
        <form onSubmit={submit} className="glass-strong mx-auto max-w-[760px] rounded-[56px] p-8 sm:p-14" style={{ background: "rgba(255,255,255,0.85)" }}>
          <h2 className="font-title text-center">Tell us about your <span className="text-gradient-rose italic">order</span></h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Your Name" full>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] text-[var(--color-text-heading)] focus:outline-none" />
            </Field>
            <Field label="Mobile">
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
            </Field>
            <Field label="Occasion" full>
              <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none">
                {["Wedding", "Birthday", "Baby Shower", "Anniversary", "Corporate", "Festival", "Return Gift", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Quantity">
              <input value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
            </Field>
            <Field label="Budget Range (₹)">
              <input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
            </Field>
            <Field label="Event Date" full>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
            </Field>
            <Field label="Custom Requirements" full>
              <textarea rows={4} value={form.req} onChange={(e) => setForm({ ...form, req: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" placeholder="Colors, scents, ribbon, packaging style, theme..." />
            </Field>
            <div className="sm:col-span-2">
              <label className="font-label mb-2 block text-[var(--color-text-muted)]">Reference Image (optional)</label>
              <div className="flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-[var(--color-rose-primary)] bg-[var(--color-rose-blush)]/30 px-6 py-10 text-center">
                <Upload size={32} color="#c47a8a" />
                <p className="mt-3 text-[14px] text-[var(--color-text-muted)]">Drag &amp; drop or click to upload</p>
              </div>
            </div>
          </div>
          <button type="submit" className="shimmer-overlay mt-8 flex w-full items-center justify-center gap-2 rounded-full px-7 py-5 text-white" style={{ background: "var(--gradient-rose)", boxShadow: "0 8px 32px rgba(196,122,138,0.4)", fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 16 }}>
            <Send size={18} /> Send My Custom Order Request
          </button>
          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-[rgba(226,165,180,0.3)]" />
            <span className="font-label text-[var(--color-text-muted)]">OR</span>
            <span className="h-px flex-1 bg-[rgba(226,165,180,0.3)]" />
          </div>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full px-7 py-5 text-white" style={{ background: "linear-gradient(135deg,#25d366,#128c7e)", fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 16 }}>
            <MessageCircle size={18} /> WhatsApp Us Your Requirements
          </a>
        </form>
      </section>
    </>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="font-label mb-2 block text-[var(--color-text-muted)]">{label}</label>
      {children}
    </div>
  );
}
