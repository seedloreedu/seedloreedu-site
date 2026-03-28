import React from 'react'
import Link from 'next/link'

export default function OfferWidget() {
  return (
    <>
      <Link href="/robotics-2026-summer-pack">
        <a className="offer-widget" aria-label="View current offer">
          <span className="offer-widget__ring" aria-hidden="true"></span>
          <span className="offer-widget__ribbon">View Offer</span>
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
          text-decoration: none;
          color: #ffffff;
          background: linear-gradient(135deg, #0c8d65, #04524b);
          border: 2px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 18px 34px rgba(4, 82, 75, 0.34);
          animation: offerBlink 1.2s ease-in-out infinite;
        }

        .offer-widget__ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 3px solid rgba(214, 75, 58, 0.78);
          box-shadow: 0 0 0 6px rgba(255, 238, 228, 0.88);
        }

        .offer-widget__icon {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          margin-top: 6px;
        }

        .offer-widget__ribbon {
          position: absolute;
          top: -14px;
          min-width: 76px;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          background: linear-gradient(135deg, #ff8a00, #ff4d6d);
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 12px 24px rgba(255, 77, 109, 0.34);
          text-align: center;
        }

        @keyframes offerBlink {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 18px 34px rgba(4, 82, 75, 0.34);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 18px 42px rgba(12, 141, 101, 0.48);
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
