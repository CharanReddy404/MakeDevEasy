import Navbar from "@/components/layouts/Navbar"
import HeroSection from "@/components/layouts/HeroSection"

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen bg-gray-100">
      <header className="sticky top-0 ">
        <Navbar />
      </header>
      <main>
        <HeroSection />
      </main>

    </div>
  );
}
