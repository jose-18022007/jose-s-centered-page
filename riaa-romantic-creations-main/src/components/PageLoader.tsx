import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export function PageLoader() {
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setGone(true), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        background: "#fdf6f9",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <Flame className="animate-flicker mb-4" size={36} color="#c47a8a" fill="#e2a5b4" />
      <h1
        className="font-script text-[var(--color-rose-deep)]"
        style={{ fontSize: 88, lineHeight: 1, fontFamily: "var(--font-vibes)" }}
      >
        Riaa
      </h1>
      <div className="mt-3 w-[160px] overflow-hidden">
        <div className="h-[1.5px] w-0 bg-[var(--color-rose-primary)]" style={{ animation: "underline-draw 1.2s ease-out 0.3s forwards" }} />
      </div>
      <p className="font-label mt-5 text-[var(--color-text-muted)] animate-fade-in" style={{ animationDelay: "0.6s" }}>
        Handcrafted with Love
      </p>
    </div>
  );
}
