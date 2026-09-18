import { professional } from "../lib/content"
import { Reveal } from "./Reveal"

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 md:h-6 md:w-6 ${filled ? "fill-brass-400" : "fill-none stroke-ink-600 stroke-[1.5]"}`}
    >
      <path d="M12 2.5l2.9 6.14 6.6.68-4.95 4.62 1.35 6.56L12 17.6l-5.9 2.9 1.35-6.56L2.5 9.32l6.6-.68L12 2.5z" />
    </svg>
  )
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="relative bg-ink-950 py-24 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center md:px-10">
        <Reveal>
          <span className="font-body text-[11px] uppercase tracking-[0.3em] text-brass-400">
            Avaliação
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < Math.round(professional.rating)} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-display text-5xl text-paper-100 md:text-6xl">
            {professional.rating.toFixed(1)}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-mist-500">
            {professional.reviewCount} avaliações
          </p>
        </Reveal>
      </div>
    </section>
  )
}
