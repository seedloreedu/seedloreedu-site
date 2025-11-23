import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

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
  animation: none;
}
.footer-link:hover, .footer-social-link:hover, .footer-contact-icon {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <footer id="footer-main" className="footer">
          <div className="footer-container">
            <div className="footer-decoration">
              <div className="footer-decoration-circle footer-decoration-circle-1"></div>
              <div className="footer-decoration-circle footer-decoration-circle-2"></div>
              <div className="footer-decoration-circle footer-decoration-circle-3"></div>
            </div>
            <div className="footer-content">
              <div className="footer-column footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
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
                  <span className="footer-logo-text">Seedlore EDU</span>
                </div>
                <p className="footer-tagline">
                  {' '}
                  Empowering kids with robotics, AI &amp; coding skills for a
                  brighter future.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-social">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
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
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
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
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
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
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="YouTube" className="footer-social-link">
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
                          <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15l5-3l-5-3z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column footer-links">
                <h3 className="footer-column-title">Quick Links</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#home">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#courses">
                      <div className="footer-link">
                        <span>Courses</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#about">
                      <div className="footer-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#contact">
                      <div className="footer-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#testimonials">
                      <div className="footer-link">
                        <span>Student Success</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#faq">
                      <div className="footer-link">
                        <span>FAQ</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column footer-programs">
                <h3 className="footer-column-title">Our Programs</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#robotics">
                      <div className="footer-link">
                        <span>Robotics</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#ai">
                      <div className="footer-link">
                        <span>Artificial Intelligence</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#coding">
                      <div className="footer-link">
                        <span>Coding &amp; Programming</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#game-dev">
                      <div className="footer-link">
                        <span>Game Development</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#3d">
                      <div className="footer-link">
                        <span>3D Design</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#stem">
                      <div className="footer-link">
                        <span>STEM Projects</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column footer-contact">
                <h3 className="footer-column-title">Get In Touch</h3>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon">
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
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href="mailto:hello@seedloreedu.com?subject=">
                      <div className="footer-contact-link">
                        <span>
                          {' '}
                          hello@seedloreedu.com
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon">
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
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        ></path>
                      </svg>
                    </div>
                    <a href="tel:+1234567890">
                      <div className="footer-contact-link">
                        <span>
                          {' '}
                          +1 (234) 567-890
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon">
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
                          d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      {' '}
                      123 Learning Street, Tech City, TC 12345
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <button className="footer-cta btn btn-primary">
                  Book Free Trial
                </button>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  {' '}
                  © 2025 Seedlore EDU. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-legal">
                  <a href="#privacy">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <span className="footer-legal-divider">•</span>
                  <a href="#terms">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <span className="footer-legal-divider">•</span>
                  <a href="#cookie">
                    <div className="footer-legal-link">
                      <span>Cookie Policy</span>
                    </div>
                  </a>
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
75% {transform: translate(25px, 15px) scale(1.02);}}@keyframes footerLogoBounce {0%,100% {transform: rotate(0deg) scale(1.05);}
25% {transform: rotate(-8deg) scale(1.1);}
50% {transform: rotate(5deg) scale(1.08);}
75% {transform: rotate(-3deg) scale(1.06);}}@keyframes footerCtaPulse {0%,100% {transform: scale(1);}
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
  const footerSocialLinks = document.querySelectorAll(".footer-social-link")

  footerSocialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    })
  })

  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  const footerCta = document.querySelector(".footer-cta")
  if (footerCta) {
    footerCta.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const footerColumns = document.querySelectorAll(".footer-column")
  footerColumns.forEach((column, index) => {
    column.style.opacity = "0"
    column.style.transform = "translateY(30px)"
    column.style.transition = \`opacity 0.6s ease \${
      index * 0.1
    }s, transform 0.6s ease \${index * 0.1}s\`
    footerObserver.observe(column)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          .footer-container6 {
            display: none;
          }
          .footer-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
