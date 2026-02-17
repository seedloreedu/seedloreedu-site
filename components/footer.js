import React from 'react'
import Script from 'dangerous-html/react'
import whytolearn from '../pages/whytolearn'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
  .footer-decoration-circle, .footer-logo-icon, .footer-social-link, .footer-contact-icon, .footer-cta {
    animation: none !important;
  }
  .footer-link:hover, .footer-social-link:hover, .footer-contact-icon {
    transform: none !important;
  }
}
</style>`}
            ></Script>
          </div>
        </div>

        <footer id="footer-main" className="footer">
          {/* optional top anchor */}
          <span id="top" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />

          <div className="footer-container">
            <div className="footer-decoration">
              <div className="footer-decoration-circle footer-decoration-circle-1"></div>
              <div className="footer-decoration-circle footer-decoration-circle-2"></div>
              <div className="footer-decoration-circle footer-decoration-circle-3"></div>
            </div>

            <div className="footer-content">
              {/* BRAND */}
              <div className="footer-column footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-logo-text">Seedlore EDU</span>
                </div>

                <p className="footer-tagline footer-tagline--seedlore">
                  Nurturing Knowledge From Potential to Mastery
                </p>

                <div className="footer-social">
                  <a href="#" aria-label="Facebook">
                    <div className="footer-social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <div className="footer-social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <div className="footer-social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <div className="footer-social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15l5-3l-5-3z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="footer-column footer-links">
                <h3 className="footer-column-title">Quick Links</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="/#top"><div className="footer-link"><span>Home</span></div></a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/#courses-hub"><div className="footer-link"><span>Courses</span></div></a>
                  </li>
                  <li className="footer-list-item">
                    <a href="/#faq-section"><div className="footer-link"><span>FAQ</span></div></a>
                  </li>
                   <li className="footer-list-item">
                    <a href="/whytolearn"><div className="footer-link"><span>Why To Learn</span></div></a>
                  </li>
                </ul>
              </div>

              {/* PROGRAMS */}
              <div className="footer-column footer-programs">
                <h3 className="footer-column-title">Our Programs</h3>
                <ul className="footer-list">
                  <li className="footer-list-item"><a href="/#courses-hub"><div className="footer-link"><span>Robotics</span></div></a></li>
                  <li className="footer-list-item"><a href="/#courses-hub"><div className="footer-link"><span>Artificial Intelligence</span></div></a></li>
                  <li className="footer-list-item"><a href="/#courses-hub"><div className="footer-link"><span>Coding &amp; Programming</span></div></a></li>
                  
                  <li className="footer-list-item"><a href="/#courses-hub"><div className="footer-link"><span>STEM Projects</span></div></a></li>
                </ul>
              </div>

              {/* GET IN TOUCH (UPDATED WITH ICONS + YOUR DETAILS) */}
              {/* GET IN TOUCH (single row, icons forced black) */}
<div className="footer-column footer-contact">
  <h3 className="footer-column-title">Get In Touch</h3>

  <ul className="footer-contact-list footer-contact-list--seedlore">
    {/* Call / WhatsApp */}
    <li className="footer-contact-item">
      <div className="footer-contact-icon footer-social-link footer-contact-icon--social" aria-hidden="true">
        {/* phone icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="footer-ink-icon">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.55 1.38l-1.27 1.27a16 16 0 0 0 6.1 6.1l1.27-1.27A2 2 0 0 1 17 15h3a2 2 0 0 1 2 1.92"
          />
        </svg>
      </div>

      <div className="footer-contact-block">
        <div className="footer-contact-label">Call / WhatsApp:</div>

        <div className="footer-contact-value">
          <a className="footer-contact-link" href="tel:+916290465739">+91-6290465739</a>
          <span className="footer-contact-sep"> / </span>
          <a className="footer-contact-link" href="tel:+918621988211">+91-8621988211</a>
        </div>

        {/* One WhatsApp CTA (uses first number) */}
        <a
          className="footer-mini-cta footer-mini-cta--ink"
          href="https://wa.me/916290465739"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Seedlore Educare"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="footer-ink-icon" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-4.8A8.5 8.5 0 1 1 20.5 11.5Z"
            />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </li>

    {/* Email */}
    <li className="footer-contact-item">
      <div className="footer-contact-icon footer-social-link footer-contact-icon--social" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="footer-ink-icon">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          </g>
        </svg>
      </div>

      <div className="footer-contact-block">
        <div className="footer-contact-label">Email:</div>
        <div className="footer-contact-value">
          <a className="footer-contact-link" href="mailto:mail@seedloreedu.com">mail@seedloreedu.com</a>
        </div>

        <a className="footer-mini-cta footer-mini-cta--ink" href="mailto:mail@seedloreedu.com" aria-label="Email Seedlore Educare">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="footer-ink-icon" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 2l-7 20l-4-9l-9-4Z"></path>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13"></path>
          </svg>
          <span>Email</span>
        </a>
      </div>
    </li>

    {/* Website */}
    <li className="footer-contact-item">
      <div className="footer-contact-icon footer-social-link footer-contact-icon--social" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="footer-ink-icon">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10Z"></path>
          </g>
        </svg>
      </div>

      <div className="footer-contact-block">
        <div className="footer-contact-label">Website:</div>
        <div className="footer-contact-value">
          <a className="footer-contact-link" href="https://seedloreedu.com" target="_blank" rel="noreferrer">
            seedloreedu.com
          </a>
        </div>

        <a className="footer-mini-cta footer-mini-cta--ink" href="https://seedloreedu.com" target="_blank" rel="noreferrer" aria-label="Open Seedlore website">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="footer-ink-icon" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7"></path>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14L21 3"></path>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
          </svg>
          <span>Website</span>
        </a>
      </div>
    </li>
  </ul>
<a
  href="/contactus"
  className="footer-cta-link"
  aria-label="Book a Free Demo Session - Contact Us"
>
  <button type="button" className="footer-cta btn btn-primary">
    Book a Free Demo Session
  </button>
</a>

</div>

                
            </div>

            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  © 2025 Seedlore EDU. All rights reserved.
                </p>
                <div className="footer-legal">
                  <a href="#privacy"><div className="footer-legal-link"><span>Privacy Policy</span></div></a>
                  <span className="footer-legal-divider">•</span>
                  <a href="#terms"><div className="footer-legal-link"><span>Terms of Service</span></div></a>
                  <span className="footer-legal-divider">•</span>
                  <a href="#cookie"><div className="footer-legal-link"><span>Cookie Policy</span></div></a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<style>
@keyframes footerFloat {0%,100% {transform: translate(0, 0) scale(1);}
25% {transform: translate(20px, -30px) scale(1.05);}
50% {transform: translate(-15px, 20px) scale(0.95);}
75% {transform: translate(25px, 15px) scale(1.02);}}
@keyframes footerLogoBounce {0%,100% {transform: rotate(0deg) scale(1.05);}
25% {transform: rotate(-8deg) scale(1.1);}
50% {transform: rotate(5deg) scale(1.08);}
75% {transform: rotate(-3deg) scale(1.06);}}
@keyframes footerCtaPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.02);}}
</style> `}
            ></Script>
          </div>
        </div>

        <div className="footer-container6">
          <div className="footer-container7">
            <Script
              html={`<script defer data-name="footer">
(function(){
  const footerSocialLinks = document.querySelectorAll(".footer-social-link");

  footerSocialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    });
  });

  // Smooth scroll for in-page targets if present
  const footerAnchors = document.querySelectorAll('a[href^="/#"], a[href^="#"]');
  footerAnchors.forEach((a) => {
    a.addEventListener("click", function (e) {
      const href = this.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const id = href.substring(hashIndex + 1);
      if (!id) return;

      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const footerCta = document.querySelector(".footer-cta");
  if (footerCta) {
    footerCta.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => { this.style.transform = ""; }, 150);
    });
  }

  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const footerColumns = document.querySelectorAll(".footer-column");
  footerColumns.forEach((column, index) => {
    column.style.opacity = "0";
    column.style.transform = "translateY(30px)";
    column.style.transition = \`opacity 0.6s ease \${index * 0.1}s, transform 0.6s ease \${index * 0.1}s\`;
    footerObserver.observe(column);
  });
})();
</script>`}
            ></Script>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .footer-container1 { display: contents; }
          .footer-container2 { display: none; }
          .footer-container3 { display: contents; }
          .footer-container4 { display: none; }
          .footer-container5 { display: contents; }
          .footer-container6 { display: none; }
          .footer-container7 { display: contents; }

          :global(.footer-tagline--seedlore){
            font-weight: 700;
            letter-spacing: 0.25px;
            margin-top: 12px;
          }
          :global(.footer-link--disabled){
            opacity: 0.6;
            cursor: default;
            pointer-events: none;
          }

          /* Contact block polish (keeps your theme, makes it readable + clickable) */
          :global(.footer-contact-list--seedlore){
            display: grid;
            gap: 14px;
            margin-top: 10px;
          }
          :global(.footer-contact-item){
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 10px;
            align-items: flex-start;
          }
          :global(.footer-contact-icon){
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.12);
          }
          :global(.footer-contact-block){
            display: grid;
            gap: 6px;
          }
          :global(.footer-contact-label){
            font-weight: 700;
            opacity: 0.9;
            font-size: 13px;
          }
          :global(.footer-contact-value){
            opacity: 0.9;
            font-size: 13px;
            line-height: 1.4;
            word-break: break-word;
          }
          :global(.footer-contact-link){
            text-decoration: none;
          }
          :global(.footer-contact-link:hover){
            text-decoration: underline;
          }
          :global(.footer-contact-sep){
            opacity: 0.6;
          }
          :global(.footer-mini-cta){
            display: inline-flex;
            gap: 8px;
            align-items: center;
            width: fit-content;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.14);
            background: rgba(255,255,255,0.06);
            text-decoration: none;
            font-size: 12px;
            opacity: 0.95;
          }
          :global(.footer-mini-cta:hover){
            background: rgba(255,255,255,0.10);
          }

          @media (max-width: 480px){
            :global(.footer-contact-item){
              grid-template-columns: 34px 1fr;
            }
            :global(.footer-contact-icon){
              width: 32px;
              height: 32px;
              border-radius: 10px;
            }
          }
            /* =========================
   Make Get In Touch icons EXACTLY like social icons
   ========================= */

:global(.footer-contact-icon--social) {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Force icon color to black */
:global(.footer-contact-icon--social svg),
:global(.footer-contact-icon--social svg path),
:global(.footer-contact-icon--social svg g),
:global(.footer-contact-icon--social svg circle),
:global(.footer-contact-icon--social svg line) {
  stroke: #000000;
  color: #000000;
  fill: none;
}
  :global(.footer-contact-icon--social:hover) {
  background: #ffffff;
  border-color: #cfcfcf;
}

/* Match spacing with text */
:global(.footer-contact-item) {
  align-items: flex-start;
}
  :global(.footer-cta-link) {
  text-decoration: none;
  display: inline-block;
}


/* Mobile sizing match */
@media (max-width: 480px) {
  :global(.footer-contact-icon--social) {
    width: 36px;
    height: 36px;
  }
}

        `}
      </style>
    </>
  )
}

export default Footer
