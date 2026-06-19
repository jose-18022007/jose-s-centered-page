import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Phone, Mail, Clock, Leaf, Heart, ChevronRight } from "lucide-react";
import { SITE, wa } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative text-[var(--color-text-light)]" style={{ background: "#2d1f26" }}>
      <div className="h-[3px] w-full" style={{ background: "var(--gradient-rose)" }} />
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-2">
            <span style={{ fontFamily: "var(--font-vibes)", fontSize: 42, color: "#e2a5b4", lineHeight: 1 }}>Riaa</span>
          </div>
          <p className="font-label mt-2 text-[var(--color-gold)]">Candles &amp; Chocolates</p>
          <p className="mt-4 max-w-[260px] text-[14px] text-white/60" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
            {SITE.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="neu-dark flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[rgba(226,165,180,0.2)]">
              <Instagram size={18} color="#e2a5b4" />
            </a>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="neu-dark flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[rgba(226,165,180,0.2)]">
              <MessageCircle size={18} color="#e2a5b4" />
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(212,168,83,0.3)] bg-white/5 px-3 py-1.5 backdrop-blur">
            <Leaf size={12} color="#d4a853" />
            <span className="font-label text-[var(--color-gold)]">100% Eco-Friendly</span>
          </div>
        </div>

        <FooterCol title="Quick Links">
          {[
            ["Home", "/"],
            ["Collections", "/collections"],
            ["Custom Orders", "/custom-orders"],
            ["Gallery", "/gallery"],
            ["About Us", "/about"],
            ["Testimonials", "/testimonials"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ].map(([l, h]) => (
            <FooterLink key={h} to={h}>{l}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Collections">
          {[
            "Candles", "Chocolates", "Bouquets", "Gift Hampers", "Corporate Gifts", "Wedding Favours",
          ].map((l) => (
            <FooterLink key={l} to="/collections">{l}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Get in Touch">
          <FooterItem icon={<MapPin size={14} color="#e2a5b4" />}>{SITE.address}</FooterItem>
          <FooterItem icon={<Phone size={14} color="#e2a5b4" />}><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></FooterItem>
          <FooterItem icon={<MessageCircle size={14} color="#e2a5b4" />}>WhatsApp Available</FooterItem>
          <FooterItem icon={<Mail size={14} color="#e2a5b4" />}>{SITE.email}</FooterItem>
          <FooterItem icon={<Clock size={14} color="#e2a5b4" />}>{SITE.hours}</FooterItem>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-white"
            style={{ background: "var(--gradient-rose)", fontFamily: "var(--font-dmsans)", fontWeight: 500, fontSize: 13 }}
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </FooterCol>
      </div>

      <div className="border-t border-[rgba(226,165,180,0.15)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-6 text-[12px] text-white/40 sm:flex-row sm:px-10" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Riaa Candles &amp; Chocolates. Made with
            <Heart size={12} color="#e2a5b4" fill="#e2a5b4" />
            in Coonoor.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--color-rose-primary)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-rose-primary)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-label mb-5 text-[var(--color-gold)]">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-1 text-[14px] text-white/65 transition-all hover:translate-x-1 hover:text-[var(--color-rose-primary)]"
        style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}
      >
        <ChevronRight size={10} className="opacity-0 transition-opacity group-hover:opacity-100" />
        <span>{children}</span>
      </Link>
    </li>
  );
}
function FooterItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14px] text-white/65" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300 }}>
      <span className="mt-1 shrink-0">{icon}</span>
      <span>{children}</span>
    </li>
  );
}
