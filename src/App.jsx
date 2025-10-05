import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    let timeoutId = null
    function onScroll() {
      // show while scrolling
      setNavVisible(true)
      if (timeoutId) clearTimeout(timeoutId)
      // hide shortly after the user stops scrolling
      timeoutId = setTimeout(() => setNavVisible(false), 900)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="app">
      <header className="hero">
        <div className="container hero-grid">

          <nav className={`topnav ${navVisible ? 'visible' : 'hidden'}`} aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
            <a href="#projects">Projects</a>
          </nav>

          <div className="hero-content">
            <h1 className="name"><span className="first">Sakti</span> Pardano.<span className="role">UI/UX Designer</span></h1>
            <p className="lead">I craft <span className="chip blue">UI Design</span> based on Research and <span className="chip yellow">User Experience</span> and transform it into <span className="chip red">Coded UI</span>.</p>
            <p className="actions"><a href="#contact" className="btn">Get in touch</a></p>
          </div>

          <div className="hero-media" aria-hidden>
            <span className="circle large" />
            <span className="circle small" />
            <img src="./uiux.png" alt="Hero illustration" className="hero-img" />
          </div>
          
        </div>
      </header>

      <section id="about" className="about container">
        <div className="about-grid">
          <div className="about-left">
            <h2>About Me</h2>
            <p>I'm a UI/UX designer passionate about making technology feel simple and human. I design user flows, wireframes and prototypes — and ship interfaces with clean, accessible code.</p>
          </div>
          <div className="about-right" aria-hidden>
            <img src="spardano-portfolio/persona.png" alt="Pena illustration" className="about-img" />
          </div>
        </div>
      </section>

      <section className="services full-bleed">
        <div className="services-inner container">
          <h2>What do I help</h2>
          <div className="cards">
            <article className="service">
              <div className="icon">🖥️</div>
              <h3>UI/UX Designer</h3>
              <p>Researching user behavior through journey mapping and designing end-to-end solutions. From user flows, wireframes, and mockups to high-fidelity designs. Conducting usability testing and A/B testing to validate and refine experiences.</p>
            </article>

            <article className="service">
              <div className="icon">&lt;/&gt;</div>
              <h3>Coded UI</h3>
              <p>Translating UI designs into clean, organized, and scalable code. Ensuring the implementation stays consistent with design guidelines while maintaining readability and performance.</p>
            </article>

            <article className="service">
              <div className="icon">✏️</div>
              <h3>Illustration</h3>
              <p>Designing and illustrating characters, objects, and environments that enrich app and game experiences, transforming ideas into engaging, visually appealing worlds that enhance storytelling, interactivity, and user immersion through creative visual design.</p>
            </article>

          </div>
        </div>
      </section>

      <section id="journal" className="journey container">

        <img className='personafeet' src="spardano-portfolio/persona-feet.png" alt="persona-feet" />

        <h2>More about my journey and skills</h2>
        <p className="subtitle">I've come a long way to get to this point — here are a few milestones.</p>

        <div className="timeline">
          <div className="track" />
          <div className="nodes">
            <div className="node" />
            <div className="node" />
            <div className="node" />
            <div className="node" />
          </div>

          <div className="milestones">
            <div className="milestone">
              <h4>Bachelor of Computer Science</h4>
              <p className="muted">State Islamic University of Sultan Syarif Kasim Riau</p>
              <p className="date">2013 — 2019</p>
            </div>

            <div className="milestone">
              <h4>Internship</h4>
              <p className="muted">Junior Developer at The Big Rich Group</p>
              <p className="date">2020</p>
            </div>

            <div className="milestone">
              <h4>Full Stack Developer</h4>
              <p className="muted">Dinas Komunikasi dan Informatik Bukittinggi</p>
              <p className="date">2021 — 2024</p>
            </div>

            <div className="milestone">
              <h4>Learner</h4>
              <p className="muted">Apple Developer Academy Batam</p>
              <p className="date">2025 — present</p>
            </div>
          </div>
        </div>

        <div className="skill-columns">
          <div>
            <h5>Tools</h5>
            <ul>
              <li>Figma</li>
              <li>Sketch</li>
              <li>SwiftUI</li>
              <li>Flutter</li>
              <li>AI</li>
            </ul>
          </div>

          <div>
            <h5>Key Strength</h5>
            <ul>
              <li>UX Research</li>
              <li>User Journey Map</li>
              <li>UI Design</li>
              <li>Prototyping</li>
              <li>Coded UI</li>
            </ul>
          </div>

          <div>
            <h5>Soft Skills</h5>
            <ul>
              <li>Empathy</li>
              <li>Critical Thinking</li>
              <li>Communication</li>
              <li>Attention to Detail</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects container">
        <h2>Highlighted Design Projects</h2>
        <p className="projects-sub">Projects that I am involved in designing UI/UX and Coded UI Design Project</p>

        <div className="project-list">
          <article className="project-card">
            <div className="project-media">
              <img src="spardano-portfolio/vocality.jpg" alt="Vocality screens" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">📱</div>
                <h3>VOCALITY</h3>
              </div>
              <h4 className="project-title">Keep the user engage with the practice and let the user know their improvement</h4>
              <p className="project-desc">Vocality is an app that helps users practice their speaking daily. I worked on the interaction and visual design to make practicing motivating and clear.</p>
              <div className="project-cta"><a href="#" className="btn outline">View case study</a></div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <img src="spardano-portfolio/comano.jpg" alt="Comano" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">💠</div>
                <h3>COMANO</h3>
              </div>
              <h4 className="project-title">Redesign the app to become more intuitive and easy to navigate</h4>
              <p className="project-desc">An app that helps users evaluate their hand-gesture using macOS platform. I redesigned flows and visuals for better discoverability.</p>
              <div className="project-cta"><a href="#" className="btn outline">View case study</a></div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-media">
              <img src="spardano-portfolio/travelgo.jpg" alt="TravelGO" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">🌍</div>
                <h3>TravelGO</h3>
              </div>
              <h4 className="project-title">Building my first app that i design from scratch</h4>
              <p className="project-desc">This is my first attempt at building a travel app from scratch. I owned the UX and UI and implemented the front-end screens.</p>
              <div className="project-cta"><a href="#" className="btn outline">View case study</a></div>
            </div>
          </article>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>
            <h3>Get in touch</h3>
            <p>Batam, Indonesia</p>
            <p><a href="mailto:sakti.pardano29@gmail.com">sakti.pardano29@gmail.com</a></p>
          </div>
          <div className="footer-nav">
            <nav>
              <a href="#">About</a>
              <a href="#">Works</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
