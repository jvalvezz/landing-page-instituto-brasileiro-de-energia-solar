import { motion } from 'framer-motion'
import Button from './Button'

export default function ParceirosSection() {
  const handlePortalSelect = (event) => {
    const value = event.target.value
    if (!value) return
    window.open(value, '_blank', 'noopener,noreferrer')
    event.target.selectedIndex = 0
  }

  return (
    <section id="parceiros" className="section">
      <div className="mx-auto max-w-6xl space-y-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-brand-dark md:text-4xl"
        >
          Por dentro da Cooperativa IBS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-lg text-slate-600"
        >
          Possibilidade de redução em até 20% na conta de luz com governança, serviços compartilhados e tecnologia para acelerar a jornada dos cooperados.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-lg text-slate-600">
            <p>
              Aqui na IBS, a gente acredita que o sol é para todos. Trabalhamos para levar essa energia para mais pessoas, transformando telhados e terrenos em verdadeiras usinas de economia.
            </p>
            <p>
              Conheça o portal exclusivo que facilita adesão, gestão financeira, acompanhamento e relacionamento com cooperados em todo o Brasil.
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-4 pt-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="integrator-portal" className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-primary">
                Portais do Integrador
              </label>
              <div className="relative">
                <select
                  id="integrator-portal"
                  defaultValue=""
                  onChange={handlePortalSelect}
                  className="w-full appearance-none rounded-2xl border-2 border-brand-primary/30 bg-white px-4 py-3 pr-10 text-sm font-semibold text-brand-dark shadow-soft transition-all duration-200 hover:border-brand-primary/50 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/20 cursor-pointer h-12"
                >
                  <option value="" disabled className="text-slate-400">
                    Selecione o portal
                  </option>
                  <option value="https://ibs.app.br/IBS/open.do?sys=IBS" className="text-brand-dark font-semibold">Portal Cooperativa</option>
                  <option value="https://ibs.app.br/IBS/open.do?sys=CREDENCIADO" className="text-brand-dark font-semibold">Portal Credenciado</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-transparent">
                Placeholder
              </div>
              <Button href="https://api.whatsapp.com/send?phone=5545999573497&text=Quero%20falar%20com%20a%20Cooperativa%20IBS" target="_blank" rel="noopener" variant="secondary" className="h-12">
                Atendimento direto
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-panel p-8 text-center lg:p-10"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-brand-primary">Portal exclusivo</div>

          <h3 className="mt-4 text-2xl font-semibold text-brand-dark">Comunidades solares inteligentes</h3>

          <p className="mt-3 text-base text-slate-600">
            Monitoramento, faturamento, relacionamento e suporte em um só lugar, com transparência e segurança para cooperados e investidores.
          </p>
        </motion.div>
      </div>
    </section>
  )
}