import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DiAfrika made our wedding more beautiful than we ever imagined. Every detail was thoughtfully done, from the décor to the catering. Our guests are still talking about it.",
    author: "Wairimu & Gilbert",
  },
  {
    quote: "The decorations, tents, photography, and sound setup were all perfect. They truly made my daughter's graduation celebration unforgettable.",
    author: "Mercy A., Graduation Event",
  },
  {
    quote: "Professional, reliable and so creative. They handled everything seamlessly. Highly recommend!",
    author: "James W., Corporate Event",
  },
];

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="bg-cream py-4 px-6 md:px-16 lg:px-24">
      <p className="font-sans text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-center mb-3">
        What Our Clients Say
      </p>

      <div className="w-16 h-px bg-gold mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.author}
            className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center px-6 py-10 [animation:pop-in_9s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 3}s` }}
          >
            <Quote className="text-gold fill-gold mx-auto mb-4" size={28} />

            <p className="font-sans text-charcoal text-sm md:text-base mb-4 leading-7">
              {testimonial.quote}
            </p>

            <p className="font-sans text-warmgray text-sm font-bold">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}