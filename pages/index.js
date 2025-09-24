import Head from 'next/head'

import Image from 'next/image'

import { motion } from 'framer-motion'

import Header from '../components/Header'

import Footer from '../components/Footer'

import Button from '../components/Button'

import Card from '../components/Card'

const SparkIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">

    <path d="M5.4 3.2a1 1 0 0 1 1.09-.16l3.58 1.79a1 1 0 0 0 .88 0l3.58-1.79a1 1 0 0 1 1.09.16l4.02 3.72a1 1 0 0 1 .21 1.21l-2.07 3.73a1 1 0 0 0 0 .96l2.07 3.73a1 1 0 0 1-.21 1.21l-4.02 3.72a1 1 0 0 1-1.09.16l-3.58-1.79a1 1 0 0 0-.88 0l-3.58 1.79a1 1 0 0 1-1.09-.16l-4.02-3.72a1 1 0 0 1-.21-1.21l2.07-3.73a1 1 0 0 0 0-.96L1.17 8.13a1 1 0 0 1 .21-1.21Z" opacity=".18" />

    <path d="M11 2.17a2 2 0 0 1 2 0l3.42 1.71 3.84 3.55a2 2 0 0 1 .41 2.42L18.93 11l1.74 3.15a2 2 0 0 1-.41 2.42l-3.84 3.55a2 2 0 0 1-2.18.32L11 19.83l-3.42 1.71a2 2 0 0 1-2.18-.32l-3.84-3.55a2 2 0 0 1-.41-2.42L3.89 11 2.15 7.85a2 2 0 0 1 .41-2.42l3.84-3.55Zm1 2.31a1 1 0 0 0-.92 0l-3.41 1.7-3.56 3.29 1.92 3.48a2 2 0 0 1 0 1.9l-1.92 3.48 3.56 3.29 3.41-1.7a1 1 0 0 1 .92 0l3.41 1.7 3.56-3.29-1.92-3.48a2 2 0 0 1 0-1.9l1.92-3.48-3.56-3.29Z" />

  </svg>

)

const GlobeIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">

    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm7.93 9h-3.02a16.69 16.69 0 0 0-1.33-5.12A8.02 8.02 0 0 1 19.93 11ZM12 4a13.19 13.19 0 0 1 1.91 5H10.1A13.19 13.19 0 0 1 12 4Zm-3.58.88A16.69 16.69 0 0 0 7.09 11H4.07a8.02 8.02 0 0 1 4.35-6.12ZM4.07 13h3.02a16.69 16.69 0 0 0 1.33 5.12A8.02 8.02 0 0 1 4.07 13Zm7.93 7a13.19 13.19 0 0 1-1.91-5h3.81A13.19 13.19 0 0 1 12 20Zm3.58-.88A16.69 16.69 0 0 0 16.91 13h3.02a8.02 8.02 0 0 1-4.35 6.12Z" opacity=".18" />

    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm9 11h-2.06a14.24 14.24 0 0 0-2.12-6.23A9.93 9.93 0 0 1 21 11ZM12 2a15.23 15.23 0 0 1 2.67 7H9.33A15.23 15.23 0 0 1 12 2ZM7.18 4.77A14.24 14.24 0 0 0 5.06 11H3a9.93 9.93 0 0 1 4.18-6.23ZM3 13h2.06a14.24 14.24 0 0 0 2.12 6.23A9.93 9.93 0 0 1 3 13Zm9 9a15.23 15.23 0 0 1-2.67-7h5.34A15.23 15.23 0 0 1 12 22Zm4.82-2.77A14.24 14.24 0 0 0 18.94 13H21a9.93 9.93 0 0 1-4.18 6.23Z" />

  </svg>

)

const NetworkIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">

    <path d="M12 2a3 3 0 1 0 2.8 4H18a2 2 0 0 1 2 2v1.2a3 3 0 1 0 2 0V8a4 4 0 0 0-4-4h-3.2A3 3 0 0 0 12 2ZM4 6a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h3.2a3 3 0 1 0 0-2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.2a3 3 0 1 0 0-2Zm12.8 6H12a3 3 0 1 0 0 2h4.8a3 3 0 1 0 0-2Z" opacity=".18" />

    <path d="M12 0a5 5 0 1 0 4.58 7H18a4 4 0 0 1 4 4v.34a5 5 0 1 0 2 0V7a6 6 0 0 0-6-6h-1.42A5 5 0 0 0 12 0Zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm9 9a3 3 0 1 1-3 3v-3a1 1 0 1 1 2 0 1 1 0 0 0 2 0ZM5 4a6 6 0 0 0-6 6v5a6 6 0 0 0 6 6h1.42a5 5 0 1 0 0-2H5a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h1.42a5 5 0 1 0 0-2Zm3 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm6.8 10H12a5 5 0 1 0 0 2h2.8a5 5 0 1 0 0-2ZM12 16a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm7 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z" />

  </svg>

)

const benefits = [

  {

    title: 'Aumente seu faturamento',

    description:

      'Como parte do ecossistema IBS, você terá inúmeras oportunidades de networking com outros profissionais e empresas do setor de energia solar. Isso facilita parcerias estratégicas, a troca de experiências e novas colaborações para impulsionar seus negócios.',

    icon: <SparkIcon />

  },

  {

    title: 'Uso da marca IBS',

    description:

      'Os integradores IBS têm acesso a programas de capacitação e treinamentos técnicos de alta qualidade, ministrados por especialistas renomados. Assim, sua equipe permanece atualizada com as últimas tendências, tecnologias e melhores práticas do mercado solar.',

    icon: <GlobeIcon />

  },

  {

    title: 'Cooperativa com você',

    description:

      'Os integradores IBS contam com suporte técnico contínuo e consultoria especializada. Auxiliamos na resolução de problemas, na otimização de projetos e na implementação de soluções inovadoras para garantir excelência na entrega.',

    icon: <NetworkIcon />

  },

]

const testimonials = [

  {

    name: 'João Silva',

    role: 'Diretor da SolarTech',

    quote:

      'Integrar ao IBS foi um divisor de águas para nossa empresa. Com os cursos e treinamentos oferecidos conseguimos aprimorar nosso conhecimento técnico e implementar soluções mais eficientes para nossos clientes.',

    image: null

  },

  {

    name: 'Maria Oliveira',

    role: 'CEO da EcoSol energia',

    quote:

      'Desde que nos unimos à IBS vimos um crescimento significativo. As oportunidades de networking e as parcerias formadas através do instituto foram fundamentais para ampliar nossa carteira de clientes.',

    image: null

  },

  {

    name: 'Carlos Pereira',

    role: 'Gerente de Projetos da SunPower Solutions',

    quote:

      'A visibilidade que ganhamos por meio das iniciativas da IBS fortaleceu nossa marca e construiu uma reputação de confiãnça no mercado. O suporte contínuo faz toda a diferença.',

    image: null

  }

]



const ecosystemServices = [
  { label: 'Distribuidoras', color: '#ee7218' },
  { label: 'Financiamento', color: '#f48a1c' },
  { label: 'Logística', color: '#f6a62c' },
  { label: 'Jurídico', color: '#127b77' },
  { label: 'Engenharia', color: '#119b82' },
  { label: 'Sistema', color: '#0d827b' },
  { label: 'Marketing', color: '#f8b912', textClass: 'text-brand-dark' },
  { label: 'Treinamento', color: '#f3aa1d', textClass: 'text-brand-dark' },
  { label: 'Licitação', color: '#f3b826', textClass: 'text-brand-dark' }
]

const ecosystemStakeholders = [
  { label: 'Investidor Autoconsumo', color: '#1e4f93' },
  { label: 'Investidor Cooperativa', color: '#1b4a89' },
  { label: 'Integrador', color: '#123f7a' },
  { label: 'Corretor', color: '#0f3566' },
  { label: 'Cooperativa', color: '#0f9a4b' }
]

const EcosystemPill = ({
  label,
  color,
  textClass = 'text-white',
  direction = 'left',
  delay = 0
}) => (
  <motion.div
    initial={{ opacity: 0, x: direction === 'left' ? -24 : 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.45, delay }}
    style={{ backgroundColor: color }}
    className={`${textClass} flex items-center justify-between gap-4 rounded-md px-5 py-3 text-sm font-semibold shadow-[0_18px_36px_-24px_rgba(8,22,40,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_48px_-28px_rgba(8,22,40,0.65)]`}
  >
    <span>{label}</span>
    <span className="relative h-6 w-10 shrink-0 md:h-7 md:w-12">
      <Image src="/logo/ibs-badge-white.png" alt="IBS" fill sizes="48px" className="object-contain" />
    </span>
  </motion.div>
)

const getInitials = (name) =>

  name

    .split(' ')

    .filter(Boolean)

    .map((part) => part[0])

    .slice(0, 2)

    .join('')

    .toUpperCase()

export default function Home({ introDone }) {
  const handlePortalSelect = (event) => {

    const value = event.target.value

    if (!value) return

    window.open(value, '_blank', 'noopener,noreferrer')

    event.target.selectedIndex = 0

  }

  return (

    <>

      <Head>

        <title>IBS - Instituto Brasileiro de Energia Solar</title>

        <meta

          name="description"

          content="Instituto Brasileiro de energia Solar é ecossistema completo com cooperativas, integradores, financiamento e soluções para impulsionar a energia solar no Brasil."

        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <Header introDone={introDone} />

      <main className="overflow-hidden">

        <section id="hero" className="relative overflow-hidden pt-36 min-h-[80vh]">
          <div className="absolute inset-0 z-0">
            <video className="h-full w-full object-cover" style={{ filter: "brightness(30%)" }} src="/herovid.mp4" autoPlay muted loop playsInline preload="auto" />
          </div>

          <div className="section relative z-20 grid items-center gap-16 pb-24 text-white md:grid-cols-[1.05fr_0.95fr]">
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

        <section id="beneficios" className="section">

          <div className="mx-auto max-w-3xl text-center">

            <motion.h2

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6 }}

              className="mb-4 text-3xl font-semibold text-brand-dark md:text-4xl"

            >

              Vantagens exclusivas para integradores IBS

            </motion.h2>

            <motion.p

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6, delay: 0.1 }}

              className="section-subtitle"

            >

              Conheça os benefícios de fazer parte de um ecossistema preparado para transformar energia em prosperidade.

            </motion.p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {benefits.map((benefit, idx) => (

              <Card

                key={benefit.title}

                title={benefit.title}

                description={benefit.description}

                icon={benefit.icon}

                delay={idx * 0.1}

              />

            ))}

          </div>

        </section>

        <section id="numeros" className="section bg-slate-900 text-white pb-0">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-semibold md:text-4xl"
            >
              Números que demonstram nosso impacto
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 text-lg text-white/80"
            >
              Resultados concretos que comprovam a força do ecossistema IBS em todo o Brasil.
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center p-6"
              >
                <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">R$ 50M+</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/70">Faturamento Gerado</div>
                <div className="mt-2 text-center text-sm text-white/60">
                  Volume de negócios movimentado pela rede IBS
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center p-6"
              >
                <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">250+</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/70">Integradores no País</div>
                <div className="mt-2 text-center text-sm text-white/60">
                  Profissionais qualificados em todo o Brasil
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center p-6"
              >
                <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">15MW+</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/70">Potência Instalada</div>
                <div className="mt-2 text-center text-sm text-white/60">
                  Energia solar conectada à rede elétrica
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center p-6"
              >
                <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">1.200+</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/70">Projetos Concluídos</div>
                <div className="mt-2 text-center text-sm text-white/60">
                  Instalações entregues com excelência
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center p-6"
              >
                <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">85%</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/70">Satisfação do Cliente</div>
                <div className="mt-2 text-center text-sm text-white/60">
                  Índice de recomendação dos nossos serviços
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center p-6"
              >
                <div className="mb-2 text-4xl font-bold text-brand-light md:text-5xl">24h</div>
                <div className="text-sm uppercase tracking-[0.35em] text-white/70">Tempo de Resposta</div>
                <div className="mt-2 text-center text-sm text-white/60">
                  Suporte técnico e comercial rápido
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="ecossistema"
          className="section bg-slate-900 text-white pt-0"
        >
          <div className="container-px">
            <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)_260px] xl:grid-cols-[300px_minmax(0,1fr)_300px]">
              <div className="flex flex-col gap-3">
                {ecosystemServices.map((service, index) => (
                  <EcosystemPill
                    key={service.label}
                    {...service}
                    direction="left"
                    delay={index * 0.05}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative flex flex-col items-center overflow-hidden rounded-[44px] border border-white/10 bg-white/5 px-10 py-16 text-center shadow-[0_55px_140px_-55px_rgba(4,27,68,0.85)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-white/5" />

                <span className="section-eyebrow text-white/60">Uma visão geral do</span>
                <h3 className="text-4xl font-semibold text-white md:text-5xl">ecossistema</h3>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/75 md:text-lg">
                  No Instituto Brasileiro de Energia Solar, somos um ecossistema completo que conecta integrações, investimentos, cooperativas e todo o suporte necessário para transformar energia em prosperidade.
                </p>

                <div className="mt-8 flex w-full flex-col gap-4 text-left text-sm text-white/70 md:text-base">
                  <p>
                    Geramos oportunidades reais para integradores com treinamentos contínuos, logística, engenharia e sistemas integrados.
                  </p>
                  <p>
                    Oferecemos segurança para investidores e cooperativas com assessoria jurídica, modelos de negócio validados e parcerias estratégicas.
                  </p>
                  <p>
                    Integramos soluções financeiras, marketing e licitações para acelerar projetos solares em todo o Brasil.
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col gap-3">
                {ecosystemStakeholders.map((stakeholder, index) => (
                  <EcosystemPill
                    key={stakeholder.label}
                    {...stakeholder}
                    direction="right"
                    delay={index * 0.05}
                  />
                ))}

                <motion.a
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  href="https://www.youtube.com/watch?v=VwOVLxFNMPE"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mt-4 flex items-center justify-between gap-4 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-24px_rgba(8,22,40,0.6)] backdrop-blur"
                  style={{ backgroundColor: '#102a54' }}
                >
                  <span>Assista ao vídeo explicativo</span>
                  <div className="flex items-center gap-2">
                    <span className="relative h-6 w-10 shrink-0 md:h-7 md:w-12">
                      <Image src="/logo/ibs-badge-white.png" alt="IBS" fill sizes="48px" className="object-contain" />
                    </span>
                    <div className="flex items-center gap-[3px]">
                      <span className="h-1.5 w-3 rounded-full bg-[#008ecf]" />
                      <span className="h-1.5 w-3 rounded-full bg-[#f3a712]" />
                      <span className="h-1.5 w-3 rounded-full bg-[#0f9a4b]" />
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="section bg-brand-light/30">

          <div className="mx-auto max-w-3xl text-center">

            <motion.h2

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6 }}

              className="mb-4 text-3xl font-semibold text-brand-dark md:text-4xl"

            >

              Depoimentos dos integradores IBS

            </motion.h2>

            <motion.p

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6, delay: 0.1 }}

              className="section-subtitle"

            >

              A prosperidade compartilhada por quem vive a experiência IBS no dia a dia.

            </motion.p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {testimonials.map((testimonial, idx) => (

              <motion.article

                key={testimonial.name}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true, amount: 0.3 }}

                transition={{ duration: 0.6, delay: idx * 0.1 }}

                className="flex h-full flex-col gap-4 rounded-3xl border border-white/40 bg-white/95 p-6 text-left shadow-[0_25px_60px_-35px_rgba(3,50,108,0.35)]"

              >

                <div className="flex items-start gap-4">

                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-brand-primary/10 shadow-inner">

                    {testimonial.image ? (

                      <Image src={testimonial.image} alt={testimonial.name} fill sizes="64px" className="object-cover" />

                    ) : (

                      <span className="flex h-full w-full items-center justify-center text-lg font-semibold text-brand-deep">

                        {getInitials(testimonial.name)}

                      </span>

                    )}

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.35em] text-brand-primary">{testimonial.role}</p>

                    <h3 className="mt-2 text-lg font-semibold text-brand-dark">{testimonial.name}</h3>

                  </div>

                </div>

                <p className="text-base text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>

              </motion.article>

            ))}

          </div>

        </section>

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

        <section id="contato" className="section">

          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">

            <motion.div

              initial={{ opacity: 0, x: -40 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true, amount: 0.5 }}

              transition={{ duration: 0.7 }}

              className="space-y-6"

            >

              <span className="section-eyebrow text-brand-primary">contato</span>

              <h2 className="text-3xl font-semibold text-brand-dark md:text-4xl">

                Bora prosperar com energia solar?

              </h2>

              <p className="text-lg text-slate-600">

                Preencha o formulário e nosso time retorna em até 24h úteis para entender seu projeto, apresentar soluções e simular resultados sob medida.

              </p>

              <div className="rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-soft">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">Atendimento direto</p>

                <p className="mt-3 text-brand-dark">contato@ibs.eco.br</p>

                <p className="text-slate-600">+55 (45) 99957-3497</p>

              </div>

            </motion.div>

            <motion.form

              initial={{ opacity: 0, x: 40 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true, amount: 0.5 }}

              transition={{ duration: 0.7, delay: 0.1 }}

              className="space-y-4 rounded-3xl border border-white/60 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(3,50,108,0.5)]"

              onSubmit={(event) => {

                event.preventDefault()

                window?.alert('Obrigado! Nosso time entrará em contato em breve.')

              }}

            >

              <div className="grid gap-4 md:grid-cols-2">

                <div>

                  <label htmlFor="nome">Nome completo</label>

                  <input id="nome" name="nome" type="text" placeholder="Seu nome" required />

                </div>

                <div>

                  <label htmlFor="email">E-mail</label>

                  <input id="email" name="email" type="email" placeholder="voce@empresa.com" required />

                </div>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                <div>

                  <label htmlFor="telefone">Telefone / WhatsApp</label>

                  <input id="telefone" name="telefone" type="text" placeholder="(XX) 99999-9999" required />

                </div>

                <div>

                  <label htmlFor="segmento">Segmento</label>

                  <select

                    id="segmento"

                    name="segmento"

                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"

                    defaultValue=""

                    required

                  >

                    <option value="" disabled>

                      Selecione

                    </option>

                    <option value="Residencial">Residencial</option>

                    <option value="Empresas & Indústrias">Empresas & Indústrias</option>

                    <option value="Cooperativa">Cooperativa</option>

                    <option value="Integrador">Integrador</option>

                    <option value="Investidor">Investidor</option>

                    <option value="Gestor público">Gestor público</option>

                  </select>

                </div>

              </div>

              <div>

                <label htmlFor="mensagem">Conte um pouco sobre o projeto</label>

                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Queremos saber sua necessidade e objetivos." required />

              </div>

              <div className="flex justify-end">

                <Button type="submit">Enviar mensagem</Button>

              </div>

            </motion.form>

          </div>

        </section>

        <section className="section">
          <div className="grid gap-8 rounded-3xl bg-brand-dark px-8 py-10 text-white shadow-soft md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
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
            <div className="relative ml-auto flex h-64 w-64 items-center justify-center rounded-full bg-white/5 overflow-hidden border-4 border-brand-secundary">
              <Image 
                src="/gerigerifoto.png" 
                alt="Vinicius Gonzales" 
                fill
                sizes="128px"
                className="rounded-full object-cover" 
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />

    </>

  )

}









