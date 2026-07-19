import './App.css'
import profilePhoto from './assets/profile.jpg'

function App() {
  return (
    <>
      <nav className="navbar fixed-top top-nav">
        <div className="container">

          <a className="navbar-brand logo" href="#top">
            BC Portfolio
          </a>

          <ul className="navbar-nav ms-auto nav-links">

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#process">
                Process
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container">
          <div className="hero-box">

            <p className="small-title">SEG3125 Portfolio</p>
            <h1>Benjamin Colasante</h1>

            <p className="hero-text">
              A collection of four interface design projects created for my UI
              design course, from early concepts to finished interactive experiences.
            </p>

            <div className="hero-buttons">

              <a className="btn btn-primary btn-lg" href="#projects">
                View projects
              </a>

              <a className="btn btn-light btn-lg" href="#about">
                About me
              </a>

            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="page-section">
          <div className="container">
            <div className="row about-row">
              <div className="col-md-4">

                <img className="profile-photo" src={profilePhoto} alt="Benjamin Colasante"/>

              </div>
              <div className="col-md-8">
                <p className="small-title">About Me</p>
                <h2>Who I am</h2>
                <div className="about-text">
                  <p>
                    I am a second-year Software Engineering student at the University
                    of Ottawa who enjoys building software that is useful
                    and easy to understand. I like solving real-world problems,
                    learning new technologies, and turning ideas into applications that
                    people can actually use.
                  </p>
                  <p>
                    My main interests are full-stack development, user interface
                    design, software testing, and collaborative software projects. I
                    have worked with Python, Java, JavaScript, TypeScript, React,
                    Spring Boot, MySQL, PostgreSQL, HTML, CSS, Git, Azure DevOps, and
                    .NET.
                  </p>
                  <p>
                    I enjoy both the creative and technical sides of development, such as
                    designing clean layouts, connecting frontend and backend systems,
                    improving code quality, and figuring out how different parts of an
                    application fit together.
                  </p>
                  <p>
                    Outside of coursework, I like working on projects with other
                    students and exploring tools that make development more effective.
                    I am also a cofounder of SimuOttawa, where students collaborate on
                    technical projects, practice using Git and GitHub, and learn how to
                    work in a more professional development environment.
                  </p>
                </div>
                <div className="skills">
                  <span>Full-stack development</span>
                  <span>React</span>
                  <span>Spring Boot</span>
                  <span>Software testing</span>
                  <span>Team collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="page-section light-section">
          <div className="container">
            <div className="process">
              <div className="process-text">
                <p className="small-title">How I Work</p>
                <h2>My design process</h2>

                <a
                  className="btn btn-outline-primary mt-4"
                  href="https://www.nngroup.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Course reference
                </a>
              </div>

              <div className="process-boxes">
                <div className="steps">
                  <div className="step">
                    <span>1</span>
                    <h3>Understand</h3>
                    <p>Start with the goal, audience, and main task. Seek clarification when needed.</p>
                  </div>

                  <div className="step">
                    <span>2</span>
                    <h3>Organize</h3>
                    <p>Make the most important content stand out using size, color, hierarchy, and spacing.</p>
                  </div>

                  <div className="step">
                    <span>3</span>
                    <h3>Improve</h3>
                    <p>Test the layout, fix confusing areas, and polish the interface so it feels easy to use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="page-section">
          <div className="container">
            <p className="small-title">Case Studies</p>
            <div className="section-title">
              <h2>My designs</h2>
            </div>
            <div className="projects">
              <div className="project">
                <img
                  src="/case-studies/service.png"
                  alt="Bark & Brush dog-grooming website hero"
                />
                <div className="project-info">
                  <p className="project-label">Design 1</p>
                  <h3>Bark & Brush</h3>
                  <p>A friendly dog-grooming service site with clear packages, care guidance, and online booking.</p>
                  <a
                    className="btn btn-primary"
                    href="https://seg-3125-pet-grooming-service-site.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Bark & Brush
                </a>
                </div>
              </div>

              <div className="project">
                <img
                  src="/case-studies/memory.png"
                  alt="Trail Tracker sequence memory game with an active tile grid"
                />
                <div className="project-info">
                  <p className="project-label">Design 2</p>
                  <h3>Trail Tracker</h3>
                  <p>A customizable sequence-memory game with three difficulties, visual themes, and play modes.</p>
                  <a
                    className="btn btn-primary"
                    href="https://seg-3125-memory-game.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Play Trail Tracker
                  </a>
                </div>
              </div>

              <div className="project">
                <img
                  src="/case-studies/commerce.png"
                  alt="DeskNest e-commerce website homepage"
                />
                <div className="project-info">
                  <p className="project-label">Design 3</p>
                  <h3>DeskNest</h3>
                  <p>A calm shopping experience for ergonomic desk essentials, with product discovery and checkout.</p>
                  <a
                    className="btn btn-primary"
                    href="https://seg-3125-e-commerce-site.vercel.app/#/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shop DeskNest
                  </a>
                </div>
              </div>

              <div className="project">
                <img
                  src="/case-studies/analytics.png"
                  alt="Produce Pulse analytics dashboard overview"
                />
                <div className="project-info">
                  <p className="project-label">Design 4</p>
                  <h3>Produce Pulse</h3>
                  <p>A bilingual interactive dashboard for comparing Canadian produce prices and trends throughout 2025.</p>
                  <a
                    className="btn btn-primary"
                    href="https://seg-3125-analytics-site.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
