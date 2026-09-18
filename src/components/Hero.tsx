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
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-ink-950"
    >
      <img
        src={heroImage}
        alt="Murilo de Souza — Advocacia e Consultoria Jurídica"
        className="h-full w-full object-contain object-center"
        fetchPriority="high"
      />
    </section>
  )
}
