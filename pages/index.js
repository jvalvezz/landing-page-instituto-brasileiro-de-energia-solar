import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'

// Componente refinado do ecossistema IBS
const EcosystemInteractive = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  // Ícones SVG simples
  const ShieldIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/><path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    </svg>
  )

  const DollarIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
    </svg>
  )

  const TruckIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
  )

  const HeadsetIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866-.5l-1.732-3a.5.5 0 0 1 .866-.5l1.732 3H11.5A1.5 1.5 0 0 0 13 10.5V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
    </svg>
  )

  const PeopleIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002A.274.274 0 0 1 15 13H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    </svg>
  )

  const BankIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
    </svg>
  )

  const GraphIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
    </svg>
  )

  const HandshakeIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="m11 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM4.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM3 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H3Zm-1 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H2Z"/>
    </svg>
  )

  // Badge esquerda com animação hover
  const RowBadgeLeft = ({ label, icon: IconComponent }) => (
    <motion.div
      whileHover={{ scale: 1.02, x: 2 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative w-full cursor-pointer z-20"
      onMouseEnter={() => setHoveredItem({ type: 'left', label })}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-[#1E88E5] text-white px-8 py-4 text-xl md:text-2xl leading-none font-semibold shadow-lg w-full max-w-[320px] min-w-[280px]">
          {label}
        </div>
        <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-white shadow-lg border border-blue-200 -ml-6 relative z-30" style={{ aspectRatio: '1/1' }}>
          <div className="rounded-full w-[58px] h-[58px] bg-[#E3F2FD] flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
            <IconComponent size={28} className="text-[#1E88E5]" />
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Badge direita com animação hover
  const RowBadgeRight = ({ label, icon: IconComponent }) => (
    <motion.div
      whileHover={{ scale: 1.02, x: -2 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative w-full cursor-pointer z-20"
      onMouseEnter={() => setHoveredItem({ type: 'right', label })}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-white shadow-lg border border-green-200 -mr-6 order-1 relative z-30" style={{ aspectRatio: '1/1' }}>
          <div className="rounded-full w-[58px] h-[58px] bg-[#E8F5E8] flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
            <IconComponent size={28} className="text-[#059669]" />
          </div>
        </div>
        <div className="rounded-full bg-[#059669] text-white px-8 py-4 text-xl md:text-2xl leading-none font-semibold shadow-lg w-full max-w-[320px] min-w-[280px] order-2">
          {label}
        </div>
      </div>
    </motion.div>
  )

  // Animação de entrada
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Explicações para hover
  const getExplanation = (item) => {
    const explanations = {
      'Autoridade': 'Conformidade regulatória e certificações do setor elétrico',
      'Faturamento': 'Sistema integrado de gestão financeira e cobrança',
      'Distribuição': 'Logística e distribuição de equipamentos solares',
      'Suporte': 'Atendimento técnico e suporte especializado 24/7',
      'Cooperativa': 'Modelo cooperativo de geração distribuída',
      'Garantia': 'Garantias estendidas e seguros para projetos',
      'Financiamento': 'Linhas de crédito e financiamento para energia solar',
      'Mercado de Ativos': 'Comercialização de créditos de energia renovável',
    }
    return explanations[item.label] || 'Solução integrada do ecossistema IBS'
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Mapa mundial sutil de fundo */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]" 
        style={{
          backgroundImage: "url('/world-map.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} 
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Top Tabs - Principais categorias - Conectadas como na referência */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-16"
        >
          {/* Peça única conectada */}
          <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-3 shadow-2xl border border-white/20">
            {/* INTEGRADOR */}
            <div className="bg-[#1E3A8A] text-white text-xl md:text-2xl px-12 py-6 rounded-full font-semibold min-w-[260px] text-center shadow-lg">
              INTEGRADOR
            </div>
            
            {/* ECOSSISTEMA */}
            <div className="bg-white text-[#1E3A8A] text-xl md:text-2xl px-14 py-7 rounded-2xl font-bold min-w-[300px] text-center shadow-inner border border-gray-100">
              ECOSSISTEMA
            </div>
            
            {/* INVESTIDOR */}
            <div className="bg-[#059669] text-white text-xl md:text-2xl px-12 py-6 rounded-full font-semibold min-w-[260px] text-center shadow-lg">
              INVESTIDOR
            </div>
          </div>
        </motion.div>

        {/* Layout principal em 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Coluna esquerda */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5 order-1"
          >
            <RowBadgeLeft label="Autoridade" icon={ShieldIcon} />
            <RowBadgeLeft label="Faturamento" icon={DollarIcon} />
            <RowBadgeLeft label="Distribuição" icon={TruckIcon} />
            <RowBadgeLeft label="Suporte" icon={HeadsetIcon} />
          </motion.div>

          {/* Logo central */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="order-3 lg:order-2 flex items-center justify-center relative"
          >
            <div className="flex flex-col items-center">
              {/* Logo - aparece quando não há hover */}
              <motion.div
                className="relative w-72 h-56 md:w-80 md:h-64"
                initial={{ opacity: 1 }}
                animate={{ opacity: hoveredItem ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/ibs-logo-white.png"
                  alt="IBS - Instituto Brasileiro de Energia Solar"
                  fill
                  sizes="320px"
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              {/* Card de explicação - aparece no lugar da logo APENAS com hover */}
              <motion.div
                className="absolute top-0 flex items-center justify-center w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredItem ? 1 : 0,
                  scale: hoveredItem ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                {hoveredItem && (
                  <div className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-2xl p-8 max-w-md text-center shadow-2xl">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{hoveredItem.label}</h4>
                    <p className="text-slate-600 text-base leading-relaxed">{getExplanation(hoveredItem)}</p>
                  </div>
                )}
              </motion.div>
              
              <div className="text-xs text-white/80 text-center leading-tight mt-2">
                Instituto Brasileiro<br />
                de Energia Solar
              </div>
              <div className="flex gap-1 mt-2">
                <span className="h-1 w-4 rounded-full bg-[#008ecf]" />
                <span className="h-1 w-4 rounded-full bg-[#f3a712]" />
                <span className="h-1 w-4 rounded-full bg-[#0f9a4b]" />
              </div>
            </div>
          </motion.div>

          {/* Coluna direita */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5 order-2 lg:order-3"
          >
            <RowBadgeRight label="Cooperativa" icon={PeopleIcon} />
            <RowBadgeRight label="Garantia" icon={ShieldIcon} />
            <RowBadgeRight label="Financiamento" icon={BankIcon} />
            <RowBadgeRight label="Mercado de Ativos" icon={GraphIcon} />
          </motion.div>
        </div>

        {/* Banner inferior - Conectado como na referência */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 flex items-center justify-center"
        >
          {/* Peça única conectada com ícone central */}
          <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-3 shadow-2xl border border-white/20">
            {/* RENTABILIDADE */}
            <div className="bg-[#1E3A8A] text-white text-xl md:text-2xl px-12 py-6 rounded-full font-semibold min-w-[260px] text-center shadow-lg">
              RENTABILIDADE
            </div>
            
            {/* Ícone central branco */}
            <div className="bg-white rounded-full w-[80px] h-[80px] flex items-center justify-center mx-4 shadow-lg border border-gray-200" style={{ aspectRatio: '1/1' }}>
              <HandshakeIcon size={32} className="text-[#1E3A8A]" />
            </div>
            
            {/* SEGURANÇA */}
            <div className="bg-[#059669] text-white text-xl md:text-2xl px-12 py-6 rounded-full font-semibold min-w-[260px] text-center shadow-lg">
              SEGURANÇA
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

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
          className="section bg-slate-900 text-white pt-0 overflow-hidden"
        >
          <div className="container-px">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="section-eyebrow text-white/60">Uma visão geral do</span>
              <h3 className="text-4xl font-semibold text-white md:text-5xl">ecossistema</h3>
            </motion.div>

            <EcosystemInteractive />
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
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









