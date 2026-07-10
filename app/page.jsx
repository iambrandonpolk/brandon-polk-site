import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Diaries from "@/components/Diaries";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// The homepage is intentionally a single, calm scroll.
//
// Three deliberate absences:
//
// 1. No hero image, no slogan, no button. One sentence at the top says what
//    this is, and then the work starts. A headline that announces a site is
//    a promise made before any evidence.
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
        <Intro />
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
