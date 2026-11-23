import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import AllProjects from './components/AllProjects.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <AllProjects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
