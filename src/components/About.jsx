import { CONFIG } from '../config'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow reveal">About</p>
        <h2 className="sec-title reveal">A bit about me</h2>
        <div className="about-grid" style={{ marginTop: 32 }}>
          <div className="avatar reveal">{CONFIG.initials}</div>
          <div className="about-text reveal">
            {CONFIG.about.map((t, i) => <p key={i}>{t}</p>)}
            <div className="facts">
              {CONFIG.facts.map((f, i) => (
                <div className="fact" key={i}><div className="k">{f.k}</div><div className="v">{f.v}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
