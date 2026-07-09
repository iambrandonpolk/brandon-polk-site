import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Ask from "@/components/Ask";
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
// The Diaries come first, right under the hero. They are the only thing on
// this site Brandon made. Asking a stranger for their email before showing
// them a single sentence you wrote is asking for a favour you haven't earned.
//
// The bookshelf, the gear, and the podcast each have their own page now.
// The homepage is the writing, the invitation, and who is doing the writing.
// Nothing on it is a list of things to buy or a player you have to scroll past.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Diaries />
        </Reveal>
        <Reveal>
          <Newsletter />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Ask />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
