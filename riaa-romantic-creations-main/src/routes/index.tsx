import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle, Grid3x3, Shield, Leaf, Flame, HandHeart,
  Award, Palette, BadgeIndianRupee, Users, ArrowRight, ArrowUpRight, Plus,
  Heart, ChevronLeft, ChevronRight, ChevronDown, Instagram, Truck, Package,
  Building2, BadgeCheck, ZoomIn, MessageSquare, Sparkles, Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE, wa } from "@/lib/site";
import { IMG, occasions, collections, products, testimonials, galleryImgs } from "@/lib/content";
import { OCCASIONS } from "@/lib/occasions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riaa Candles & Chocolates — Handcrafted Luxury Gifting, Coonoor" },
      { name: "description", content: "Premium handcrafted soy wax candles, chocolates, bouquets and bespoke gift hampers from the hills of Coonoor. WhatsApp us for custom orders." },
      { property: "og:title", content: "Riaa Candles & Chocolates" },
      { property: "og:description", content: "Handcrafted with Love. Gifted with Grace." },
      { property: "og:image", content: "/hero-share.jpg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <BrandHighlightsBar />
      <Occasions />
      <FeaturedCollections />
      <WhyChoose />
      <Bestsellers />
      <OurStory />
      <Testimonials />
      <GalleryPreview />
      <InstagramShowcase />
      <FinalCta />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}

function DesktopHero() {
  return (
    <section className="hero-bokeh-bg relative isolate hidden min-h-[100svh] items-center overflow-hidden md:flex" style={{ background: "var(--gradient-hero)" }}>
      <AmbientOrbs />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-28 sm:px-10 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-40">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h1 className="animate-rise-in font-display" style={{ animationDelay: "120ms" }}>
            <span className="block" style={{ fontStyle: "italic", fontWeight: 300, color: "#2d1f26" }}>Handcrafted</span>
            <span className="block" style={{ fontStyle: "italic", fontWeight: 300, color: "#2d1f26" }}>Candles &amp;</span>
            <span className="text-gradient-rose block" style={{ fontWeight: 600 }}>Chocolates</span>
            <span className="hero-underline mt-2 block max-w-[60%]" />
          </h1>

          <p className="animate-rise-in mt-7 max-w-[520px] text-[var(--color-text-body)]" style={{ animationDelay: "320ms", fontFamily: "var(--font-dmsans)", fontWeight: 300, fontSize: 18, lineHeight: 1.9 }}>
            Customized gifting solutions for weddings, birthdays, baby showers, corporate events, and every special occasion — poured with pure love in the hills of Coonoor.
          </p>

          <div className="animate-rise-in mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "500ms" }}>
            <Link
              to="/collections"
              className="neu-raised-blush flex items-center gap-2 rounded-full px-7 py-4 text-[var(--color-text-heading)] transition-transform hover:translate-y-px"
              style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 15 }}
            >
              <Grid3x3 size={16} color="#c47a8a" />
              Explore Collections
            </Link>
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-overlay flex items-center gap-2 rounded-full px-7 py-4 text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-rose)", boxShadow: "0 8px 28px rgba(196,122,138,0.4)", fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 15 }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <div className="animate-rise-in mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-[var(--color-text-muted)]" style={{ animationDelay: "720ms" }}>
            <div className="flex items-center gap-1.5"><Shield size={14} color="#c47a8a" /> 100% Handmade</div>
            <span className="h-4 w-px bg-[rgba(226,165,180,0.5)]" />
            <div className="flex items-center gap-1.5"><Leaf size={14} color="#c47a8a" /> Pure Soy Wax</div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto h-[460px] w-full max-w-[520px] animate-gentle-float sm:h-[520px]">
          <div className="absolute inset-0 animate-slow-spin rounded-full border-[1.5px] border-dashed border-[rgba(226,165,180,0.4)]" />
          <img
            src={IMG.hero1}
            alt="Riaa handcrafted soy wax candle with pink roses"
            className="skeu-card absolute left-2 top-4 h-[78%] w-[78%] rounded-[40px] border-[3px] border-[rgba(226,165,180,0.3)] object-cover"
            style={{ transform: "rotate(-3deg)" }}
            width={520} height={520}
          />
          <img
            src={IMG.hero2}
            alt="Handcrafted artisan chocolates"
            className="absolute bottom-0 right-0 h-[55%] w-[55%] rounded-[28px] border-[3px] border-white object-cover"
            style={{ transform: "rotate(3deg)", boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
            width={400} height={400} loading="lazy"
          />
          <div className="glass-strong absolute right-2 top-0 flex items-center gap-2 rounded-2xl px-4 py-2.5">
            <Star size={14} color="#d4a853" fill="#d4a853" />
            <div className="leading-tight">
              <div style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: 16 }}>5.0 Rating</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">Loved by 70+</div>
            </div>
          </div>
          <div className="glass-strong absolute -bottom-2 left-2 flex items-center gap-2 rounded-2xl px-4 py-2.5">
            <Flame size={16} color="#c47a8a" />
            <div className="leading-tight">
              <div style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: 16 }}>100% Soy Wax</div>
              <div className="text-[10px] text-[var(--color-text-muted)]">Pure &amp; Handcrafted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileHero() {
  const tags = ["Weddings", "Birthdays", "Baby Showers", "Corporate"];
  const rise = (delay: number) => ({
    animation: "rise-in 0.9s cubic-bezier(0.16,1,0.3,1) both",
    animationDelay: `${delay}ms`,
  });
  return (
    <section
      className="mobile-hero-bg relative flex flex-col justify-end overflow-hidden px-6 pb-[60px] md:hidden"
      style={{ height: "100svh" }}
    >
      {/* Rose orb top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 h-[200px] w-[200px] rounded-full"
        style={{ background: "rgba(226,165,180,0.20)", filter: "blur(60px)" }}
      />

      {/* Top brand pill */}
      <div
        className="absolute left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 px-[18px] py-1.5 backdrop-blur-md"
        style={{ background: "rgba(255,255,255,0.10)", top: "100px" }}
      >
        <Flame size={12} color="#e2a5b4" />
        <span
          style={{
            fontFamily: "var(--font-dmsans)",
            fontWeight: 300,
            fontSize: 12,
            letterSpacing: "1.5px",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Riaa Candles &amp; Chocolates
        </span>
      </div>

      {/* Main content stack */}
      <div className="relative z-10 flex flex-col">
        {/* Occasion chips */}
        <div className="no-scrollbar -mx-6 overflow-x-auto px-6" style={rise(0)}>
          <div className="flex gap-2 pb-1">
            {tags.map((t) => (
              <span
                key={t}
                className="shrink-0 rounded-full border px-[14px] py-[5px]"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(226,165,180,0.35)",
                  fontFamily: "var(--font-dmsans)",
                  fontWeight: 300,
                  fontSize: 11,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mt-5"
          style={{
            ...rise(150),
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: 52,
            lineHeight: 1.0,
            letterSpacing: "-1px",
            color: "white",
          }}
        >
          <span className="block">Handcrafted</span>
          <span className="block">Candles &amp;</span>
          <span
            className="block"
            style={{
              background: "var(--gradient-rose)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
            }}
          >
            Chocolates
          </span>
          <svg
            viewBox="0 0 200 8"
            preserveAspectRatio="none"
            className="mt-2 block h-2 w-[70%]"
            style={{ animation: "underline-grow 1.2s ease-out 700ms both" }}
          >
            <path
              d="M2 5 Q 50 1, 100 4 T 198 3"
              stroke="#e2a5b4"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </h1>

        {/* Subtext */}
        <p
          className="mt-3"
          style={{
            ...rise(300),
            fontFamily: "var(--font-dmsans)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Customized gifting for every special occasion — made with pure love in Coonoor.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col gap-3" style={rise(450)}>
          <Link
            to="/collections"
            className="shimmer-overlay flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-white"
            style={{
              background: "var(--gradient-rose)",
              boxShadow: "0 8px 28px rgba(196,122,138,0.50)",
              fontFamily: "var(--font-dmsans)",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            <Grid3x3 size={16} color="white" />
            Explore Collections
          </Link>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border px-8 py-4 text-white backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.12)",
              borderColor: "rgba(255,255,255,0.30)",
              fontFamily: "var(--font-dmsans)",
              fontWeight: 400,
              fontSize: 15,
            }}
          >
            <MessageCircle size={16} color="#e2a5b4" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-5 flex items-center gap-4" style={rise(600)}>
          <div
            className="flex items-center gap-1.5"
            style={{
              fontFamily: "var(--font-dmsans)",
              fontWeight: 300,
              fontSize: 12,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <Shield size={12} color="#e2a5b4" /> 100% Handmade
          </div>
          <span className="h-1 w-1 rounded-full" style={{ background: "#e2a5b4" }} />
          <div
            className="flex items-center gap-1.5"
            style={{
              fontFamily: "var(--font-dmsans)",
              fontWeight: 300,
              fontSize: 12,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <Leaf size={12} color="#e2a5b4" /> Pure Soy Wax
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-scroll-bounce absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1">
        <span
          style={{
            fontFamily: "var(--font-dmsans)",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={16} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
}


/* ---------------- BRAND HIGHLIGHTS BAR ---------------- */
function BrandHighlightsBar() {
  const items = [
    { i: Flame, t: "100% Soy Wax" },
    { i: HandHeart, t: "Handmade with Care" },
    { i: Palette, t: "Custom Designs" },
    { i: Package, t: "50+ Chocolate Varieties" },
    { i: Truck, t: "Bulk Orders Accepted" },
    { i: Leaf, t: "Eco-Friendly" },
    { i: Building2, t: "Wedding & Corporate" },
    { i: BadgeCheck, t: "Trusted by 70+" },
  ];
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden py-3 text-white" style={{ background: "var(--gradient-rose)" }}>
      <div className="animate-marquee flex shrink-0 whitespace-nowrap hover:[animation-play-state:paused]">
        {loop.map((it, i) => (
          <span key={i} className="mx-6 flex items-center gap-2 text-[13px]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 400 }}>
            <it.i size={16} color="white" />
            <span>{it.t}</span>
            <span className="ml-6 h-3 w-px bg-white/30" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- OCCASIONS ---------------- */
function Occasions() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32" style={{ background: "#fdf6f9" }}>
      <AmbientOrbs />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Shop by Occasion</SectionLabel>
          <h2 className="font-title mt-5">
            What Are You <span className="text-gradient-rose italic">Celebrating?</span>
          </h2>
          <p className="mt-4 max-w-[500px] text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
            Tell us your occasion — we'll craft the perfect gift, just for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {occasions.map((o, i) => {
            const slug = Object.values(OCCASIONS).find((x) => x.name === o.name)?.slug ?? "";
            return <OccasionCard key={o.name} {...o} slug={slug} icon={[Heart, Star, Sparkles, Award, Building2, Package, Flame][i]} />;
          })}
          {/* Custom card */}
          <Link
            to="/custom-orders"
            className="group flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-[var(--color-rose-primary)] bg-[var(--color-rose-blush)]/40 p-8 text-center transition-all hover:scale-[1.02] hover:bg-[var(--color-rose-blush)]/70"
          >
            <div className="neu-raised-blush-sm mb-4 flex h-14 w-14 items-center justify-center rounded-full">
              <Plus size={22} color="#c47a8a" />
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 19, color: "#2d1f26" }}>Custom Occasion</h3>
            <p className="mt-2 text-[13px] text-[var(--color-text-muted)]">Something else? We create for every moment.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function OccasionCard({ name, desc, img, slug, icon: Icon }: { name: string; desc: string; img: string; slug: string; icon: typeof Heart }) {
  return (
    <Link
      to="/occasions/$slug"
      params={{ slug }}
      className="skeu-card group flex flex-col overflow-hidden rounded-[32px] border border-[rgba(226,165,180,0.2)] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_0_3px_rgba(226,165,180,0.25)]"
    >
      <div className="relative h-44 overflow-hidden">
        <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="bg-white p-5">
        <div className="neu-raised-sm mb-3 flex h-10 w-10 items-center justify-center rounded-full">
          <Icon size={18} color="#c47a8a" />
        </div>
        <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 19, color: "#2d1f26" }}>{name}</h3>
        <p className="mt-1 text-[13px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>{desc}</p>
        <div className="mt-3 flex items-center gap-1.5 text-[13px] text-[var(--color-rose-deep)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
          <span>View Gifts</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}

/* ---------------- FEATURED COLLECTIONS ---------------- */
function FeaturedCollections() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32" style={{ background: "var(--color-bg-primary)" }}>
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Collections</SectionLabel>
          <h2 className="font-title mt-5">
            Our World of <span className="text-gradient-rose italic">Handcrafted</span> Wonders
          </h2>
        </div>
        <div className="mt-14 grid auto-rows-[280px] gap-7 overflow-hidden sm:auto-rows-[300px] md:grid-cols-3 md:grid-rows-2 lg:auto-rows-[320px] xl:auto-rows-[360px]">
          <CollectionCard c={collections[0]} className="md:col-span-1 md:row-span-2 md:h-auto" featured />
          <CollectionCard c={collections[1]} />
          <CollectionCard c={collections[2]} />
          <CollectionCard c={collections[3]} />
          <CollectionCard c={collections[4]} />
        </div>

        {/* Compact custom card */}
        <div className="mx-auto mt-6 max-w-[800px]">
          <div
            className="relative flex flex-col items-stretch gap-8 overflow-hidden rounded-[40px] p-10 md:flex-row md:items-center md:p-12"
            style={{ background: "var(--gradient-dark-section)" }}
          >
            <div className="flex-1">
              <span className="font-label text-[var(--color-gold)]" style={{ letterSpacing: "4px" }}>
                CUSTOM ORDERS
              </span>
              <h3 className="mt-4 text-white" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: 36, lineHeight: 1.1 }}>
                Something <span className="italic text-[var(--color-rose-primary)]">Uniquely Yours?</span>
              </h3>
              <p className="mt-3 max-w-[420px] text-[15px] text-white/70" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
                Every product can be fully customized — colors, scents, messages, packaging and more.
              </p>
              <Link
                to="/custom-orders"
                className="shimmer-overlay mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-white"
                style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 14 }}
              >
                <Palette size={16} /> Start Custom Order
              </Link>
            </div>
            <div className="flex flex-col gap-3 md:w-[200px]">
              {[
                { I: Palette, t: "Any Color" },
                { I: MessageSquare, t: "Custom Message" },
                { I: Package, t: "Custom Packaging" },
              ].map((c) => (
                <div
                  key={c.t}
                  className="flex items-center gap-3 rounded-2xl border-l-2 border-[var(--color-rose-primary)] px-4 py-3 backdrop-blur"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <c.I size={16} color="#e2a5b4" />
                  <span className="text-[13px] text-white/85" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 400 }}>
                    {c.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ c, className = "", featured = false }: { c: (typeof collections)[number]; className?: string; featured?: boolean }) {
  return (
    <Link
      to="/collections"
      className={`skeu-card group relative overflow-hidden rounded-[32px] transition-all duration-500 hover:-translate-y-1.5 ${className}`}
    >
      <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(45,31,38,0.88) 0%, rgba(45,31,38,0.35) 50%, transparent 100%)" }} />
      {featured && (
        <div className="absolute right-5 top-5 rounded-full px-4 py-1.5 text-white" style={{ background: "var(--gradient-rose)", boxShadow: "0 4px 12px rgba(196,122,138,0.4)" }}>
          <span style={{ fontFamily: "var(--font-italiana)", fontSize: 10, letterSpacing: "3px" }}>MOST POPULAR</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <span className="glass inline-flex rounded-full px-3 py-1 text-white" style={{ fontFamily: "var(--font-italiana)", fontSize: 10, letterSpacing: "3px" }}>
          {c.tag}
        </span>
        <h3 className="mt-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: featured ? 38 : 28, lineHeight: 1.1 }}>{c.name}</h3>
        <p className="mt-2 line-clamp-2 max-w-[400px] text-[14px] text-white/80" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>{c.desc}</p>
        <div className="mt-4 inline-flex translate-y-3 items-center gap-1.5 text-[13px] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span style={{ fontFamily: "var(--font-dmsans)" }}>View Collection</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  const features = [
    { icon: HandHeart, t: "Handmade Products", d: "Every product is crafted by hand with full attention to detail and love." },
    { icon: Award, t: "Premium Quality", d: "Only the finest ingredients and materials, never compromised." },
    { icon: Leaf, t: "Eco-Friendly Soy Wax", d: "Pure, clean-burning soy wax — safe for your family and the planet." },
    { icon: Palette, t: "Custom Design Support", d: "Your vision brought to life — any color, scent, message, or style." },
    { icon: BadgeIndianRupee, t: "Affordable Pricing", d: "Luxury quality at fair prices, with special rates for bulk orders." },
    { icon: Users, t: "Trusted by Customers", d: "70+ happy customers and counting, with a perfect 5.0 Google rating." },
  ];
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32" style={{ background: "var(--gradient-dark-section)" }}>
      <div className="relative z-10 mx-auto max-w-[1280px] text-white">
        <div className="flex flex-col items-center text-center">
          <span className="font-label text-[var(--color-gold)]">Our Promise</span>
          <span className="mt-3 h-[2px] w-[60px] rounded-full" style={{ background: "var(--gradient-gold)" }} />
          <h2 className="font-title mt-5 text-white">
            Crafted with Care. <span className="italic text-[var(--color-rose-primary)]">Delivered with Love.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.t}
              className="glass-dark group rounded-[32px] p-9 transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(226,165,180,0.3)] transition-shadow group-hover:shadow-[0_0_20px_rgba(226,165,180,0.35)]" style={{ background: "rgba(226,165,180,0.15)" }}>
                <f.icon size={24} color="#e2a5b4" />
              </div>
              <h3 className="mt-5 text-white" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 20 }}>{f.t}</h3>
              <p className="mt-2 text-[14px] text-white/65" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300, lineHeight: 1.8 }}>{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a
            href={wa("Hi Riaa Candles! I'd like a custom quote for my upcoming order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[rgba(212,168,83,0.5)] px-7 py-3.5 text-white transition-all hover:bg-[rgba(212,168,83,0.12)]"
            style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 15 }}
          >
            Get a Custom Quote <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BESTSELLERS ---------------- */
function Bestsellers() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32" style={{ background: "#fdf6f9" }}>
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Riaa's Picks</SectionLabel>
          <h2 className="font-title mt-5">
            <span className="text-gradient-rose italic">Most Loved</span> by Our Customers
          </h2>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
        <div className="mt-14 flex justify-center">
          <Link
            to="/collections"
            className="neu-raised-blush inline-flex items-center gap-2 rounded-full px-7 py-4 text-[var(--color-text-heading)] transition-transform hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 15 }}
          >
            View All Collections <ArrowRight size={16} color="#c47a8a" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: (typeof products)[number] }) {
  const ribbonColor: Record<string, string> = {
    "Bestseller": "var(--gradient-rose)",
    "New Arrival": "var(--gradient-gold)",
    "Most Loved": "linear-gradient(135deg,#f7dde5,#e2a5b4)",
  };
  return (
    <div
      className="glass-strong group relative overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-2.5"
      style={{ boxShadow: "0 8px 32px rgba(196,122,138,0.12)" }}
    >
      <div className="relative h-56 overflow-hidden">
        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {p.badge && (
          <div className="absolute left-0 top-4 px-3 py-1.5 text-[11px] text-white" style={{ background: ribbonColor[p.badge] ?? "var(--gradient-rose)", fontFamily: "var(--font-italiana)", letterSpacing: "2.5px", borderRadius: "0 8px 8px 0", boxShadow: "0 3px 8px rgba(0,0,0,0.15)" }}>
            {p.badge.toUpperCase()}
          </div>
        )}
        <button className="glass absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110" aria-label="Save">
          <Heart size={15} color="#9a7a84" />
        </button>
      </div>
      <div className="p-5">
        <span className="font-label text-[var(--color-rose-deep)]">{p.cat}</span>
        <h3 className="mt-1.5" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 18, color: "#2d1f26" }}>{p.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
          Handcrafted with care — fully customizable to your moment.
        </p>
        <a
          href={wa(`Hi Riaa! I saw your ${p.name} and would love to know more.`)}
          target="_blank" rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] text-white transition-transform hover:scale-[1.02]"
          style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}
        >
          <MessageCircle size={13} /> Inquire Now
        </a>
      </div>
    </div>
  );
}

/* ---------------- OUR STORY ---------------- */
function OurStory() {
  return (
    <section className="mountain-bg relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
      <div className="mist-layer" aria-hidden />
      {/* warm rose orb to balance cool mountains */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-80px] top-1/3 z-0 h-[300px] w-[300px] rounded-full"
        style={{ background: "#e2a5b4", opacity: 0.12, filter: "blur(80px)" }}
      />
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 md:grid-cols-2">
        <div className="relative mx-auto h-[440px] w-full max-w-[480px]">
          <img src={IMG.about1} alt="Riaa artisan in Coonoor workshop" loading="lazy" className="skeu-card absolute left-0 top-0 h-[78%] w-[72%] rounded-[40px] border-[6px] border-white object-cover" style={{ transform: "rotate(-2.5deg)", zIndex: 2 }} />
          <img src={IMG.about2} alt="Hands tying ribbon" loading="lazy" className="absolute right-0 top-12 h-[55%] w-[55%] rounded-[28px] border-[4px] border-[rgba(226,165,180,0.5)] object-cover" style={{ transform: "rotate(3deg)", zIndex: 1 }} />
          <div className="glass-strong absolute -bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-2xl px-6 py-3 text-center" style={{ boxShadow: "0 8px 24px rgba(196,122,138,0.2)" }}>
            <div style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: 22, color: "#2d1f26", lineHeight: 1 }}>Est. 2020</div>
            <div className="mt-1 text-[11px] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-dmsans)" }}>Riaa Candles &amp; Chocolates</div>
          </div>
        </div>
        <div className="relative">
          <div
            className="rounded-[32px] border border-white/50 p-8 sm:p-10"
            style={{
              background: "rgba(231,248,255,0.4)",
              backdropFilter: "blur(8px)",
            }}
          >
            <SectionLabel center={false}>Our Story</SectionLabel>
            <h2 className="font-hero mt-5" style={{ textShadow: "0 1px 20px rgba(231,248,255,0.8)" }}>
              Made with Hands. <span className="text-gradient-rose italic">Poured with Heart.</span>
            </h2>
            <p
              className="mt-6 max-w-[520px] text-[var(--color-text-body)]"
              style={{
                fontFamily: "var(--font-dmsans)",
                fontWeight: 300,
                fontSize: 17,
                lineHeight: 2,
                textShadow: "0 1px 20px rgba(231,248,255,0.8)",
              }}
            >
              Riaa Candles &amp; Chocolates was born from a simple belief — that the most meaningful gifts are the ones made by hand. Born in the misty hills of Coonoor, every candle we pour, every chocolate we craft, and every bouquet we arrange carries a piece of our heart.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Flame, t: "Soy Wax", s: "Pure & Clean" },
              { icon: Heart, t: "Handmade", s: "With Love" },
              { icon: Award, t: "Quality", s: "Premium" },
            ].map((b) => (
              <div key={b.t} className="neu-raised flex flex-col items-center rounded-[22px] p-5 text-center">
                <b.icon size={20} color="#c47a8a" />
                <div className="mt-2" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: 15, color: "#2d1f26" }}>{b.t}</div>
                <div className="text-[12px] text-[var(--color-text-muted)]">{b.s}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="story-link mt-8 inline-flex items-center gap-2 text-[var(--color-rose-deep)]" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: 18 }}>
            Read Our Full Story <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5500);
    return () => clearInterval(t);
  }, [total]);
  const visible = [0, 1, 2].map((i) => testimonials[(idx + i) % total]);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32" style={{ background: "radial-gradient(ellipse at 70% 30%, #fdf6f9 0%, #e7f8ff 80%)" }}>
      <AmbientOrbs />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Love from Our Customers</SectionLabel>
          <h2 className="font-title mt-5">Words from Our <span className="text-gradient-rose italic">Darlings</span></h2>
          <div className="glass-strong mt-8 flex items-center gap-6 rounded-[32px] px-8 py-5">
            <div style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: 56, color: "#c47a8a", lineHeight: 1 }}>{SITE.rating}</div>
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} color="#d4a853" fill="#d4a853" />)}
              </div>
              <div className="mt-1 text-[13px] text-[var(--color-text-muted)]">Based on {SITE.reviewCount} Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <article key={`${t.name}-${idx}-${i}`} className="glass-strong animate-fade-in relative rounded-[40px] p-9" style={{ animationDelay: `${i * 80}ms` }}>
              <span aria-hidden className="absolute left-5 top-2 select-none" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300, fontSize: 120, lineHeight: 1, color: "rgba(226,165,180,0.2)" }}>"</span>
              <div className="relative flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} color="#d4a853" fill="#d4a853" />)}
              </div>
              <p className="relative mt-4 text-[var(--color-text-heading)]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 15, lineHeight: 1.9 }}>
                {t.text}
              </p>
              <div className="relative mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--color-rose-primary)] bg-[var(--color-rose-blush)] text-[var(--color-rose-deep)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 14, color: "#2d1f26" }}>
                    {t.name}
                    <BadgeCheck size={14} color="#c47a8a" />
                  </div>
                  <div className="text-[12px] italic text-[var(--color-text-muted)]">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button onClick={() => setIdx((i) => (i - 1 + total) % total)} aria-label="Prev" className="neu-raised flex h-11 w-11 items-center justify-center rounded-full">
            <ChevronLeft size={18} color="#c47a8a" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`} className="rounded-full transition-all" style={{ width: i === idx ? 24 : 8, height: 8, background: i === idx ? "var(--gradient-rose)" : "rgba(226,165,180,0.35)" }} />
            ))}
          </div>
          <button onClick={() => setIdx((i) => (i + 1) % total)} aria-label="Next" className="neu-raised flex h-11 w-11 items-center justify-center rounded-full">
            <ChevronRight size={18} color="#c47a8a" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY PREVIEW ---------------- */
function GalleryPreview() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32" style={{ background: "#2d1f26" }}>
      <div className="mx-auto max-w-[1280px] text-white">
        <div className="flex flex-col items-center text-center">
          <span className="font-label text-[var(--color-gold)]">Our Work</span>
          <span className="mt-3 h-[2px] w-[60px] rounded-full" style={{ background: "var(--gradient-gold)" }} />
          <h2 className="font-title mt-5 text-white">A Peek into Our <span className="italic text-[var(--color-rose-primary)]">World</span></h2>
        </div>
        <div className="mt-12 [column-gap:16px] sm:columns-2 md:columns-3 lg:columns-4">
          {galleryImgs.slice(0, 12).map((src, i) => (
            <div key={i} className="group relative mb-4 cursor-zoom-in overflow-hidden rounded-[22px] break-inside-avoid">
              <img src={src} alt="" loading="lazy" className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(45,31,38,0.8), transparent)" }}>
                <div className="flex items-center gap-2 text-white" style={{ fontFamily: "var(--font-dmsans)", fontSize: 12 }}>
                  <ZoomIn size={18} /> View
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/gallery" className="neu-raised-blush inline-flex items-center gap-2 rounded-full px-7 py-3.5" style={{ color: "#c47a8a", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
            <Grid3x3 size={16} /> View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
function InstagramShowcase() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32" style={{ background: "#fdf6f9" }}>
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Follow Our Journey</SectionLabel>
          <h2 className="font-title mt-5">See Us on <span className="text-gradient-rose italic">Instagram</span></h2>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[var(--color-rose-deep)]" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: 22 }}>
            <Instagram size={20} /> {SITE.instagramHandle}
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {galleryImgs.slice(0, 6).map((src, i) => (
            <a key={i} href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-[22px]">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "rgba(226,165,180,0.55)" }}>
                <Instagram size={26} color="white" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[var(--color-rose-primary)] px-6 py-3 text-[var(--color-rose-deep)] transition-all hover:bg-[var(--color-rose-primary)] hover:text-white">
            <Instagram size={16} /> Follow {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}


/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32" style={{ background: "var(--color-bg-primary)" }}>
      <AmbientOrbs />
      <div className="relative z-10 mx-auto max-w-[860px] text-center">
        <SectionLabel>Let's Begin</SectionLabel>
        <h2 className="font-hero mt-5">
          Ready to create <span className="text-gradient-rose italic">something beautiful?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
          Send us a message on WhatsApp and we'll start designing your dream gift today.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="shimmer-overlay inline-flex items-center gap-2 rounded-full px-8 py-4 text-white" style={{ background: "var(--gradient-rose)", boxShadow: "0 8px 28px rgba(196,122,138,0.4)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
            <MessageCircle size={16} /> Start on WhatsApp
          </a>
          <Link to="/custom-orders" className="neu-raised-blush inline-flex items-center gap-2 rounded-full px-8 py-4 text-[var(--color-text-heading)]" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 500 }}>
            Submit Custom Order <ArrowRight size={16} color="#c47a8a" />
          </Link>
        </div>
      </div>
    </section>
  );
}
