export function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span
        className="orb animate-float-orb"
        style={{ width: 480, height: 480, top: "-120px", left: "-100px", background: "#e2a5b4", opacity: 0.32, animationDuration: "12s" }}
      />
      <span
        className="orb animate-float-orb"
        style={{ width: 360, height: 360, top: "20%", right: "-80px", background: "#b8eeff", opacity: 0.28, animationDuration: "14s", animationDelay: "-3s" }}
      />
      <span
        className="orb animate-float-orb"
        style={{ width: 280, height: 280, bottom: "-60px", left: "30%", background: "#d4a853", opacity: 0.16, animationDuration: "10s", animationDelay: "-5s" }}
      />
      <span
        className="orb animate-float-orb"
        style={{ width: 220, height: 220, top: "50%", left: "10%", background: "#f7dde5", opacity: 0.4, animationDuration: "9s", animationDelay: "-1s" }}
      />
    </div>
  );
}
