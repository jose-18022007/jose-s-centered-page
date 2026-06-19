import { ReactNode } from "react";
import { AmbientOrbs } from "./AmbientOrbs";
import { SectionLabel } from "./SectionLabel";
import { BackButton } from "./BackButton";

export function PageHero({
  label,
  title,
  subtitle,
  dark = false,
  showBack = true,
  children,
}: {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  showBack?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-36"
      style={{ background: dark ? "var(--gradient-dark-section)" : "var(--gradient-hero)" }}
    >
      <AmbientOrbs />
      {showBack && <BackButton variant={dark ? "glass" : "light"} />}
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="font-hero mt-5" style={{ color: dark ? "#fdf6f9" : undefined }}>
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-[640px]"
            style={{
              fontFamily: "var(--font-dmsans)",
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.9,
              color: dark ? "rgba(255,255,255,0.7)" : "var(--color-text-body)",
            }}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 w-full">{children}</div>}
      </div>
    </section>
  );
}
