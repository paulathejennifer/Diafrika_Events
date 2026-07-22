import Hero from "@/app/home/Hero";
import ServicesSection from "./components/services/ServicesSection";
import GallerySection from "./components/gallery/GalleryCarousel";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import ClientTestimonials from "./home/ClientTestimonials";
import CtaBanner from "./home/CtaBanner";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <WhyChooseUsSection />
      <ClientTestimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}