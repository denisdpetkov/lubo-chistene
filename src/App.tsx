import { ContactForm } from './components/ContactForm'
import { Coverage } from './components/Coverage'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { site } from './config'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Coverage />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <a className="btn btn--primary sticky-call" href={`tel:${site.phone}`}>
        Обади се
      </a>
    </>
  )
}
