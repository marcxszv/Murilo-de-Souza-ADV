import { professional, whatsappLink } from "../lib/content"
import { Reveal } from "./Reveal"

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink-900 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(179,147,79,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <span className="font-body text-[11px] uppercase tracking-[0.3em] text-brass-400">
            Contato
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl leading-tight text-paper-100 text-balance sm:text-5xl md:text-6xl">
            Fale sobre o seu caso.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-mist-400 md:text-lg">
            O primeiro contato pode ser feito diretamente pelo WhatsApp, de forma
            rápida e objetiva.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={whatsappLink("Olá, gostaria de falar sobre meu caso.")}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-brass-500 bg-brass-500 px-10 py-4 font-body text-sm uppercase tracking-[0.16em] text-ink-950 transition-colors duration-300 hover:bg-brass-400"
          >
            Falar pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 border-t border-ink-700 pt-12 text-left sm:grid-cols-2">
            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-mist-600">
                Endereço
              </span>
              <p className="mt-3 font-body text-sm leading-relaxed text-paper-300 md:text-base">
                {professional.address.line1}
                <br />
                {professional.address.line2}
                <br />
                CEP {professional.address.cep}
              </p>
            </div>
            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-mist-600">
                Horário de atendimento
              </span>
              <p className="mt-3 font-body text-sm leading-relaxed text-paper-300 md:text-base">
                {professional.hours[0].period}
                <br />
                {professional.hours[0].time}
                <br />
                {professional.hours[1].time}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
