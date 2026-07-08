import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Podcast from "@/components/Podcast";
import LatestContent from "@/components/LatestContent";
import Photography from "@/components/Photography";
import Books from "@/components/Books";
import QuoteRotator from "@/components/QuoteRotator";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// The homepage is intentionally a single, calm scroll.
// Each section is a self-contained component so you can reorder,
// remove, or move any of them to their own route as the site grows.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Newsletter />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Podcast />
        </Reveal>
        <Reveal>
          <LatestContent />
        </Reveal>
        <Reveal>
          <Photography />
        </Reveal>
        <Reveal>
          <Books />
        </Reveal>
        <Reveal>
          <QuoteRotator />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
