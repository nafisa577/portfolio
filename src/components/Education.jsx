import Icon from './Icon'

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <p className="eyebrow reveal">Education</p>
        <h2 className="sec-title reveal">Academic background</h2>
        <div className="edu reveal" style={{ marginTop: 32 }}>
          <div className="badge"><Icon name="code" /></div>
          <div>
            <h3>B.Sc. in Computer Science &amp; Engineering</h3>
            <div className="meta">International Islamic University Chittagong (IIUC) &middot; 2022 to 2026</div>
            <p>Thesis: "Automated Animal Disease Detection Using Deep Learning and Image Processing." Coursework across algorithms, machine learning, databases, and software engineering.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
