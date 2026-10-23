import { site } from '../config'

const heroImage =
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Начало">
      <div className="hero__media" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="hero__shade" />
      </div>

      <div className="container">
        <div className="hero__content">
          <p className="hero__brand">{site.brand}</p>
          <p className="hero__lead">
            Мобилно почистване на апартаменти, офиси, дивани и бани в {site.city}.{' '}
            {site.responseTime.charAt(0).toUpperCase() + site.responseTime.slice(1)}.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#kontakti">
              Заяви оферта
            </a>
            <a className="btn btn--ghost" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
