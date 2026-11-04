import {
  certificates,
  education,
  experience,
  profile,
  projects,
  sideProjects,
  skills,
  type Project,
} from "@/data/portfolio";

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={compact ? "card card-compact" : "card"}>
      <header className="card-head">
        <div>
          <h3>{project.name}</h3>
          <p className="muted">{project.context}</p>
        </div>
        <span className="period">{project.period}</span>
      </header>
      <p className="summary">{project.summary}</p>
      <p className="role">
        <span className="label">Role</span> {project.role}
      </p>
      <ul className="bullets">
        {project.contributions.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <ul className="tags">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className="links">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
            {l.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
      </nav>

      <section className="hero" id="about">
        <p className="eyebrow">{profile.title}</p>
        <h1>{profile.headline}</h1>
        {profile.intro.map((p) => (
          <p key={p} className="intro">
            {p}
          </p>
        ))}
        <div className="links">
          {profile.contacts.map((c) => (
            <a key={c.href} href={c.href} target="_blank" rel="noreferrer">
              {c.label} ↗
            </a>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
        <h3 className="subhead">Side Project</h3>
        <div className="grid">
          {sideProjects.map((p) => (
            <ProjectCard key={p.name} project={p} compact />
          ))}
        </div>
      </section>

      <section id="experience">
        <h2>Experience &amp; Education</h2>
        <ul className="timeline">
          {[...experience, ...education].map((e) => (
            <li key={e.name}>
              <div>
                <strong>{e.name}</strong>
                {e.detail && <p className="muted">{e.detail}</p>}
              </div>
              <span className="period">{e.period}</span>
            </li>
          ))}
          {certificates.map((c) => (
            <li key={c.name}>
              <div>
                <strong>{c.name}</strong>
                <p className="muted">{c.issuer}</p>
              </div>
              <span className="period">{c.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul className="tags">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="muted">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}
