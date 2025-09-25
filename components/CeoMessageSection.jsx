import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CeoMessageSection() {
  return (
    <section className="section">
      <div className="relative rounded-3xl bg-brand-dark px-8 py-10 text-white shadow-soft overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Conteúdo da esquerda */}
          <div className="space-y-6 flex-1 max-w-4xl pr-8">
            <span className="section-eyebrow text-brand-primary">palavra do ceo</span>
            <p className="text-2xl font-semibold text-white md:text-3xl">
              &ldquo;Observamos um mercado de energia fotovoltaica extremamente chateado no quesito cooperativa e no quesito concorrência desleal. A IBS surge para ser solução!&rdquo;
            </p>
            <div className="space-y-1 text-white/80">
              <p className="text-lg font-semibold text-white">Vinicius Gonzales</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                CEO - Instituto Brasileiro de Energia Solar
              </p>
            </div>
          </div>
          
          {/* Foto no lado direito */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 hidden lg:block"
          >
            <div className="relative h-64 w-64 rounded-full border-8 border-white overflow-hidden shadow-2xl">
              <Image
                src="/gerigerifoto.png"
                alt="Vinicius Gonzales - CEO do IBS"
                fill
                className="object-cover object-top"
                sizes="256px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}