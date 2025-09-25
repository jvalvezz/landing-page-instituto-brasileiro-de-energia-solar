import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'

export default function HeroSection({ introDone = true }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <video className="h-full w-full object-cover" style={{ filter: "brightness(10%)" }} src="/herovid.mp4" autoPlay muted loop playsInline preload="auto" />
      </div>

      <div className="section relative z-20 grid items-center gap-16 pb-8 text-white md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-brand-light">
            Vantagens em ser um Integrador IBS
          </span>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            Aqui na IBS, a gente acredita que o sol é para todos.
          </h1>

          <p className="max-w-xl text-lg text-white/75">
            Trabalhamos para levar essa energia para mais pessoas, transformando telhados e terrenos em verdadeiras usinas de economia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href="https://oportunidades.ibs.eco.br"
              target="_blank"
              rel="noopener"
              className="shadow-[0_25px_45px_-20px_rgba(0,142,207,0.55)]"
            >
              Como ser um Integrador
            </Button>

            <Button href="#beneficios" variant="ghost">
              Ver benefícios
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={introDone ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] } } : { opacity: 0, y: 60 }}
          whileHover={{ scale: 1.03 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-10 rounded-[40px] bg-brand-deep blur-3xl opacity-50"
            initial={{ opacity: 0.45 }}
            whileHover={{ opacity: 0.65 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-10 backdrop-blur-lg"
            whileHover={{ boxShadow: '0 35px 120px -45px rgba(4,27,68,0.7)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-6">
              <div className="relative h-16 w-40">
                <Image src="/ibs-logo-white.png" alt="IBS" fill sizes="160px" className="object-contain" />
              </div>

              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Ecossistema IBS</p>

              <p className="text-white/80">
                Nosso objetivo é gerar prosperidade para o mercado de energia solar, impulsionar vendas e oferecer a máxima segurança para investidores.
              </p>

              <ol className="grid gap-2 text-sm text-white/70">
                <li>- Produtos e soluções de alto desempenho com parceiros certificados.</li>
                <li>- Programas de capacitação contínua para equipes integradoras.</li>
                <li>- Suporte consultivo para garantir excelência em cada projeto.</li>
              </ol>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}