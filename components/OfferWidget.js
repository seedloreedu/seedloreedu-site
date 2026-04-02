import React from 'react'
import Link from 'next/link'

export default function OfferWidget() {
  return (
    <>
      <Link href="/current-offers">
        <a className="offer-widget" aria-label="View current offers">
          <span className="offer-widget__ring" aria-hidden="true"></span>
          <span className="offer-widget__ribbon">View Offers</span>
          <span className="offer-widget__icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                <path d="M20.59 13.41L11 3.83a2 2 0 0 0-2.83 0L3.83 8.17a2 2 0 0 0 0 2.83l9.59 9.59a2 2 0 0 0 2.83 0L20.59 16a2 2 0 0 0 0-2.59"></path>
                <path d="M7.5 7.5h.01"></path>
                <path d="M12 12l7-7"></path>
              </g>
            </svg>
          </span>
        </a>
      </Link>

      <style jsx>{`
        .offer-widget {
          position: fixed;
          right: 24px;
          bottom: 96px;
          z-index: 9998;
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          overflow: visible;
          text-decoration: none;
          color: #ffffff;
          background:
            radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.3), transparent 34%),
            linear-gradient(135deg, #17b887 0%, #08756e 52%, #03433f 100%);
          border: 2px solid rgba(255, 255, 255, 0.92);
          box-shadow:
            0 20px 36px rgba(4, 82, 75, 0.28),
            0 0 0 5px rgba(255, 255, 255, 0.16);
          animation: offerBlink 1.2s ease-in-out infinite;
        }

        .offer-widget__ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 3px solid rgba(255, 196, 91, 0.92);
          box-shadow:
            0 0 0 6px rgba(255, 245, 214, 0.82),
            0 0 26px rgba(255, 190, 70, 0.32);
        }

        .offer-widget__icon {
          position: relative;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          margin-top: 6px;
          color: #fffdf7;
          filter: drop-shadow(0 4px 10px rgba(255, 232, 166, 0.38));
        }

        .offer-widget__icon::before {
          content: '';
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 72%);
          z-index: -1;
        }

        .offer-widget__ribbon {
          position: absolute;
          top: -14px;
          min-width: 76px;
          height: auto;
          display: block;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          background: linear-gradient(145deg, #25d366 0%, #1ebe5d 100%);
          border: 2px solid #c0c7d1;
          box-shadow:
            0 14px 26px rgba(30, 190, 93, 0.26),
            0 0 0 3px rgba(214, 219, 226, 0.38),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        @keyframes offerBlink {
          0%, 100% {
            transform: scale(1);
            box-shadow:
              0 20px 36px rgba(4, 82, 75, 0.28),
              0 0 0 5px rgba(255, 255, 255, 0.16);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            box-shadow:
              0 22px 46px rgba(12, 141, 101, 0.38),
              0 0 0 7px rgba(255, 244, 214, 0.24);
            opacity: 0.92;
          }
        }

        @media (max-width: 768px) {
          .offer-widget {
            right: 20px;
            bottom: 82px;
            width: 52px;
            height: 52px;
          }

          .offer-widget__ribbon {
            top: -10px;
            min-width: 64px;
            font-size: 8px;
            padding: 6px 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .offer-widget {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}
