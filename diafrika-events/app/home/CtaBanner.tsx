import Image from "next/image";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/app/components/ui/WhatsAppIcon";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative bg-footer overflow-hidden mt-4">
      {/* bg-footer: your defined dark-olive token (#2F3424), used as
          a SOLID background here rather than an image — different
          technique from every Hero-style section we've built so far. */}

      <div className="absolute left-0 top-0 h-full w-64 opacity-40 hidden lg:block">
        <Image
          src="/images/cta-florals.jpg"
          alt=""
          fill
          className="object-cover object-left [mask-image:linear-gradient(to_right,black,transparent)]"
          // [mask-image:...]: a CSS mask, NEW technique — unlike our
          // gradient overlays (which sit on TOP of an image as a
          // separate div), a mask controls the IMAGE'S OWN visibility
          // directly, fading it from fully visible (black in the mask)
          // to fully invisible (transparent in the mask) left-to-right.
          // This lets the photo itself dissolve into the solid bg-footer
          // color with no visible hard edge, without needing a
          // separate overlay div layered on top.
        />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-white text-2xl md:text-3xl mb-1">
            Planning your next event?
          </h2>
          <p className="font-heading-script text-gold text-3xl md:text-4xl normal-case">
            Let&apos;s make it unforgettable.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            
              <a href="wa.me/message/OZO2XVDLBPYUJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 border border-white text-white text-sm font-sans font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-white hover:text-footer transition-colors"
              // border-white text-white, INVERSE of the navbar's solid
              // bg-olive pill — here it's outlined against a dark
              // background instead, and inverts (fills white) on hover.
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            
             <a href="tel:+254 722 335 434"
              className="inline-flex items-center gap-x-2 border border-white text-white text-sm font-sans font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-white hover:text-footer transition-colors"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>

          <p className="font-sans text-white/80 text-sm">
            +254 722 335 434
          </p>
        </div>
      </div>
    </section>
  );
}