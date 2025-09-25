import { motion } from 'framer-motion'
import Card from './Card'

// Ícones SVG para os benefícios
const SparkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 2a3 3 0 1 0 2.8 4H18a2 2 0 0 1 2 2v1.2a3 3 0 1 0 2 0V8a4 4 0 0 0-4-4h-3.2A3 3 0 0 0 12 2ZM4 6a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h3.2a3 3 0 1 0 0-2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.2a3 3 0 1 0 0-2Zm12.8 6H12a3 3 0 1 0 0 2h4.8a3 3 0 1 0 0-2Z" opacity=".18" />
    <path d="M12 0a5 5 0 1 0 4.58 7H18a4 4 0 0 1 4 4v.34a5 5 0 1 0 2 0V7a6 6 0 0 0-6-6h-1.42A5 5 0 0 0 12 0Zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm9 9a3 3 0 1 1-3 3v-3a1 1 0 1 1 2 0 1 1 0 0 0 2 0ZM5 4a6 6 0 0 0-6 6v5a6 6 0 0 0 6 6h1.42a5 5 0 1 0 0-2H5a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h1.42a5 5 0 1 0 0-2Zm3 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm6.8 10H12a5 5 0 1 0 0 2h2.8a5 5 0 1 0 0-2ZM12 16a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm7 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z" />
  </svg>
)

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
  </svg>
)

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
  </svg>
)

export default function BeneficiosSection() {
  const beneficios = [
    {
      title: "Aumente seu faturamento",
      description: "Como parte do ecossistema IBS, você terá inúmeras oportunidades de networking com outros profissionais e empresas do setor de energia solar. Isso facilita parcerias estratégicas, a troca de experiências e novas colaborações para impulsionar seus negócios.",
      icon: <SparkIcon />
    },
    {
      title: "Uso da marca IBS", 
      description: "Os integradores IBS têm acesso a programas de capacitação e treinamentos técnicos de alta qualidade, ministrados por especialistas renomados. Assim, sua equipe permanece atualizada com as últimas tendências, tecnologias e melhores práticas do mercado solar.",
      icon: <GlobeIcon />
    },
    {
      title: "Cooperativa com você",
      description: "Os integradores IBS contam com suporte técnico contínuo e consultoria especializada. Auxiliamos na resolução de problemas, na otimização de projetos e na implementação de soluções inovadoras para garantir excelência na entrega.",
      icon: <NetworkIcon />
    }
  ]

  return (
    <section id="beneficios" className="section">
      <div className="mx-auto max-w-7xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow text-brand-primary"
        >
          por que escolher o ibs
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Vantagens em ser um Integrador IBS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Aqui na IBS, a gente acredita que o sol é para todos. Trabalhamos para levar essa energia para mais pessoas, transformando telhados e terrenos em verdadeiras usinas de economia.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card
                title={beneficio.title}
                description={beneficio.description}
                icon={beneficio.icon}
                delay={index * 0.1}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}