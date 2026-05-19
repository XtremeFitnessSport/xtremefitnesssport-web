export function DigitalSoonSection() {
  return (
    <section className="border-y border-white/10 bg-white/5 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-6">
          <div className="flex h-16 w-16 animate-pulse-neon items-center justify-center rounded-full border-2 border-x-neon">
            <svg className="h-8 w-8 text-x-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h4 className="font-sport text-2xl font-extrabold uppercase tracking-wide">XTREME TAMBIÉN EVOLUCIONA</h4>
            <p className="text-x-gray">
              Próximamente: Sistema digital de gestión de membresías para un mejor control de tu progreso.
            </p>
          </div>
        </div>
        <div className="font-sport text-xl text-x-neon opacity-50">#DigitalFitness #ComingSoon</div>
      </div>
    </section>
  );
}
