import { services } from '../config'

export function Services() {
  return (
    <section className="section" id="uslugi">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Услуги</span>
          <h2>Всичко за чисто пространство — на място при вас</h2>
          <p>Един екип за дом, офис и мека мебел. Без да търсите втори изпълнител.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-item"
              key={service.id}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
