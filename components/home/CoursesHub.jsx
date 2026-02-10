import React, { useMemo, useState } from 'react'
import Link from 'next/link'

export default function CoursesHub() {
  const courseTabs = useMemo(
    () => [
      {
        key: 'robotics',
        label: 'Robotics',
        rows: [
          {
            title: 'Robotics/IoT',
            items: [
              'Gesture Motions Rover',
              'Smart Obstacle Avoider',
              'Line Following Robot',
              'Smart Dustbin',
              'Basic Home Automation',
              'Smart Irrigation System',
              'Smart Door Bell',
              'Weather Monitoring System',
              'Smart Street Light',
              'AI Emotion Detector',
            ],
          },
          {
            title: 'Space Tech',
            items: [
              'Satellite IoT Tracker',
              'CanSat',
              'CubeSat',
              'Mini Satellite Communication Model',
              'Space Mission Simulation',
            ],
          },
          { title: 'Simulation', items: ['Tinkercad', 'Wokwi'] },
          { title: 'Coding', items: ['C++', 'Python'] },
        ],
      },
      {
        key: 'aiml',
        label: 'AI/ML',
        note: 'ICSE / CBSE / ISC curriculum and beyond',
        rows: [
          {
            title: 'AI/ML Curriculum',
            items: [
              'Introduction to Artificial Intelligence',
              'Human vs Machine Intelligence',
              'Data Around Us',
              'Pattern Recognition',
              'AI Ethics Map (NEW)',
              'AI Project Cycle (NEW)',
              'Data Acquisition',
              'Block-based AI Logic',
              'Data Visualization (NEW)',
              'Introduction to Machine Learning',
              'Model Training & Testing',
              'Feature Exploration',
              'Types of Machine Learning',
              'Chatbot (Rule-based)',
              'AI + Robotics / IoT',
              'SDGs & AI (NEW)',
              'Bias & Fairness in AI',
              'Low-Code ML Models',
              'Mini AI Project',
              'Model Evaluation Basics',
              'Advanced Evaluation (NEW)',
              'Recommendation Systems',
              'Mathematical Foundations',
              'Linear Regression',
              "Bayes’ Theorem in AI",
              'Neural Networks (Intro)',
              'Transformers & Attention (NEW)',
              'Natural Language Processing',
              'Computer Vision',
              'Prompt Engineering & LLMs (NEW)',
              'Ethical Use of Generative AI',
              'Capstone AI Project',
            ],
          },
        ],
      },
      {
        key: 'computer',
        label: 'Computer',
        rows: [
          {
            title: 'School Curriculum',
            items: [
              'ICSE – as per curriculum',
              'CBSE – as per curriculum',
              'ISC – as per curriculum',
            ],
          },
        ],
      },
    ],
    []
  )

  const [activeCourseTab, setActiveCourseTab] = useState(courseTabs[0]?.key || 'robotics')
  const activeTab = courseTabs.find((t) => t.key === activeCourseTab) || courseTabs[0]

  return (
    <section id="courses-hub" className="courses-hub">
      <div className="courses-hub-container">
        <h1 className="home-hero-title hero-title">
          Empowering Kids with Robotics, AI &amp; Coding
        </h1>
        <p className="home-hero-subtitle hero-subtitle">
          Seedlore Educare nurtures young minds by transforming curiosity into capability—guiding learners from potential
          to mastery through structured, future-ready education aligned with NEP and ICSE, CBSE &amp; ISC curricula.
          Explore our courses or connect with us to begin the journey.
        </p>

        <div className="courses-hub-layout">
          {/* Left: video */}
          <div className="hero-media hero-media--stretch">
            <div className="media-card">
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label="Students learning robotics and coding in an engaging classroom environment"
                src="https://videos.pexels.com/video-files/7730022/7730022-hd_720_1280_25fps.mp4"
              />
              <div role="img" aria-label="Ages 6 to 16" className="badge badge-1">
                <span>Ages 6–16</span>
              </div>
              <div role="img" aria-label="Hands-on learning" className="badge badge-2">
                <span>Hands-on</span>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="courses-table-panel">
            <div role="tablist" className="tabs-row">
              {courseTabs.map((tab) => (
                <div key={tab.key} className="tab-wrap">
                  <button
                    role="tab"
                    aria-selected={activeCourseTab === tab.key ? 'true' : 'false'}
                    className={`tab-button ${activeCourseTab === tab.key ? 'active' : ''}`}
                    onClick={() => setActiveCourseTab(tab.key)}
                    type="button"
                  >
                    {tab.label}
                  </button>

                  {/* ✅ Only for Computer tab: show Contact Us beside the tab */}
                  {tab.key === 'computer' ? (
                    <Link href="/contactus">
                      <button className="btn btn-primary btn-sm btn-crisp tab-cta" type="button">
                        Contact Us
                      </button>
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Table card */}
            <div className="featured-card courses-featured-card courses-featured-card--tall">
              <div className="courses-tableHeader">
                <div className="courses-tableTitle">
                  <span className="course-indicator" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19a2 2 0 0 0 2 2h12M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 0-2 2zM8 7h6M8 11h8M8 15h7"
                      />
                    </svg>
                  </span>

                  <span className="courses-title-text">
                    Courses &amp; Curriculum
                    <span
                      className="courses-title-pill"
                      title="This section lists Seedlore programs and school curriculum coverage."
                    >
                      i
                    </span>
                  </span>
                </div>

                <div className="courses-subtitle">Select a tab to view the course list for that track.</div>
                {activeTab.note ? <div className="courses-note">{activeTab.note}</div> : null}
              </div>

              <div className="courses-scroll courses-scroll--tall">
                {activeTab.rows.map((group, gi) => (
                  <div key={`${activeTab.key}-group-${gi}`} className="course-group">
                    <div className="course-group-title">{group.title}</div>
                    <ul className="course-bullets">
                      {group.items.map((it, ii) => (
                        <li key={`${activeTab.key}-item-${gi}-${ii}`}>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Branch label + marquee */}
            <div className="branch-block" aria-label="Seedlore branches">
              <div className="branch-title branch-title--row">
              <span>Branches</span>

              <Link href="/contactus">
                <button
                  className="btn btn-primary btn-sm btn-crisp tab-cta"
                  type="button"
                >
                  Contact Us
                </button>
              </Link>
            </div>
              <div className="branch-marquee branch-marquee--under-table">
                <div className="branch-marquee__track">
                  <span className="branch-chip">📍 Hindmotor – Near Zudio</span>
                  <span className="branch-chip">📍 Dunlop – Near Rathtala</span>
                  <span className="branch-chip">📍 Hindmotor – Near Zudio</span>
                  <span className="branch-chip">📍 Dunlop – Near Rathtala</span>
                </div>
              </div>
            </div>

            {/* ✅ Removed the 3 CTA buttons block completely */}
          </div>
        </div>
      </div>

      {/* Small add-on CSS (safe + scoped) */}
      <style jsx>{`
        .tab-wrap {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        :global(.tab-cta) {
          padding: 8px 12px;
          border-radius: 999px;
          line-height: 1;
          white-space: nowrap;
        }

        .branch-block {
          margin-top: 14px;
        }
          .branch-title--row {
          display: flex;
          align-items: center;
          gap: 12px; /* 👈 space between “Branches” and button */
        }


        .branch-title {
          font-weight: 800;
          font-size: 13px;
          opacity: 0.9;
          margin: 0 0 8px;
          letter-spacing: 0.2px;
        }
      `}</style>
    </section>
  )
}
