export function SectionLabel({ children, center = true }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? "flex flex-col items-center" : "flex flex-col"}>
      <span className="font-label text-[var(--color-gold)]">{children}</span>
      <span
        className="mt-3 h-[2px] w-[60px] rounded-full"
        style={{ background: "var(--gradient-gold)" }}
      />
    </div>
  );
}
