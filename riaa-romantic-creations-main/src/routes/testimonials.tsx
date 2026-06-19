import { createFileRoute } from "@tanstack/react-router";
import { Star, BadgeCheck, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { testimonials } from "@/lib/content";
import { SITE, wa } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Riaa Candles & Chocolates (5.0 ★)" },
      { name: "description", content: "Read what our 70+ happy customers say about Riaa Candles & Chocolates. Rated 5.0 on Google." },
      { property: "og:title", content: "5.0 ★ Customer Reviews — Riaa" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const all = [...testimonials, ...testimonials];
  return (
    <>
      <PageHero label="Love from Our Customers" title={<>Words from Our <span className="text-gradient-rose italic">Darlings</span></>} subtitle={`Rated ${SITE.rating} on Google, loved by ${SITE.reviewCount} customers across India.`}>
        <div className="glass-strong mx-auto inline-flex items-center gap-6 rounded-[40px] px-10 py-6">
          <div style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: 76, color: "#c47a8a", lineHeight: 1 }}>{SITE.rating}</div>
          <div className="text-left">
            <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={26} color="#d4a853" fill="#d4a853" />)}</div>
            <div className="mt-1 text-[13px] text-[var(--color-text-muted)]">{SITE.reviewCount} Google Reviews</div>
          </div>
        </div>
      </PageHero>

      <section className="px-6 py-16 sm:px-10 sm:py-24" style={{ background: "#fdf6f9" }}>
        <div className="mx-auto max-w-[1280px] [column-gap:24px] md:columns-2 lg:columns-3">
          {all.map((t, i) => (
            <article key={i} className="glass-strong relative mb-6 rounded-[40px] p-8 break-inside-avoid">
              <span aria-hidden className="absolute left-5 top-1 select-none" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300, fontSize: 100, lineHeight: 1, color: "rgba(226,165,180,0.2)" }}>"</span>
              <div className="relative flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} color="#d4a853" fill="#d4a853" />)}</div>
              <p className="relative mt-3" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 15, lineHeight: 1.85, color: "#2d1f26" }}>{t.text}</p>
              <div className="relative mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-rose-primary)] bg-[var(--color-rose-blush)] text-[var(--color-rose-deep)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>{t.name[0]}</div>
                <div>
                  <div className="flex items-center gap-1.5 text-[14px]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500, color: "#2d1f26" }}>{t.name}<BadgeCheck size={13} color="#c47a8a" /></div>
                  <div className="text-[12px] italic text-[var(--color-text-muted)]">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={wa("Hi Riaa! I'd love to leave a review.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-white" style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
            <MessageCircle size={16} /> Share Your Story
          </a>
        </div>
      </section>
    </>
  );
}
