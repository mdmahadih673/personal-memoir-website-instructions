import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interlude from "./components/Interlude";
import ChaptersSection from "./components/ChaptersSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0f0a06" }}
    >
      {/* Reading progress bar */}
      <ProgressBar />

      {/* Sticky navigation header */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Interlude / intro quote */}
      <Interlude />

      {/* All chapters */}
      <ChaptersSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
