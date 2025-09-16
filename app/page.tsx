import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import FeaturedJajanan from "@/components/FeaturedJajanan";
import SupportedServices from "@/components/SupportedServices";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <FeaturedJajanan />
      <SupportedServices />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
