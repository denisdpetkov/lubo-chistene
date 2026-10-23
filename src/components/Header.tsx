import { useEffect, useState } from 'react'
import { site } from '../config'

const links = [
  { href: '#uslugi', label: 'Услуги' },
  { href: '#kak-raboti', label: 'Как работи' },
  { href: '#ceni', label: 'Цени' },
  { href: '#kontakti', label: 'Контакти' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <div className="site-header__inner">
          <a className="logo" href="#top" onClick={() => setOpen(false)}>
            {site.brand}
          </a>

          <nav className="nav" aria-label="Основна навигация">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--primary header-cta" href={`tel:${site.phone}`}>
            Обади се
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Затвори меню' : 'Отвори меню'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`mobile-nav${open ? ' is-open' : ''}`}
          aria-label="Мобилна навигация"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary" href={`tel:${site.phone}`} onClick={() => setOpen(false)}>
            Обади се · {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  )
}
