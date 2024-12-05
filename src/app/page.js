import About from "@/components/HomePage/About";
import Hero from "@/components/HomePage/Hero";


export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)] main">
      <Hero />
      <About />
    </main>
  );
}
