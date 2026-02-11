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
        {/* HERO TITLE */}
        <h1 className="home-hero-title hero-title">Empowering Kids with Robotics, AI &amp; Coding</h1>

        <p className="home-hero-subtitle hero-subtitle">
          Seedlore Educare nurtures young minds by transforming curiosity into capability—guiding learners from potential
          to mastery through structured, future-ready education aligned with NEP and ICSE, CBSE &amp; ISC curricula.
          Explore our courses or connect with us to begin the journey.
        </p>

        {/* ✅ VIDEO ON TOP (desktop + mobile) */}
        <div className="hero-media">
          <div className="media-card">
            <video autoPlay loop muted playsInline preload="auto" src="/videos/hero-robotics.mp4" />

            {/* ✅ Professional badges (your exact style) */}
           <div className="hero-overlay">
            <div role="img" aria-label="Hands-on learning" className="hero-pill hero-pill-secondary">
              Hands-on Robotics/AI Classes
            </div>
            </div>

          </div>
        </div>

        {/* ✅ COURSES TABLE (priority) */}
        <div className="courses-section">
          {/* Caption */}
          <div className="courses-caption">Courses</div>

          {/* Tabs */}
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

                {/* ✅ Contact Us beside Computer tab */}
                {tab.key === 'computer' ? (
                  <Link href="/contactus">
                    <div role="img" aria-label="Contact Seedlore" className="badge badge-contact badge-contact-inline">
                      <span>Contact Us *</span>
                    </div>
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          {/* Table Card */}
          <div className="featured-card courses-card">
            <div className="courses-tableHeader">
              <div className="courses-subtitle">Select a tab to view the course list for that track.</div>
              {activeTab.note ? <div className="courses-note">{activeTab.note}</div> : null}
            </div>

            <div className="courses-scroll">
              {activeTab.rows.map((group, gi) => (
                <div key={`${activeTab.key}-group-${gi}`} className="course-group">
                  <div className="course-group-title">{group.title}</div>
                  <ul className="course-bullets">
                    {group.items.map((item, ii) => (
                      <li key={`${activeTab.key}-item-${gi}-${ii}`}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Contact Us below table (important) */}
          <div className="contact-bottom">
            <Link href="/contactus">
              <div role="img" aria-label="Contact Seedlore" className="badge badge-contact badge-contact-large">
                <span>Contact Us *</span>
              </div>
            </Link>
          </div>

          {/* ✅ Branch label + marquee */}
          <div className="branch-block" aria-label="Seedlore branches">
            <div className="branch-title">Branches</div>
            <div className="branch-marquee branch-marquee--under-table">
              <div className="branch-marquee__track">
                <span className="branch-chip">📍 Hindmotor – Near Zudio</span>
                <span className="branch-chip">📍 Dunlop – Near Rathtala</span>
                <span className="branch-chip">📍 Hindmotor – Near Zudio</span>
                <span className="branch-chip">📍 Dunlop – Near Rathtala</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Drop-in CSS (responsive + professional) */}
      <style jsx>{`
        /* ---------- VIDEO ---------- */
        .hero-media {
          margin-top: 24px;
          margin-bottom: 28px;
        }

        .media-card {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  max-height: 620px; /* 🔥 limit height on desktop */
  border-radius: 18px;
  overflow: hidden;
}


        .media-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Badges (same style you requested) */
       /* ---------- Overlay container ---------- */
.hero-overlay {
  position: absolute;
  top: 18px;
  left: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 3;
}

/* ---------- Clean modern pills ---------- */
.hero-pill {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.2px;
  color: #111;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  white-space: nowrap;
}

/* Secondary slightly tinted */
.hero-pill-secondary {
  background: rgba(15, 118, 110, 0.9);
  color: #fff;
}


        /* ---------- COURSES ---------- */
        .courses-section {
          max-width: 1100px;
          margin: 0 auto;
        }

        .courses-caption {
          font-weight: 900;
          font-size: 18px;
          margin: 0 0 12px;
          letter-spacing: 0.2px;
        }

        .tabs-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 14px;
        }

        .tab-wrap {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .tab-button {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          background: #fff;
          font-weight: 800;
          cursor: pointer;
        }

        .tab-button.active {
          background: #0f766e;
          color: #fff;
          border-color: #0f766e;
        }

        .courses-card {
          padding: 18px;
          border-radius: 16px;
        }

        .courses-scroll {
          max-height: 520px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .course-group-title {
          font-weight: 900;
          margin-top: 14px;
          margin-bottom: 6px;
        }

        .course-bullets {
          margin: 0;
          padding-left: 18px;
        }

        /* ---------- CONTACT BADGE (professional + mild automation) ---------- */
        .badge-contact {
          position: relative;
          background: #0f766e;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          user-select: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: pulseGlow 2.6s ease-in-out infinite;
        }

        .badge-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(15, 118, 110, 0.35);
        }

        .badge-contact-inline {
          position: static; /* inline near tab */
          padding: 8px 14px;
          font-size: 13px;
        }

        .contact-bottom {
          margin-top: 16px;
          display: flex;
          justify-content: flex-start;
        }

        .badge-contact-large {
          position: static;
          padding: 10px 18px;
          font-size: 14px;
          border-radius: 999px;
        }

        /* soft pulse glow */
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(15, 118, 110, 0.35);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(15, 118, 110, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(15, 118, 110, 0);
          }
        }

        /* ---------- BRANCHES ---------- */
        .branch-block {
          margin-top: 14px;
        }

        .branch-title {
          font-weight: 900;
          font-size: 13px;
          opacity: 0.9;
          margin: 0 0 8px;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 768px) {
         

          .courses-caption {
            font-size: 16px;
          }

          .courses-scroll {
            max-height: 60vh;
          }

          .badge-contact-inline {
            padding: 7px 12px;
            font-size: 12px;
          }

          .badge-contact-large {
            padding: 9px 14px;
            font-size: 13px;
          }

          .contact-bottom {
            justify-content: center; /* nicer on mobile */
          }
        }
      `}</style>
    </section>
  )
}
