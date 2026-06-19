import { useEffect, useState, type ComponentType } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Flame, MessageCircle, Phone, Menu, X, Home, Grid3x3, Image as ImageIcon } from "lucide-react";
import { SITE, wa } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/custom-orders", label: "Custom" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <nav
        className="fixed left-1/2 z-[999] hidden -translate-x-1/2 transition-all duration-500 md:flex"
        style={{
          top: scrolled ? 48 : 56,
          width: "min(1100px, calc(100vw - 32px))",
        }}
      >
        <div
          className="glass-navbar flex w-full items-center justify-between rounded-full transition-all duration-500"
          style={{
            padding: scrolled ? "10px 22px" : "12px 28px",
            background: scrolled ? "rgba(255,255,255,0.88)" : undefined,
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <Flame size={18} color="#c47a8a" />
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "var(--font-vibes)", fontSize: 28, color: "#2d1f26", lineHeight: 1 }}>Riaa</span>
              <span className="font-label mt-1 text-[10px] text-[var(--color-rose-primary)]">Candles &amp; Chocolates</span>
            </div>
          </Link>

          {/* Center links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.slice(0, 7).map((l, i) => {
              const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
              return (
                <div key={l.to} className="flex items-center">
                  {i > 0 && <span className="mx-1 h-4 w-px bg-[rgba(226,165,180,0.3)]" />}
                  <Link
                    to={l.to}
                    className="relative px-3 py-1.5 text-[13px] tracking-wide transition-colors duration-200 hover:text-[var(--color-rose-deep)]"
                    style={{ fontFamily: "var(--font-dmsans)", color: active ? "#c47a8a" : "#6b4c57", fontWeight: active ? 500 : 400 }}
                  >
                    {l.label}
                    {active && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--color-rose-deep)]" />}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a href={SITE.phoneHref} className="hidden items-center gap-1.5 text-[13px] text-[var(--color-text-body)] xl:flex">
              <Phone size={14} color="#c47a8a" />
              <span style={{ fontFamily: "var(--font-dmsans)" }}>{SITE.phoneDisplay}</span>
            </a>
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-overlay flex items-center gap-2 rounded-full px-5 py-2 text-white transition-transform duration-300 hover:scale-105"
              style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 13, boxShadow: "0 4px 16px rgba(196,122,138,0.35)" }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <button onClick={() => setOpen(true)} className="rounded-full p-2 lg:hidden" aria-label="Menu">
              <Menu size={18} color="#2d1f26" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom pill */}
      <MobileBottomNav />

      {/* Drawer (tablet/small desktop) */}
      {open && (
        <div className="fixed inset-0 z-[1001] md:block" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-[rgba(45,31,38,0.5)] backdrop-blur-sm" />
          <aside
            className="glass-strong absolute right-0 top-0 flex h-full w-[320px] flex-col p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} className="self-end p-2" aria-label="Close">
              <X size={20} color="#2d1f26" />
            </button>
            <div className="mt-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-xl px-4 py-3 text-[15px] text-[var(--color-text-heading)] hover:bg-white/50"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 rounded-full px-6 py-3 text-white"
              style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500 }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </aside>
        </div>
      )}
    </>
  );
}

function MobileBottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const tabs = [
    { to: "/", Icon: Home, label: "Home" },
    { to: "/collections", Icon: Grid3x3, label: "Shop" },
    { to: "/gallery", Icon: ImageIcon, label: "Gallery" },
    { to: "/contact", Icon: Phone, label: "Contact" },
  ];
  return (
    <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2 md:hidden" style={{ width: "calc(100% - 32px)", maxWidth: 400 }}>
      <div className="glass-navbar relative flex items-center justify-around rounded-full px-3 py-2.5">
        {tabs.slice(0, 2).map((t) => (
          <MobileTab key={t.to} to={t.to} Icon={t.Icon} label={t.label} active={t.to === "/" ? path === "/" : path.startsWith(t.to)} />
        ))}
        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-8 flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform active:scale-95"
          style={{ background: "var(--gradient-rose)", boxShadow: "0 8px 24px rgba(196,122,138,0.45)" }}
        >
          <MessageCircle size={24} />
        </a>
        {tabs.slice(2).map((t) => (
          <MobileTab key={t.to} to={t.to} Icon={t.Icon} label={t.label} active={t.to === "/" ? path === "/" : path.startsWith(t.to)} />
        ))}
      </div>
    </div>
  );
}

function MobileTab({ to, Icon, label, active }: { to: string; Icon: ComponentType<{ size?: number; color?: string }>; label: string; active: boolean }) {
  return (
    <Link to={to} className="relative flex flex-col items-center gap-1 px-3 py-1 transition-transform active:scale-95">
      {active && <span className="absolute -top-0.5 h-1 w-1 rounded-full bg-[var(--color-rose-deep)]" />}
      <Icon size={20} color={active ? "#c47a8a" : "#9a7a84"} />
      <span style={{ fontFamily: "var(--font-dmsans)", fontSize: 10, fontWeight: 300, color: active ? "#c47a8a" : "#9a7a84" }}>{label}</span>
    </Link>
  );
}
