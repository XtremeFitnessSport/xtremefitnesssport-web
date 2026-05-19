import { faqs } from '@/data/landing';

export function FaqSection() {
  return (
    <section className="bg-x-black px-4 py-20 sm:px-6 sm:py-28" id="faq">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="font-playful text-xl text-x-neon sm:text-2xl">Resuelve rápido</span>
          <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
            PREGUNTAS <span className="text-x-neon">FRECUENTES</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details className="group border border-white/10 bg-white/[0.03] p-5 open:border-x-neon sm:p-6" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-sport text-xl font-extrabold text-white sm:text-2xl">
                {faq.question}
                <span className="text-x-neon transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
