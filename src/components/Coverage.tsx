import { site } from '../config'

export function Coverage() {
  return (
    <section className="section" id="zona" aria-labelledby="coverage-title">
      <div className="container">
        <div className="coverage">
          <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>
            Зона
          </span>
          <h2 id="coverage-title">Работим в {site.city}</h2>
          <p>
            {site.coverage}. Работно време по уговорка — включително вечери и уикенди при
            свободен график. {site.responseTime}.
          </p>
        </div>
      </div>
    </section>
  )
}
