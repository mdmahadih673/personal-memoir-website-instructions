import { useEffect, useRef, useState } from "react";
import type { Chapter } from "../data/chapters";

interface ChapterCardProps {
  chapter: Chapter;
  index: number;
}

export default function ChapterCard({ chapter, index }: ChapterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  if (chapter.isFinal) {
    return (
      <div
        ref={cardRef}
        className={`chapter-hidden ${isVisible ? "chapter-visible" : ""}`}
        style={{ transitionDelay: `0.1s` }}
      >
        {/* Final Chapter — centered, full-width */}
        <div
          className="relative mx-auto max-w-2xl text-center px-8 py-16"
          style={{
            background: "linear-gradient(135deg, rgba(212,168,67,0.06) 0%, rgba(30,18,6,0.8) 50%, rgba(212,168,67,0.04) 100%)",
            border: "1px solid rgba(212,168,67,0.2)",
            borderRadius: "2px",
          }}
        >
          {/* Corner decorations */}
          <div style={{ position: "absolute", top: "12px", left: "12px", width: "20px", height: "20px", borderTop: "1px solid rgba(212,168,67,0.5)", borderLeft: "1px solid rgba(212,168,67,0.5)" }} />
          <div style={{ position: "absolute", top: "12px", right: "12px", width: "20px", height: "20px", borderTop: "1px solid rgba(212,168,67,0.5)", borderRight: "1px solid rgba(212,168,67,0.5)" }} />
          <div style={{ position: "absolute", bottom: "12px", left: "12px", width: "20px", height: "20px", borderBottom: "1px solid rgba(212,168,67,0.5)", borderLeft: "1px solid rgba(212,168,67,0.5)" }} />
          <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "20px", height: "20px", borderBottom: "1px solid rgba(212,168,67,0.5)", borderRight: "1px solid rgba(212,168,67,0.5)" }} />

          {/* Chapter label */}
          <div className="chapter-number mb-3">{chapter.subtitle}</div>

          {/* Icon */}
          <div
            style={{
              fontSize: "2.5rem",
              color: "#d4a843",
              marginBottom: "1rem",
              opacity: 0.8,
            }}
          >
            {chapter.icon}
          </div>

          {/* Title */}
          <h2
            className="font-bengali gradient-text mb-8"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 700 }}
          >
            {chapter.title}
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, transparent, #d4a843)" }} />
            <span style={{ color: "#d4a843", fontSize: "0.6rem" }}>✦</span>
            <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, #d4a843, transparent)" }} />
          </div>

          {/* Content */}
          <div className="space-y-4">
            {chapter.content.map((para, i) => (
              <p
                key={i}
                className="font-bengali"
                style={{
                  color: i >= 6 ? "#d4b87a" : "#c4b49a",
                  fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                  lineHeight: 2,
                  fontWeight: i >= 6 ? 500 : 300,
                  fontStyle: i >= 6 ? "italic" : "normal",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Closing mark */}
          <div className="mt-12" style={{ color: "#d4a843", opacity: 0.4, fontSize: "1.5rem" }}>
            ∞
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`chapter-hidden ${isVisible ? "chapter-visible" : ""} chapter-glow`}
      style={{
        transitionDelay: `0.1s`,
        background: "linear-gradient(135deg, rgba(25,15,5,0.9) 0%, rgba(20,12,4,0.95) 100%)",
        border: "1px solid rgba(212,168,67,0.12)",
        borderRadius: "2px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: "linear-gradient(180deg, transparent, rgba(212,168,67,0.6), transparent)",
        }}
      />

      {/* Chapter number background watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "50%",
          right: isEven ? "2rem" : "auto",
          left: isEven ? "auto" : "2rem",
          transform: "translateY(-50%)",
          fontSize: "10rem",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          color: "rgba(212,168,67,0.04)",
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        {chapter.id}
      </div>

      <div className="relative p-8 md:p-12">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            style={{
              fontSize: "1.5rem",
              color: "#d4a843",
              opacity: 0.7,
              marginTop: "2px",
              flexShrink: 0,
            }}
          >
            {chapter.icon}
          </div>
          <div>
            <div className="chapter-number mb-1">{chapter.subtitle}</div>
            <h2
              className="font-bengali"
              style={{
                fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                fontWeight: 600,
                color: "#e8d5b5",
                lineHeight: 1.2,
              }}
            >
              {chapter.title}
            </h2>
          </div>
        </div>

        {/* Thin divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, rgba(212,168,67,0.4), transparent)",
            marginBottom: "1.75rem",
            width: "120px",
          }}
        />

        {/* Content paragraphs */}
        <div className="space-y-4">
          {chapter.content.map((para, i) => (
            <p
              key={i}
              className="font-bengali"
              style={{
                color: "#b8a888",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                lineHeight: 2,
                fontWeight: 300,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Quote block */}
        {chapter.quote && (
          <div className="mt-8">
            <div
              className="memoir-quote font-bengali"
              style={{
                color: "#c4a060",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                lineHeight: 1.9,
                opacity: 0.85,
              }}
            >
              {chapter.quote}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
