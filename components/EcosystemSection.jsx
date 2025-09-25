import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function EcosystemSection() {
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
      <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866-.5l-1.334-2.334a.5.5 0 0 1 .866-.5L8.9 11.5h2.6a1.5 1.5 0 0 0 1.5-1.5V6a5 5 0 0 0-5-5z"/>
    </svg>
  )

  const PeopleIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  )

  const BankIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 .95 14.61 4.1a.5.5 0 0 1 .24.65L8 8.95l-6.85-4.2a.5.5 0 0 1 .24-.65L8 .95z"/>
      <path d="M2.956 5.27c-.18.07-.235.26-.1.3L8 8.95l5.144-3.38c.135-.04.08-.23-.1-.3L8.1 1.05a.5.5 0 0 0-.2 0L2.956 5.27zM2 7.4v5.7c0 .2.16.4.4.4h.2c.2 0 .4-.2.4-.4V7.4l5-3.2 5 3.2v5.7c0 .2.16.4.4.4h.2c.2 0 .4-.2.4-.4V7.4l1.44-.92a.5.5 0 0 0-.24-.65L8 2.85 1.4 5.83a.5.5 0 0 0-.24.65L2 7.4z"/>
    </svg>
  )

  const GraphIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
    </svg>
  )

  const HandshakeIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="m11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.728-.054l-2.5-3.25a.5.5 0 0 1 .116-.699L8.739 7.5H3.5a.5.5 0 0 1-.478-.647l3.5-13A.5.5 0 0 1 7.06.068L11.251.068z"/>
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
        <div className="flex items-center justify-center w-[76px] h-[76px] rounded-full bg-white shadow-lg border border-blue-200 -ml-6 relative z-30" style={{ aspectRatio: '1/1' }}>
          <div className="rounded-full w-[64px] h-[64px] bg-[#E3F2FD] flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
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
        <div className="flex items-center justify-center w-[76px] h-[76px] rounded-full bg-white shadow-lg border border-green-200 -mr-6 order-1 relative z-30" style={{ aspectRatio: '1/1' }}>
          <div className="rounded-full w-[64px] h-[64px] bg-[#E8F5E8] flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
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

  // Função para obter explicação baseada no item
  const getExplanation = (item) => {
    const explanations = {
      'Autoridade': 'Conquiste credibilidade e reconhecimento como especialista em energia solar através da certificação e capacitação contínua oferecida pelo IBS.',
      'Faturamento': 'Maximize seus resultados financeiros com suporte para precificação estratégica, contratos otimizados e acesso a oportunidades de alta rentabilidade.',
      'Distribuição': 'Acesse uma rede logística eficiente e parcerias estratégicas que facilitam a distribuição de equipamentos e materiais para seus projetos.',
      'Suporte': 'Conte com apoio técnico especializado 24/7, consultoria personalizada e soluções rápidas para desafios do dia a dia.',
      'Cooperativa': 'Participe de um modelo cooperativo inovador que oferece poder de compra coletivo, redução de custos e fortalecimento mútuo.',
      'Garantia': 'Oferecemos garantias estendidas e seguros especiais para seus projetos, proporcionando maior segurança para você e seus clientes.',
      'Financiamento': 'Facilite o acesso dos seus clientes a linhas de crédito exclusivas, condições especiais e aprovação agilizada para projetos solares.',
      'Mercado de Ativos': 'Comercialize créditos de energia renovável e participe de um mercado em crescimento, gerando receitas adicionais para seu negócio.'
    }
    
    return explanations[item.label] || 'Solução integrada do ecossistema IBS'
  }

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 text-white pt-0">
      {/* Fundo azul escuro com mapa mundi - CONTÍNUO da seção anterior */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: "url('/fundo-mapa-mundi-azul.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        {/* Top Tabs - Principais categorias - Centralizadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-16 max-w-4xl mx-auto"
        >
          {/* Peça única conectada */}
          <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-2 shadow-2xl border border-white/20">
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

        {/* Layout principal centralizado */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Coluna esquerda */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="order-2 lg:order-1 space-y-6 flex flex-col items-center lg:items-end"
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
                  className="relative w-64 h-52 md:w-80 md:h-64"
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
                
                {/* Card de explicação - aparece no lugar da logo */}
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
                    <div className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-2xl p-6 max-w-sm text-center shadow-2xl">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">{hoveredItem.label}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{getExplanation(hoveredItem)}</p>
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
              className="order-1 lg:order-3 space-y-6 flex flex-col items-center lg:items-start"
            >
              <RowBadgeRight label="Cooperativa" icon={PeopleIcon} />
              <RowBadgeRight label="Garantia" icon={ShieldIcon} />
              <RowBadgeRight label="Financiamento" icon={BankIcon} />
              <RowBadgeRight label="Mercado de Ativos" icon={GraphIcon} />
            </motion.div>
          </div>
        </div>

        {/* Banner inferior - Centralizado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 flex items-center justify-center max-w-4xl mx-auto"
        >
          {/* Peça única conectada com ícone central */}
          <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-2 shadow-2xl border border-white/20">
            {/* RENTABILIDADE */}
            <div className="bg-[#1E3A8A] text-white text-xl md:text-2xl px-12 py-6 rounded-full font-semibold min-w-[260px] text-center shadow-lg">
              RENTABILIDADE
            </div>
            
            {/* Ícone central branco */}
            <div className="bg-white rounded-full w-[80px] h-[80px] flex items-center justify-center mx-3 shadow-lg border border-gray-200" style={{ aspectRatio: '1/1' }}>
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