const testimonials = [
  {
    quote:
      'Lo que más me gusta es que no te dejan entrenar por entrenar. Hay guía, exigencia y se siente el avance real cada semana.',
    author: 'CLIENTE XTREME',
    accent: 'neon',
  },
  {
    quote: 'El ambiente tiene otra vibra. Es intenso, ordenado y te motiva a dar más de lo que creías que podías.',
    author: 'USUARIO FRECUENTE',
    accent: 'white',
  },
  {
    quote: 'No es el típico gimnasio. Se siente más enfocado, dinámico y con mucha energía local de Tarapoto.',
    author: 'ALUMNO XTREME',
    accent: 'neon',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-asphalt py-20 sm:py-28 lg:py-32" id="testimonios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-sport text-4xl font-extrabold uppercase sm:text-5xl md:text-left">
          LA GENTE SIENTE EL <span className="text-x-neon underline">CAMBIO</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const isNeon = testimonial.accent === 'neon';

            return (
              <article
                className={`bg-x-black p-8 shadow-2xl ${isNeon ? 'border-t-4 border-x-neon' : 'border-t-4 border-white'}`}
                key={testimonial.author}
              >
                <div className={`mb-4 font-serif text-5xl ${isNeon ? 'text-x-neon' : 'text-white'}`}>“</div>
                <p className="mb-6 text-base italic sm:text-lg">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full ${isNeon ? 'bg-x-dark-green' : 'bg-x-gray'}`} />
                  <span className={`font-sport text-xl font-extrabold uppercase ${isNeon ? 'text-x-neon' : ''}`}>
                    {testimonial.author}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
