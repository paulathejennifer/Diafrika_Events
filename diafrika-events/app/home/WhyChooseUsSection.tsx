// components/home/WhyChooseUsSection.tsx
import Image from "next/image";
import { Users, ChefHat, Leaf, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Events Served" },
  { icon: ChefHat, value: "Custom", label: "Menus" },
  { icon: Leaf, value: "Fresh", label: "Ingredients" },
  { icon: Heart, value: "Personalized", label: "Service" },
];

export default function WhyChooseUsSection() {
  return (
<section id="about" className="relative z-0 bg-cream py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* overflow-hidden: safety net, since the flower's negative
          left-position could otherwise create unwanted horizontal
          scroll on the page if it extends past the viewport edge. */}

      <div className="absolute -left-10 top-0 h-full w-64 opacity-30 -z-10 hidden lg:block">
        <Image
          src="/images/flower-decoration.png"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: text content */}
        <div className="relative z-10">
          <p className="font-sans text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            Why Choose Us?
          </p>
          <h2 className="font-serif text-charcoal text-3xl md:text-4xl leading-[1.2] mb-4">
            Passion for Perfection,
            <br />
            Every Time
          </h2>
          <p className="font-sans text-warmgray text-sm md:text-base max-w-md">
            We believe every detail matters. That&apos;s why we go above
            and beyond to deliver exceptional service, delicious food
            and beautiful setups that leave lasting memories.
          </p>
        </div>

        {/* RIGHT: stats row */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-2 ${
                  index !== 0 ? "sm:border-l sm:border-border" : ""
                }`}
                // sm:border-l: same "divider between siblings" pattern
                // as before, using your defined `border` token
                // (#E7DDD1) rather than a generic gray.
              >
                <Icon className="text-gold mb-3" size={28} strokeWidth={1.5} />
                <p className="font-serif text-charcoal text-2xl mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-warmgray text-xs uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}