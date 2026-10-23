import { packages } from '../config'

export function Pricing() {
  return (
    <section className="section" id="ceni">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Цени</span>
          <h2>Примерни пакети</h2>
          <p>
            Точната сума идва след кратко описание на обекта. Цените са ориентировъчни
            стартови стойности.
          </p>
        </div>

        <div className="pricing">
          {packages.map((pkg) => (
            <article
              className={`price${pkg.featured ? ' is-featured' : ''}`}
              key={pkg.name}
            >
              <div className="price__top">
                <span className="price__name">{pkg.name}</span>
                <span className="price__cost">{pkg.price}</span>
              </div>
              <p className="price__blurb">{pkg.blurb}</p>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
