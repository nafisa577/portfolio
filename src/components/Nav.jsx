import { useState } from 'react'
import { CONFIG } from '../config'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["contact", "Contact"]]
  return (
    <nav>
      <div className="wrap nav-in">
        <a href="#top" className="logo">{CONFIG.initials}<span className="dot">.</span></a>
        <div className="nav-links">
          {links.map(l => <a key={l[0]} href={"#" + l[0]}>{l[1]}</a>)}
          <a className="nav-cta" href={"mailto:" + CONFIG.email}>Contact me</a>
        </div>
        <button className="burger" onClick={() => setOpen(!open)}>{open ? "\u2715" : "\u2630"}</button>
      </div>
      {open && (
        <div className="mobile">
          {links.map(l => <a key={l[0]} href={"#" + l[0]} onClick={() => setOpen(false)}>{l[1]}</a>)}
        </div>
      )}
    </nav>
  )
}
