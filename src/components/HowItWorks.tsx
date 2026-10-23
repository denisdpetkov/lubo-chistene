import { steps } from '../config'

export function HowItWorks() {
  return (
    <section className="section" id="kak-raboti">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Процес</span>
          <h2>Как работи</h2>
          <p>Четири ясни стъпки — от съобщение до чисто пространство.</p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.n}>
              <span className="step__n" aria-hidden="true">
                {step.n}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
