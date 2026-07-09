import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Ask from "@/components/Ask";
import Books from "@/components/Books";
import Podcast from "@/components/Podcast";
import Diaries from "@/components/Diaries";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// The homepage is intentionally a single, calm scroll.
//
// Two deliberate absences:
//
// 1. No quote rotator. It reserved the most contemplative design element on
//    a site about Brandon's own thinking for other people's ideas.
//
// 2. No "Recently / A living archive" index. It only pointed at the podcast,
//    photography, and journal sections that follow it anyway.
//
// Books sits above Podcast because the bookshelf is the only page with
// evidence that people want something here: 20 clicks, 2 orders, ~10%.
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
          <Books />
        </Reveal>
        <Reveal>
          <Podcast />
        </Reveal>
        <Reveal>
          <Diaries />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
