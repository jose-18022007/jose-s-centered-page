import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { wa } from "@/lib/site";

export function WhatsAppFab() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-24 right-5 z-[998] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110"
          style={{
            background: "#fdf6f9",
            boxShadow:
              "4px 4px 10px rgba(200,216,224,0.5), -2px -2px 6px rgba(255,255,255,0.35), 0 4px 16px rgba(196,122,138,0.15)",
          }}
        >
          <ArrowUp size={18} color="#c47a8a" />
        </button>
      )}
      <a
        href={wa()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white md:h-16 md:w-16"
        style={{
          background: "var(--gradient-rose)",
          boxShadow: "0 8px 28px rgba(196,122,138,0.40)",
        }}
      >
        <span
          className="absolute inset-0 animate-pulse-ring rounded-full"
          style={{ background: "rgba(226,165,180,0.5)" }}
        />
        <MessageCircle size={26} className="relative" />
        <span
          className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] text-white opacity-0 transition-opacity group-hover:opacity-100 md:block"
          style={{
            background: "rgba(45,31,38,0.9)",
            fontFamily: "var(--font-dmsans)",
          }}
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
