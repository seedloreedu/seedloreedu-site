import React from "react";
import Link from "next/link";

const Navigation = () => {
  const handleCoursesClick = (event) => {
    if (typeof window === "undefined" || window.location.pathname !== "/") return;

    event.preventDefault();
    const coursesSection = document.getElementById("courses-robotics");

    if (!coursesSection) return;

    const navHeight = document.getElementById("navigation")?.offsetHeight || 0;
    const targetTop = coursesSection.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.history.replaceState(null, "", "#courses-robotics");
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3" />
        </div>

        <nav id="navigation" className="navigation">
          <div className="navigation__container">
            <div className="navigation__brandBlock">
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
                  <span className="navigation__logo-text">Seedlore Educare</span>
                </div>
              </Link>

              <div className="navigation__inlineLinks" aria-label="Primary navigation">
                <Link href="/#courses-robotics" className="navigation__inlineLink" aria-label="Courses" onClick={handleCoursesClick}>
                  Courses
                </Link>
                <Link href="/contactus" className="navigation__inlineLink navigation__inlineLink--primary" aria-label="ContactUs">
                  ContactUs
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .navigation-container1 { display: contents; }
        .navigation-container2 { display: none; }
        .navigation-container3 { display: contents; }

        .navigation__brandBlock{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          width: 100%;
        }

        .navigation__inlineLinks{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .navigation__inlineLink{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          color: #0f172a;
          background:
            radial-gradient(circle at top left, rgba(251, 191, 36, 0.16), transparent 42%),
            radial-gradient(circle at top right, rgba(20, 184, 166, 0.14), transparent 38%),
            linear-gradient(135deg, rgba(255, 248, 232, 0.96) 0%, rgba(238, 252, 248, 0.96) 56%, rgba(239, 246, 255, 0.96) 100%);
          border: 1px solid rgba(15, 118, 110, 0.14);
          box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(6px);
        }

        .navigation__inlineLink:hover{
          color: #0f766e;
          border-color: rgba(15, 118, 110, 0.28);
          background:
            radial-gradient(circle at top left, rgba(251, 191, 36, 0.2), transparent 42%),
            radial-gradient(circle at top right, rgba(20, 184, 166, 0.18), transparent 38%),
            linear-gradient(135deg, #fff8e8 0%, #eefcf8 56%, #eff6ff 100%);
        }

        .navigation__inlineLink--primary{
          color: #0f172a;
        }

        @media (max-width: 991px){
          .navigation__brandBlock{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .navigation__inlineLinks{
            width: 100%;
            gap: 8px;
          }
          .navigation__inlineLink{
            flex: 1 1 calc(50% - 4px);
            min-height: 42px;
            padding: 10px 12px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
