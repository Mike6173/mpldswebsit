export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-left blue orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-15%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb-float 14s ease-in-out infinite",
        }}
      />
      {/* Top-right purple orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-5%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "orb-float 18s ease-in-out infinite reverse",
        }}
      />
      {/* Mid-page cyan accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "40%",
          left: "55%",
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "orb-float 22s ease-in-out infinite",
        }}
      />
      {/* Bottom-left warm orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          bottom: "5%",
          left: "5%",
          background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)",
          filter: "blur(55px)",
          animation: "orb-float 16s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
