import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "শুরুটা", id: "chapter-1" },
    { label: "ছোটবেলা", id: "chapter-2" },
    { label: "দূরত্ব", id: "chapter-3" },
    { label: "সাহস", id: "chapter-6" },
    { label: "শেষ নয়", id: "chapter-10" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          paddingTop: scrolled ? "0.6rem" : "1.2rem",
          paddingBottom: scrolled ? "0.6rem" : "1.2rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: scrolled
            ? "rgba(12, 7, 2, 0.92)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(212,168,67,0.1)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-bengali"
            style={{
              color: "#d4a843",
              fontSize: "1.1rem",
              fontWeight: 600,
              textDecoration: "none",
              opacity: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            আমার গল্প
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-bengali hover-underline transition-colors duration-300"
                style={{
                  background: "none",
                  border: "none",
                  color: "#8a7a6a",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  padding: "0",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a843")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7a6a")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "22px",
                  height: "1px",
                  background: "#d4a843",
                  opacity: menuOpen ? (i === 1 ? 0 : 0.8) : 0.7,
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(2px, 3px)"
                        : i === 2
                        ? "rotate(-45deg) translate(2px, -3px)"
                        : "none"
                      : "none",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-400"
        style={{
          height: menuOpen ? "100vh" : "0",
          overflow: "hidden",
          background: "rgba(10,6,2,0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          className="flex flex-col items-center justify-center h-full gap-8"
          style={{ opacity: menuOpen ? 1 : 0, transition: "opacity 0.3s ease" }}
        >
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-bengali"
              style={{
                background: "none",
                border: "none",
                color: "#c4a882",
                fontSize: "1.5rem",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
