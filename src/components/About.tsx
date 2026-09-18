import portrait from "../assets/murilo-portrait.png"
import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="apresentacao" className="relative bg-ink-950 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden lg:mx-0">
            <img
              src={portrait}
              alt="Murilo de Souza Aguilar"
              className="h-full w-full object-cover object-top grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 border border-brass-500/20" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-4 hidden h-24 w-24 border border-brass-500/25 md:block lg:-right-8" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-brass-400">
              Apresentação
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl leading-tight text-paper-100 text-balance sm:text-4xl md:text-5xl">
              Atuação jurídica estratégica, com atendimento próximo.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rule mt-8 max-w-[120px]" />
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-mist-400 md:text-lg">
              Murilo de Souza Aguilar conduz cada caso com atenção direcionada às
              necessidades específicas de quem o procura. O escritório, sediado em
              Nova Alvorada do Sul, atua nas áreas Criminal, Cível, Trabalhista e de
              Execução Penal, com comunicação clara em cada etapa do processo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
