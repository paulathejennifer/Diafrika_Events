import GalleryCarousel from "./GalleryCarousel";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <p className="font-sans text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
          Our Work
        </p>
        <h2 className="font-serif text-charcoal text-3xl md:text-5xl">
          Moments We&apos;ve Made Unforgettable
        </h2>
      </div>

      <GalleryCarousel />
    </section>
  );
}