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

  if (variant === "glass") {
    return (
      <button
        onClick={onClick}
        aria-label="Back"
        className={`group fixed left-5 top-[110px] z-[100] inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-white backdrop-blur-md transition-all hover:-translate-x-0.5 ${className}`}
        style={{
          background: "rgba(255,255,255,0.15)",
          fontFamily: "var(--font-dmsans)",
          fontWeight: 400,
          fontSize: 14,
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
      className={`group fixed left-5 top-[110px] z-[100] inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-all hover:-translate-x-0.5 active:[box-shadow:inset_4px_4px_10px_rgba(232,213,220,0.6),inset_-3px_-3px_8px_rgba(255,255,255,0.5)] ${className}`}
      style={{
        background: "#fdf6f9",
        boxShadow:
          "5px 5px 14px rgba(232,213,220,0.6), -3px -3px 8px rgba(255,255,255,0.55)",
        color: "#6b4c57",
        fontFamily: "var(--font-dmsans)",
        fontWeight: 400,
        fontSize: 14,
      }}
    >
      <ChevronLeft size={16} color="#c47a8a" />
      <span>Back</span>
    </button>
  );
}
