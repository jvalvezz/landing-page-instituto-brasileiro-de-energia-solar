import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '#hero', label: 'A IBS' },
  { href: '#beneficios', label: 'BenefÃ­cios' },
  { href: '#ecossistema', label: 'Ecossistema' },
  { href: '#parceiros', label: 'Parcerias' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [open])

  const logoSrc = isScrolled ? '/ibs-logo-dark.png' : '/ibs-logo-white.png'
  const handlePortalSelect = (event) => {
    const value = event.target.value
    if (!value) return
    if (typeof window !== 'undefined') {
      window.open(value, '_blank', 'noopener,noreferrer')
    }
    event.target.selectedIndex = 0
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? 'border-b border-white/20 bg-white/90 backdrop-blur-lg shadow-[0_10px_30px_-20px_rgba(3,50,108,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Link href="#hero" className="relative flex items-center">
          <motion.div layoutId="ibs-logo" className="relative h-10 w-36 md:h-11 md:w-40">
            <Image
              src={logoSrc}
              alt="IBS - Instituto Brasileiro de Energia Solar"
              fill
              sizes="(max-width: 768px) 144px, 192px"
              priority
              className="object-contain"
            />
          </motion.div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-brand-dark hover:text-brand-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div
            className={`relative flex items-center ${
              isScrolled ? 'border border-brand-primary/20 bg-white/90 text-brand-deep shadow-soft' : 'border border-white/30 bg-white/10 text-white'
            } rounded-full px-4 py-2`}
          >
            <label htmlFor="portal-nav" className="sr-only">
              Portais do Integrador
            </label>
            <select
              id="portal-nav"
              defaultValue=""
              onChange={handlePortalSelect}
              className={`appearance-none bg-transparent text-xs font-semibold uppercase tracking-[0.32em] outline-none ${
                isScrolled ? 'text-brand-deep' : 'text-white'
              }`}
            >
              <option value="" disabled>
                Portais do Integrador
              </option>
              <option value="https://ibs.app.br/IBS/open.do?sys=IBS">Portal Cooperativa</option>
              <option value="https://ibs.app.br/IBS/open.do?sys=CREDENCIADO">Portal Credenciado</option>
            </select>
            <span className={`pointer-events-none pl-3 text-xs ${isScrolled ? 'text-brand-deep/60' : 'text-white/70'}`}>
              â–¾
            </span>
          </div>
        </nav>

        <button
          aria-label="Abrir menu"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition md:hidden ${
            isScrolled ? 'border-brand-dark/20 bg-white/90 text-brand-dark shadow-soft' : 'border-white/40 bg-white/10 text-white'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden border-t border-white/10 bg-white/95 backdrop-blur"
          >
            <div className="container-px space-y-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-transparent px-4 py-3 text-base font-medium text-brand-dark transition hover:border-brand-primary/20 hover:bg-brand-primary/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2">
                <label htmlFor="portal-nav-mobile" className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-primary">
                  Portais do Integrador
                </label>
                <select
                  id="portal-nav-mobile"
                  defaultValue=""
                  onChange={(event) => {
                    handlePortalSelect(event)
                    setOpen(false)
                  }}
                  className="w-full rounded-xl border border-brand-primary/30 bg-white px-4 py-3 text-sm font-semibold text-brand-dark shadow-soft focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                >
                  <option value="" disabled>
                    Selecione o portal
                  </option>
                  <option value="https://ibs.app.br/IBS/open.do?sys=IBS">Portal Cooperativa</option>
                  <option value="https://ibs.app.br/IBS/open.do?sys=CREDENCIADO">Portal Credenciado</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}


