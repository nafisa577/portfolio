import { CONFIG } from '../config'
import Socials from './Socials'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="hi reveal">Hi, I'm</p>
        <h1 className="reveal"><span className="grad">{CONFIG.name}</span></h1>
        <p className="role reveal">{CONFIG.role} <span className="grad">/ {CONFIG.roleAccent}</span></p>
        <p className="lead reveal">{CONFIG.tagline}</p>
        <div className="btns reveal">
          <a className="btn btn-primary" href="#projects">View my work</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="reveal"><Socials /></div>
      </div>
    </header>
  )
}
