import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import contactus from '../pages/contactus'


const WhyPage = () => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Why Emerging &amp; Immersive Technologies | Seedlore EDU</title>
          <meta
            property="og:title"
            content="Why Emerging & Immersive Technologies | Seedlore EDU"
          />
        </Head>

        <Navigation />

        {/* HERO – reusing .hero / hero-copy / hero-media classes */}
        <section id="why-hero-section" className="hero">
          <div className="hero-copy">
            {/* Pills row */}
            <p className="home-hero-subtitle hero-subtitle">
              Future-ready education for children · CBSE &amp; ICSE: AI · Coding ·
              Robotics
            </p>

            <h1 className="home-hero-title hero-title">
              Why Your Child Must Learn{' '}
              <span className="highlight">
                Emerging &amp; Immersive Technologies
              </span>
            </h1>

             {/* Short skill-line chips */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold">
                AI · Coding · Robotics · Space · AR/VR
            </span>
            </div>

             {/* Subtitle (line 2) */}
            <p className="text-xs sm:text-sm lg:text-base max-w-md mx-auto lg:mx-0 opacity-90 mb-3">
            ICSE &amp; CBSE have already added AI &amp; Coding – these skills are no
            longer “extra”, they&apos;re expected for future-ready kids.
            </p>




            {/* Instead of Tailwind chips, use your existing CTA group styling */}
            <div className="cta-group">
  <a href="/contactus" className="footer-cta-link">
    <button className="btn btn-lg btn-secondary cta-btn">
      Book Demo 
    </button>
  </a>

  <a href="/contactus" className="footer-cta-link">
    <button className="btn btn-primary btn-lg cta-btn">
      Explore Programs
    </button>
  </a>

  <a href="/" className="footer-cta-link">
    <button className="btn btn-lg btn-secondary cta-btn">
      Back to Home
    </button>
  </a>
</div>


            {/* Compact quote styled like a supporting paragraph */}
            <p className="home-hero-subtitle hero-subtitle">
              <em>
                “Children who start AI, Coding, Robotics and AR/VR early won&apos;t
                just fit into future jobs – they&apos;ll create them.”
              </em>
            </p>
          </div>

          {/* HERO MEDIA – reuse hero-media layout, change media to your GIF */}
          <div className="hero-media" style={{ flex: 1 }}>
            <div className="media-card">
                <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                aria-label="Students learning robotics and coding in an engaging classroom environment"
                src="https://videos.pexels.com/video-files/7730022/7730022-hd_720_1280_25fps.mp4"
                ></video>

                {/* Optional — keep or remove */}
                <div
                role="img"
                aria-label="Ages 6 to 16"
                className="badge badge-1"
                >
                <span>Ages 6–16</span>
                </div>
            </div>
            </div>

        </section>

        {/* SECTION: Future belongs to skilled children (65% stat) */}
        <section id="why-stat-section" className="testimonials">
        <div className="testimonials-container">
            <h2 className="section-title">The Future Belongs to Skilled Children</h2>

            <div className="carousel">
            <article className="testimonial-card featured">
                <p className="testimonial-text">
                World Economic Forum &amp; India&apos;s NEP 2020 agree:
                <strong> future jobs will be deeply digital.</strong> Children who
                understand technology early will be more confident, creative, and
                adaptable.
                </p>
                <div className="attribution">
                <strong>Future Outlook</strong>
                <span>, NEP 2020 &amp; WEF</span>
                </div>
            </article>

            <article className="testimonial-card">
                <p className="testimonial-text">
                Around <strong>65% of today&apos;s students</strong> will work in jobs
                that don&apos;t exist yet. AI, automation and immersive tech will create
                new roles that demand problem-solving and digital fluency.
                </p>
                <p className="testimonial-text">
                <small>
                    — World Economic Forum (2030) &amp; reflected in NEP 2020 vision
                </small>
                </p>
            </article>

            <article className="testimonial-card">
                <p className="testimonial-text">
                School curriculum teaches concepts, syllabus and exams. Emerging tech
                labs build <strong>projects, portfolios and confidence</strong> through
                hands-on experiments in AI, coding, robotics and AR/VR.
                </p>
                <div className="attribution">
                <strong>School vs. Labs</strong>
                <span>, Role in Learning</span>
                </div>
            </article>
            </div>
        </div>
        </section>

      

        {/* SECTION: Why Emerging Tech Matters (mapped to your .features layout) */}
        <section id="why-matters-section" className="testimonials">
            <div className="testimonials-container">
                <h2 className="section-title">
                Why Emerging Tech Matters for Indian Students
                </h2>

                {/* intro text with space below */}
                <p className="testimonial-text" style={{ marginBottom: '1.5rem' }}>
                ICSE &amp; CBSE AI / Coding / Robotics syllabi clearly show that{' '}
                <span className="font-semibold">future life skills</span> are now part
                of mainstream learning, not just optional clubs.
                </p>

                <div className="carousel">
                <article className="testimonial-card">
                    <p className="testimonial-text">
                    <strong>Problem-Solving &amp; Creativity</strong> – children understand
                    how things work, not just how to use them. Robotics, coding and AI
                    train them to break down problems, test ideas and improve solutions.
                    </p>
                </article>

                <article className="testimonial-card">
                    <p className="testimonial-text">
                    <strong>Real Career Preparation</strong> – from medicine to finance to
                    arts, every career uses data &amp; AI. Early exposure makes children
                    comfortable with tools they&apos;ll use in college and future jobs.
                    </p>
                </article>

                <article className="testimonial-card">
                    <p className="testimonial-text">
                    <strong>Creators, Not Just Consumers</strong> – children build apps,
                    robots, websites and VR scenes instead of only watching videos. They
                    learn to create technology, not just scroll through it.
                    </p>
                </article>

                <article className="testimonial-card">
                    <p className="testimonial-text">
                    <strong>Early Confidence Boost</strong> – hands-on projects build
                    curiosity, focus, teamwork and a growth mindset that carries into
                    exams, competitions and higher studies.
                    </p>
                </article>
                </div>
            </div>
            </section>


        {/* SECTION: AR/VR + ICSE/CBSE context (two-column style using your layout) */}
        
        <section id="why-immersive-section" className="courses-overview">
            <div className="courses-container">
                <h2 className="section-title">Immersive Technologies &amp; Indian Curriculum</h2>

                <div className="courses-layout">
                {/* LEFT: two course-style cards */}
                <div className="courses-cards">
                    <article className="course-card">
                    <div className="course-content">
                        <div className="course-header">
                        <h3 className="course-title">
                            AR &amp; VR: Virtual Labs for Every Child
                        </h3>
                        </div>
                        <ul className="focus-bullets">
                        <li>
                            <span>AR apps to label planets, circuits, or 3D geometry.</span>
                        </li>
                        <li>
                            <span>VR labs for virtual science experiments &amp; space missions.</span>
                        </li>
                        <li>
                            <span>
                            Metaverse-style storytelling for history &amp; social science.
                            </span>
                        </li>
                        </ul>
                        <p className="panel-description">
                        AR &amp; VR allow children to{' '}
                        <strong>
                            visit space, walk inside a human heart, or simulate a factory
                        </strong>{' '}
                        – all from a classroom in India.
                        </p>
                        <p className="panel-description">
                        <em>
                            “AR &amp; VR are not video games – they are{' '}
                            <strong>virtual labs</strong> for children who may not have access
                            to expensive physical equipment.”
                        </em>
                        </p>
                    </div>
                    </article>

                    <article className="course-card">
                    <div className="course-content">
                        <div className="course-header">
                        <h3 className="course-title">
                            What ICSE &amp; CBSE Are Saying
                        </h3>
                        </div>
                        <ul className="focus-bullets">
                        <li>
                            <span>AI &amp; Coding options from middle school onwards.</span>
                        </li>
                        <li>
                            <span>
                            Robotics &amp; tinkering labs encouraged through ATL &amp; clubs.
                            </span>
                        </li>
                        <li>
                            <span>
                            NEP 2020: focus on critical thinking, creativity, coding &amp; AI.
                            </span>
                        </li>
                        </ul>
                        <p className="panel-description">
                        New subject codes in AI, Coding, Data Science &amp; Robotics show that{' '}
                        <strong>
                            India wants students to be job-ready for 2030 and beyond
                        </strong>
                        .
                        </p>
                        <p className="panel-description">
                        <em>
                            “When boards update the syllabus, it&apos;s a clear signal to
                            parents: <strong>these skills are no longer optional.</strong>”
                        </em>
                        </p>
                    </div>
                    </article>
                </div>

                {/* RIGHT: Progression-style panel (unchanged idea, same styling as main page) */}
                <div className="progression-panel">
                    <h3 className="panel-title">From Interest to Impact</h3>
                    <div className="milestone-list">
                    <div className="milestone">
                        <span className="milestone-icon">👶</span>
                        <span className="milestone-text">
                        Start with Curiosity (Age 10–18)
                        </span>
                    </div>
                    <div className="milestone">
                        <span className="milestone-icon">🧠</span>
                        <span className="milestone-text">
                        Build Thinking, not just Software
                        </span>
                    </div>
                    <div className="milestone">
                        <span className="milestone-icon">📁</span>
                        <span className="milestone-text">
                        Create Projects &amp; Portfolios
                        </span>
                    </div>
                    <div className="milestone">
                        <span className="milestone-icon">🎓</span>
                        <span className="milestone-text">
                        Prepare for Higher Studies &amp; Careers
                        </span>
                    </div>
                    </div>
                    <p className="panel-description">
                    Children don&apos;t just learn tools – they learn{' '}
                    <strong>how to think, question AI, and use technology safely</strong>.
                    This is AI literacy and digital confidence for life.
                    </p>
                </div>
                </div>
            </div>
            </section>
        
        {/* YOUNG INNOVATORS – real stories from India & around the world */}
  
        {/* YOUNG INNOVATORS – real stories from India & around the world */}
        <section id="young-innovators-section" className="testimonials">
        <div className="testimonials-container">
            <h2 className="section-title">Young Innovators Who Started Early</h2>

            {/* intro line with extra space below */}
            <p className="testimonial-text" style={{ marginBottom: '1.5rem' }}>
            Real stories from India &amp; around the world to inspire your child to
            start early with AI, Coding, Robotics &amp; Emerging Tech.
            </p>

            <div className="carousel">
            {/* Card 1 – India innovators */}
            <article className="testimonial-card featured">
                <p className="testimonial-text">
                <strong>India – Child Innovators</strong>
                <br />
                Children across India are using technology to solve real problems,
                build startups and create impact – often before they finish school.
                </p>
                <ul className="testimonial-text">
                <li>
                    <strong>Tilak Mehta (13)</strong> – founded <em>Papers N Parcels</em>,
                    a logistics startup valued in crores.
                </li>
                <li>
                    <strong>Advait Thakur (12)</strong> – Google-certified AI developer;
                    founder of <em>Apex Infosys AI</em>.
                </li>
                <li>
                    <strong>Akrit Jaswal (7)</strong> – performed surgery at age 7 due to
                    deep passion for medical science.
                </li>
                <li>
                    <strong>Harshita Arora (16)</strong> – built <em>Crypto Price Tracker</em>,
                    a top-ranked app on the Apple Store.
                </li>
                </ul>
                <div className="attribution">
                <strong>Inspiration from India</strong>
                </div>
            </article>

            {/* Card 2 – Global innovators */}
            <article className="testimonial-card">
                <p className="testimonial-text">
                <strong>Global – Teen Tech Leaders</strong>
                <br />
                Around the world, teenagers are building apps, AI tools and startups
                that impact millions of people.
                </p>
                <ul className="testimonial-text">
                <li>
                    <strong>Emma Yang (14)</strong> – created <em>Timeless</em>, an app that
                    helps Alzheimer&apos;s patients recognize family members.
                </li>
                <li>
                    <strong>Tanmay Bakshi (14)</strong> – AI &amp; ML developer and global
                    speaker collaborating with major tech companies.
                </li>
                <li>
                    <strong>Nick D&apos;Aloisio (15)</strong> – built AI summarizer app
                    <em> Summly</em> and sold it to Yahoo for $30M.
                </li>
                </ul>
                <div className="attribution">
                <strong>Global Role Models</strong>
                </div>
            </article>

            {/* Card 3 – Message for parents */}
            <article className="testimonial-card">
                <p className="testimonial-text">
                <strong>Age is Not the Barrier – Skills Are</strong>
                <br />
                These stories are not to create pressure, but to show what&apos;s
                possible when children get early exposure to the right tools, mentors
                and projects.
                </p>
                <p className="testimonial-text">
                Your child doesn&apos;t need to become a startup founder at 12 – but
                they <strong>can</strong> learn the same thinking patterns and tech
                foundations these innovators use.
                </p>
                <div className="attribution">
                <strong>Message to Parents</strong>
                </div>
            </article>

            {/* Card 4 – Seedlore EDU angle / CTA-style */}
            <article className="testimonial-card">
                <p className="testimonial-text">
                <strong>Seedlore EDU: Turning Curiosity into Capability</strong>
                <br />
                Through structured tracks in AI, Coding, Robotics, AR/VR &amp; Space,
                we help children move from “I&apos;m curious” to “I built this”.
                </p>
                <p className="testimonial-text">
                Small projects, regular showcase moments and mentor feedback ensure
                your child doesn&apos;t just consume technology – they start creating
                with it.
                </p>
                <div className="attribution">
                <strong>Seedlore EDU</strong>
                <span>, Emerging Technologies Institute</span>
                </div>
            </article>
            </div>
        </div>
        </section>



        {/* FINAL CTA – reuse your CTA style but with WHY messaging */}
        <section id="why-cta-section" className="testimonials">
          <div className="testimonials-container">
            <h2 className="section-title">
              Parents, Let&apos;s Build the Future Together
            </h2>
            <div className="carousel">
              <article className="testimonial-card featured">
                <p className="testimonial-text">
                  Give your child the advantage of{' '}
                  <strong>
                    AI + Coding + Robotics + AR/VR + Space
                  </strong>
                  . The world they enter after Class 12 will demand these
                  skills – not just in India, but globally.
                </p>
                <div className="attribution">
                  <strong>Seedlore EDU</strong>
                  <span>, Emerging Technologies Institute</span>
                </div>
              </article>

              <article className="testimonial-card">
                <p className="testimonial-text">
                  “The future is not something we enter. The future is something we
                  create. Start your child&apos;s journey today – one small project at
                  a time.”
                </p>
                <div className="attribution">
                  <strong>Message to Parents</strong>
                </div>
              </article>
            </div>

            <div className="action-row" style={{ marginTop: '2rem' }}>
               <a href="/contactus" className="footer-cta-link" aria-label="Book Free Trial - Contact Us">
              <button className="btn btn-primary btn-lg">
                Talk to Us
              </button>
              </a>
              <a href="/contactus" className="footer-cta-link" aria-label="Book Free Trial - Contact Us">
              <button className="btn btn-secondary btn-lg">
                Book a Free Demo Session
              </button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default WhyPage
