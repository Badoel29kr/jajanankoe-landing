// app/page.tsx
import Header from "@/components/Header"; // Header bisa dipindah ke layout
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import FeaturedJajanan from "@/components/FeaturedJajanan";
import SupportedServices from "@/components/SupportedServices";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer"; // Footer bisa dipindah ke layout

export default function HomePage() {
  return (
    // Untuk tujuan demonstrasi, kita taruh semua di sini.
    // Praktik terbaik adalah memindahkan Header & Footer ke layout.tsx
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <FeaturedJajanan />
        <SupportedServices />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
