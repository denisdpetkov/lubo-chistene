import { faqs } from '../config'

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">FAQ</span>
          <h2>Често задавани въпроси</h2>
          <p>Кратки отговори преди да се обадите — спестяваме време и на двете страни.</p>
        </div>

        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
