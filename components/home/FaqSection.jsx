import React from 'react'
import Script from 'dangerous-html/react'

export default function FaqSection() {
  return (
    <>
      <section id="faq-section" aria-labelledby="faq-heading" className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>

            <div className="search-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
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
              type="button"
            >
              General
            </button>

            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-enrollment"
              id="tab-btn-enrollment"
              className="tab-button"
              type="button"
            >
              Enrollment
            </button>

            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-learning"
              id="tab-btn-learning"
              className="tab-button"
              type="button"
            >
              Learning
            </button>
          </div>

          <div className="faq-content">
            {/* =========================
                GENERAL
                ========================= */}
            <div
              role="tabpanel"
              id="tab-general"
              aria-labelledby="tab-btn-general"
              className="featured-card faq-panel"
            >
              {/* Q1 */}
              <h3 className="faq-question">What ages do your programs serve?</h3>

              <p className="faq-answer">
                Seedlore EDU offers structured <b>Robotics</b>, <b>AI/ML</b>, <b>Coding</b>, and <b>Computer</b> programs for
                students aged <b>10–18 years</b>.
              </p>

              <p className="faq-answer faq-dotline">
                Aligned with <b>NEP</b> and designed to complement <b>ICSE</b>, <b>CBSE</b>, and <b>ISC</b> academic structures
              </p>

              <p className="faq-answer faq-dotline">
                Skill-building through hands-on learning while reinforcing school concepts
              </p>

              {/* Q2 */}
              <h3 className="faq-question">How are classes scheduled?</h3>

              <p className="faq-answer">
                Classes are planned as focused weekly sessions based on the learning track a student is enrolled in.
              </p>

              <p className="faq-answer faq-dotline">
                <b>Robotics + Coding:</b> 1 session per week, typically <b>2 hours</b>
              </p>

              <p className="faq-answer faq-dotline">
                <b>Computer / AI-ML (additional):</b> 1 extra session per week of around <b>1.5 hours</b>
              </p>

              {/* Q3 */}
              <h3 className="faq-question">How are classes conducted?</h3>

              <p className="faq-answer">
                Each class follows a structured learning model to ensure clarity, engagement, and measurable progress.
              </p>

              <p className="faq-answer faq-dotline">
                Conceptual theory explained using visuals and real-world examples
              </p>

              <p className="faq-answer faq-dotline">
                Hands-on practical learning with hardware kits, coding platforms, and simulations
              </p>

              <p className="faq-answer faq-dotline">
                Quizzes, assessments, and exam-oriented preparation with progress tracked via LMS
              </p>

              {/* Q4 */}
              <h3 className="faq-question">Do you provide beginner-friendly pathways?</h3>

              <p className="faq-answer">
                Yes. Our beginner pathway starts with core logic, block-based coding, and foundational robotics, and
                gradually advances to text-based programming and AI concepts. No prior experience is required.
              </p>

              {/* Q5 */}
              <h3 className="faq-question">What is the student-to-instructor ratio?</h3>

              <p className="faq-answer">
                We maintain small batch sizes to ensure personalized attention and effective mentoring.
              </p>

              <p className="faq-answer faq-dotline">
                <b>Robotics classes:</b> Maximum ratio of <b>1 instructor : 6 students</b>
              </p>

              <p className="faq-answer faq-dotline">
                <b>Computer / AI / AI-ML classes:</b> Maximum ratio of <b>1 instructor : 8 students</b>
              </p>
            </div>

           {/* =========================
    ENROLLMENT (updated)
    ========================= */}
<div
  role="tabpanel"
  id="tab-enrollment"
  aria-labelledby="tab-btn-enrollment"
  className="featured-card faq-panel"
  hidden
>
  <h3 className="faq-question">How do I enroll?</h3>
  <p className="faq-answer">
    You can enroll by calling or WhatsApping us at <b>+91-6290465739</b> or <b>+91-8621988211</b>. You can also use the
    <b> Contact Us</b> option on our website to drop an email. A Seedlore executive will connect with you to understand
    your requirements and guide you through the next steps.
  </p>

  <h3 className="faq-question">Can I enroll for an individual course?</h3>
  <p className="faq-answer">
    Yes. You may opt for only <b>Computer</b>, only <b>Robotics</b>, only <b>Coding</b>, or choose a combination of these
    programs based on your learning goals and schedule.
  </p>

  <h3 className="faq-question">Are these classes online?</h3>
  <p className="faq-answer">
    <b>Robotics classes are primarily offline</b> because they involve hands-on hardware training. For <b>Computer</b>,
    <b> Coding</b>, and <b>AI/ML</b> courses, we also offer <b>online options</b>. In many cases, students can attend in a
    <b> hybrid mode</b> (mix of offline + online) based on batch availability.
  </p>

  <h3 className="faq-question">I stay far from Seedlore branches — how can I avail Robotics classes?</h3>
  <p className="faq-answer">
    If you are located far from our branches, you can still pursue Robotics through a <b>DIY kit-based option</b>. In
    addition, Seedlore can explore setting up a <b>lab facility at your location</b> for group enrollments, subject to
    feasibility and specific terms &amp; conditions. Please get in touch to discuss available options.
  </p>

  <h3 className="faq-question">Is there a demo class?</h3>
  <p className="faq-answer">
    Yes. We offer a <b>demo class</b> that is <b>chargeable</b>. If you decide not to continue after the demo, the amount
    is <b>refundable within 7 days</b>—no questions asked.
  </p>

  <h3 className="faq-question">Is there any discount for group enrollment?</h3>
  <p className="faq-answer">
    Yes, group enrollment discounts are available. Please mention that you are enrolling as a group when you speak with a
    Seedlore executive during enrollment so the applicable options can be shared with you.
  </p>
</div>


          {/* =========================
    LEARNING (updated)
    ========================= */}
<div
  role="tabpanel"
  id="tab-learning"
  aria-labelledby="tab-btn-learning"
  className="featured-card faq-panel"
  hidden
>
  <h3 className="faq-question">
    Do students need to pay extra for hardware or purchase equipment for Robotics?
  </h3>
  <p className="faq-answer">
    No. <b>All required hardware and learning equipment are included in the course fee</b>. Each student is provided with
    a <b>DIY Robotics kit</b> for hands-on practice during the program. If a student wishes to purchase an additional kit
    for personal use at home, they may do so optionally, but it is <b>not mandatory</b>.
  </p>

  <h3 className="faq-question">
    How do students get documentation and learning materials for the courses?
  </h3>
  <p className="faq-answer">
    Every student enrolled in instructor-led classes receives <b>lifetime access</b> to all course content, experiments,
    and learning resources through <b>Seedlore’s Learning Management System (LMS)</b> at no additional cost. Students who
    purchase courses directly from the Seedlore LMS also receive lifetime access by default.
  </p>

  <h3 className="faq-question">
    Will I receive a certificate after completing a course?
  </h3>
  <p className="faq-answer">
    Yes. Upon successful completion of each course, students are awarded a <b>Course Completion Certificate</b> issued by
    Seedlore Educare, recognizing the skills and learning outcomes achieved.
  </p>

  <h3 className="faq-question">
    How is student progress measured?
  </h3>
  <p className="faq-answer">
    Student progress is continuously tracked using our <b>Learning Management System (LMS)</b>. Attendance, assessments,
    practical achievements, and course completion milestones are recorded systematically. In addition, <b>feedback and
    review sessions</b> are conducted at defined milestones to guide improvement and learning growth.
  </p>

  <h3 className="faq-question">
    How flexible are class schedules?
  </h3>
  <p className="faq-answer">
    Schedules are created based on the selected course, batch availability, and prior discussion during enrollment. If a
    schedule change is required later, students or parents may coordinate with the <b>assigned Seedlore Coordinator</b> to
    explore feasible options.
  </p>
</div>


            <aside className="quick-qs">
              <h3 className="sidebar-title">Popular Questions</h3>
              <div className="quick-q-list">
  {/* General */}
  <button className="quick-q-item" type="button">
    What ages do your programs serve?
  </button>
  <button className="quick-q-item" type="button">
    How are classes scheduled?
  </button>
  <button className="quick-q-item" type="button">
    How are classes conducted?
  </button>
  <button className="quick-q-item" type="button">
    Do you provide beginner-friendly pathways?
  </button>
  <button className="quick-q-item" type="button">
    What is the student-to-instructor ratio?
  </button>

  {/* Enrollment */}
  <button className="quick-q-item" type="button">
    Is there a demo class?
  </button>
  <button className="quick-q-item" type="button">
    How do I enroll?
  </button>
  <button className="quick-q-item" type="button">
    Are these classes online?
  </button>

  {/* Learning */}
  <button className="quick-q-item" type="button">
    How do students get documentation and learning materials for the courses?
  </button>
  <button className="quick-q-item" type="button">
    How is student progress measured?
  </button>
</div>

            </aside>
          </div>
        </div>
      </section>

      {/* FAQ-only script (scoped to #faq-section) */}
      <Script
  html={`<script defer data-name="faq-only">
(function(){
  const faqSection = document.getElementById("faq-section");
  if(!faqSection) return;

  const tabButtons = faqSection.querySelectorAll(".tab-button");

  const panels = {
    general: faqSection.querySelector("#tab-general"),
    enrollment: faqSection.querySelector("#tab-enrollment"),
    learning: faqSection.querySelector("#tab-learning"),
  };

  function showPanel(key){
    Object.keys(panels).forEach((k) => {
      const panel = panels[k];
      if(!panel) return;
      const isActive = (k === key);

      panel.hidden = !isActive;
      panel.classList.toggle("active", isActive);

      if (isActive) {
        panel.style.opacity = "0";
        setTimeout(() => { panel.style.opacity = "1"; }, 120);
      }
    });

    // update aria-selected + active class
    tabButtons.forEach((btn) => {
      const controls = btn.getAttribute("aria-controls");
      const btnKey =
        controls === "tab-general" ? "general" :
        controls === "tab-enrollment" ? "enrollment" :
        controls === "tab-learning" ? "learning" : "";

      const isActive = (btnKey === key);
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  // Tab click behavior (unchanged)
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const controls = button.getAttribute("aria-controls");
      if (controls === "tab-general") showPanel("general");
      if (controls === "tab-enrollment") showPanel("enrollment");
      if (controls === "tab-learning") showPanel("learning");
    });
  });

  showPanel("general");

  // ---------- Search + jump/highlight ----------
  const faqSearch = faqSection.querySelector("#faq-search");

  function getAllQuestions(){
    const all = [];
    Object.keys(panels).forEach((k) => {
      const panel = panels[k];
      if(!panel) return;
      const qs = panel.querySelectorAll(".faq-question");
      qs.forEach((q) => all.push({ key: k, el: q }));
    });
    return all;
  }

  function scoreMatch(qText, needle){
    // simple scoring: exact includes gets higher score, word overlap gets some score
    const q = qText.toLowerCase();
    const n = needle.toLowerCase();

    if (!n) return 0;
    if (q === n) return 1000;
    if (q.includes(n)) return 500;

    const qWords = q.split(/\\s+/).filter(Boolean);
    const nWords = n.split(/\\s+/).filter(Boolean);
    let hits = 0;
    nWords.forEach((w) => {
      if (w.length < 3) return;
      if (qWords.includes(w) || q.includes(w)) hits += 1;
    });
    return hits * 20;
  }

  function clearHighlights(){
    faqSection.querySelectorAll(".faq-question.is-highlight").forEach((el) => {
      el.classList.remove("is-highlight");
    });
  }

  function jumpToBestMatch(query){
    const needle = (query || "").trim();
    if (!needle) {
      clearHighlights();
      return;
    }

    const all = getAllQuestions();
    let best = null;
    let bestScore = 0;

    all.forEach((item) => {
      const text = (item.el.textContent || "").trim();
      const s = scoreMatch(text, needle);
      if (s > bestScore) {
        bestScore = s;
        best = item;
      }
    });

    // If too weak match, do nothing
    if (!best || bestScore < 20) {
      clearHighlights();
      return;
    }

    // Switch tab to where the match lives
    showPanel(best.key);

    // Highlight + scroll
    clearHighlights();
    best.el.classList.add("is-highlight");
    best.el.scrollIntoView({ behavior: "smooth", block: "start" });

    // remove highlight after a moment
    setTimeout(() => {
      best.el && best.el.classList.remove("is-highlight");
    }, 2200);
  }

  // When typing in search
  faqSearch?.addEventListener("input", (e) => {
    jumpToBestMatch(e.target.value);
  });

  // Popular Questions -> fill + trigger search behavior
  const quickQItems = faqSection.querySelectorAll(".quick-q-item");
  quickQItems.forEach((item) => {
    item.addEventListener("click", () => {
      const questionText = (item.textContent || "").trim();
      if (faqSearch) {
        faqSearch.value = questionText;
        faqSearch.focus();
        jumpToBestMatch(questionText); // ✅ this was missing earlier
      }
    });
  });
})();
</script>`}
/>


      {/* Minimal FAQ-only CSS (cleaned) */}
      <style jsx>{`
        :global(#faq-section .faq-answer) {
          text-align: left;
          white-space: normal;
        }

        /* Dotline (normal paragraph flow + green dot) */
        :global(#faq-section .faq-dotline) {
          position: relative;
          padding-left: 20px;
          margin-top: 6px;
          text-align: left;
        }

        :global(#faq-section .faq-dotline::before) {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #0b6b57;
          box-shadow: 0 0 0 3px rgba(11, 107, 87, 0.15);
        }
          :global(#faq-section .faq-question.is-highlight) {
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid rgba(80, 255, 160, 0.35);
  background: rgba(80, 255, 160, 0.10);
}

 :global(#faq-section .faq-question.is-highlight) {
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid rgba(80, 255, 160, 0.35);
    background: rgba(80, 255, 160, 0.10);
  }

  /* ✅ Mobile: boost contrast so highlight is clearly visible */
  @media (max-width: 768px) {
    :global(#faq-section .faq-question.is-highlight) {
      border: 1px solid rgba(11, 107, 87, 0.55);
      background: rgba(11, 107, 87, 0.14);
      box-shadow: 0 6px 18px rgba(11, 107, 87, 0.18);
    }

    /* optional: make the question text slightly bolder while highlighted */
    :global(#faq-section .faq-question.is-highlight) {
      font-weight: 900;
    }
  }
        /* Panels fade */
        :global(#faq-section .faq-panel) {
          transition: opacity 0.2s ease;
        }
          @media (max-width: 768px) {
  :global(#faq-section .faq-question.is-highlight) {
    border-left: 6px solid #0b6b57;
  }
}
      `}</style>
    </>
  )
}
