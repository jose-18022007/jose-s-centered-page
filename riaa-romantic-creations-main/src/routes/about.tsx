import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Heart, Award, HandHeart, Leaf, Palette, Users, ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { IMG } from "@/lib/content";
import { SITE, wa } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Riaa Candles & Chocolates — Our Story from Coonoor" },
      { name: "description", content: "Born in the hills of Coonoor, Riaa Candles & Chocolates is a handcrafted gifting brand pouring love into every candle, chocolate, and bouquet." },
      { property: "og:title", content: "Our Story — Riaa Candles & Chocolates" },
      { property: "og:description", content: "Handmade in Coonoor with pure soy wax, premium chocolate, and a lot of heart." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero label="Our Story" title={<>Made with Hands. <span className="text-gradient-rose italic">Poured with Heart.</span></>} subtitle="What began as a small, quiet passion in the hills of Coonoor has grown into a boutique gifting house — but our heart is still the same. Handmade. Personal. Made for moments worth remembering." />

      {/* Story body */}
      <section className="mountain-bg mountain-bg-tall relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28">
        <div className="mist-layer" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-100px] top-1/2 z-0 h-[360px] w-[360px] -translate-y-1/2 rounded-full"
          style={{ background: "#e2a5b4", opacity: 0.12, filter: "blur(80px)" }}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2">
          <div className="relative h-[520px]">
            <img src={IMG.about1} alt="Founder pouring soy wax" loading="lazy" className="skeu-card absolute left-0 top-0 h-[75%] w-[72%] rounded-[40px] border-[6px] border-white object-cover" style={{ transform: "rotate(-2deg)" }} />
            <img src={IMG.about2} alt="Hands tying ribbon" loading="lazy" className="absolute bottom-0 right-0 h-[55%] w-[55%] rounded-[28px] border-[4px] border-[rgba(226,165,180,0.5)] object-cover" style={{ transform: "rotate(3deg)" }} />
          </div>
          <div>
            <SectionLabel center={false}>Coonoor, India</SectionLabel>
            <h2 className="font-title mt-5">A small studio. <span className="text-gradient-rose italic">A big heart.</span></h2>
            <div className="mt-6 space-y-5 text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300, fontSize: 17, lineHeight: 1.95 }}>
              <p>Riaa was founded on the belief that the best gifts aren't bought — they're <em>made</em>. Every candle is hand-poured in small batches using 100% pure soy wax. Every chocolate is tempered by hand. Every bouquet is arranged petal by petal.</p>
              <p>We work with families planning their once-in-a-lifetime weddings, parents welcoming a new baby, and companies who want to thank their teams with something that actually means something.</p>
              <p>If you can dream it, we can craft it. That's our quiet promise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 sm:px-10 sm:py-28" style={{ background: "var(--color-bg-primary)" }}>
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="font-title mt-5">Six little <span className="text-gradient-rose italic">love letters</span> to gifting</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { i: HandHeart, t: "Handmade always", d: "Nothing mass-produced. Ever." },
              { i: Leaf, t: "Pure soy wax", d: "Clean burning, safe for your home." },
              { i: Palette, t: "Made for you", d: "Custom color, scent, message, ribbon." },
              { i: Award, t: "Quality first", d: "Only the finest ingredients and materials." },
              { i: Heart, t: "Personal touch", d: "A handwritten tag with every order." },
              { i: Users, t: "Trusted by 70+", d: "A perfect 5.0 rating, and counting." },
            ].map((v) => (
              <div key={v.t} className="neu-raised rounded-[32px] p-8">
                <div className="neu-raised-sm flex h-12 w-12 items-center justify-center rounded-full"><v.i size={20} color="#c47a8a" /></div>
                <h3 className="mt-5" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 20, color: "#2d1f26" }}>{v.t}</h3>
                <p className="mt-2 text-[14px] text-[var(--color-text-muted)]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="px-6 py-20 sm:px-10 sm:py-28" style={{ background: "var(--gradient-dark-section)" }}>
        <div className="mx-auto grid max-w-[1100px] gap-10 text-center text-white lg:grid-cols-3">
          {[
            { n: "500+", l: "Custom Orders" },
            { n: "70+", l: "5-Star Reviews" },
            { n: "4 yrs", l: "of Handcrafted Love" },
          ].map((s) => (
            <div key={s.l} className="glass-dark rounded-[32px] px-8 py-10">
              <div style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: 64, color: "#e2a5b4", lineHeight: 1 }}>{s.n}</div>
              <div className="font-label mt-3 text-[var(--color-gold)]">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 flex max-w-[800px] flex-wrap items-center justify-center gap-4">
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-white" style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
            <MessageCircle size={16} /> Chat with us
          </a>
          <Link to="/collections" className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,168,83,0.5)] px-7 py-4 text-white" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
            Browse Collections <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
