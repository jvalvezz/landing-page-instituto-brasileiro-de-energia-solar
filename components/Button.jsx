import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  primary:
    'bg-gradient-to-r from-brand-primary to-brand-deep text-white hover:from-brand-deep hover:to-brand-dark focus:ring-brand-primary/40',
  secondary:
    'border border-brand-primary/30 bg-white text-brand-deep hover:bg-brand-primary/10 focus:ring-brand-primary/25',
  ghost: 'bg-transparent text-white border border-white/20 hover:bg-white/10 focus:ring-white/40'
}

export default function Button({ children, href, variant = 'primary', className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-soft transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent'
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} legacyBehavior passHref>
        <motion.a whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className={cls} {...rest}>
          {children}
        </motion.a>
      </Link>
    )
  }

  return (
    <motion.button whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className={cls} {...rest}>
      {children}
    </motion.button>
  )
}
