import { useEffect, useRef, useState } from "react";

export default function Interlude() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0a06 0%, #140d05 50%, #0f0a06 100%)",
      }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(212,168,67,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(196,132,58,0.03) 0%, transparent 50%)",
        }}
      />

      <div
        className={`max-w-3xl mx-auto text-center chapter-hidden ${isVisible ? "chapter-visible" : ""}`}
        style={{ transitionDelay: "0.1s" }}
      >
        {/* Opening quote mark */}
        <div
          className="font-bengali"
          style={{
            fontSize: "6rem",
            color: "#d4a843",
            opacity: 0.1,
            lineHeight: 0.8,
            marginBottom: "1rem",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          "
        </div>

        {/* Main quote */}
        <blockquote
          className="font-bengali"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            color: "#c4a882",
            lineHeight: 2,
            fontWeight: 300,
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
        >
          আমি আমার জীবনের একটি সত্য ঘটনা সবার সাথে ভাগ করে নিচ্ছি।
          <br />
          এটি কোনো চিঠি নয়। এটি কোনো স্বীকারোক্তি নয়।
          <br />
          এটি শুধু — একটি মানুষের মনের গল্প।
        </blockquote>

        {/* Three pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          {[
            { label: "সৎ", desc: "প্রতিটি কথা সত্যি" },
            { label: "শান্ত", desc: "কোনো অভিযোগ নেই" },
            { label: "সুন্দর", desc: "একটি স্মৃতির কথা" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="font-bengali"
                style={{
                  fontSize: "1.4rem",
                  color: "#d4a843",
                  fontWeight: 600,
                  marginBottom: "0.3rem",
                  opacity: 0.9,
                }}
              >
                {item.label}
              </div>
              <div
                className="font-bengali-sans"
                style={{
                  fontSize: "0.75rem",
                  color: "#6a5a4a",
                  letterSpacing: "0.1em",
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.35))" }} />
          <span style={{ color: "rgba(212,168,67,0.4)", fontSize: "0.7rem" }}>✦</span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, rgba(212,168,67,0.35), transparent)" }} />
        </div>
      </div>
    </div>
  );
}
