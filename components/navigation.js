import React from "react";
import Script from "dangerous-html/react";
import Link from "next/link";

const Navigation = () => {
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
            />
          </div>
        </div>

        <nav id="navigation" className="navigation">
          <div className="navigation__container">
            {/* HOME icon */}
            <Link href="/" aria-label="Home">
              <div className="navigation__logo">
                <div className="navigation__logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10.5L12 3l9 7.5M5 10v10h5v-6h4v6h5V10"
                    />
                  </svg>
                </div>
                <span className="navigation__logo-text">Seedlore EDU</span>
              </div>
            </Link>

            {/* ContactUs beside Home (always visible on desktop) */}
            <div className="navigation__centerLinks">
              <Link href="/contactus" className="navigation__link navigation__link--top" aria-label="ContactUs">
                ContactUs
              </Link>
            </div>

            {/* RIGHT side: hamburger only */}
            <div className="navigation__right">
              <button
                id="navigationToggle"
                aria-label="Toggle navigation menu"
                aria-expanded="false"
                aria-controls="navigationMenu"
                className="navigation__toggle"
                type="button"
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
                  />
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
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu (simple links only, no dropdowns) */}
            <div id="navigationMenu" className="navigation__menu">
              <ul className="navigation__list">
                <li className="navigation__item navigation__mobileOnly">
                  <Link href="/contactus" className="navigation__link">
                    ContactUs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* JS: stable mobile menu + unlock scroll fixes */}
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle");
  const navigationMenu = document.getElementById("navigationMenu");

  function lock(){ document.body.style.overflow = "hidden"; }
  function unlock(){ document.body.style.overflow = ""; }

  // Mobile menu toggle
  navigationToggle?.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!isExpanded));
    navigationMenu?.classList.toggle("navigation__menu--active");

    if (!isExpanded) lock();
    else unlock();
  });

  // Close mobile menu when clicking any link inside menu
  navigationMenu?.addEventListener("click", function(e){
    const a = e.target?.closest?.("a");
    if (!a) return;

    navigationMenu.classList.remove("navigation__menu--active");
    navigationToggle?.setAttribute("aria-expanded", "false");
    unlock();
  });

  // Sticky hide-on-scroll (avoid jitter while menu open)
  let lastScrollTop = 0;
  const navigation = document.getElementById("navigation");
  window.addEventListener("scroll", function () {
    if (!navigation) return;
    if (navigationMenu?.classList.contains("navigation__menu--active")) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) navigation.style.transform = "translateY(-100%)";
    else navigation.style.transform = "translateY(0)";
    lastScrollTop = scrollTop;
  });

  // Safety: unlock scroll when resizing to desktop
  window.addEventListener("resize", function(){
    if (window.innerWidth > 991) {
      unlock();
      navigationMenu?.classList.remove("navigation__menu--active");
      navigationToggle?.setAttribute("aria-expanded","false");
    }
  });

  // Safety: unlock scroll if user presses Escape
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") {
      unlock();
      navigationMenu?.classList.remove("navigation__menu--active");
      navigationToggle?.setAttribute("aria-expanded","false");
    }
  });
})();
</script>`}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .navigation-container1 { display: contents; }
        .navigation-container2 { display: none; }
        .navigation-container3 { display: contents; }
        .navigation-container6 { display: none; }
        .navigation-container7 { display: contents; }

        :global(.navigation__right){
          display:flex;
          align-items:center;
          gap: 12px;
        }

        /* ContactUs beside Home on desktop */
        :global(.navigation__centerLinks){
          display: flex;
          align-items: center;
          gap: 14px;
          margin-left: 14px;
        }

        :global(.navigation__link--top){
          display: inline-flex;
          align-items: center;
          padding: 8px 10px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.12);
        }

        :global(.navigation__link--top:hover){
          border-color: rgba(255,255,255,0.22);
        }

        :global(.navigation__mobileOnly){ display: none; }

        @media (max-width: 991px){
          :global(.navigation__centerLinks){ display: none; } /* hide top ContactUs on mobile, show inside hamburger */
          :global(.navigation__mobileOnly){ display: block; }
          :global(.navigation__menu--active){
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
