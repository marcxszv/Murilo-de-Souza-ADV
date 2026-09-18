import { useState } from "react"
import { practiceAreas } from "../lib/content"
import { Reveal } from "./Reveal"

export function PracticeAreas() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="areas" className="relative bg-ink-950 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="font-body text-[11px] uppercase tracking-[0.3em] text-brass-400">
            Áreas de Atuação
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-paper-100 text-balance sm:text-4xl md:text-5xl">
            Quatro frentes, um único compromisso com cada caso.
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-ink-700 px-6 md:mt-20 md:px-10">
        {practiceAreas.map((area, i) => {
          const isActive = active === i
          return (
            <Reveal key={area.index} delay={0.05 * i}>
              <button
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive((v) => (v === i ? null : v))}
                className="group flex w-full flex-col border-b border-ink-700 py-8 text-left transition-colors duration-500 md:py-10"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span
                      className={`font-display text-lg transition-colors duration-500 md:text-xl ${
                        isActive ? "text-brass-400" : "text-mist-600"
                      }`}
                    >
                      {area.index}
                    </span>
                    <span
                      className={`font-display text-2xl transition-all duration-500 sm:text-3xl md:text-4xl lg:text-5xl ${
                        isActive
                          ? "translate-x-2 text-paper-100"
                          : "text-paper-300 group-hover:translate-x-1"
                      }`}
                    >
                      {area.title}
                    </span>
                  </div>
                  <span
                    className={`hidden h-px shrink-0 bg-brass-500 transition-all duration-500 sm:block ${
                      isActive ? "w-16 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pl-0 font-body text-sm leading-relaxed text-mist-500 sm:pl-[3.25rem] md:pl-[4.75rem] md:text-base">
                      {area.description}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
