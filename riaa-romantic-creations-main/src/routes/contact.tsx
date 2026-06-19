import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, Instagram, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, wa } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Riaa Candles & Chocolates — WhatsApp, Phone, Email" },
      { name: "description", content: "Get in touch with Riaa Candles & Chocolates in Coonoor. WhatsApp, phone, email, or visit our studio." },
      { property: "og:title", content: "Contact Riaa Candles & Chocolates" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(wa(`Hi Riaa Candles! ${form.message}\n\nName: ${form.name}\nPhone: ${form.phone}`), "_blank");
  };

  const cards = [
    { i: MapPin, t: SITE.address, s: "Visit Us" },
    { i: Phone, t: SITE.phoneDisplay, s: "Call Us", href: SITE.phoneHref },
    { i: MessageCircle, t: "WhatsApp Anytime", s: "Chat Now", href: wa() },
    { i: Mail, t: SITE.email, s: "Email Us", href: `mailto:${SITE.email}` },
    { i: Clock, t: SITE.hours, s: "Open Hours" },
  ];

  return (
    <>
      <PageHero label="Get in Touch" title={<>Let's Start a <span className="text-gradient-rose italic">Conversation</span></>} subtitle="We'd love to hear about your occasion. WhatsApp is the fastest way to reach us." />

      <section className="px-6 py-16 sm:px-10 sm:py-24" style={{ background: "#fdf6f9" }}>
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[5fr_7fr]">
          {/* Left */}
          <div>
            <div className="mb-8">
              <div style={{ fontFamily: "var(--font-vibes)", fontSize: 56, color: "#c47a8a", lineHeight: 1 }}>Riaa</div>
              <p className="font-label mt-1 text-[var(--color-rose-deep)]">{SITE.tagline}</p>
            </div>
            <div className="space-y-4">
              {cards.map((c, i) => (
                <a key={i} href={c.href ?? "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="neu-raised-blush flex items-center gap-4 rounded-[22px] p-5 transition-transform hover:-translate-y-0.5">
                  <div className="neu-raised-blush-sm flex h-12 w-12 items-center justify-center rounded-full">
                    <c.i size={20} color="#c47a8a" />
                  </div>
                  <div>
                    <div className="font-label text-[var(--color-rose-deep)]">{c.s}</div>
                    <div className="mt-1 text-[15px] text-[var(--color-text-heading)]" style={{ fontFamily: "var(--font-dmsans)" }}>{c.t}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="neu-raised-blush flex h-12 w-12 items-center justify-center rounded-full"><Instagram size={20} color="#c47a8a" /></a>
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="neu-raised-blush flex h-12 w-12 items-center justify-center rounded-full"><MessageCircle size={20} color="#25d366" /></a>
            </div>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 rounded-full px-7 py-4 text-white" style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right */}
          <div>
            <form onSubmit={submit} className="glass-strong rounded-[40px] p-8 sm:p-12">
              <h2 className="font-title">Send us a <span className="text-gradient-rose italic">note</span></h2>
              <div className="mt-6 space-y-5">
                <div>
                  <label className="font-label mb-2 block text-[var(--color-text-muted)]">Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
                </div>
                <div>
                  <label className="font-label mb-2 block text-[var(--color-text-muted)]">Phone</label>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" />
                </div>
                <div>
                  <label className="font-label mb-2 block text-[var(--color-text-muted)]">Your Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="neu-pressed w-full rounded-[22px] px-5 py-4 text-[15px] focus:outline-none" placeholder="Tell us about your occasion..." />
                </div>
              </div>
              <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-white" style={{ background: "var(--gradient-rose)", boxShadow: "0 8px 28px rgba(196,122,138,0.35)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
                <Send size={16} /> Send Message
              </button>
            </form>

            <div className="mt-8 overflow-hidden rounded-[40px] border border-[rgba(226,165,180,0.3)]" style={{ boxShadow: "0 8px 28px rgba(196,122,138,0.15)" }}>
              <iframe
                title="Riaa Candles location, Coonoor"
                src="https://www.google.com/maps?q=Coonoor%2C+Tamil+Nadu%2C+India&output=embed"
                className="block h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
