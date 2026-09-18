import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import logo from "../assets/logo.png"
import { professional, whatsappLink } from "../lib/content"

const NAV_LINKS = [
  { label: "Apresentação", href: "#apresentacao" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink-950/97" : "bg-transparent"
      }`}
    >
      <div
        className={`rule absolute inset-x-0 bottom-0 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Murilo de Souza Aguilar" className="h-10 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-[13px] uppercase tracking-[0.14em] text-paper-300 transition-colors duration-300 hover:text-brass-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá, gostaria de falar sobre meu caso.")}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 border border-brass-500/50 px-5 py-2.5 font-body text-[12px] uppercase tracking-[0.14em] text-brass-300 transition-colors duration-300 hover:border-brass-400 hover:bg-brass-500/10 lg:flex"
        >
          {professional.phoneDisplay}
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-paper-100 transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper-100 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper-100 transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink-700 bg-ink-950/98 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="border-b border-ink-800 py-4 text-left font-display text-2xl text-paper-100"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={whatsappLink("Olá, gostaria de falar sobre meu caso.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-brass-500 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-ink-950"
              >
                Falar pelo WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
