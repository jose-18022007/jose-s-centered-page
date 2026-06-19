import { useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export function BackButton({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "glass";
  className?: string;
}) {
  const router = useRouter();
  const onClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };

  // Always above hero content, always visible while scrolling.
  const positionClasses =
    "fixed left-4 top-[56px] z-[500] md:left-6 md:top-[88px]";

  if (variant === "glass") {
    return (
      <button
        onClick={onClick}
        aria-label="Back"
        className={`group ${positionClasses} pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-x-0.5 ${className}`}
        style={{
          background: "rgba(45,31,38,0.55)",
          fontFamily: "var(--font-dmsans)",
          fontWeight: 400,
          fontSize: 13,
        }}
      >
        <ChevronLeft size={16} />
        <span>Back</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label="Back"
      className={`group ${positionClasses} pointer-events-auto inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-all hover:-translate-x-0.5 active:[box-shadow:inset_4px_4px_10px_rgba(200,216,224,0.5),inset_-2px_-2px_6px_rgba(255,255,255,0.45)] ${className}`}
      style={{
        background: "#fdf6f9",
        boxShadow:
          "4px 4px 10px rgba(200,216,224,0.5), -2px -2px 6px rgba(255,255,255,0.45)",
        color: "#6b4c57",
        fontFamily: "var(--font-dmsans)",
        fontWeight: 400,
        fontSize: 13,
      }}
    >
      <ChevronLeft size={16} color="#c47a8a" />
      <span>Back</span>
    </button>
  );
}
