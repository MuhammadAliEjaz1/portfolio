import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import AllProjects from './components/AllProjects.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><FeaturedProjects /></Reveal>
        <Reveal><AllProjects /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}
