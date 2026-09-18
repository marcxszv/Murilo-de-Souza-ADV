import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { PracticeAreas } from "./components/PracticeAreas"
import { Reviews } from "./components/Reviews"
import { Trust } from "./components/Trust"
import { WhatsAppFloat } from "./components/WhatsAppFloat"

function App() {
  return (
    <div className="grain min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Trust />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
