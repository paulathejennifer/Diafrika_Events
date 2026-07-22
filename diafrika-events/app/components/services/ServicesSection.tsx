import ServicesStack from "./ServicesStack";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <p className="font-sans text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
          Our Services
        </p>
        <h2 className="font-serif text-charcoal text-3xl md:text-5xl mb-4">
          Everything We Bring to Your Celebration
        </h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <ServicesStack />
    </section>
  );
}