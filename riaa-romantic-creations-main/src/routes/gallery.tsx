import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { galleryImgs } from "@/lib/content";

const cats = ["All", "Weddings", "Baby Showers", "Birthdays", "Corporate", "Candles", "Chocolates", "Bouquets", "Hampers"] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Riaa Candles & Chocolates" },
      { name: "description", content: "A look at our handcrafted candles, chocolates, bouquets, and gift hampers for weddings, baby showers, and corporate events." },
      { property: "og:title", content: "Gallery — Riaa Candles & Chocolates" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const imgs = [...galleryImgs, ...galleryImgs]; // 24

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? null : (i - 1 + imgs.length) % imgs.length));
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? null : (i + 1) % imgs.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, imgs.length]);

  return (
    <>
      <PageHero label="Our Portfolio" title={<>A Portfolio of <span className="text-gradient-rose italic">Love</span></>} subtitle="Every piece is one of a kind — here are some of our favourite moments.">
        <div className="no-scrollbar mx-auto flex max-w-full gap-2 overflow-x-auto pb-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className="shrink-0 rounded-full px-5 py-2.5 text-[13px] transition-all" style={{ background: cat === c ? "var(--gradient-rose)" : "rgba(255,255,255,0.55)", color: cat === c ? "white" : "#6b4c57", border: "1px solid rgba(226,165,180,0.3)", backdropFilter: "blur(10px)", fontFamily: "var(--font-dmsans)" }}>
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ background: "#fdf6f9" }}>
        <div className="mx-auto max-w-[1280px] [column-gap:16px] sm:columns-2 md:columns-3 lg:columns-4">
          {imgs.map((src, i) => (
            <button key={i} onClick={() => setOpen(i)} className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-[22px] break-inside-avoid">
              <img src={src} alt="" loading="lazy" className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(45,31,38,0.7), transparent)" }}>
                <span className="flex items-center gap-1.5 text-[12px] text-white"><ZoomIn size={16} /> View</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-[rgba(20,10,15,0.94)] p-4" onClick={() => setOpen(null)}>
          <button className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white" onClick={() => setOpen(null)} aria-label="Close"><X size={22} /></button>
          <button className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + imgs.length) % imgs.length); }} aria-label="Previous"><ChevronLeft size={22} /></button>
          <img src={imgs[open]} alt="" className="max-h-[85vh] max-w-[90vw] rounded-[24px] border-2 border-white object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % imgs.length); }} aria-label="Next"><ChevronRight size={22} /></button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px] text-white/80">{open + 1} of {imgs.length}</div>
        </div>
      )}
    </>
  );
}
