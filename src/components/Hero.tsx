import heroImage from "../assets/hero-static.png"

/**
 * Hero estático e tradicional: uma única imagem, sem sticky, sem scroll
 * hijacking, sem canvas, sem sequência de frames. A imagem já traz a
 * identidade completa (logo + nome + "Advocacia e Consultoria Jurídica"),
 * por isso nenhum texto é sobreposto — a peça visual é o conteúdo.
 */
export function Hero() {
  return (
    <section
      id="topo"
      className="relative w-full overflow-hidden bg-ink-950 md:flex md:h-[100svh] md:items-center md:justify-center"
    >
      <img
        src={heroImage}
        alt="Murilo de Souza — Advocacia e Consultoria Jurídica"
        className="block h-auto w-full object-contain object-top md:h-full md:object-center"
        fetchPriority="high"
      />
    </section>
  )
}
