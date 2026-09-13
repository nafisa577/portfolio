import { CONFIG } from '../config'
import Icon from './Icon'

export default function Projects() {
  const f = CONFIG.featured
  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow reveal">Projects</p>
        <h2 className="sec-title reveal">Things I've built</h2>
        <p className="sec-sub reveal">A few things I have built and worked on.</p>

        <div className="feat reveal">
          <div className="feat-in">
            <div className="feat-body">
              <span className="tag">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="tech">{f.tech.map((t, i) => <span key={i}>{t}</span>)}</div>
              <div className="plinks">
                {f.live && <a className="plink" href={f.live} target="_blank" rel="noopener">Live demo <Icon name="ext" /></a>}
                {f.code && <a className="plink" href={f.code} target="_blank" rel="noopener">Source code <Icon name="github" /></a>}
              </div>
            </div>
            <div className="feat-visual">
              <div className="mark">Animal Disease<br />Detection</div>
              <div className="stat">
                {f.stats.map((s, i) => <div key={i}><b>{s[1]}</b> {s[0]}</div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="proj-grid">
          {CONFIG.projects.map((pr, i) => (
            <div className="proj reveal" key={i}>
              <div className="picon"><Icon name={pr.icon} /></div>
              <h3>{pr.title}</h3>
              <p>{pr.desc}</p>
              <div className="tech">{pr.tech.map((t, j) => <span key={j}>{t}</span>)}</div>
              {pr.link && <a className="plink" href={pr.link} target="_blank" rel="noopener">View <Icon name="ext" /></a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
