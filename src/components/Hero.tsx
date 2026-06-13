import { useEffect, useRef, useState } from "react";

const Particle = ({
  style,
}: {
  style: React.CSSProperties;
}) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: "3px",
      height: "3px",
      background: "rgba(212,168,67,0.6)",
      ...style,
    }}
  />
);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${4 + Math.random() * 6}s`,
      animationDelay: `${Math.random() * 4}s`,
      size: `${2 + Math.random() * 3}px`,
      opacity: 0.3 + Math.random() * 0.5,
    }))
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0a06 0%, #1a1008 50%, #0f0a06 100%)" }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 0.12,
          filter: "blur(2px) sepia(0.5)",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,168,67,0.06) 0%, rgba(15,10,6,0.8) 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float ${p.animationDuration} ${p.animationDelay} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Decorative rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid rgba(212,168,67,0.08)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          border: "1px solid rgba(212,168,67,0.05)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <div
          className="font-bengali-sans mb-6 fade-in-up"
          style={{
            color: "#d4a843",
            fontSize: "0.75rem",
            letterSpacing: "0.35em",
            opacity: 0.7,
            textTransform: "uppercase",
            animationDelay: "0.1s",
          }}
        >
          ✦ &nbsp; একটি ব্যক্তিগত স্মৃতিকথা &nbsp; ✦
        </div>

        {/* Main title */}
        <h1
          className="font-bengali gradient-text text-glow mb-4 fade-in-up"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            animationDelay: "0.3s",
          }}
        >
          আমার গল্প
        </h1>

        {/* Subtitle */}
        <p
          className="font-bengali fade-in-up"
          style={{
            color: "#c4a882",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontWeight: 300,
            letterSpacing: "0.05em",
            marginBottom: "1rem",
            animationDelay: "0.5s",
          }}
        >
          একটি সত্য স্মৃতির কথা
        </p>

        {/* Ink line */}
        <div className="flex items-center justify-center gap-4 my-8 fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, #d4a843)" }} />
          <span style={{ color: "#d4a843", fontSize: "1rem", opacity: 0.7 }}>✦</span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, #d4a843, transparent)" }} />
        </div>

        {/* Description */}
        <p
          className="font-bengali fade-in-up"
          style={{
            color: "#9a8a78",
            fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
            lineHeight: 1.9,
            maxWidth: "600px",
            margin: "0 auto 3rem",
            animationDelay: "0.7s",
          }}
        >
          আমি আমার জীবনের একটি সত্য ঘটনা সবার সাথে ভাগ করে নিচ্ছি।
          <br />
          এটি কোনো চিঠি নয়। এটি কোনো অভিযোগ নয়।
          <br />
          এটি শুধু — আমার স্মৃতির পাতা।
        </p>

        {/* Scroll CTA */}
        <a
          href="#chapters"
          className="fade-in-up inline-flex flex-col items-center gap-2 cursor-pointer"
          style={{ animationDelay: "1s", color: "#d4a843", opacity: 0.7, textDecoration: "none" }}
        >
          <span className="font-bengali-sans" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            গল্পটা পড়ুন
          </span>
          <div
            style={{
              width: "28px",
              height: "44px",
              border: "1px solid rgba(212,168,67,0.4)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                background: "#d4a843",
                borderRadius: "2px",
                animation: "scrollDot 2s ease-in-out infinite",
              }}
            />
          </div>
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "200px",
          background: "linear-gradient(0deg, #0f0a06 0%, transparent 100%)",
        }}
      />

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
