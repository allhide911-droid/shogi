import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Classes from "./components/Classes";
import Instructor from "./components/Instructor";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Instructor />
        <Access />
      </main>
      <Footer />
    </>
  );
}
