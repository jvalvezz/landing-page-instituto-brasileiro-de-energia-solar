import { motion } from 'framer-motion'

const StatCard = ({ value, label, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center p-6"
  >
    <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">{value}</div>
    <div className="text-sm uppercase tracking-[0.35em] text-white/70">{label}</div>
    <div className="mt-2 text-center text-sm text-white/60">{description}</div>
  </motion.div>
)

export default function StatsSection({
  id = 'numeros',
  title,
  description,
  stats = [],
  eyebrow,
  backgroundClass = 'relative isolate overflow-hidden',
  className = ''
}) {
  return (
    <section id={id} className={`section text-white ${backgroundClass} ${className}`.trim()}>
      {/* Fundo azul escuro com mapa mundi - igual ao ecossistema */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-brand-dark"
          style={{
            backgroundImage: "url('/fundo-mapa-mundi-azul.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>

      <div className="mx-auto max-w-5xl text-center relative z-10">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-white/70"
          >
            {eyebrow}
          </motion.span>
        )}

        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-semibold md:text-4xl"
          >
            {title}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 text-lg text-white/80"
          >
            {description}
          </motion.p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label ?? index}
              {...stat}
              delay={stat.delay ?? 0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
