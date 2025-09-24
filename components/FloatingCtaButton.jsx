import { motion } from 'framer-motion'
import Image from 'next/image'

const CTA_URL = 'https://oportunidades.ibs.eco.br'
const CTA_LABEL = 'Como ser um integrador'
const CTA_LOGO = '/IBS - Logo - Ativo 1.png'

export default function FloatingCtaButton() {
  return (
    <motion.a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={CTA_LABEL}
    >
      <Image src={CTA_LOGO} alt="IBS" width={20} height={20} className="object-contain" />
      <span className="text-sm font-medium">{CTA_LABEL}</span>
    </motion.a>
  )
}
