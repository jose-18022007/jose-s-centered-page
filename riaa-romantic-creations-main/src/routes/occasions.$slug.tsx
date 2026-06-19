import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Palette, Package, MessageSquare } from "lucide-react";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { SectionLabel } from "@/components/SectionLabel";
import { BackButton } from "@/components/BackButton";
import { OCCASIONS } from "@/lib/occasions";
import { products } from "@/lib/content";
import { wa } from "@/lib/site";

export const Route = createFileRoute("/occasions/$slug")({
  head: ({ params }) => {
    const o = OCCASIONS[params.slug];
    const title = o ? `${o.name} — Riaa Candles & Chocolates` : "Occasion — Riaa";
    const desc = o?.desc ?? "Handcrafted gifts for every occasion.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(o ? [{ property: "og:image" as const, content: o.heroImg }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    if (!OCCASIONS[params.slug]) throw notFound();
    return { slug: params.slug };
  },
  component: OccasionPage,
});

function OccasionPage() {
  const { slug } = Route.useParams();
  const o = OCCASIONS[slug];
  if (!o) return null;
  const showProducts = products.slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden px-6 sm:px-10"
        style={{
          minHeight: "60vh",
          background: "var(--gradient-hero)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${o.heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(253,246,249,0.88) 0%, rgba(231,248,255,0.92) 100%)",
          }}
        />
        <AmbientOrbs />
        <BackButton variant="light" />

        <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center py-24 text-center sm:py-32">
          <span
            className="font-label"
            style={{ color: "#d4a853", letterSpacing: "4px" }}
          >
            {o.label}
          </span>
          <span
            className="mt-3 h-[2px] w-[60px] rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          />
          <h1 className="font-hero mt-6">
            {o.titleLead}{" "}
            <span className="text-gradient-rose italic">{o.titleEm}</span>
          </h1>
          <p
            className="mt-6 max-w-[640px]"
            style={{
              fontFamily: "var(--font-dmsans)",
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.9,
              color: "var(--color-text-body)",
            }}
          >
            {o.desc}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={wa(o.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-overlay inline-flex items-center gap-2 rounded-full px-7 py-4 text-white"
              style={{
                background: "var(--gradient-rose)",
                boxShadow: "0 8px 28px rgba(196,122,138,0.4)",
                fontFamily: "var(--font-dmsans)",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              <MessageCircle size={16} /> Inquire on WhatsApp
            </a>
            <Link
              to="/collections"
              className="neu-raised-blush inline-flex items-center gap-2 rounded-full px-7 py-4"
              style={{
                color: "#2d1f26",
                fontFamily: "var(--font-dmsans)",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              Browse All Collections <ArrowRight size={16} color="#c47a8a" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section
        className="px-6 py-24 sm:px-10 sm:py-32"
        style={{ background: "#fdf6f9" }}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <SectionLabel>Handpicked</SectionLabel>
            <h2 className="font-title mt-5">
              Perfect for{" "}
              <span className="text-gradient-rose italic">{o.name}</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {showProducts.map((p) => (
              <div
                key={p.name}
                className="glass-strong group overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-2.5"
                style={{ boxShadow: "0 8px 32px rgba(196,122,138,0.12)" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <span className="font-label text-[var(--color-rose-deep)]">
                    {p.cat}
                  </span>
                  <h3
                    className="mt-1.5"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#2d1f26",
                    }}
                  >
                    {p.name}
                  </h3>
                  <a
                    href={wa(
                      `Hi Riaa! I'm interested in ${p.name} for ${o.name.toLowerCase()}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] text-white transition-transform hover:scale-[1.02]"
                    style={{
                      background: "var(--gradient-rose)",
                      fontFamily: "var(--font-dmsans)",
                      fontWeight: 500,
                    }}
                  >
                    <MessageCircle size={13} /> Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="px-6 py-24 sm:px-10"
        style={{ background: "var(--color-bg-primary)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-title mt-5">
              Three steps to your{" "}
              <span className="text-gradient-rose italic">dream gift</span>
            </h2>
          </div>
          <div className="mt-14 grid items-start gap-10 md:grid-cols-3">
            {[
              {
                I: MessageCircle,
                t: "Tell Us Your Vision",
                d: "Share your occasion, theme, quantity, and budget on WhatsApp.",
              },
              {
                I: Palette,
                t: "We Handcraft It",
                d: "Our artisans pour, mould, and pack every gift by hand.",
              },
              {
                I: Package,
                t: "Delivered with Love",
                d: "Beautifully packaged and shipped pan-India to your doorstep.",
              },
            ].map((s, i) => (
              <div key={s.t} className="relative flex flex-col items-center text-center">
                <div className="neu-raised mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                  <s.I size={22} color="#c47a8a" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 500,
                    fontSize: 19,
                    color: "#2d1f26",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  className="mt-2 max-w-[260px] text-[14px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}
                >
                  {s.d}
                </p>
                {i < 2 && (
                  <span className="absolute right-[-30px] top-7 hidden h-px w-16 border-t border-dashed border-[var(--color-rose-primary)] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="px-6 py-20 sm:px-10 sm:py-28"
        style={{ background: "#fdf6f9" }}
      >
        <div
          className="glass-strong relative mx-auto max-w-[860px] overflow-hidden rounded-[40px] p-10 text-center sm:p-14"
          style={{ background: "rgba(255,255,255,0.5)" }}
        >
          <SectionLabel>One Last Touch</SectionLabel>
          <h2 className="font-hero mt-5">
            Looking for something{" "}
            <span className="text-gradient-rose italic">specific?</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[520px] text-[var(--color-text-body)]"
            style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}
          >
            Let's create it just for you — every detail handcrafted to match
            your moment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={wa(o.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-overlay inline-flex items-center gap-2 rounded-full px-7 py-4 text-white"
              style={{
                background: "var(--gradient-rose)",
                boxShadow: "0 8px 28px rgba(196,122,138,0.4)",
                fontFamily: "var(--font-dmsans)",
                fontWeight: 500,
              }}
            >
              <MessageCircle size={16} /> Start on WhatsApp
            </a>
            <Link
              to="/custom-orders"
              className="neu-raised-blush inline-flex items-center gap-2 rounded-full px-7 py-4"
              style={{
                color: "#2d1f26",
                fontFamily: "var(--font-dmsans)",
                fontWeight: 500,
              }}
            >
              <MessageSquare size={16} color="#c47a8a" /> Custom Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
