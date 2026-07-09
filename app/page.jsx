import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Diaries from "@/components/Diaries";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// The homepage is intentionally a single, calm scroll.
//
// Three deliberate absences:
//
// 1. No hero. A headline announcing what the site is about, above the site
//    itself, is a promise made before any evidence. The diary entries make
//    the same point and prove it in the same breath.
//
// 2. No quote rotator. It reserved the most contemplative design element on
//    a site about Brandon's own thinking for other people's ideas.
//
// 3. No bookshelf, gear, podcast, or perspective form. Each has its own page,
//    reachable from the nav. None of them sit between a reader and the writing.
//
// What is left is the order that earns things: the work, then the person who
// made it, then the invitation. Ask for the email last.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Diaries />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Newsletter />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
