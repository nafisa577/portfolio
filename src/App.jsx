import { useEffect } from 'react'
import { CONFIG } from './config'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer>
        &copy; {new Date().getFullYear()} {CONFIG.name} &middot; Built with React &middot; {CONFIG.location}
      </footer>
    </>
  )
}
