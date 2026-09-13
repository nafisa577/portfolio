import { CONFIG } from '../config'
import Socials from './Socials'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <p className="eyebrow reveal">Contact</p>
        <h2 className="sec-title reveal">Let's work together</h2>
        <p className="lead reveal">Have an opportunity, a project, or just want to say hello? My inbox is always open.</p>
        <div className="btns reveal" style={{ justifyContent: 'center' }}>
          <a className="btn btn-primary" href={"mailto:" + CONFIG.email}>Say hello</a>
          <a className="btn btn-ghost" href={CONFIG.github} target="_blank" rel="noopener">See my GitHub</a>
        </div>
        <Socials />
      </div>
    </section>
  )
}
