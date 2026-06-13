import { useState } from "react";
import { chapters } from "../data/chapters";
import ChapterCard from "./ChapterCard";

export default function ChaptersSection() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const mainChapters = chapters.slice(0, -1);
  const finalChapter = chapters[chapters.length - 1];

  return (
    <section id="chapters" className="relative py-24 px-4">
      {/* Section header */}
      <div className="text-center mb-20">
        <div
          className="font-bengali-sans mb-4"
          style={{
            color: "#d4a843",
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          ✦ &nbsp; স্মৃতির পাতা &nbsp; ✦
        </div>
        <h2
          className="font-bengali gradient-text mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}
        >
          অধ্যায়গুলো
        </h2>
        <p
          className="font-bengali"
          style={{ color: "#7a6a5a", fontSize: "1rem", maxWidth: "400px", margin: "0 auto", lineHeight: 1.9 }}
        >
          আমার জীবনের সেই অধ্যায়গুলো, যেগুলো আজও আমার মনের গভীরে বেঁচে আছে।
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4))" }} />
          <div className="timeline-dot" />
          <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, rgba(212,168,67,0.4), transparent)" }} />
        </div>
      </div>

      {/* Chapter navigator pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto px-4">
        {chapters.map((ch) => (
          <button
            key={ch.id}
            onClick={() => {
              setActiveChapter(ch.id);
              const el = document.getElementById(`chapter-${ch.id}`);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="font-bengali-sans transition-all duration-300"
            style={{
              padding: "6px 16px",
              borderRadius: "2px",
              fontSize: "0.75rem",
              border: `1px solid ${activeChapter === ch.id ? "rgba(212,168,67,0.6)" : "rgba(212,168,67,0.15)"}`,
              background: activeChapter === ch.id ? "rgba(212,168,67,0.12)" : "transparent",
              color: activeChapter === ch.id ? "#d4a843" : "#7a6a5a",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            {ch.isFinal ? "শেষ নয়" : `অধ্যায় ${ch.id}`}
          </button>
        ))}
      </div>

      {/* Chapters grid */}
      <div className="max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="relative">
          {/* Left timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 hidden md:block"
            style={{
              left: "-2rem",
              width: "1px",
              background: "linear-gradient(180deg, transparent, rgba(212,168,67,0.15), rgba(212,168,67,0.3), rgba(212,168,67,0.15), transparent)",
            }}
          />

          {/* Main chapters */}
          <div className="space-y-8">
            {mainChapters.map((chapter, index) => (
              <div key={chapter.id} id={`chapter-${chapter.id}`} className="relative">
                {/* Timeline dot for md screens */}
                <div
                  className="hidden md:block absolute"
                  style={{
                    left: "-2.35rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgba(212,168,67,0.5)",
                    boxShadow: "0 0 8px rgba(212,168,67,0.4)",
                  }}
                />
                <ChapterCard chapter={chapter} index={index} />
              </div>
            ))}
          </div>

          {/* Transition to final */}
          <div className="flex flex-col items-center py-16 gap-4">
            <div style={{ width: "1px", height: "60px", background: "linear-gradient(180deg, rgba(212,168,67,0.3), rgba(212,168,67,0.1))" }} />
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "1px solid rgba(212,168,67,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4a843",
                fontSize: "1.4rem",
                background: "rgba(212,168,67,0.05)",
              }}
            >
              ∞
            </div>
            <div style={{ width: "1px", height: "60px", background: "linear-gradient(180deg, rgba(212,168,67,0.1), transparent)" }} />
          </div>

          {/* Final chapter */}
          <div id={`chapter-${finalChapter.id}`}>
            <ChapterCard chapter={finalChapter} index={mainChapters.length} />
          </div>
        </div>
      </div>
    </section>
  );
}
