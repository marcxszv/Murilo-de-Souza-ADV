import logo from "../assets/logo.png"
import { professional, whatsappLink } from "../lib/content"

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left md:px-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <img src={logo} alt="" className="h-9 w-auto opacity-90" />
          <div>
            <p className="font-display text-lg text-paper-100">{professional.name}</p>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-mist-600">
              {professional.role}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 font-body text-sm text-mist-500 md:items-end">
          <span>{professional.address.line2}</span>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-brass-300"
          >
            WhatsApp — {professional.phoneDisplay}
          </a>
          <span>
            {professional.hours[0].period} · {professional.hours[0].time} e{" "}
            {professional.hours[1].time}
          </span>
        </div>
      </div>
    </footer>
  )
}
