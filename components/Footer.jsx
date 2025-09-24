import Image from 'next/image'

const socialLinks = [
  {
    href: 'https://www.instagram.com/ibs.solar',
    label: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    href: 'https://www.facebook.com/ecossistemaibs',
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.9.16 1.9.16v2.1h-1.1c-1 0-1.3.64-1.3 1.3V12h2.3l-.37 3h-1.9v7A10 10 0 0 0 22 12Z" />
      </svg>
    )
  },
  {
    href: 'https://br.linkedin.com/company/ibs-sistemas-de-energia-solar',
    label: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.4 18.2H5.77V9.78H8.4Zm-1.3-9.6a1.53 1.53 0 1 1 1.53-1.53 1.53 1.53 0 0 1-1.53 1.53Zm11.1 9.6h-2.62v-4.09c0-1-.02-2.28-1.39-2.28s-1.6 1.09-1.6 2.21v4.16H9.97V9.78h2.5v1.14h.04a2.75 2.75 0 0 1 2.48-1.36c2.65 0 3.14 1.74 3.14 4Z" />
      </svg>
    )
  }
]

export default function Footer() {
  const handlePortalChange = (event) => {
    const value = event.target.value
    if (!value) return
    window.open(value, '_blank', 'noopener,noreferrer')
    event.target.selectedIndex = 0
  }

  return (
    <footer className="border-t border-white/20 bg-brand-dark text-white">
      <div className="section space-y-10 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="relative h-16 w-44">
              <Image
                src="/ibs-logo-white.png"
                alt="IBS - Instituto Brasileiro de Energia Solar"
                fill
                sizes="176px"
                className="object-contain"
              />
            </div>
            <p className="max-w-md text-base text-white/70">
              Transformamos energia solar em prosperidade para pessoas, empresas e cooperativas em todo o Brasil.
            </p>
            <div className="text-white/60">
              R. Marechal Cândido Rondon, 2732 – Centro, Cascavel/PR<br />
              contato@ibs.eco.br
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">Institucional</h4>
            <ul className="space-y-3 text-white/70">
              <li><a className="transition hover:text-white" href="#beneficios">Benefícios</a></li>
              <li><a className="transition hover:text-white" href="#ecossistema">Ecossistema IBS</a></li>
              <li><a className="transition hover:text-white" href="#parceiros">Cooperativa</a></li>
              <li><a className="transition hover:text-white" href="#contato">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">Portais</h4>
            <ul className="space-y-3 text-white/70">
              <li><a className="transition hover:text-white" href="https://cooperativa.ibs.eco.br" target="_blank" rel="noopener">Cooperativa IBS</a></li>
              <li><a className="transition hover:text-white" href="https://investimentos.ibs.eco.br" target="_blank" rel="noopener">Investimentos</a></li>
              <li><a className="transition hover:text-white" href="https://oportunidades.ibs.eco.br" target="_blank" rel="noopener">Oportunidades</a></li>
              <li>
                <label className="sr-only" htmlFor="portal-select">Portais IBS</label>
                <select
                  id="portal-select"
                  className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/15"
                  defaultValue=""
                  onChange={handlePortalChange}
                >
                  <option value="" disabled>
                    Escolha o portal
                  </option>
                  <option value="https://ibs.app.br/IBS/open.do?sys=IBS">Portal Cooperativa</option>
                  <option value="https://ibs.app.br/IBS/open.do?sys=CREDENCIADO">Portal Credenciado</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} IBS — Instituto Brasileiro de Energia Solar. Todos os direitos reservados.</div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
