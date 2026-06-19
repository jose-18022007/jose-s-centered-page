import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, ChevronRight, Star, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { collections, products } from "@/lib/content";
import { wa } from "@/lib/site";

const tabs = ["All", "Candles", "Chocolates", "Bouquets", "Hampers", "Corporate"] as const;
const subcats: Record<string, string[]> = {
  Candles: ["Scented", "Decorative", "Customized", "Wedding", "Baby Shower", "Return Gifts"],
  Chocolates: ["Premium", "Kunafa", "Custom Boxes", "Festival Packs"],
  Bouquets: ["Flower", "Chocolate", "Custom", "Event"],
  Hampers: ["Birthday", "Wedding", "Festival", "Corporate"],
};

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Riaa Candles, Chocolates, Bouquets & Hampers" },
      { name: "description", content: "Browse our handcrafted candles, premium chocolates, fresh bouquets, gift hampers and corporate gifting collections." },
      { property: "og:title", content: "Our Collections — Riaa Candles & Chocolates" },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? products : products.filter((p) => p.cat === tab || (tab === "Hampers" && p.cat === "Hampers"));

  return (
    <>
      <PageHero label="Collections" title={<>Our <span className="text-gradient-rose italic">Handcrafted</span> World</>} subtitle="Every piece is made by hand in our Coonoor studio. Browse below, then WhatsApp us to make it yours.">
        <div className="no-scrollbar mx-auto flex max-w-full gap-2 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="shrink-0 rounded-full px-5 py-2.5 text-[13px] transition-all"
              style={{
                background: tab === t ? "var(--gradient-rose)" : "rgba(255,255,255,0.55)",
                color: tab === t ? "white" : "#6b4c57",
                fontFamily: "var(--font-dmsans)",
                fontWeight: tab === t ? 500 : 400,
                border: "1px solid rgba(226,165,180,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Category overview */}
      <section className="px-6 py-20 sm:px-10" style={{ background: "#fdf6f9" }}>
        <div className="mx-auto grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <div key={c.id} className="skeu-card group overflow-hidden rounded-[32px] bg-white">
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <span className="font-label text-[var(--color-rose-deep)]">{c.tag}</span>
                <h3 className="mt-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: 26, color: "#2d1f26" }}>{c.name}</h3>
                <p className="mt-2 text-[14px] text-[var(--color-text-muted)]">{c.desc}</p>
                {subcats[c.name.split(" ")[1]] && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {subcats[c.name.split(" ")[1]].map((s) => (
                      <button key={s} className="neu-raised-blush-sm inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] text-[var(--color-text-body)] hover:text-[var(--color-rose-deep)]" style={{ fontFamily: "var(--font-dmsans)" }}>
                        {s} <ChevronRight size={11} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="px-6 py-20 sm:px-10 sm:py-24" style={{ background: "var(--color-bg-primary)" }}>
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-title text-center">Browse <span className="text-gradient-rose italic">Featured</span> Pieces</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <div key={p.name} className="glass-strong group overflow-hidden rounded-[32px] transition-all hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {p.badge && (
                    <span className="absolute left-0 top-4 px-3 py-1 text-[10px] text-white" style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-italiana)", letterSpacing: "2px", borderRadius: "0 8px 8px 0" }}>{p.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <span className="font-label text-[var(--color-rose-deep)]">{p.cat}</span>
                  <h3 className="mt-1.5" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 17, color: "#2d1f26" }}>{p.name}</h3>
                  <div className="mt-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} color="#d4a853" fill="#d4a853" />)}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600, fontSize: 18, color: "#c47a8a" }}>From ₹{p.price}</div>
                    <a href={wa(`Hi Riaa! I'm interested in ${p.name}.`)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] text-white" style={{ background: "var(--gradient-rose)" }}>
                      <MessageCircle size={11} /> Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
