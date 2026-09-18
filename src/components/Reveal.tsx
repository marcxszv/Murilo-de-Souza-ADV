import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "span"
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: custom, ease: [0.16, 1, 0.3, 1] },
  }),
}

/** Fade + translate sutil ao entrar na viewport. Suporte visual, não protagonista. */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Component>
  )
}
