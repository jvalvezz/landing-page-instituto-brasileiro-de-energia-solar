import { useCallback, useEffect, useState } from 'react'
import { LayoutGroup } from 'framer-motion'
import LogoIntro from '../components/LogoIntro'
import '../styles/globals.css'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'
import FloatingCtaButton from '../components/FloatingCtaButton'

const INTRO_FALLBACK_TIMEOUT = 4000

export default function MyApp({ Component, pageProps }) {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (!showIntro) return undefined

    const timer = setTimeout(() => setShowIntro(false), INTRO_FALLBACK_TIMEOUT)
    return () => clearTimeout(timer)
  }, [showIntro])

  const handleIntroFinish = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <LayoutGroup>
      <Component {...pageProps} introDone={!showIntro} />
      <LogoIntro show={showIntro} onFinish={handleIntroFinish} />
      <FloatingWhatsAppButton />
      <FloatingCtaButton />
    </LayoutGroup>
  )
}



