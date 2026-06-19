import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function WhatsAppFab() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showTop) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-[998] flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-110"
      style={{
        background: "#fdf6f9",
        boxShadow:
          "4px 4px 10px rgba(200,216,224,0.5), -2px -2px 6px rgba(255,255,255,0.35), 0 4px 16px rgba(196,122,138,0.15)",
      }}
    >
      <ArrowUp size={20} color="#c47a8a" />
    </button>
  );
}
