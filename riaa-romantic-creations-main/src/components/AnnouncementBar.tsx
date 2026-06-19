import { Sparkles } from "lucide-react";

const items = [
  "Free Custom Tag with Every Order",
  "Bulk Orders Welcome",
  "100% Pure Soy Wax Candles",
  "50+ Chocolate Varieties",
  "Wedding & Corporate Specialists",
  "Serving Coonoor & Beyond",
  "WhatsApp Us for Custom Orders",
];

export function AnnouncementBar() {
  const loop = [...items, ...items];
  return (
    <div
      className="fixed left-0 right-0 top-0 z-[1000] flex h-10 items-center overflow-hidden text-white"
      style={{ background: "var(--gradient-rose)" }}
    >
      <div className="animate-marquee flex shrink-0 whitespace-nowrap hover:[animation-play-state:paused]">
        {loop.map((t, i) => (
          <span key={i} className="mx-6 flex items-center gap-3" style={{ fontFamily: "var(--font-dmsans)", fontWeight: 300, fontSize: 12, letterSpacing: "1px" }}>
            <Sparkles size={14} />
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
