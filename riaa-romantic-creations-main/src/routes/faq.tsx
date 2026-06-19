import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/content";
import { wa } from "@/lib/site";

const cats = ["All", "Orders", "Products", "Customization", "Delivery", "Bulk"] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Riaa Candles & Chocolates" },
      { name: "description", content: "Frequently asked questions about Riaa Candles & Chocolates: orders, products, customization, delivery, and bulk gifting." },
      { property: "og:title", content: "FAQ — Riaa Candles & Chocolates" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<number | null>(0);
  const list = cat === "All" ? faqs : faqs.filter((f) => f.cat === cat);

  return (
    <>
      <PageHero label="FAQ" title={<>Questions We Love to <span className="text-gradient-rose italic">Answer</span></>} subtitle="Everything you need to know about Riaa Candles & Chocolates.">
        <div className="no-scrollbar mx-auto flex max-w-full gap-2 overflow-x-auto pb-2">
          {cats.map((c) => (
            <button key={c} onClick={() => { setCat(c); setOpen(null); }} className="shrink-0 rounded-full px-5 py-2.5 text-[13px]" style={{ background: cat === c ? "var(--gradient-rose)" : "rgba(255,255,255,0.55)", color: cat === c ? "white" : "#6b4c57", border: "1px solid rgba(226,165,180,0.3)", backdropFilter: "blur(10px)", fontFamily: "var(--font-dmsans)" }}>
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="px-6 py-16 sm:px-10 sm:py-24" style={{ background: "var(--color-bg-primary)" }}>
        <div className="mx-auto max-w-[820px] space-y-4">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`block w-full rounded-[22px] px-7 py-5 text-left transition-all ${isOpen ? "neu-pressed border-l-[3px] border-[var(--color-rose-primary)]" : "neu-raised"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 17, color: "#2d1f26" }}>{f.q}</h3>
                  <ChevronDown size={18} color="#c47a8a" className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </div>
                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", marginTop: isOpen ? 16 : 0 }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[rgba(226,165,180,0.25)] pt-4 text-[15px] text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300, lineHeight: 1.85 }}>{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-[640px]">
          <div className="glass-strong rounded-[40px] p-10 text-center">
            <h3 className="font-subtitle">Still have a question?</h3>
            <p className="mt-2 text-[var(--color-text-body)]">We're a quick WhatsApp message away.</p>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-4 text-white" style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
