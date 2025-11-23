import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link';


const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__logo, .navigation__toggle, .navigation__link, .navigation__menu, .navigation__item, .navigation__cta {
  animation: none;
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <nav id="navigation" className="navigation">
          <div className="navigation__container">
            <a href="/">
              <div aria-label="Seedlore EDU Home" className="navigation__logo">
                <div className="navigation__logo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                </div>
                <span className="navigation__logo-text">Seedlore EDU</span>
              </div>
            </a>
            <button
              id="navigationToggle"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              aria-controls="navigationMenu"
              className="navigation__toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="navigation-navigationtoggle-icon1 navigation__toggle-icon--open"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="navigation-navigationtoggle-icon2"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div id="navigationMenu" className="navigation__menu">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a href="/courses">
                    <div className="navigation__link">
                      <span>Courses</span>
                    </div>
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#about">
                    <div className="navigation__link">
                      <span>About</span>
                    </div>
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#contact">
                    <div className="navigation__link">
                      <span>Contact</span>
                    </div>
                  </a>
                </li>
                <li className="navigation__item navigation__item--cta">
                  <a href="/enroll-now">
                    <div className="navigation__cta btn btn-primary">
                      <span>
                        {' '}
                        Enroll Now
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
        @keyframes pulse-glow {0%,100% {box-shadow: --shadow-level-2;}
50% {box-shadow: 0 4px 20px
        color-mix(in srgb, var(--color-primary) 40%, transparent);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationLinks = document.querySelectorAll(".navigation__link")

  navigationToggle.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true"
    this.setAttribute("aria-expanded", !isExpanded)
    navigationMenu.classList.toggle("navigation__menu--active")

    if (!isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  })

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991) {
        navigationMenu.classList.remove("navigation__menu--active")
        navigationToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      }
    })
  })

  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      navigationMenu.classList.remove("navigation__menu--active")
      navigationToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  })

  let lastScrollTop = 0
  const navigation = document.getElementById("navigation")

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navigation.style.transform = "translateY(-100%)"
    } else {
      navigation.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-navigationtoggle-icon1 {
            color: var(--color-on-surface);
            transition: all 0.3s var(--animation-curve-primary);
          }
          .navigation-navigationtoggle-icon2 {
            color: var(--color-on-surface);
            display: none;
            transition: all 0.3s var(--animation-curve-primary);
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
