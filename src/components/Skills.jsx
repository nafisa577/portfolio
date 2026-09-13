import { CONFIG } from '../config'
import Icon from './Icon'

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <p className="eyebrow reveal">Skills</p>
        <h2 className="sec-title reveal">Technologies I work with</h2>
        <p className="sec-sub reveal">The tools I use for security testing and building web projects.</p>
        <div className="skills-grid">
          {CONFIG.skills.map((s, i) => (
            <div className="skill-card reveal" key={i}>
              <h3><span className="ico"><Icon name={s.icon} /></span>{s.group}</h3>
              <div className="chips">{s.items.map((it, j) => <span className="chip" key={j}>{it}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
