import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="name"><span className="first">Sakti</span> Pardano.<span className="role">UI/UX Designer</span></h1>
            {/* <p className="hero-note">"I craft <strong>UI Design</strong> based on <strong>User Experience</strong> and transform it into <strong>Coded UI</strong>"</p> */}
            {/* <p className="about-summary">I'm a UI/UX designer passionate about making technology feel simple and human. I combine research, wireframes, prototypes and code to build real products.</p> */}
          </div>
        </div>
         <img src="/hero.png" alt="Pena illustration" className="hero-image" />
      </header>

      <main>
        <section className="what full-bleed">
          <div className="what-inner">
            <h2>What do I help</h2>

            <div className="cards">
              <article className="card">
                <div className="icon-box"><div className="icon">🖥️</div></div>
                <h3>UI/UX Designer</h3>
                <p>Researching user behavior through journey mapping and designing end-to-end solutions. From user flows, wireframes, and mockups to high-fidelity designs. Conducting usability testing and A/B testing to validate and refine experiences.</p>
              </article>

              <article className="card">
                <div className="icon-box"><div className="icon">&lt;/&gt;</div></div>
                <h3>Coded UI</h3>
                <p>Translating UI designs into clean, organized, and scalable code. Ensuring the implementation stays consistent with design guidelines while maintaining readability and performance across devices.</p>
              </article>

              <article className="card">
                <div className="icon-box"><div className="icon">✏️</div></div>
                <h3>Illustration</h3>
                <p>Creating characters, objects, and environments that enhance app and game design, bringing ideas to life through visuals that support storytelling and brand personality.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="journey">
          <div className="journey-inner">
            <h2>More about my journey and skills</h2>
            <p className="journey-sub">I've come a long way to get to this point, there must be for something. right ?</p>

            <div className="timeline">
              <div className="track" />

              <div className="nodes" aria-hidden>
                <span className="node" />
                <span className="node" />
                <span className="node" />
                <span className="node" />
              </div>

              <div className="milestones">
                <div className="milestone">
                  <h3>Bachelor of Computer Science</h3>
                  <p className="muted small">State Islamic University of Sultan Syarif Kasim Riau</p>
                  <p className="date">2013 - 2019</p>
                </div>

                <div className="milestone">
                  <h3>Internship</h3>
                  <p className="muted small">Junior Developer in The Big Rich Group for 3 Month</p>
                  <p className="date">2020</p>
                </div>

                <div className="milestone">
                  <h3>Full Stack Developer</h3>
                  <p className="muted small">At Dinas Komunikasi dan Informatik Bukittinggi</p>
                  <p className="date">2021 - 2024</p>
                </div>

                <div className="milestone">
                  <h3>Learner</h3>
                  <p className="muted small">At Apple Developer Academy Batam</p>
                  <p className="date">2025 - current</p>
                </div>
              </div>
            </div>

            <div className="skill-columns">
              <div>
                <h4>Tools</h4>
                <ul>
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>SwiftUI</li>
                  <li>Flutter</li>
                  <li>AI</li>
                </ul>
              </div>

              <div>
                <h4>Key Strength</h4>
                <ul>
                  <li>Ux Research</li>
                  <li>User Journey Map</li>
                  <li>UI Design</li>
                  <li>Prototyping</li>
                  <li>Coded UI</li>
                </ul>
              </div>

              <div>
                <h4>Sof Skills</h4>
                <ul>
                  <li>Emphatetic</li>
                  <li>Critical Thinking</li>
                  <li>Communication</li>
                  <li>Attention to Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="contact">
        <div className="contact-inner">
          <div>
            <h3>Get In Touch</h3>
            <p>Batam, Indonesia</p>
            <p><a href="mailto:sakti.pardano29@gmail.com">sakti.pardano29@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/spardano" target="_blank" rel="noreferrer">linkedin.com/in/spardano</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
