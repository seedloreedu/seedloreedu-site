import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

export default function CoursesHub() {
  const roboticsExperiments = useMemo(
    () => ({
      'Gesture Motions Rover': {
        image: '/images/gesture-rover.jpg',
        description: 'Control a rover using gesture inputs and understand motion logic.',
      },
      'Smart Obstacle Avoider': {
        image: '/images/smart-obstacle-avoider.jpg',
        description: 'Build a bot that senses obstacles and automatically changes direction.',
      },
      'Line Following Robot': {
        image: '/images/line-following-bot.jpg',
        description: 'Train a robot to follow track lines using sensor-based feedback.',
      },
      'Smart Dustbin': {
        image: '/images/smart_dustbin.jpg',
        description: 'Create a touchless dustbin that opens using distance sensors.',
      },
      'Basic Home Automation': {
        image: '/images/home-automation.jpg',
        description: 'Automate home devices with switches, relays, and simple control logic.',
      },
      'Smart Irrigation System': {
        image: '/images/smart-irrigation.jpg',
        description: 'Use moisture sensing to control water flow automatically.',
      },
      'Smart Door Bell': {
        image: '/images/smart-doorbell.jpg',
        description: 'Design an intelligent doorbell alert system with sensors and buzzers.',
      },
      'Weather Monitoring System': {
        image: '/images/weather-monitoring.jpg',
        description: 'Capture temperature and humidity data for live weather insights.',
      },
      'Smart Street Light': {
        image: '/images/smart-street-light.jpg',
        description: 'Build energy-saving street lights that react to ambient light.',
      },
      'AI Emotion Detector': {
        image: '/images/emotion-detection.png',
        description: 'Explore basic AI by detecting facial emotions from camera input.',
      },
      'Satellite IoT Tracker': {
        image: '/images/satellite-iot.jpg',
        description: 'Track location signals and understand connected satellite data flow.',
      },
      CanSat: {
        image: '/images/can-sat.jpg',
        description: 'Build a mini satellite model that collects and transmits sensor data.',
      },
      CubeSat: {
        image: '/images/cube-sat.jpg',
        description: 'Prototype a cube satellite concept and learn aerospace system basics.',
      },
    }),
    []
  )

  const roboticsFoundations = useMemo(
    () => ({
      'Concepts and Theories': [
        {
          title: 'Basics of Robots and Robotics',
          image: '/images/BASICS OF ROBOT AND ROBOTICS.png',
          description:
            'Understand robot anatomy, movement, and joint structures to design machines that collaborate with humans.',
        },
        {
          title: 'Microcontrollers',
          image: '/images/MICRO CONTROLLER.png',
          description:
            'Understand microcontroller architecture and memory to bridge the gap between software logic and physical hardware.',
        },
        {
          title: 'STEM',
          image: '/images/STEM.png',
          description:
            'Master fundamental physics, math, and electronics to understand the energy and logic powering modern technology.',
        },
        {
          title: 'Sensors in Robotics',
          image: '/images/SENSORS IN ROBOTICS.png',
          description:
            "Understand how robots use electronic signals to 'feel' and measure the physical world around them.",
        },
        {
          title: 'Actuators',
          image: '/images/ACTUATORS.png',
          description:
            "Understand how robots use electronic signals to 'feel' and measure the physical world around them.",
        },
        {
          title: 'Resistors',
          image: '/images/RESISTORS.png',
          description:
            'Understand how resistors control electricity and protect sensitive components by limiting the flow of current.',
        },
      ],
      'Programming and Simulation': [
        {
          title: 'Arduino',
          image: '/images/Arduino.jpg',
          description: 'Learn how to program microcontroller boards for real-world interactive projects.',
        },
        {
          title: 'CPP',
          image: '/images/cpp.jpg',
          description: 'Build strong programming logic with C++ for robotics and embedded systems.',
        },
        {
          title: 'WowKi',
          image: '/images/wowki.jpg',
          description: 'Simulate circuits and code online to test ideas before building hardware.',
        },
        {
          title: 'Tinkercad',
          image: '/images/Tinkercad.jpg',
          description: 'Design and simulate electronics projects in an easy visual learning environment.',
        },
        {
          title: 'Scratch',
          image: '/images/Scratch.jpg',
          description: 'Start coding with block-based logic to create interactive stories, games, and ideas.',
        },
      ],
    }),
    []
  )

  const courseTabs = useMemo(
    () => [
      {
        key: 'robotics',
        label: 'Robotics',
        rows: [
          { title: 'Concepts and Theories', items: ['Concepts and Theories'] },
          { title: 'Programming and Simulation', items: ['Programming and Simulation'] },
          {
            title: 'Robotics/IoT Experiments',
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
            title: 'SpaceTech',
            items: ['Satellite IoT Tracker', 'CanSat', 'CubeSat'],
          },
        ],
      },
      {
        key: 'coding',
        label: 'Coding and Computers',
        rows: [
          { title: 'Coding', items: ['C', 'C++', 'Java', 'Python'] },
          {
            title: 'Computers',
            items: [
              'Computer Application',
              'Computer AI & Robotics',
              'ICSE - Course as per curriculum from Class V to XII',
              'CBSE - Course as per curriculum from Class V to XII',
            ],
          },
        ],
      },
      {
        key: 'aiml',
        label: 'AI/ML',
        note: 'ICSE / CBSE / ISC curriculum and beyond',
        rows: [
          {
            title: 'ICSE and CBSE AI Courses',
            items: ['ICSE - AI course as per curriculum', 'CBSE - AI course as per curriculum'],
          },
          {
            title: 'Other',
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
              'Bayes Theorem in AI',
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
    ],
    []
  )

  const defaultExpandedGroups = useMemo(
    () => ({
      'robotics-0': true,
      'robotics-1': false,
      'robotics-2': true,
      'robotics-3': false,
      'coding-0': true,
      'coding-1': true,
      'aiml-0': true,
      'aiml-1': true,
    }),
    []
  )

  const [activeCourseTab, setActiveCourseTab] = useState(courseTabs[0]?.key || 'robotics')
  const [expandedExperiment, setExpandedExperiment] = useState(null)
  const [expandedCourseGroups, setExpandedCourseGroups] = useState(defaultExpandedGroups)
  const activeTab = courseTabs.find((t) => t.key === activeCourseTab) || courseTabs[0]

  useEffect(() => {
    const hashToTab = {
      '#courses-robotics': 'robotics',
      '#courses-coding': 'coding',
      '#courses-aiml': 'aiml',
    }

    const syncTabWithHash = () => {
      const nextTab = hashToTab[window.location.hash]
      if (nextTab) {
        setActiveCourseTab(nextTab)
        setExpandedExperiment(null)
      }
    }

    syncTabWithHash()
    window.addEventListener('hashchange', syncTabWithHash)

    return () => window.removeEventListener('hashchange', syncTabWithHash)
  }, [])

  const toggleGroup = (key) => {
    setExpandedCourseGroups((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }

  return (
    <section id="courses-hub" className="courses-hub">
      <div className="courses-hub-container">
        <h1 className="home-hero-title hero-title">Empowering Kids with Robotics, AI &amp; Coding</h1>

        <p className="home-hero-subtitle hero-subtitle">
          Seedlore Educare nurtures young minds by transforming curiosity into capability, guiding learners
          from potential to mastery through structured, future-ready education aligned with NEP and ICSE,
          CBSE &amp; ISC curricula.
        </p>

        <div className="hero-media">
          <div className="media-card">
            <video autoPlay loop muted playsInline preload="auto" src="/videos/hero-robotics.mp4" />
            <div className="hero-overlay">
              <div role="img" aria-label="Hands-on learning" className="hero-pill hero-pill-secondary">
                Hands-on Robotics/AI Classes
              </div>
            </div>
          </div>
        </div>

        <div className="delivery-highlight" aria-label="Course delivery modes">
          <div className="delivery-highlight__header">
            <div className="delivery-highlight__titleRow">
              <div className="delivery-highlight__title">Learn Your Way</div>
              <Link href="/contactus">
                <div role="img" aria-label="Contact Seedlore" className="badge badge-contact badge-contact-inline">
                  <span>ContactUs *</span>
                </div>
              </Link>
            </div>
            <div className="delivery-highlight__text">
              Both Robotics and Coding/AI courses are taught <b>Online</b> and <b>Offline</b>, and
              <b> Robotics kits are provided for online learners</b> so practical building can continue from
              home.
            </div>
          </div>

          <div className="delivery-marquee">
            <div className="delivery-marquee__track">
              <span className="delivery-chip delivery-chip--gold">Online Classes Available</span>
              <span className="delivery-chip delivery-chip--teal">Offline Classes Available</span>
              <span className="delivery-chip delivery-chip--coral">Robotics Kits For Online Students</span>
              <span className="delivery-chip delivery-chip--violet">Hands-On Learning At Home</span>
              <span className="delivery-chip delivery-chip--gold">Online Classes Available</span>
              <span className="delivery-chip delivery-chip--teal">Offline Classes Available</span>
              <span className="delivery-chip delivery-chip--coral">Robotics Kits For Online Students</span>
              <span className="delivery-chip delivery-chip--violet">Hands-On Learning At Home</span>
            </div>
          </div>
        </div>

        <div className="courses-anchorWrap" aria-hidden="true">
          <span id="courses-robotics" className="courses-anchor" />
          <span id="courses-coding" className="courses-anchor" />
          <span id="courses-aiml" className="courses-anchor" />
        </div>

        <div className="courses-section">
          <div className="courses-captionRow">
            <div className="courses-caption">Courses</div>
          </div>

          <div role="tablist" className="tabs-row">
            {courseTabs.map((tab) => (
              <div key={tab.key} className="tab-wrap">
                <button
                  role="tab"
                  aria-selected={activeCourseTab === tab.key ? 'true' : 'false'}
                  className={`tab-button ${activeCourseTab === tab.key ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCourseTab(tab.key)
                    setExpandedExperiment(null)
                    setExpandedCourseGroups(defaultExpandedGroups)
                  }}
                  type="button"
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>

          <div className="featured-card courses-card">
            <div className="courses-tableHeader">
              {activeTab.note ? <div className="courses-note">{activeTab.note}</div> : null}
            </div>

            <div className="courses-scroll">
              {activeTab.rows.map((group, gi) => {
                const groupKey = `${activeTab.key}-${gi}`
                const usesExpandableGroups =
                  activeTab.key === 'robotics' || activeTab.key === 'coding' || activeTab.key === 'aiml'
                const isOpen = expandedCourseGroups[groupKey]
                const isFoundationGroup =
                  group.title === 'Concepts and Theories' || group.title === 'Programming and Simulation'
                const foundationItems = roboticsFoundations[group.title]

                return (
                  <div key={groupKey} className="course-group">
                    {usesExpandableGroups ? (
                      <>
                        <button
                          type="button"
                          className={`course-group-toggle ${isOpen ? 'is-open' : ''}`}
                          aria-expanded={isOpen ? 'true' : 'false'}
                          onClick={() => toggleGroup(groupKey)}
                        >
                          <span className="course-group-title">{group.title}</span>
                          <span className="course-group-chevron" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"></path>
                            </svg>
                          </span>
                        </button>

                        {isOpen ? (
                          activeTab.key === 'robotics' && isFoundationGroup ? (
                            Array.isArray(foundationItems) ? (
                              <div className="experiment-grid">
                                {foundationItems.map((item, ii) => {
                                  const cardKey = `${groupKey}-${ii}`
                                  const isExpanded = expandedExperiment === cardKey

                                  return (
                                    <article
                                      key={cardKey}
                                      className={`experiment-card ${isExpanded ? 'is-expanded' : ''}`}
                                      aria-label={`${item.title}: ${item.description}`}
                                    >
                                      <div className="experiment-imageWrap">
                                        <img
                                          src={item.image}
                                          alt={item.title}
                                          loading="lazy"
                                          className="experiment-image"
                                        />
                                      </div>
                                      <div className="experiment-detailsPanel">
                                        <div className="experiment-infoBar">
                                          <h4 className="experiment-title">{item.title}</h4>
                                          <button
                                            type="button"
                                            className={`experiment-expandButton ${isExpanded ? 'is-expanded' : ''}`}
                                            aria-expanded={isExpanded ? 'true' : 'false'}
                                            aria-label={isExpanded ? `Hide details for ${item.title}` : `Show details for ${item.title}`}
                                            onClick={(event) => {
                                              event.stopPropagation()
                                              setExpandedExperiment(isExpanded ? null : cardKey)
                                            }}
                                          >
                                            <span className="experiment-expandIcon" aria-hidden="true">
                                              {isExpanded ? '-' : '+'}
                                            </span>
                                          </button>
                                        </div>
                                        <p className="experiment-description">{item.description}</p>
                                      </div>
                                    </article>
                                  )
                                })}
                              </div>
                            ) : (
                              <div className="foundation-placeholder">
                                <p>{foundationItems}</p>
                              </div>
                            )
                          ) : activeTab.key === 'robotics' ? (
                            <div className="experiment-grid">
                              {group.items.map((item, ii) => {
                                const experiment = roboticsExperiments[item] || {
                                  image: '/images/Handson-hero.jpg',
                                  description: 'Hands-on project with guided mentor support and real builds.',
                                }
                                const cardKey = `${groupKey}-${ii}`
                                const isExpanded = expandedExperiment === cardKey

                                return (
                                  <article
                                    key={cardKey}
                                    className={`experiment-card ${isExpanded ? 'is-expanded' : ''}`}
                                    aria-label={`${item}: ${experiment.description}`}
                                  >
                                    <div className="experiment-imageWrap">
                                      <img
                                        src={experiment.image}
                                        alt={`${item} experiment`}
                                        loading="lazy"
                                        className="experiment-image"
                                      />
                                    </div>
                                    <div className="experiment-detailsPanel">
                                      <div className="experiment-infoBar">
                                        <h4 className="experiment-title">{item}</h4>
                                        <button
                                          type="button"
                                          className={`experiment-expandButton ${isExpanded ? 'is-expanded' : ''}`}
                                          aria-expanded={isExpanded ? 'true' : 'false'}
                                          aria-label={isExpanded ? `Hide details for ${item}` : `Show details for ${item}`}
                                          onClick={(event) => {
                                            event.stopPropagation()
                                            setExpandedExperiment(isExpanded ? null : cardKey)
                                          }}
                                        >
                                          <span className="experiment-expandIcon" aria-hidden="true">
                                            {isExpanded ? '-' : '+'}
                                          </span>
                                        </button>
                                      </div>
                                      <p className="experiment-description">{experiment.description}</p>
                                    </div>
                                  </article>
                                )
                              })}
                            </div>
                          ) : (
                            <ul className="course-bullets course-bullets--panel">
                              {group.items.map((item, ii) => (
                                <li key={`${groupKey}-${ii}`}>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )
                        ) : null}
                      </>
                    ) : (
                      <>
                        <div className="course-group-title course-group-title--static">{group.title}</div>
                        <ul className="course-bullets">
                          {group.items.map((item, ii) => (
                            <li key={`${groupKey}-${ii}`}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="branch-block" aria-label="Seedlore branches">
            <div className="branch-title">Branches</div>
            <div className="branch-marquee branch-marquee--under-table">
              <div className="branch-marquee__track">
                <span className="branch-chip">Hindmotor - Near Zudio</span>
                <span className="branch-chip">Dunlop - Near Rathtala</span>
                <span className="branch-chip">Hindmotor - Near Zudio</span>
                <span className="branch-chip">Dunlop - Near Rathtala</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .courses-hub,
        .courses-section {
          scroll-margin-top: 132px;
        }

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
          max-height: 620px;
          border-radius: 18px;
          overflow: hidden;
        }

        .media-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          top: 18px;
          left: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 3;
        }

        .hero-pill {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.2px;
          color: #111;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          white-space: nowrap;
        }

        .hero-pill-secondary {
          background: rgba(15, 118, 110, 0.9);
          color: #fff;
        }

        .courses-section,
        .courses-anchorWrap,
        .delivery-highlight {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .courses-anchor {
          display: block;
          position: relative;
          top: -132px;
          visibility: hidden;
        }

        .delivery-highlight {
          margin-bottom: 18px;
          padding: 16px;
          border-radius: 20px;
          background:
            radial-gradient(circle at top left, rgba(251, 191, 36, 0.28), transparent 32%),
            radial-gradient(circle at top right, rgba(20, 184, 166, 0.22), transparent 30%),
            linear-gradient(135deg, #fff8e8 0%, #eefcf8 52%, #eff6ff 100%);
          border: 1px solid rgba(15, 118, 110, 0.14);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
        }

        .delivery-highlight__header {
          display: grid;
          gap: 6px;
          margin-bottom: 12px;
        }

        .delivery-highlight__titleRow,
        .courses-captionRow,
        .tabs-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .delivery-highlight__titleRow,
        .courses-captionRow {
          justify-content: space-between;
        }

        .delivery-highlight__title,
        .courses-caption,
        .branch-title {
          display: inline-block;
          position: relative;
          font-size: var(--font-size-xl);
          font-family: var(--font-family-heading);
          font-weight: var(--font-weight-heading);
          line-height: var(--line-height-heading);
          letter-spacing: var(--letter-spacing-heading);
          color: #0f172a;
        }

        .delivery-highlight__title::after,
        .courses-caption::after,
        .branch-title::after {
          left: 0;
          width: 40px;
          bottom: -6px;
          height: 3px;
          content: '';
          position: absolute;
          background: linear-gradient(90deg, #0f766e, #f97316);
          border-radius: 999px;
        }

        .delivery-highlight__text {
          font-size: 14px;
          line-height: 1.55;
          color: #23403b;
          max-width: 850px;
        }

        .delivery-marquee,
        .branch-marquee {
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid rgba(15, 118, 110, 0.1);
          background: rgba(255, 255, 255, 0.7);
        }

        .delivery-marquee__track,
        .branch-marquee__track {
          display: inline-flex;
          gap: 10px;
          padding: 12px;
          white-space: nowrap;
          will-change: transform;
          animation: deliveryScroll 18s linear infinite;
        }

        .branch-marquee__track {
          animation: branchScroll 16s linear infinite;
        }

        .delivery-chip,
        .branch-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }

        .branch-chip {
          background: rgba(0, 0, 0, 0.04);
          font-weight: 600;
        }

        .delivery-chip--gold {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        }

        .delivery-chip--teal {
          background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
        }

        .delivery-chip--coral {
          background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%);
        }

        .delivery-chip--violet {
          background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
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

        .course-group + .course-group {
          margin-top: 14px;
        }

        .course-group-toggle {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid rgba(15, 118, 110, 0.12);
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(240, 252, 250, 0.96), rgba(255, 249, 240, 0.96));
          color: #12312d;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          text-align: left;
          box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
        }

        .course-group-title {
          margin: 0;
          font-weight: 900;
          position: relative;
          display: inline-block;
          padding-bottom: 8px;
        }

        .course-group-title::after {
          left: 0;
          width: 40px;
          bottom: 0;
          height: 3px;
          content: '';
          position: absolute;
          background: linear-gradient(90deg, #0f766e, #f97316);
          border-radius: 999px;
        }

        .course-group-title--static {
          margin-bottom: 8px;
        }

        .course-group-chevron {
          display: inline-flex;
          transition: transform 0.2s ease;
        }

        .course-group-toggle.is-open .course-group-chevron {
          transform: rotate(180deg);
        }

        .foundation-placeholder {
          margin-top: 10px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px dashed rgba(15, 118, 110, 0.24);
          color: #325650;
        }

        .foundation-placeholder p {
          margin: 0;
          line-height: 1.55;
        }

        .course-bullets {
          margin: 0;
          padding-left: 18px;
        }

        .course-bullets--panel {
          margin-top: 10px;
          padding: 14px 18px 14px 30px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(15, 118, 110, 0.12);
        }

        .course-bullets--panel li + li {
          margin-top: 8px;
        }

        .experiment-grid {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          margin-top: 10px;
        }

        .experiment-card {
          overflow: visible;
          border-radius: 14px;
          border: 1px solid rgba(15, 118, 110, 0.2);
          background: #fff;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
        }

        .experiment-imageWrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          border-radius: 14px 14px 0 0;
          background: #0b1f1c;
        }

        .experiment-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .experiment-detailsPanel {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px;
          color: #12312d;
          background: #f6fbfa;
          border-top: 1px solid rgba(15, 118, 110, 0.14);
          border-radius: 0 0 14px 14px;
        }

        .experiment-infoBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .experiment-title {
          margin: 0;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.3;
        }

        .experiment-expandButton {
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          border: 1px solid rgba(15, 118, 110, 0.18);
          border-radius: 10px;
          background: #e6f4f1;
          color: #0f766e;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .experiment-expandButton:hover,
        .experiment-expandButton:focus-visible {
          background: #d4ece7;
          transform: scale(1.05);
          outline: none;
        }

        .experiment-expandIcon {
          font-size: 20px;
          line-height: 1;
          font-weight: 700;
        }

        .experiment-description {
          margin: 0;
          font-size: 12px;
          line-height: 1.35;
          color: #325650;
          opacity: 0;
          max-height: 0;
          transform: translateY(6px);
          overflow: hidden;
          transition: opacity 0.25s ease, transform 0.25s ease, max-height 0.25s ease;
        }

        .experiment-card:hover .experiment-image {
          transform: scale(1.06);
        }

        .experiment-card.is-expanded .experiment-description {
          opacity: 1;
          max-height: 120px;
          transform: translateY(0);
        }


        .experiment-card.is-expanded {
          outline: 2px solid rgba(15, 118, 110, 0.9);
          outline-offset: 2px;
        }

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
          position: static;
          padding: 8px 14px;
          font-size: 13px;
        }

        .branch-block {
          margin-top: 14px;
        }

        .branch-title {
          margin: 0 0 14px;
        }

        @keyframes deliveryScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes branchScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

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

        @media (max-width: 768px) {
          .delivery-highlight {
            padding: 14px;
            margin-bottom: 16px;
          }

          .delivery-highlight__text {
            font-size: 13px;
          }

          .delivery-marquee__track {
            animation-duration: 13s;
          }

          .delivery-chip,
          .branch-chip {
            font-size: 12px;
            padding: 8px 12px;
          }

          .courses-scroll {
            max-height: 60vh;
          }

          .experiment-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .experiment-detailsPanel {
            padding: 8px;
          }

          .experiment-title {
            font-size: 12px;
          }

          .experiment-expandButton {
            width: 28px;
            height: 28px;
            flex-basis: 28px;
            border-radius: 9px;
          }

          .experiment-description {
            font-size: 11px;
          }

          .badge-contact-inline {
            padding: 7px 12px;
            font-size: 12px;
          }
        }

        @media (max-width: 520px) {
          .courses-scroll {
            max-height: 56vh;
          }

          .experiment-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }
        }
      `}</style>
    </section>
  )
}
