import { useState, type FormEvent } from 'react'
import { serviceOptions, site } from '../config'

type Status = 'idle' | 'ok' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const area = String(data.get('area') || '').trim()
    const service = String(data.get('service') || '').trim()
    const date = String(data.get('date') || '').trim()
    const note = String(data.get('note') || '').trim()

    if (!name || !phone || !service) {
      setStatus('error')
      return
    }

    const message = [
      `Здравейте! Искам оферта от ${site.brand}.`,
      `Име: ${name}`,
      `Телефон: ${phone}`,
      `Район/адрес: ${area || '—'}`,
      `Услуга: ${service}`,
      `Желана дата: ${date || '—'}`,
      `Бележка: ${note || '—'}`,
    ].join('\n')

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Заявка за оферта — ${service}`,
    )}&body=${encodeURIComponent(message)}`

    window.location.href = mailto
    setStatus('ok')
    form.reset()
  }

  return (
    <section className="section" id="kontakti">
      <div className="container contact-layout">
        <div className="contact-aside">
          <span className="eyebrow">Контакти</span>
          <h2>Заяви оферта</h2>
          <p>
            Опишете обекта накратко — връщаме се бързо с цена и свободен час.
          </p>
          <p>
            Телефон: <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <br />
            Имейл: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <div className="contact-links">
            <a className="btn btn--primary" href={`tel:${site.phone}`}>
              Обади се
            </a>
            <a
              className="btn btn--outline"
              href={`viber://chat?number=${encodeURIComponent(site.viber)}`}
            >
              Viber
            </a>
            <a
              className="btn btn--outline"
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Име *</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Телефон *</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" required />
          </div>
          <div className="field">
            <label htmlFor="area">Район / адрес</label>
            <input id="area" name="area" autoComplete="street-address" />
          </div>
          <div className="field">
            <label htmlFor="service">Услуга *</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                Изберете
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="date">Желана дата</label>
            <input id="date" name="date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="note">Бележка</label>
            <textarea
              id="note"
              name="note"
              placeholder="Квадратура, брой стаи/бани, тип диван…"
            />
          </div>
          <button className="btn btn--primary" type="submit">
            Изпрати заявка
          </button>
          <p className="form__note">
            Изпращането отваря вашия имейл клиент с попълнено съобщение. Данните се ползват
            само за оферта.
          </p>
          {status === 'ok' && (
            <p className="form__status" role="status">
              Готово — проверете имейл клиента си.
            </p>
          )}
          {status === 'error' && (
            <p className="form__status is-error" role="alert">
              Попълнете име, телефон и услуга.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
