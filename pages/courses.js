import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
//import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Courses = (props) => {
  return (
    <>
      <div className="courses-container10">
        <Head>
          <title>Courses - Ambitious Creamy Chinchilla</title>
          <meta
            property="og:title"
            content="Courses - Ambitious Creamy Chinchilla"
          />
          <link
            rel="canonical"
            href="https://ambitious-creamy-chinchilla-fullu1.teleporthq.app/courses"
          />
        </Head>
        <Navigation></Navigation>
        <div className="courses-container11">
          <div className="courses-container12">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <main id="courses-page">
          <section id="hero-section" className="courses-hero">
            <div className="hero__content">
              <h1 className="courses-hero-title hero-title">
                Courses — Ignite Curiosity, Build Real Skills
              </h1>
              <p className="courses-hero-subtitle hero-subtitle">
                {' '}
                Launch your child into hands-on robotics, AI, and coding tracks
                crafted for ages 6–16.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="section-content">
                {' '}
                Dynamic projects, industry-grade tools, and measurable outcomes
                accelerate problem-solving, creativity, and tech confidence.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="courses-cta-group">
                <button
                  aria-label="Explore all programs"
                  className="btn btn-primary btn-lg"
                >
                  {' '}
                  Explore Programs
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button
                  aria-label="Book a free trial class"
                  className="btn btn-lg btn-secondary"
                >
                  {' '}
                  Book Free Trial Class
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button aria-label="Enroll now" className="btn btn-outline">
                  {' '}
                  Enroll Now
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
              <div className="hero__proof">
                <span className="proof-icon">
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
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                </span>
                <span>
                  {' '}
                  Project-based learning that translates to classroom success,
                  competitive STEM pathways, and early career-ready skills.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__image-container">
                <img
                  src="https://images.pexels.com/photos/7869077/pexels-photo-7869077.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Smiling student holds robotics project during a hands-on STEM activity in the classroom"
                  loading="eager"
                />
                <div className="hero__overlay"></div>
              </div>
              <div className="enrollment-card">
                <div className="enrollment-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </g>
                  </svg>
                </div>
                <h3>Ready to Launch?</h3>
                <p>
                  {' '}
                  Start with a free trial class — hands-on, zero commitment,
                  full excitement.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button
                  aria-label="Get started with free trial"
                  className="btn btn-accent btn-sm"
                >
                  {' '}
                  Get Started
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
          </section>
          <section
            id="age-programs-section"
            role="region"
            aria-labelledby="age-programs-title"
            className="age-section"
          >
            <div className="age-section__header">
              <h2 id="age-programs-title" className="section-title">
                Age-Group Programs
              </h2>
              <p className="section-subtitle">
                {' '}
                Fast-track tech confidence, hands-on and age-tuned
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="cards">
              <article
                aria-label="Program for ages 6 to 8"
                className="courses-card card--lead"
              >
                <div className="card__badge-group">
                  <span className="courses-badge badge--primary">Ages 6–8</span>
                  <span className="courses-badge badge--accent">Beginner</span>
                </div>
                <h3 className="card__title">
                  Playful Robotics &amp; Intro to Coding
                </h3>
                <p className="card__description">
                  {' '}
                  Spark curiosity with colorful bots, block coding, and tactile
                  STEM challenges. Short, active sessions that balance guided
                  discovery and joyful experimentation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card__modules">
                  <h4 className="card__modules-title">Core Modules</h4>
                  <ul className="modules-list">
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        Bot Builders — Simple mechanics and guided robot play
                      </span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        {' '}
                        Story-Coding — Visual programming with interactive
                        stories
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        Sensor Play — Light, motion, and touch sensors
                      </span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        Creative Challenges — Collaborative mini-projects
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card__outcomes">
                  <h4 className="card__outcomes-title">Key Outcomes</h4>
                  <div className="outcomes-tags">
                    <span className="outcome-tag">Basic Logic</span>
                    <span className="outcome-tag">Fine Motor Skills</span>
                    <span className="outcome-tag">Teamwork</span>
                    <span className="outcome-tag">Presentation Skills</span>
                  </div>
                </div>
                <div className="card__schedule">
                  <span className="schedule-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </g>
                    </svg>
                  </span>
                  <span>Weekly rhythm: short, active sessions</span>
                </div>
                <button
                  aria-label="Enroll in Ages 6-8 program"
                  className="btn btn-primary"
                >
                  {' '}
                  Explore Program
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </article>
              <article
                aria-label="Program for ages 9 to 12"
                className="courses-card"
              >
                <div className="card__badge-group">
                  <span className="courses-badge badge--secondary">
                    Ages 9–12
                  </span>
                  <span className="courses-badge badge--accent">
                    Intermediate
                  </span>
                </div>
                <h3 className="card__title">
                  Applied Robotics &amp; Beginner AI
                </h3>
                <p className="card__description">
                  {' '}
                  Level-up to programmable robots, visual AI concepts, and
                  project-based problem solving.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card__modules">
                  <h4 className="card__modules-title">Core Modules</h4>
                  <ul className="modules-list">
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Programmable Platforms</span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Visual AI Labs</span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Electrics &amp; Mechanics</span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Design Sprints</span>
                    </li>
                  </ul>
                </div>
                <div className="card__outcomes">
                  <div className="outcomes-tags">
                    <span className="outcome-tag">Coding Fluency</span>
                    <span className="outcome-tag">AI Fundamentals</span>
                    <span className="outcome-tag">Project Planning</span>
                  </div>
                </div>
                <button
                  aria-label="Enroll in Ages 9-12 program"
                  className="btn btn-primary"
                >
                  {' '}
                  Explore Program
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </article>
              <article
                aria-label="Program for ages 13 to 16"
                className="courses-card"
              >
                <div className="card__badge-group">
                  <span className="courses-badge badge--primary">
                    Ages 13–16
                  </span>
                  <span className="courses-badge badge--accent">Advanced</span>
                </div>
                <h3 className="card__title">
                  Advanced Robotics, AI &amp; Full-Stack Coding
                </h3>
                <p className="card__description">
                  {' '}
                  Real-world tech workflows, algorithmic thinking, and
                  product-focused builds.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="card__modules">
                  <h4 className="card__modules-title">Core Modules</h4>
                  <ul className="modules-list">
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Autonomous Systems</span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Python &amp; APIs</span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Embedded Systems</span>
                    </li>
                    <li>
                      <span className="module-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      <span>Capstone Projects</span>
                    </li>
                  </ul>
                </div>
                <div className="card__outcomes">
                  <div className="outcomes-tags">
                    <span className="outcome-tag">Portfolio-Ready</span>
                    <span className="outcome-tag">Applied AI</span>
                    <span className="outcome-tag">Competition Ready</span>
                  </div>
                </div>
                <button
                  aria-label="Enroll in Ages 13-16 program"
                  className="btn btn-primary"
                >
                  {' '}
                  Explore Program
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </article>
            </div>
          </section>
          <section
            id="program-modules-section"
            role="region"
            aria-labelledby="modules-title"
            className="program-modules"
          >
            <div className="modules-container">
              <div className="modules-content">
                <h2 id="modules-title" className="section-title">
                  Program Modules
                </h2>
                <p className="section-subtitle">
                  {' '}
                  Clear, bold pathways from playful discovery to technical
                  mastery
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div id="module-panel-68" className="module-panel">
                  <button
                    aria-expanded="true"
                    aria-controls="module-content-68"
                    className="module-panel__header"
                  >
                    <div className="courses-module-paneltitle-group1">
                      <span className="module-panel__badge">Ages 6–8</span>
                      <h3 className="module-panel__title">Spark &amp; Build</h3>
                    </div>
                    <span className="courses-module-panelicon1">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="module-content-68"
                    role="region"
                    aria-labelledby="module-panel-68"
                    className="module-panel__content"
                  >
                    <p className="module-panel__overview">
                      {' '}
                      Fast-paced hands-on starters that transform curiosity into
                      confident tinkering. Short modules, vivid projects, and
                      immediate wins to keep young minds buzzing.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="module-panel__modules">
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>RoboBasics</h4>
                          <p>
                            {' '}
                            Simple mechanics, block coding, and guided robot
                            play to teach cause-and-effect and sequencing.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Sensor Stories</h4>
                          <p>
                            {' '}
                            Light, motion, and touch sensors—kids build reactive
                            robots and learn feedback loops.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Creative Coding</h4>
                          <p>
                            {' '}
                            Visual programming with animated sprites,
                            interactive stories, and playful debugging.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Maker Lab</h4>
                          <p>
                            {' '}
                            Safe tool use, craft-to-code projects, and
                            collaborative mini-challenges.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="module-panel__milestones">
                      <h4>Milestones &amp; Outcomes</h4>
                      <ul>
                        <li>
                          <span>
                            {' '}
                            Follow multi-step instructions and create a working
                            robot prototype
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            Write and modify block code for movement and simple
                            decisions
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            Demonstrate teamwork, iteration, and pride in
                            finished projects
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                      </ul>
                      <div className="skill-badge">
                        <span>Skill Level: Beginner</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="module-panel-912" className="module-panel">
                  <button
                    aria-expanded="false"
                    aria-controls="module-content-912"
                    className="module-panel__header"
                  >
                    <div className="courses-module-paneltitle-group2">
                      <span className="module-panel__badge module-panel__badge--secondary">
                        {' '}
                        Ages 9–12
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <h3 className="module-panel__title">
                        Innovate &amp; Iterate
                      </h3>
                    </div>
                    <span className="courses-module-panelicon2">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="module-content-912"
                    role="region"
                    aria-labelledby="module-panel-912"
                    className="module-panel__content"
                  >
                    <p className="module-panel__overview">
                      {' '}
                      Bold project cycles that move from idea to prototype.
                      Students combine coding logic with mechanical design to
                      solve real problems.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="module-panel__modules">
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Modular Robotics</h4>
                          <p>
                            {' '}
                            Build modular bots with interchangeable parts and
                            program adaptive behaviors.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Applied AI Labs</h4>
                          <p>
                            {' '}
                            Intuitive introductions to pattern recognition and
                            training simple models using kid-friendly tools.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Game Systems</h4>
                          <p>
                            {' '}
                            Design-and-code complete games, introducing
                            variables, loops, and event-driven logic.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Electronics &amp; IoT Basics</h4>
                          <p>
                            {' '}
                            Hands-on circuits, sensors, and making devices that
                            communicate.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="module-panel__milestones">
                      <h4>Milestones &amp; Outcomes</h4>
                      <ul>
                        <li>
                          <span>
                            {' '}
                            Ship a working prototype that senses and reacts to
                            its environment
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            Build a playable game with scorekeeping, levels, and
                            conditional logic
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            Explain a simple AI concept and demonstrate a
                            trained model in action
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                      </ul>
                      <div className="skill-badge skill-badge--intermediate">
                        <span>
                          {' '}
                          Skill Level: Intermediate
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="module-panel-1316" className="module-panel">
                  <button
                    aria-expanded="false"
                    aria-controls="module-content-1316"
                    className="module-panel__header"
                  >
                    <div className="courses-module-paneltitle-group3">
                      <span className="module-panel__badge module-panel__badge--accent">
                        {' '}
                        Ages 13–16
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <h3 className="module-panel__title">
                        Build, Scale, Launch
                      </h3>
                    </div>
                    <span className="courses-module-panelicon3">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="module-content-1316"
                    role="region"
                    aria-labelledby="module-panel-1316"
                    className="module-panel__content"
                  >
                    <p className="module-panel__overview">
                      {' '}
                      Ambitious maker-to-market pathway. Students tackle
                      multi-week capstones, learn engineering workflows, and
                      present polished demos.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="module-panel__modules">
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Advanced Robotics</h4>
                          <p>
                            {' '}
                            Kinematics, motor control, PID tuning, and
                            autonomous navigation challenges.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Applied Machine Learning</h4>
                          <p>
                            {' '}
                            Data pipelines, model selection, evaluation, and
                            ethical AI discussions.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Full-Stack Tech Projects</h4>
                          <p>
                            {' '}
                            Front-end interfaces, microcontrollers, cloud
                            integration, and deployment basics.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="module-item">
                        <div className="module-item__icon">
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
                              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                            ></path>
                          </svg>
                        </div>
                        <div className="module-item__content">
                          <h4>Capstone Studio</h4>
                          <p>
                            {' '}
                            Team-led product cycles—research, MVP development,
                            user testing, and investor-ready pitches.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="module-panel__milestones">
                      <h4>Milestones &amp; Outcomes</h4>
                      <ul>
                        <li>
                          <span>
                            {' '}
                            Deliver a portfolio-ready project with codebase,
                            documentation, and demo video
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            Implement and evaluate ML models for real-world
                            tasks with attention to bias and safety
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            Present technical work confidently to peers,
                            parents, and industry mentors
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                      </ul>
                      <div className="skill-badge skill-badge--advanced">
                        <span>
                          {' '}
                          Skill Level: Advanced
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="modules-sidebar">
                <div className="modules-sidebar__card">
                  <h3>Progression Roadmap</h3>
                  <p>
                    {' '}
                    Each module includes measurable checkpoints, mentor
                    feedback, and showcase-ready deliverables to highlight
                    student growth.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="roadmap-steps">
                    <div className="roadmap-step">
                      <span className="roadmap-step__number">1</span>
                      <span className="roadmap-step__label">
                        Playful Discovery
                      </span>
                    </div>
                    <div className="roadmap-step">
                      <span className="roadmap-step__number">2</span>
                      <span className="roadmap-step__label">
                        Applied Skills
                      </span>
                    </div>
                    <div className="roadmap-step">
                      <span className="roadmap-step__number">3</span>
                      <span className="roadmap-step__label">
                        Technical Mastery
                      </span>
                    </div>
                  </div>
                </div>
                <div className="modules-sidebar__cta">
                  <h4>Ready to Start?</h4>
                  <p>
                    Book a free trial and see our teaching approach in action.
                  </p>
                  <button
                    aria-label="Book free trial class"
                    className="btn btn-primary"
                  >
                    {' '}
                    Book Trial Class
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </aside>
            </div>
          </section>
          <section
            id="schedules-section"
            role="region"
            aria-labelledby="schedules-title"
            className="schedules"
          >
            <div className="schedules__container">
              <div className="schedules__header">
                <h2 id="schedules-title" className="section-title">
                  Schedules
                </h2>
                <p className="section-subtitle">
                  {' '}
                  Find the perfect rhythm for curious minds: clear, consistent,
                  and built for momentum
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="schedules__layout">
                <div className="schedule-list">
                  <div className="schedule-card">
                    <div className="schedule-card__badge">
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
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </g>
                      </svg>
                      <span>Weekly Cadence</span>
                    </div>
                    <h3 className="schedule-card__title">
                      Twice Weekly Classes
                    </h3>
                    <p className="schedule-card__description">
                      {' '}
                      90-minute sessions ideal for sustained skill growth and
                      project completion without burnout.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="schedule-card__details">
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>90 min per session</span>
                      </div>
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                        <span>Small cohorts (8–12)</span>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-card schedule-card--featured">
                    <div className="schedule-card__badge schedule-card__badge--accent">
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
                          d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        ></path>
                      </svg>
                      <span>Weekend Accelerators</span>
                    </div>
                    <h3 className="schedule-card__title">
                      Saturday Intensive Cohorts
                    </h3>
                    <p className="schedule-card__description">
                      {' '}
                      3-hour sessions for rapid progress and capstone-ready
                      projects — perfect for busy families who want concentrated
                      learning.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="schedule-card__details">
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>3 hours Saturday</span>
                      </div>
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                        <span>Project-focused</span>
                      </div>
                    </div>
                    <div className="schedule-card__highlight">
                      <span>Most Popular</span>
                    </div>
                  </div>
                  <div className="schedule-card">
                    <div className="schedule-card__badge">
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
                          <path d="M12 6v6l4 2"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                        </g>
                      </svg>
                      <span>After-School</span>
                    </div>
                    <h3 className="schedule-card__title">Weekday Afternoons</h3>
                    <p className="schedule-card__description">
                      {' '}
                      60–75 minute sessions for steady development and
                      homework-friendly pacing — aligns with school schedules.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="schedule-card__details">
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>60–75 min sessions</span>
                      </div>
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="M3 10h18"></path>
                          </g>
                        </svg>
                        <span>Weekday afternoons</span>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-card">
                    <div className="schedule-card__badge schedule-card__badge--secondary">
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
                          <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                        </g>
                      </svg>
                      <span>Bootcamps</span>
                    </div>
                    <h3 className="schedule-card__title">
                      Summer &amp; Holiday Intensives
                    </h3>
                    <p className="schedule-card__description">
                      {' '}
                      1–2 week immersive modules with daily sessions that
                      fast-track portfolio work and spark deep engagement.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="schedule-card__details">
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>
                        <span>Daily immersive sessions</span>
                      </div>
                      <div className="detail-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </g>
                        </svg>
                        <span>Portfolio accelerator</span>
                      </div>
                    </div>
                  </div>
                </div>
                <aside role="complementary" className="enroll-panel">
                  <h3>Enrollment Status</h3>
                  <div aria-live="polite" className="cohort-info">
                    <div className="cohort-stat">
                      <span className="cohort-stat__number">24</span>
                      <span className="cohort-stat__label">
                        Seats Available
                      </span>
                    </div>
                    <div className="cohort-stat">
                      <span className="cohort-stat__number">8–12</span>
                      <span className="cohort-stat__label">Per Cohort</span>
                    </div>
                  </div>
                  <div className="enroll-panel__features">
                    <div className="feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Flexible makeup sessions</span>
                    </div>
                    <div className="feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Rolling enrollments</span>
                    </div>
                    <div className="feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Free trial classes</span>
                    </div>
                    <div className="feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>On-demand recaps</span>
                    </div>
                  </div>
                  <button
                    aria-label="Book your schedule"
                    className="btn btn-primary btn-lg"
                  >
                    {' '}
                    Book Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <p className="enroll-panel__note">
                    {' '}
                    New intake windows every 8–10 weeks. Secure your spot early.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </aside>
              </div>
            </div>
          </section>
          <section
            id="enrollment-section"
            role="region"
            aria-labelledby="enrollment-title"
            className="enrollment-options"
          >
            <div className="enrollment-container">
              <div className="enrollment-hero">
                <h2 id="enrollment-title" className="section-title">
                  Enrollment Options
                </h2>
                <p className="section-subtitle">
                  {' '}
                  Flexible Plans Built for Real Learning — Transparent, Bold,
                  Ready
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Choose a plan that matches your child&apos;s pace and
                  ambition. Every plan includes hands-on kits, project
                  portfolios, progress reports, and access to our mentor
                  community.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="enrollment-plans">
                <article className="plan-card">
                  <div className="plan-card__header">
                    <span className="plan-card__badge">Ages 6–8</span>
                    <h3 className="plan-card__title">Starter Term</h3>
                    <p className="plan-card__tagline">Perfect First Steps</p>
                  </div>
                  <div className="plan-card__pricing">
                    <span className="plan-card__price">$249</span>
                    <span className="plan-card__duration">8 weeks</span>
                  </div>
                  <div className="plan-card__format">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </g>
                    </svg>
                    <span>Weekly 60-min classes + 1 weekend workshop</span>
                  </div>
                  <ul className="plan-card__features">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Intro to robotics kits</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Block-based coding labs</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Certificate of completion</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Progress snapshot</span>
                    </li>
                  </ul>
                  <p className="plan-card__ideal">
                    {' '}
                    Ideal for curious beginners who need guided discovery and
                    engaging, confidence-building projects.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button
                    aria-label="Enroll in Starter Term"
                    className="btn btn-primary"
                  >
                    {' '}
                    Enroll Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
                <article className="plan-card plan-card--featured">
                  <div className="plan-card__popular">
                    <span>Most Popular</span>
                  </div>
                  <div className="plan-card__header">
                    <span className="plan-card__badge plan-card__badge--secondary">
                      {' '}
                      Ages 9–12
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <h3 className="plan-card__title">Accelerator Term</h3>
                    <p className="plan-card__tagline">Build Real Skills</p>
                  </div>
                  <div className="plan-card__pricing">
                    <span className="plan-card__price">$449</span>
                    <span className="plan-card__duration">12 weeks</span>
                  </div>
                  <div className="plan-card__format">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </g>
                    </svg>
                    <span>Twice-weekly 75-min classes + project showcases</span>
                  </div>
                  <ul className="plan-card__features">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Intermediate robotics kit</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Python fundamentals</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>AI concepts introduction</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Digital portfolio &amp; mentor feedback</span>
                    </li>
                  </ul>
                  <p className="plan-card__ideal">
                    {' '}
                    Designed for active learners ready to create functional
                    robots, interactive apps, and public demos.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button
                    aria-label="Enroll in Accelerator Term"
                    className="btn btn-primary btn-lg"
                  >
                    {' '}
                    Enroll Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
                <article className="plan-card">
                  <div className="plan-card__header">
                    <span className="plan-card__badge plan-card__badge--accent">
                      {' '}
                      Ages 13–16
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <h3 className="plan-card__title">Pre-Professional Term</h3>
                    <p className="plan-card__tagline">
                      Portfolio &amp; Pathways
                    </p>
                  </div>
                  <div className="plan-card__pricing">
                    <span className="plan-card__price">$749</span>
                    <span className="plan-card__duration">16 weeks</span>
                  </div>
                  <div className="plan-card__format">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </g>
                    </svg>
                    <span>Twice-weekly 90-min classes + capstone sprint</span>
                  </div>
                  <ul className="plan-card__features">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Advanced hardware kit</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Full-stack coding modules</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>AI projects &amp; ethics</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>Capstone mentorship</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 6L9 17l-5-5"
                        ></path>
                      </svg>
                      <span>College &amp; career readiness</span>
                    </li>
                  </ul>
                  <p className="plan-card__ideal">
                    {' '}
                    For teens aiming to build standout portfolios, technical
                    depth, and pathways to competitions or internships.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button
                    aria-label="Enroll in Pre-Professional Term"
                    className="btn btn-primary"
                  >
                    {' '}
                    Enroll Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </article>
              </div>
              <div className="enrollment-footer">
                <div className="enrollment-discount">
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
                  <div>
                    <h4>Sibling &amp; Multi-Term Discount</h4>
                    <p>
                      {' '}
                      Save 15% when enrolling a second sibling or 10% when
                      signing up for two consecutive terms.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="enrollment-steps">
                  <h4>How to Enroll — Simple, Fast, Secure</h4>
                  <ol className="steps-list">
                    <li>
                      <span className="step-number">1</span>
                      <span>Pick a Program</span>
                    </li>
                    <li>
                      <span className="step-number">2</span>
                      <span>Book a Free Trial</span>
                    </li>
                    <li>
                      <span className="step-number">3</span>
                      <span>Complete Enrollment</span>
                    </li>
                    <li>
                      <span className="step-number">4</span>
                      <span>Start Learning</span>
                    </li>
                  </ol>
                </div>
                <div className="enrollment-cta-banner">
                  <div className="cta-banner__content">
                    <h3>Not sure yet?</h3>
                    <p>
                      {' '}
                      Reserve a no-obligation trial class — hands-on, zero
                      commitment, full excitement.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <button
                    aria-label="Book free trial class"
                    className="btn btn-accent btn-xl"
                  >
                    {' '}
                    Book Free Trial Class
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section
            id="outcomes-section"
            role="region"
            aria-labelledby="outcomes-title"
            className="outcomes"
          >
            <div className="outcomes-container">
              <div className="outcomes-main">
                <h2 id="outcomes-title" className="section-title">
                  Learning Outcomes
                </h2>
                <p className="section-subtitle">
                  {' '}
                  Students don&apos;t just learn concepts — they build
                  capabilities that translate to real-world tech fluency.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="outcomes-cards">
                  <article className="outcome-card">
                    <div className="outcome-card__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
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
                    </div>
                    <h3 className="outcome-card__title">Core Competencies</h3>
                    <ul className="outcome-card__list">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text204">
                            Computational Thinking &amp; Algorithmic Design
                          </span>
                          <span>
                            {' '}
                            — Break problems into logical steps, create
                            efficient algorithms, and apply debugging
                            discipline.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text207">
                            Robotics Engineering Fundamentals
                          </span>
                          <span>
                            {' '}
                            — Design, assemble, and program autonomous robots
                            using sensors, actuators, and control loops.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text210">
                            Applied Artificial Intelligence
                          </span>
                          <span>
                            {' '}
                            — Build and train simple models, understand
                            data-driven decision making, and responsibly deploy
                            AI features.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text213">
                            Coding Fluency Across Languages
                          </span>
                          <span>
                            {' '}
                            — Read, write, and maintain code in block and
                            text-based languages (visual coding, Python,
                            JavaScript).
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text216">
                            Systems Integration
                          </span>
                          <span>
                            {' '}
                            — Connect microcontrollers, sensors, and cloud APIs
                            to produce end-to-end products that sense, compute,
                            and act.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                    </ul>
                  </article>
                  <article className="outcome-card">
                    <div className="outcome-card__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="outcome-card__title">
                      Practical Project Skills
                    </h3>
                    <ul className="outcome-card__list">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text219">
                            Project Planning &amp; Iteration
                          </span>
                          <span>
                            {' '}
                            — Scope projects, set milestones, prototype rapidly,
                            and iterate from feedback to deliver polished
                            outcomes.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text222">
                            Versioning &amp; Documentation
                          </span>
                          <span>
                            {' '}
                            — Use basic version control, document designs and
                            code, and present work clearly for peer review.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text225">
                            Testing &amp; Troubleshooting
                          </span>
                          <span>
                            {' '}
                            — Design test cases, diagnose failures, and apply
                            systematic fixes to improve reliability and
                            performance.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                    </ul>
                  </article>
                  <article className="outcome-card">
                    <div className="outcome-card__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
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
                    <h3 className="outcome-card__title">
                      Creativity &amp; Communication
                    </h3>
                    <ul className="outcome-card__list">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text228">
                            Design Thinking &amp; User Focus
                          </span>
                          <span>
                            {' '}
                            — Empathize with users, prototype intuitive
                            interfaces, and refine solutions that solve genuine
                            needs.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                        <span>
                          <span className="courses-text231">
                            Presentation &amp; Collaboration
                          </span>
                          <span>
                            {' '}
                            — Pitch projects, create demo-ready showcases, and
                            work effectively in team roles (lead, coder, tester,
                            designer).
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
              <aside className="outcomes-sidebar">
                <div className="outcomes-sidebar__card">
                  <h3>Outcomes by Age Group</h3>
                  <div className="age-outcome">
                    <span className="age-outcome__badge">Ages 6–8</span>
                    <p>
                      {' '}
                      Build simple robots, sequence logic with block coding,
                      demonstrate cause-effect through playful challenges.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="age-outcome">
                    <span className="age-outcome__badge">Ages 9–12</span>
                    <p>
                      {' '}
                      Develop multi-module projects, integrate sensors and
                      conditional logic, present working prototypes confidently.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="age-outcome">
                    <span className="age-outcome__badge">Ages 13–16</span>
                    <p>
                      {' '}
                      Deliver full-stack projects with AI components, hardware
                      integration, optimization, and portfolio-ready demos.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="outcomes-sidebar__card outcomes-sidebar__card--assessment">
                  <h3>Assessment &amp; Proof</h3>
                  <p>
                    {' '}
                    Each outcome is tracked with project rubrics, performance
                    badges, and instructor evaluations. Parents receive
                    milestone reports and students collect showcase-ready
                    artifacts.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="assessment-badges">
                    <span className="assessment-badge">Project Rubrics</span>
                    <span className="assessment-badge">Performance Badges</span>
                    <span className="assessment-badge">Milestone Reports</span>
                  </div>
                </div>
                <div className="outcomes-sidebar__cta">
                  <h4>Ready to see these outcomes in action?</h4>
                  <button
                    aria-label="Book free trial to see outcomes"
                    className="btn btn-primary btn-lg"
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
              </aside>
            </div>
          </section>
          <section
            id="testimonials-section"
            role="region"
            aria-labelledby="testimonials-title"
            className="courses-testimonials"
          >
            <div className="courses-testimonials-container">
              <div className="testimonials-intro">
                <h2 id="testimonials-title" className="section-title">
                  {' '}
                  What Parents &amp; Students Say
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="section-subtitle">
                  {' '}
                  Real stories, measurable growth, bold results
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="testimonials-cards">
                <article role="article" className="courses-testimonial-card">
                  <div className="testimonial-card__quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      ></path>
                    </svg>
                    <p>
                      {' '}
                      Seedlore turned my daughter&apos;s curiosity into
                      confidence. After just eight weeks she built her first
                      robot and now tutors classmates — all with a big smile.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img
                        src="https://images.pexels.com/photos/7869235/pexels-photo-7869235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Parent testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-card__info">
                      <span className="testimonial-card__name">Priya K.</span>
                      <span className="testimonial-card__role">Parent</span>
                    </div>
                  </div>
                </article>
                <article
                  role="article"
                  className="courses-testimonial-card testimonial-card--featured"
                >
                  <div className="testimonial-card__quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      ></path>
                    </svg>
                    <p>
                      {' '}
                      I loved designing AI characters that actually responded to
                      my commands. The teachers make complex ideas feel like
                      play. Now I want to study computer science!
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img
                        src="https://images.pexels.com/photos/7869047/pexels-photo-7869047.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Student testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-card__info">
                      <span className="testimonial-card__name">Alex M.</span>
                      <span className="testimonial-card__role">
                        Age 14, Student
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-card__badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                    <span>Featured Story</span>
                  </div>
                </article>
                <article role="article" className="courses-testimonial-card">
                  <div className="testimonial-card__quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      ></path>
                    </svg>
                    <p>
                      {' '}
                      From shy to spotlight: the end-of-term demo day gave my
                      son a stage to shine. He presented his autonomous car
                      project to family and friends — proud moment.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img
                        src="https://images.pexels.com/photos/7869078/pexels-photo-7869078.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Parent testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-card__info">
                      <span className="testimonial-card__name">Deborah L.</span>
                      <span className="testimonial-card__role">Parent</span>
                    </div>
                  </div>
                </article>
                <article role="article" className="courses-testimonial-card">
                  <div className="testimonial-card__quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      ></path>
                    </svg>
                    <p>
                      {' '}
                      I built an app that helps students track homework — and
                      Seedlore helped me take it from idea to prototype. The
                      mentorship was next level.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img
                        src="https://images.pexels.com/photos/7868831/pexels-photo-7868831.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Student testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-card__info">
                      <span className="testimonial-card__name">Sofia R.</span>
                      <span className="testimonial-card__role">
                        Age 16, Student
                      </span>
                    </div>
                  </div>
                </article>
                <article role="article" className="courses-testimonial-card">
                  <div className="testimonial-card__quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      ></path>
                    </svg>
                    <p>
                      {' '}
                      Seeing my child debug code independently for the first
                      time was priceless. Seedlore makes learning feel like
                      discovery, not homework.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img
                        src="https://images.pexels.com/photos/7869134/pexels-photo-7869134.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Parent testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-card__info">
                      <span className="testimonial-card__name">Omar S.</span>
                      <span className="testimonial-card__role">Parent</span>
                    </div>
                  </div>
                </article>
                <article role="article" className="courses-testimonial-card">
                  <div className="testimonial-card__quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      ></path>
                    </svg>
                    <p>
                      {' '}
                      Bold projects, fast progress. I went from zero coding
                      experience to launching a mini-portfolio in one term.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img
                        src="https://images.pexels.com/photos/7868887/pexels-photo-7868887.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Student testimonial"
                        loading="lazy"
                      />
                    </div>
                    <div className="testimonial-card__info">
                      <span className="testimonial-card__name">Leo K.</span>
                      <span className="testimonial-card__role">
                        Age 12, Student
                      </span>
                    </div>
                  </div>
                </article>
              </div>
              <div className="testimonials-cta">
                <p>
                  {' '}
                  Join hundreds of families who&apos;ve watched their children
                  transform curiosity into confidence.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button
                  aria-label="Start your journey"
                  className="btn btn-primary btn-xl"
                >
                  {' '}
                  Start Your Journey
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
          </section>
          <section
            id="faqs-section"
            role="region"
            aria-labelledby="faqs-title"
            className="faqs"
          >
            <div className="faqs-container">
              <header className="faqs-header">
                <span className="faqs-label">Frequently Asked Questions</span>
                <h2 id="faqs-title" className="section-title">
                  {' '}
                  Everything You Need to Know
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="section-subtitle">
                  {' '}
                  Transparent answers to help you make the best choice for your
                  child&apos;s tech education journey.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </header>
              <div className="faqs-grid">
                <article id="faq-1" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-1"
                    className="faq-card__question"
                  >
                    <span>What ages do Seedlore EDU programs serve?</span>
                    <span className="courses-faq-cardicon10">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-1"
                    role="region"
                    aria-labelledby="faq-1"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      We offer tiered programs for ages 6–8, 9–12, and 13–16,
                      each built with age-appropriate learning objectives,
                      safety standards, and progressive challenge levels to
                      unlock real-world tech skills.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-2" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-2"
                    className="faq-card__question"
                  >
                    <span>
                      How are classes structured and how long is each course?
                    </span>
                    <span className="courses-faq-cardicon11">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-2"
                    role="region"
                    aria-labelledby="faq-2"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Courses run as term-based modules (8–12 weeks) with weekly
                      60–90 minute sessions. Each age group follows a scaffolded
                      curriculum: discovery and play (6–8), project-driven
                      skill-building (9–12), and applied design + portfolio work
                      (13–16).
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-3" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-3"
                    className="faq-card__question"
                  >
                    <span>
                      Can beginners join? Do students need prior experience?
                    </span>
                    <span className="courses-faq-cardicon12">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-3"
                    role="region"
                    aria-labelledby="faq-3"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Absolutely. Every course includes beginner entry points
                      and leveled pathways. We assess skill on day one and place
                      learners into the right pace so novices thrive while
                      advanced students are challenged.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-4" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-4"
                    className="faq-card__question"
                  >
                    <span>What is the student-to-instructor ratio?</span>
                    <span className="courses-faq-cardicon13">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-4"
                    role="region"
                    aria-labelledby="faq-4"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      We maintain a low ratio (typically 6–8 students per
                      instructor) to ensure hands-on guidance, personalized
                      feedback, and safe equipment use — critical for robotics
                      and maker activities.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-5" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-5"
                    className="faq-card__question"
                  >
                    <span>
                      {' '}
                      Are instructors certified? What are their qualifications?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="courses-faq-cardicon14">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-5"
                    role="region"
                    aria-labelledby="faq-5"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Our instructors are STEM educators and industry
                      practitioners with certifications in computer science,
                      robotics, or AI education. Each passes a rigorous vetting
                      process and ongoing professional development to keep
                      curriculum cutting-edge.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-6" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-6"
                    className="faq-card__question"
                  >
                    <span>What equipment and software do students use?</span>
                    <span className="courses-faq-cardicon15">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-6"
                    role="region"
                    aria-labelledby="faq-6"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      We use industry-standard, child-safe robotics kits,
                      microcontrollers, and visual-to-text coding platforms. For
                      older groups we introduce Python and block-to-text
                      transitions, plus AI tools designed for ethical,
                      age-appropriate learning.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-7" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-7"
                    className="faq-card__question"
                  >
                    <span>
                      Can parents observe classes or get progress reports?
                    </span>
                    <span className="courses-faq-cardicon16">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-7"
                    role="region"
                    aria-labelledby="faq-7"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Yes. Parents receive regular progress summaries, project
                      showcases, and term-end portfolios. Observation workshops
                      and demo days are scheduled each term so families can
                      celebrate learning milestones.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-8" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-8"
                    className="faq-card__question"
                  >
                    <span>
                      {' '}
                      Is there a placement test or trial class before
                      enrollment?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="courses-faq-cardicon17">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-8"
                    role="region"
                    aria-labelledby="faq-8"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      We offer a free trial class and a brief placement
                      assessment to match students with the ideal course level
                      and learning track.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-9" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-9"
                    className="faq-card__question"
                  >
                    <span>Do you offer scholarships or financial aid?</span>
                    <span className="courses-faq-cardicon18">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-9"
                    role="region"
                    aria-labelledby="faq-9"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Seedlore EDU provides need-based scholarships and
                      early-bird discounts. Contact our enrollment team for
                      eligibility criteria and application steps.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-10" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-10"
                    className="faq-card__question"
                  >
                    <span>What is the enrollment process and deadlines?</span>
                    <span className="courses-faq-cardicon19">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-10"
                    role="region"
                    aria-labelledby="faq-10"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Enroll online via the Courses page. Terms fill fast; check
                      the schedule for early-bird deadlines and trial-class
                      windows. Our enrollment team is available to guide
                      placement and payment plans.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-11" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-11"
                    className="faq-card__question"
                  >
                    <span>
                      {' '}
                      Can students continue year-to-year and advance to more
                      complex programs?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="courses-faq-cardicon20">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-11"
                    role="region"
                    aria-labelledby="faq-11"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Yes. Our curriculum is intentionally progressive so
                      students can grow through levels, take specialty electives
                      (AI ethics, competitive robotics), and graduate with a
                      strong STEM portfolio.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
                <article id="faq-12" className="faq-card">
                  <button
                    aria-expanded="false"
                    aria-controls="faq-answer-12"
                    className="faq-card__question"
                  >
                    <span>How does Seedlore measure student success?</span>
                    <span className="courses-faq-cardicon21">
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
                          d="m18 15l-6-6l-6 6"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="faq-answer-12"
                    role="region"
                    aria-labelledby="faq-12"
                    className="faq-card__answer"
                  >
                    <p>
                      {' '}
                      Success is tracked via skill assessments, project
                      completion, portfolio quality, and soft-skill growth
                      (collaboration, resilience). We share measurable progress
                      reports with families each term.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </article>
              </div>
              <div className="faqs-footer">
                <p>
                  {' '}
                  Still have questions? Our enrollment team is ready to help you
                  find the perfect program for your child.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button
                  aria-label="Contact support for more questions"
                  className="btn btn-lg btn-secondary"
                >
                  {' '}
                  Contact Support
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
          </section>
        </main>
        <div className="courses-container15">
          <div className="courses-container16">
            <Script
              html={`<style>
        @keyframes heroEnter {from {opacity: 0;
transform: translateY(6px) scale(0.995);}
to {opacity: 1;
transform: translateY(0) scale(1);}}@keyframes heroVisualEnter {from {opacity: 0;
transform: translateX(20px);}
to {opacity: 1;
transform: translateX(0);}}@keyframes panelExpand {from {opacity: 0;
transform: translateY(-6px) scaleY(0.98);}
to {opacity: 1;
transform: translateY(0) scaleY(1);}}@keyframes faqExpand {from {opacity: 0;
transform: translateY(-6px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="courses-container17">
          <div className="courses-container18">
            <Script
              html={`<script defer data-name="courses-page">
(function(){
  // Module Panel Accordion
  const modulePanels = document.querySelectorAll(".module-panel__header")

  modulePanels.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true"
      button.setAttribute("aria-expanded", !isExpanded)
    })
  })

  // FAQ Accordion
  const faqButtons = document.querySelectorAll(".faq-card__question")

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true"

      // Close all other FAQs
      faqButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute("aria-expanded", "false")
        }
      })

      // Toggle clicked FAQ
      button.setAttribute("aria-expanded", !isExpanded)
    })
  })

  // Intersection Observer for animations
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

  // Observe animated elements
  const animatedElements = document.querySelectorAll(
    ".card, .outcome-card, .testimonial-card, .faq-card"
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
        <a href="https://play.teleporthq.io/signup">
          <div
            aria-label="Sign up to TeleportHQ"
            className="courses-container19"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="courses-icon333"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="courses-text273">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .courses-container10 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .courses-container11 {
            display: none;
          }
          .courses-container12 {
            display: contents;
          }
          .courses-module-paneltitle-group1 {
            gap: var(--spacing-md);
            flex: 1;
            display: flex;
            align-items: center;
          }
          .courses-module-panelicon1 {
            color: var(--color-on-surface);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
          }
          .courses-module-paneltitle-group2 {
            gap: var(--spacing-md);
            flex: 1;
            display: flex;
            align-items: center;
          }
          .courses-module-panelicon2 {
            color: var(--color-on-surface);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
          }
          .courses-module-paneltitle-group3 {
            gap: var(--spacing-md);
            flex: 1;
            display: flex;
            align-items: center;
          }
          .courses-module-panelicon3 {
            color: var(--color-on-surface);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
          }
          .courses-text204 {
            font-weight: 700;
          }
          .courses-text207 {
            font-weight: 700;
          }
          .courses-text210 {
            font-weight: 700;
          }
          .courses-text213 {
            font-weight: 700;
          }
          .courses-text216 {
            font-weight: 700;
          }
          .courses-text219 {
            font-weight: 700;
          }
          .courses-text222 {
            font-weight: 700;
          }
          .courses-text225 {
            font-weight: 700;
          }
          .courses-text228 {
            font-weight: 700;
          }
          .courses-text231 {
            font-weight: 700;
          }
          .courses-faq-cardicon10 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon11 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon12 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon13 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon14 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon15 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon16 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon17 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon18 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon19 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon20 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-faq-cardicon21 {
            color: var(--color-primary);
            width: 24px;
            height: 24px;
            transition: transform var(--animation-duration-fast)
              var(--animation-curve-primary);
            flex-shrink: 0;
          }
          .courses-container15 {
            display: none;
          }
          .courses-container16 {
            display: contents;
          }
          .courses-container17 {
            display: none;
          }
          .courses-container18 {
            display: contents;
          }
          .courses-container19 {
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
          .courses-icon333 {
            width: 24px;
            margin-right: 4px;
          }
          .courses-text273 {
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

export default Courses
