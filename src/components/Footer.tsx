import { site } from '../config'

const YEAR = 2026

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {YEAR} {site.brand}. Мобилно почистване в {site.city}.
        </p>
        <p>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          {' · '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </footer>
  )
}
