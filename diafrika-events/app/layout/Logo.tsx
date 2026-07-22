import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/logo.jpg"
        alt="Seneo Holdings"
        width={40}
        height={40}
        priority
        className="w-8 h-auto md:w-10 mb-1"
      />

      <span className="font-serif text-charcoal text-xl md:text-3xl tracking-[0.08em] uppercase">
        DIAFRIKA
      </span>

      <span className="font-sans text-warmgray text-[10px] md:text-xs tracking-[0.3em] uppercase">
        EVENTS
      </span>
    </div>
  );
}