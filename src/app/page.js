import Hero from "../components/HomePage/Hero"
import About from "../components/HomePage/About"
import Services from "../components/HomePage/Services"


export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)] main">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
