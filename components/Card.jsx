import { motion } from 'framer-motion'

export default function Card({ icon, eyebrow, title, description, delay = 0, href, className = '' }) {
  const content = (
    <>
      {icon && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
          {icon}
        </div>
      )}
      {eyebrow && <span className="section-eyebrow mb-2 block text-left text-brand-primary/80">{eyebrow}</span>}
      <h3 className="mb-3 text-xl font-semibold text-brand-dark">{title}</h3>
      <p className="text-base text-slate-600">{description}</p>
    </>
  )

  const baseClass = `group rounded-3xl border border-white/40 bg-white/90 p-8 shadow-[0_15px_40px_-35px_rgba(3,50,108,0.75)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(0,142,207,0.35)] ${className}`

  if (href) {
    return (
      <motion.a
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        href={href}
        className={baseClass}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={baseClass}
    >
      {content}
    </motion.div>
  )
}
