import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const easeCurve = [0.16, 1, 0.3, 1]
const INTRO_BACKGROUND = '#008ECF'
const INTRO_DURATION = 2500

export default function LogoIntro({ show, onFinish = () => {} }) {
  useEffect(() => {
    if (!show) return undefined

    const timer = setTimeout(() => onFinish(), INTRO_DURATION)
    return () => clearTimeout(timer)
  }, [show, onFinish])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="logo-intro"
          className="fixed inset-0 z-[80] flex items-center justify-center"
          style={{ backgroundColor: INTRO_BACKGROUND }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: easeCurve } }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeCurve } }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.4, ease: easeCurve } }}
          >
            <Image
              src="/IBS - Logo - Ativo 1.png"
              alt="IBS - Instituto Brasileiro de Energia Solar"
              width={480}
              height={200}
              priority
              className="h-auto w-[280px] drop-shadow-[0_22px_60px_rgba(0,142,207,0.45)] md:w-[420px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}



