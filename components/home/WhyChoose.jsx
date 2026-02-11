import React from 'react'

export default function WhyChoose() {
  return (
    <section id="why-choose-section" className="features">
      <h2 className="section-title">Why Choose Seedlore EDU?</h2>

      {/* ORIGINAL 3 CARDS (unchanged) */}
      <div className="features-grid">
        <article tabIndex="0" role="group" aria-labelledby="card-1-title" className="card">
          <div className="thumbnail">
            <img
              src="https://images.pexels.com/photos/7869091/pexels-photo-7869091.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="A child working on a DIY robotics project with wires and wheels, showcasing innovation and creativity"
            />
          </div>
          <div className="icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
              />
            </svg>
          </div>
          <h3 id="card-1-title" className="headline">Real Tech Skills</h3>
          <p className="support">
            Structured robotics, AI, and coding programs aligned with NEP 2020 and ICSE, CBSE & ISC curricula.
Strengthen conceptual understanding while encouraging innovation, creativity,problem-solving confidence.

          </p>
        </article>

        <article tabIndex="0" role="group" aria-labelledby="card-2-title" className="card">
          <div className="thumbnail">
            <img
   src="/images/Handson-hero.jpg"
alt="Hands on Robotics"

            />
          </div>
          <div className="icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" />
              </g>
            </svg>
          </div>
          <h3 id="card-2-title" className="headline">Hands-on Projects</h3>
          <p className="support">
            Every learner gets a dedicated DIY kit to practice projects, plus Seedlore LMS access with notes, quizzes, progress tracking, and course-completion certificates. Outcomes kids can show off.
          </p>
        </article>

        <article tabIndex="0" role="group" aria-labelledby="card-3-title" className="card">
          <div className="thumbnail">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500"
alt="Close-up of robotics kit and microcontroller setup for hands-on STEM learning"
            />
          </div>
          <div className="icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
              />
            </svg>
          </div>
          <h3 id="card-3-title" className="headline">Expert Mentors</h3>
          <p className="support">
            Certified educators deliver engaging, structured sessions with regular feedback reviews, milestone tracking, and guided mentorship—ensuring learning remains effective, safe, measurable, and growth-focused.
          </p>
        </article>
      </div>

      {/* Progress Path (LMS button beside Learn) */}
      <div className="progress-path">
        <h3 className="panel-title">Progress Path</h3>

        <div className="milestone-row" aria-label="Learning progression path">
          <div className="milestone milestone--learn">
            <span className="milestone-icon">📚</span>
            <span className="milestone-text">Learn</span>
            <a
              className="btn btn-primary btn-sm milestone-lms-btn"
              href="https://seedlore.4edu.live/"
              target="_blank"
              rel="noreferrer"
            >
              Open Seedlore LMS
            </a>
          </div>

          <div className="milestone">
            <span className="milestone-icon">🔨</span>
            <span className="milestone-text">Build</span>
          </div>

          <div className="milestone">
            <span className="milestone-icon">🏆</span>
            <span className="milestone-text">Compete</span>
          </div>

          <div className="milestone">
            <span className="milestone-icon">✨</span>
            <span className="milestone-text">Showcase</span>
          </div>
        </div>

        <p className="panel-description">
          Clear milestones and playful badges for every level. Each course includes bite-sized lessons, hands-on labs,
          and a capstone so students see measurable growth.
        </p>
      </div>
    </section>
  )
}
