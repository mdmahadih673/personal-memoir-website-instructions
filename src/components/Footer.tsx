export default function Footer() {
  return (
    <footer className="relative py-20 px-6 text-center overflow-hidden">
      {/* Subtle top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        {/* Icon */}
        <div
          style={{
            fontSize: "2rem",
            color: "#d4a843",
            opacity: 0.4,
            marginBottom: "1.5rem",
          }}
        >
          ✦
        </div>

        {/* Main closing text */}
        <p
          className="font-bengali"
          style={{
            color: "#6a5a4a",
            fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
            lineHeight: 2.2,
            marginBottom: "2rem",
          }}
        >
          কিছু গল্প শেষ হয়ে যায় না —
          <br />
          <span style={{ color: "#8a7a6a" }}>তারা স্মৃতি হয়ে বেঁচে থাকে।</span>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div style={{ height: "1px", width: "50px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.25))" }} />
          <span style={{ color: "rgba(212,168,67,0.3)", fontSize: "0.6rem" }}>✦</span>
          <div style={{ height: "1px", width: "50px", background: "linear-gradient(90deg, rgba(212,168,67,0.25), transparent)" }} />
        </div>

        {/* Subtitle */}
        <p
          className="font-bengali-sans"
          style={{
            color: "#4a3a2a",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          আমার গল্প &nbsp;·&nbsp; একটি সত্য স্মৃতির কথা
        </p>
      </div>
    </footer>
  );
}
