import Image from "next/image";
import Button from "@/app/components/ui/Button";
import WhatsAppIcon from "@/app/components/ui/WhatsAppIcon";
import { Image as ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Elegant wedding table setting with gold candlesticks and florals"
        fill
        priority
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            100deg,
            rgba(248, 245, 240, 0.97) 0%,
            rgba(248, 245, 240, 0.9) 30%,
            rgba(248, 245, 240, 0.4) 55%,
            rgba(248, 245, 240, 0) 80%
          )`,
        }}
        // same left-dark-to-right-transparent MECHANISM as W Exclusive's
        // Hero, just with cream (248,245,240) instead of canvas
        // (30,30,30) as the color — text sits on the left again here.
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 pt-26">
        <div className="max-w-xl">
          <p className="font-sans text-olive font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            Plan. Style. Celebrate.
          </p>

          <h1 className="font-serif text-charcoal text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-2 uppercase">
            Making Every
            <br />
            Celebration
          </h1>

          <p className="font-heading-script text-gold text-5xl md:text-6xl lg:text-7xl mb-6 normal-case">
            Unforgettable
            {/* normal-case: overrides the uppercase inherited styling
                pattern — script/cursive fonts should NEVER be forced
                uppercase, it destroys their legibility and the whole
                point of a flowing script typeface. Worth remembering
                as a rule: uppercase + script font = never combine them. */}
          </p>

          <p className="font-sans text-warmgray text-sm md:text-base mb-8 max-w-md leading-loose">
            From intimate celebrations to grand occasions, we create experiences your guests 
            will never forget.
          </p>

<div className="flex flex-wrap items-center gap-4">
<Button
  href="wa.me/message/OZO2XVDLBPYUJ1"
  variant="primary"
  icon={<WhatsAppIcon className="w-4 h-4" />}
>
  Book an Event
</Button>
  <Button
    href="#gallery"
    variant="secondary"
    icon={<ImageIcon size={16} />}
  >
    View Gallery
  </Button>
</div>
        </div>
      </div>
    </section>
  );
}