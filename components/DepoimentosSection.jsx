import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Carlos Silva",
    company: "SolarTech Energia",
    role: "Diretor",
    content: "O IBS revolucionou nossa operação. O suporte técnico e a rede de contatos nos permitiram crescer 300% em dois anos.",
    image: null
  },
  {
    name: "Maria Santos",
    company: "Energia Verde LTDA",  
    role: "CEO",
    content: "A capacitação contínua e o acesso a financiamentos exclusivos transformaram nossos resultados. Recomendo a todos os integradores.",
    image: null
  },
  {
    name: "João Oliveira",
    company: "Solar Innovations",
    role: "Fundador",
    content: "A visibilidade que ganhamos por meio das iniciativas da IBS fortaleceu nossa marca e construiu uma reputação de confiança no mercado. O suporte contínuo faz toda a diferença.",
    image: null
  }
]

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="section bg-brand-light/30">
      <div className="mx-auto max-w-7xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow text-brand-primary"
        >
          o que dizem nossos parceiros
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Depoimentos dos integradores IBS
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-2xl bg-white p-8 shadow-soft"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white font-semibold">
                  {getInitials(testimonial.name)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}