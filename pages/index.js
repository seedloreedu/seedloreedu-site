import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Ambitious Creamy Chinchilla</title>
          <meta property="og:title" content="Ambitious Creamy Chinchilla" />
          <link
            rel="canonical"
            href="https://ambitious-creamy-chinchilla-fullu1.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <div className="home-container11">
          <div className="home-container12">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.card, .card:hover, .card:focus {
  transform: none;
}
.media-card video {
  animation: none;
}
.badge {
  animation: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section id="hero-section" className="hero">
          <div className="hero-copy">
            <h1 className="home-hero-title hero-title">
              Empowering Kids with Robotics, AI &amp; Coding
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              {' '}
              Hands-on learning programs for ages 6–16 designed to build
              real-world tech skills.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-group">
              <button className="btn btn-primary btn-lg">
                Explore Courses
              </button>
              <button className="btn btn-lg btn-secondary">
                Book Free Trial Class
              </button>
            </div>
          </div>
          <div className="hero-media">
            <div className="media-card">
              <video
                autoPlay="true"
                loop="true"
                muted="true"
                playsInline="true"
                aria-label="Students learning robotics and coding in an engaging classroom environment"
                src="https://videos.pexels.com/video-files/7730022/7730022-hd_720_1280_25fps.mp4"
              ></video>
              <div
                role="img"
                aria-label="Ages 6 to 16"
                className="badge badge-1"
              >
                <span>Ages 6–16</span>
              </div>
              <div
                role="img"
                aria-label="Hands-on learning"
                className="badge badge-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6-4v2m-3 8v9m6-9v9M5 16l4-2m6 0l4 2M9 18h6M10 8v.01M14 8v.01"
                  ></path>
                </svg>
                <span>Hands-on</span>
              </div>
            </div>
          </div>
        </section>
        <section id="why-choose-section" className="features">
          <h2 className="section-title">Why Choose Seedlore EDU?</h2>
          <div className="features-grid">
            <article
              tabindex="0"
              role="group"
              aria-labelledby="card-1-title"
              className="card"
            >
              <div className="thumbnail">
                <img
                  src="https://images.pexels.com/photos/7869091/pexels-photo-7869091.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A child working on a DIY robotics project with wires and wheels, showcasing innovation and creativity"
                />
              </div>
              <div className="icon-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                  ></path>
                </svg>
              </div>
              <h3 id="card-1-title" className="headline">
                Real Tech Skills
              </h3>
              <p className="support">
                {' '}
                Bright, playful classes that teach real tech skills — robotics,
                AI, and coding designed for curious kids.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </article>
            <article
              tabindex="0"
              role="group"
              aria-labelledby="card-2-title"
              className="card"
            >
              <div className="thumbnail">
                <img
                  src="https://images.pexels.com/photos/7868892/pexels-photo-7868892.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Children collaborating on a robotics project, showcasing teamwork and STEM learning indoors"
                />
              </div>
              <div className="icon-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </g>
                </svg>
              </div>
              <h3 id="card-2-title" className="headline">
                Hands-on Projects
              </h3>
              <p className="support">
                {' '}
                Build bots, train mini AI, and launch apps — outcomes kids can
                show off and parents can trust.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </article>
            <article
              tabindex="0"
              role="group"
              aria-labelledby="card-3-title"
              className="card"
            >
              <div className="thumbnail">
                <img
                  src="https://images.pexels.com/photos/7869077/pexels-photo-7869077.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Smiling student holds robotics project during a hands-on STEM activity in the classroom"
                />
              </div>
              <div className="icon-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  ></path>
                </svg>
              </div>
              <h3 id="card-3-title" className="headline">
                Expert Mentors
              </h3>
              <p className="support">
                {' '}
                Certified educators who make learning fun, safe, and deeply
                effective with tiny-class joy.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </article>
          </div>
        </section>
        <section id="courses-section" className="courses-overview">
          <div className="courses-container">
            <h2 className="section-title">Courses Overview</h2>
            <div className="courses-layout">
              <div className="courses-cards">
                <article
                  role="button"
                  tabindex="0"
                  aria-labelledby="course-1-title"
                  aria-describedby="course-1-focus"
                  className="course-card"
                >
                  <div className="course-content">
                    <div className="course-header">
                      <h3 id="course-1-title" className="course-title">
                        Starter Sprouts
                      </h3>
                      <span className="age-badge">Ages 6–8</span>
                    </div>
                    <ul id="course-1-focus" className="focus-bullets">
                      <li>
                        <span>Block coding &amp; simple robotics kits</span>
                      </li>
                      <li>
                        <span>Foundational computational thinking</span>
                      </li>
                      <li>
                        <span>Teamwork &amp; hands-on tinkering</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    aria-label="Enroll in Starter Sprouts"
                    className="btn btn-primary btn-sm"
                  >
                    {' '}
                    Enroll
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
                <article
                  role="button"
                  tabindex="0"
                  aria-labelledby="course-2-title"
                  aria-describedby="course-2-focus"
                  className="course-card"
                >
                  <div className="course-content">
                    <div className="course-header">
                      <h3 id="course-2-title" className="course-title">
                        Growth Garden
                      </h3>
                      <span className="age-badge">Ages 9–11</span>
                    </div>
                    <ul id="course-2-focus" className="focus-bullets">
                      <li>
                        <span>
                          Python-lite coding &amp; sensor-driven robots
                        </span>
                      </li>
                      <li>
                        <span>Problem-solving workflows &amp; debugging</span>
                      </li>
                      <li>
                        <span>Collaborative design projects</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    aria-label="Enroll in Growth Garden"
                    className="btn btn-primary btn-sm"
                  >
                    {' '}
                    Enroll
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
                <article
                  role="button"
                  tabindex="0"
                  aria-labelledby="course-3-title"
                  aria-describedby="course-3-focus"
                  className="course-card"
                >
                  <div className="course-content">
                    <div className="course-header">
                      <h3 id="course-3-title" className="course-title">
                        Tech Tree
                      </h3>
                      <span className="age-badge">Ages 12–14</span>
                    </div>
                    <ul id="course-3-focus" className="focus-bullets">
                      <li>
                        <span>Python, microcontrollers &amp; applied AI</span>
                      </li>
                      <li>
                        <span>Building autonomous bots</span>
                      </li>
                      <li>
                        <span>Portfolio-ready creations</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    aria-label="Enroll in Tech Tree"
                    className="btn btn-primary btn-sm"
                  >
                    {' '}
                    Enroll
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
                <article
                  role="button"
                  tabindex="0"
                  aria-labelledby="course-4-title"
                  aria-describedby="course-4-focus"
                  className="course-card"
                >
                  <div className="course-content">
                    <div className="course-header">
                      <h3 id="course-4-title" className="course-title">
                        Trailblazer Lab
                      </h3>
                      <span className="age-badge">Ages 15–16</span>
                    </div>
                    <ul id="course-4-focus" className="focus-bullets">
                      <li>
                        <span>Machine learning &amp; robotics systems</span>
                      </li>
                      <li>
                        <span>Real-world capstone projects</span>
                      </li>
                      <li>
                        <span>College &amp; competitive prep</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    aria-label="Enroll in Trailblazer Lab"
                    className="btn btn-primary btn-sm"
                  >
                    {' '}
                    Enroll
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
              </div>
              <div className="progression-panel">
                <h3 className="panel-title">Progression Path</h3>
                <div className="milestone-list">
                  <div className="milestone">
                    <span className="milestone-icon">📚</span>
                    <span className="milestone-text">Learn</span>
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
                  {' '}
                  Clear milestones and playful badges for every level. Each
                  course includes bite-sized lessons, hands-on labs, and a
                  capstone so students see measurable growth.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="onboarding-section" className="onboard">
          <div className="video-pane">
            <div className="video-wrapper">
              <video
                autoPlay="true"
                loop="true"
                muted="true"
                playsInline="true"
                aria-label="Preview of students engaging in robotics and coding activities"
                src="https://videos.pexels.com/video-files/7730014/7730014-hd_720_1280_25fps.mp4"
              ></video>
              <div className="caption-bar">
                <p>Watch students explore robotics, AI &amp; coding</p>
              </div>
            </div>
          </div>
          <div className="steps-pane">
            <h2 className="section-title">Ready, Set, Explore!</h2>
            <div className="steps">
              <div className="step-card">
                <div className="step-badge">
                  <span>1</span>
                </div>
                <div className="step-content">
                  <h4 className="step-heading">Pick a Path</h4>
                  <p className="step-body">
                    Clear, age-grouped options make choice easy.
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-badge">
                  <span>2</span>
                </div>
                <div className="step-content">
                  <h4 className="step-heading">Try Before You Commit</h4>
                  <p className="step-body">
                    Book a free trial class with one click.
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-badge">
                  <span>3</span>
                </div>
                <div className="step-content">
                  <h4 className="step-heading">Get a Tailored Plan</h4>
                  <p className="step-body">
                    {' '}
                    Suggested learning track based on your child&apos;s
                    interests.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-badge">
                  <span>4</span>
                </div>
                <div className="step-content">
                  <h4 className="step-heading">Enroll Confidently</h4>
                  <p className="step-body">
                    {' '}
                    Simple enrollment with instant access to materials.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="action-row">
              <button
                aria-label="Explore all available courses"
                className="btn btn-primary"
              >
                {' '}
                Explore Courses
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="Book a free trial class"
                className="btn btn-outline"
              >
                {' '}
                Book Free Trial
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </section>
        <section id="testimonials-section" className="testimonials">
          <div className="testimonials-container">
            <h2 className="section-title">What Families Are Saying</h2>
            <div className="carousel">
              <article className="testimonial-card featured">
                <div className="video-thumbnail">
                  <img
                    src="https://images.pexels.com/photos/7869084/pexels-photo-7869084.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Group of kids working on robotics project, engaging in STEM education"
                  />
                  <button
                    aria-label="Play testimonial video: Ethan's autonomous car project"
                    className="play-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p className="testimonial-text">
                  {' '}
                  Watch 12-year-old Ethan explain his autonomous car project,
                  from idea sketch to code demo — proud, playful, and
                  professional.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </article>
              <article className="testimonial-card">
                <p className="testimonial-text">
                  {' '}
                  &quot;My daughter built a walking robot in her first month —
                  and now she explains AI to the whole family with confidence.
                  Seedlore EDU made learning feel like playtime with
                  purpose.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="attribution">
                  <strong>Priya R.</strong>
                  <span>
                    {' '}
                    , Parent
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </article>
              <article className="testimonial-card">
                <p className="testimonial-text">
                  {' '}
                  &quot;From zero to coding a game: Seedlore&apos;s hands-on
                  labs and cheerful mentors turned curiosity into
                  accomplishment. My son&apos;s teacher says his problem-solving
                  has leveled up.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="attribution">
                  <strong>Marco L.</strong>
                  <span>
                    {' '}
                    , Parent
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </article>
              <article className="testimonial-card">
                <p className="testimonial-text">
                  {' '}
                  &quot;I joined the robotics club and won our school fair! The
                  projects are fun but smart — we actually learn how things
                  work, not just follow instructions.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="attribution">
                  <strong>Aisha</strong>
                  <span>
                    {' '}
                    , Student (age 14)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </article>
              <article className="testimonial-card">
                <p className="testimonial-text">
                  {' '}
                  &quot;The instructors cheer on every small win and turn
                  mistakes into experiments. My daughter&apos;s enthusiasm for
                  STEM is contagious — she&apos;s already planning her next
                  project.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="attribution">
                  <strong>Megan T.</strong>
                  <span>
                    {' '}
                    , Parent
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </article>
              <article className="testimonial-card featured">
                <div className="video-thumbnail">
                  <img
                    src="https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Diverse teenagers collaboratively working on a robotics project in a workshop"
                  />
                  <button
                    aria-label="Play testimonial video: Classroom sprint with drone prototyping"
                    className="play-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p className="testimonial-text">
                  {' '}
                  See a classroom sprint where teams prototype drones in one
                  week — laughter, high-fives, and real engineering outcomes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="news-section" className="news-section">
          <div className="feature-stream">
            <h2 className="section-title">News &amp; Updates</h2>
            <div className="feature-grid">
              <article
                aria-labelledby="news-1-title"
                className="news-card feature-primary"
              >
                <img
                  src="https://images.pexels.com/photos/7869034/pexels-photo-7869034.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A child actively assembling a robotics project with electronic components, showcasing technology education"
                />
                <div className="news-content">
                  <span className="news-tag">New Course</span>
                  <h3 id="news-1-title" className="news-title">
                    {' '}
                    Robotics Starter Lab for Ages 6–8
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="news-excerpt">
                    {' '}
                    Our playful, project-first curriculum expands with a new lab
                    for younger builders. Enrollments open now!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <time datetime="2025-01-15">January 15, 2025</time>
                </div>
              </article>
              <article aria-labelledby="news-2-title" className="news-card">
                <img
                  src="https://images.pexels.com/photos/7869229/pexels-photo-7869229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Group of diverse kids collaborating on a 3D printing project using a laptop and other devices"
                />
                <div className="news-content">
                  <span className="news-tag">Program</span>
                  <h3 id="news-2-title" className="news-title">
                    AI for Young Thinkers
                  </h3>
                  <p className="news-excerpt">
                    {' '}
                    Intro course teaching core AI ideas through games and
                    storytelling.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <time datetime="2025-01-20">January 20, 2025</time>
                </div>
              </article>
              <article aria-labelledby="news-3-title" className="news-card">
                <img
                  src="https://images.pexels.com/photos/7868835/pexels-photo-7868835.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Young boy engaged in assembling a robotic toy car, showcasing early interest in STEM education"
                />
                <div className="news-content">
                  <span className="news-tag">Event</span>
                  <h3 id="news-3-title" className="news-title">
                    Weekend MakerFest
                  </h3>
                  <p className="news-excerpt">
                    {' '}
                    A family-friendly day of coding sprints and robot battles.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <time datetime="2025-02-10">February 10, 2025</time>
                </div>
              </article>
              <article aria-labelledby="news-4-title" className="news-card">
                <img
                  src="https://images.pexels.com/photos/7869134/pexels-photo-7869134.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Children working on a robotics project in a classroom setting, exploring technology and creativity"
                />
                <div className="news-content">
                  <span className="news-tag">Scholarship</span>
                  <h3 id="news-4-title" className="news-title">
                    Bright Sparks Awards
                  </h3>
                  <p className="news-excerpt">
                    {' '}
                    Need-based scholarships for high-potential learners.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <time datetime="2025-02-01">February 1, 2025</time>
                </div>
              </article>
            </div>
          </div>
          <aside className="news-sidebar">
            <h3 className="sidebar-title">Quick Updates</h3>
            <div className="brief-list">
              <div className="brief-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
                <div>
                  <strong>Project Portfolios</strong>
                  <p>Now included in every course</p>
                </div>
              </div>
              <div className="brief-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </g>
                </svg>
                <div>
                  <strong>New Lead Instructor</strong>
                  <p>Welcome Maya Patel, AI Expert</p>
                </div>
              </div>
              <div className="brief-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </g>
                </svg>
                <div>
                  <strong>Remote-Friendly Kits</strong>
                  <p>Ships within 48 hours</p>
                </div>
              </div>
            </div>
            <div className="signup-cta">
              <p>
                {' '}
                Sign up for quick alerts to receive first access to trials,
                events, and scholarship deadlines.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Sign up for newsletter"
                className="btn btn-primary"
              >
                {' '}
                Stay Connected
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </aside>
        </section>
        <section
          id="faq-section"
          aria-labelledby="faq-heading"
          className="faq-section"
        >
          <div className="faq-container">
            <div className="faq-header">
              <h2 id="faq-heading" className="section-title">
                Frequently Asked Questions
              </h2>
              <div className="search-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </g>
                </svg>
                <input
                  type="search"
                  id="faq-search"
                  placeholder="Search questions..."
                  aria-label="Search frequently asked questions"
                />
              </div>
            </div>
            <div role="tablist" className="tabs-row">
              <button
                role="tab"
                aria-selected="true"
                aria-controls="tab-general"
                id="tab-btn-general"
                className="tab-button active"
              >
                {' '}
                General
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="tab-enrollment"
                id="tab-btn-enrollment"
                className="tab-button"
              >
                {' '}
                Enrollment
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="tab-learning"
                id="tab-btn-learning"
                className="tab-button"
              >
                {' '}
                Learning
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="tab-support"
                id="tab-btn-support"
                className="tab-button"
              >
                {' '}
                Support
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="faq-content">
              <div
                role="tabpanel"
                id="tab-general"
                aria-labelledby="tab-btn-general"
                className="featured-card"
              >
                <h3 className="faq-question">
                  What ages do your programs serve?
                </h3>
                <p className="faq-answer">
                  {' '}
                  Seedlore EDU offers hands-on Robotics, AI, and Coding programs
                  for kids aged 6–16, organized by age and experience to ensure
                  engaging, age-appropriate learning. Our curriculum includes
                  Starter Sprouts (6–8), Growth Garden (9–11), Tech Tree
                  (12–14), and Trailblazer Lab (15–16).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <h3 className="faq-question">How are classes structured?</h3>
                <p className="faq-answer">
                  {' '}
                  Classes blend playful projects with skill-building lessons:
                  weekly 60–90 minute sessions, small groups (typically 6–10
                  students), and guided projects that students build across
                  multiple classes. Each session balances instruction, hands-on
                  building time, and collaborative challenges.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <h3 className="faq-question">
                  Do you provide beginner-friendly pathways?
                </h3>
                <p className="faq-answer">
                  {' '}
                  Yes! Our Beginner Path introduces core logic, block coding,
                  and basic robotics through playful challenges, then advances
                  to text coding and AI concepts as students progress. No prior
                  experience is required.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <h3 className="faq-question">
                  What is the student-to-instructor ratio?
                </h3>
                <p className="faq-answer">
                  {' '}
                  We maintain low ratios (usually 1:6 to 1:8) so each child
                  receives individualized coaching, fast feedback, and stretch
                  challenges when ready. This ensures every student gets the
                  attention they need to thrive.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <aside className="quick-qs">
                <h3 className="sidebar-title">Popular Questions</h3>
                <div className="quick-q-list">
                  <button className="quick-q-item">
                    {' '}
                    Can my child try a class before enrolling?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="quick-q-item">
                    What equipment is required?
                  </button>
                  <button className="quick-q-item">
                    How do you measure progress?
                  </button>
                  <button className="quick-q-item">
                    Do you offer scholarships?
                  </button>
                  <button className="quick-q-item">
                    How flexible are schedules?
                  </button>
                  <button className="quick-q-item">
                    Who teaches the classes?
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <div className="home-container16">
          <div className="home-container17">
            <Script
              html={`<style>
        @keyframes slideInBounce {0% {opacity: 0;
transform: translateY(30px);}
60% {opacity: 1;
transform: translateY(-5px);}
100% {transform: translateY(0);}}@keyframes floatIn {0% {opacity: 0;
transform: translateX(50px) scale(0.9);}
100% {opacity: 1;
transform: translateX(0) scale(1);}}@keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-6px);}}@keyframes elasticIn {0% {opacity: 0;
transform: scale(0.96);}
50% {transform: scale(1.02);}
100% {opacity: 1;
transform: scale(1);}}@keyframes popIn {0% {transform: scale(0);}
50% {transform: scale(1.1);}
100% {transform: scale(1);}}@keyframes fadeSlideIn {0% {opacity: 0;
transform: translateY(8px);}
100% {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container18">
          <div className="home-container19">
            <Script
              html={`<script defer data-name="homepage-interactions">
(function(){
  // FAQ Tab switching
  const tabButtons = document.querySelectorAll(".tab-button")
  const featuredCard = document.getElementById("tab-general")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active state from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })

      // Add active state to clicked button
      button.classList.add("active")
      button.setAttribute("aria-selected", "true")

      // Simple fade effect for content (could be expanded with more tabpanels)
      featuredCard.style.opacity = "0"
      setTimeout(() => {
        featuredCard.style.opacity = "1"
      }, 150)
    })
  })

  // FAQ Quick Questions
  const quickQItems = document.querySelectorAll(".quick-q-item")
  const faqSearch = document.getElementById("faq-search")

  quickQItems.forEach((item) => {
    item.addEventListener("click", () => {
      const questionText = item.textContent
      if (faqSearch) {
        faqSearch.value = questionText
        faqSearch.focus()
      }
    })
  })

  // Course card interactions
  const courseCards = document.querySelectorAll(".course-card")

  courseCards.forEach((card) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        const enrollBtn = card.querySelector(".btn")
        if (enrollBtn) {
          enrollBtn.click()
        }
      }
    })
  })

  // Video play button interactions
  const playButtons = document.querySelectorAll(".play-button")

  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".testimonial-card")
      const videoThumb = button.closest(".video-thumbnail")

      // Add pulse effect
      button.style.transform = "translate(-50%, -50%) scale(1.2)"
      setTimeout(() => {
        button.style.transform = "translate(-50%, -50%) scale(1)"
      }, 200)

      // In a real implementation, this would open a video modal
      console.log("Play video testimonial")
    })
  })

  // Carousel scroll snap behavior enhancement
  const carousel = document.querySelector(".carousel")
  if (carousel) {
    let isScrolling

    carousel.addEventListener("scroll", () => {
      window.clearTimeout(isScrolling)

      isScrolling = setTimeout(() => {
        // Scroll finished - could add analytics or other behaviors
      }, 150)
    })
  }

  // Hero CTA button enhancements
  const ctaButtons = document.querySelectorAll(".cta-group .btn")
  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Add ripple effect on click
      const ripple = document.createElement("span")
      ripple.style.position = "absolute"
      ripple.style.borderRadius = "50%"
      ripple.style.background = "rgba(255, 255, 255, 0.6)"
      ripple.style.width = "20px"
      ripple.style.height = "20px"
      ripple.style.pointerEvents = "none"
      ripple.style.opacity = "1"

      const rect = btn.getBoundingClientRect()
      ripple.style.left = e.clientX - rect.left - 10 + "px"
      ripple.style.top = e.clientY - rect.top - 10 + "px"

      btn.style.position = "relative"
      btn.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe cards and sections for entrance animations
  const animatedElements = document.querySelectorAll(
    ".card, .course-card, .testimonial-card, .news-card"
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
       
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container11 {
            display: none;
          }
          .home-container12 {
            display: contents;
          }
          .home-container16 {
            display: none;
          }
          .home-container17 {
            display: contents;
          }
          .home-container18 {
            display: none;
          }
          .home-container19 {
            display: contents;
          }
          .home-container20 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon41 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text48 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
