import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Ask from "@/components/Ask";
import Podcast from "@/components/Podcast";
import Photography from "@/components/Photography";
import Books from "@/components/Books";
import QuoteRotator from "@/components/QuoteRotator";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// The homepage is intentionally a single, calm scroll.
// Each section is a self-contained component so you can reorder,
// remove, or move any of them to their own route as the site grows.
//
// Perspective sits high on purpose: right after the introduction, while
// someone is still deciding whether to stay. The old "Recently / A living
// archive" index was removed because it only pointed at the podcast,
// photography, and journal sections that follow it anyway.
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
          <Ask />
        </Reveal>
        <Reveal>
          <Podcast />
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
