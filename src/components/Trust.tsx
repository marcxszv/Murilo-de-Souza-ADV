import { Reveal } from "./Reveal"

const PILLARS = [
  {
    title: "Atendimento individualizado",
    description:
      "Cada caso é ouvido e conduzido de acordo com sua particularidade — sem respostas prontas.",
  },
  {
    title: "Análise do caso",
    description:
      "O primeiro passo é entender a situação com clareza antes de indicar qualquer direcionamento.",
  },
  {
    title: "Orientação jurídica direta",
    description:
      "Explicações objetivas sobre o andamento e as possibilidades de cada processo.",
  },
  {
    title: "Contato facilitado",
    description:
      "Atendimento presencial em Nova Alvorada do Sul ou pelo WhatsApp, conforme sua conveniência.",
  },
]

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(179,147,79,0.06),_transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-brass-400">
              Por que entrar em contato
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl leading-tight text-paper-100 text-balance sm:text-4xl md:text-5xl">
              Um atendimento pensado para dar clareza ao seu momento.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-20">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.08 * i}>
              <div className="border-t border-ink-700 pt-6">
                <h3 className="font-display text-xl text-paper-100 md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-mist-500 md:text-base">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
